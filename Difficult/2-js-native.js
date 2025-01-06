'use strict';

// Tasks for rewriting:
//   - Reduce number of classes
//   - Use native JavaScript techniques
//   - Minimize cognitive complexity

const MAX_PURCHASE = 2000;

class PurchaseIterator {
  constructor(purchase) {
    this.purchase = purchase;
    this.names = Array.from(purchase.groups.keys());
    this.currentIndex = 0;
  }

  // eslint-disable-next-line consistent-return
  next() {
    if (this.currentIndex < this.names.length) {
      const name = this.names[this.currentIndex];
      this.currentIndex++;
      const items = this.purchase.groups.get(name);
      return items;
    }
  }
}

class PurchaseComposite {
  constructor() {
    this.groups = new Map();
  }

  addGroup(name, items) {
    this.groups.set(name, items);
  }

  getTotal() {
    let total = 0;
    for (const group of this.groups.values()) {
      total += group.getTotal();
    }
    return total;
  }
}

class GroupComposite {
  constructor(name, items) {
    this.name = name;
    this.items = items;
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      if (item.price < 0) throw 'Negative price';
      total += item.price;
    }
    return total;
  }
}

class ExpenseObserver {
  constructor() {
    this.items = new Map();
    this.total = 0;
  }

  update(name, amount) {
    ExpenseObserver.validate(name, amount);
    this.items.set(name, amount);
    this.total += amount;
  }

  static validate(name, total) {
    if (total > MAX_PURCHASE) {
      throw `${name} total is above the limit`;
    }
  }
}

class RateStrategy {
  // eslint-disable-next-line
  async getRate(currency) {
    throw new Error('This method should be overridden by subclasses');
  }
}

class OpenExchangeRateStrategy extends RateStrategy {
  constructor() {
    super();
    this.host = 'openexchangerates.org';
    this.path = '/api/latest.json?app_id=';
    this.key = '1f43ea96b1e343fe94333dd2b97a109d';
  }

  async getRate(currency) {
    const { host, path, key } = this;
    const url = `https://${host}${path}${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.rates[currency];
    return rate;
  }
}

class ConvertCurrencyCommand {
  constructor(rateStrategy) {
    this.rateStrategy = rateStrategy;
  }

  async execute(amount, currency) {
    const rate = await this.rateStrategy.getRate(currency);
    return amount * rate;
  }
}

class PurchaseController {
  constructor(basket) {
    this.purchase = new PurchaseComposite();
    this.expense = new ExpenseObserver();
    this.initialize(basket);
  }

  initialize(basket) {
    for (const [name, items] of Object.entries(basket)) {
      const group = new GroupComposite(name, items);
      this.purchase.addGroup(name, group);
    }
  }

  processPurchases() {
    const purchaseIterator = new PurchaseIterator(this.purchase);

    let group = purchaseIterator.next();
    while (group) {
      const amount = group.getTotal();
      this.expense.update(group.name, amount);
      group = purchaseIterator.next();
    }

    const total = this.purchase.getTotal();
    return total;
  }

  static async convertCurrency(total, currency) {
    const converter = new OpenExchangeRateStrategy();
    const convert = new ConvertCurrencyCommand(converter);
    const money = await convert.execute(total, currency);
    return money;
  }

  async execute() {
    try {
      const total = this.processPurchases();
      const money = await PurchaseController.convertCurrency(total, 'UAH');
      console.log(`Total: ${money}`);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = {
  PurchaseIterator,
  PurchaseComposite,
  GroupComposite,
  ExpenseObserver,
  RateStrategy,
  OpenExchangeRateStrategy,
  ConvertCurrencyCommand,
  PurchaseController,
};
