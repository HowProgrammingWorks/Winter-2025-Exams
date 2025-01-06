'use strict';

// Rewrite the code to implement the Strategy pattern for both colors and
// timer types. Prioritize composition over inheritance to increase
// flexibility and code reusability.
// For frontend developers, consider using EventTarget as an alternative
// to EventEmitter.
// Additionally, suggest and apply any other code improvements for SoC.

const { EventEmitter } = require('node:events');

class Logger {
  warn(s) {
    const date = new Date().toISOString();
    console.log('\x1b[1;33m' + date + '\t' + s + '\x1b[0m');
  }

  error(s) {
    const date = new Date().toISOString();
    console.log('\x1b[0;31m' + date + '\t' + s + '\x1b[0m');
  }

  info(s) {
    const date = new Date().toISOString();
    console.log('\x1b[1;37m' + date + '\t' + s + '\x1b[0m');
  }
}

class Task extends EventEmitter {
  constructor(name, time, exec) {
    super();
    this.name = name;
    if (typeof time === 'number') {
      this.time = Date.now() + time;
      this.set = setInterval;
      this.clear = clearInterval;
    } else {
      this.time = new Date(time).getTime();
      this.set = setTimeout;
      this.clear = clearTimeout;
    }
    this.exec = exec;
    this.running = false;
    this.count = 0;
    this.timer = null;
  }

  get active() {
    return !!this.timer;
  }

  start() {
    this.stop();
    if (this.running) return false;
    const time = this.time - Date.now();
    if (time < 0) return false;
    this.timer = this.set(() => {
      this.run();
    }, time);
    return true;
  }

  stop() {
    if (!this.active || this.running) return false;
    this.clear(this.timer);
    this.timer = null;
    return true;
  }

  run() {
    if (!this.active || this.running) return false;
    this.running = true;
    this.emit('begin', this);
    this.exec((err, res) => {
      if (err) this.emit('error', err, this);
      this.emit('end', res, this);
      this.count++;
      this.running = false;
    });
    return true;
  }
}

class Scheduler extends EventEmitter {
  constructor() {
    super();
    this.tasks = new Map();
    this.logger = new Logger();
  }

  task(name, time, exec) {
    this.stop(name);
    const task = new Task(name, time, exec);
    this.tasks.set(name, task);
    task.on('error', (err) => {
      this.logger.error(task.name + '\t' + err.message);
      this.emit('error', err, task);
    });
    task.on('begin', () => {
      this.logger.info(task.name + '\tbegin');
    });
    task.on('end', (res = '') => {
      this.logger.warn(task.name + '\tend\t' + res);
    });
    task.start();
    return task;
  }

  stop(name) {
    const task = this.tasks.get(name);
    if (task) {
      task.stop();
      this.tasks.delete(name);
    }
  }

  stopAll() {
    for (const name of this.tasks.keys()) {
      this.stop(name);
    }
  }
}

// Usage

const scheduler = new Scheduler();

scheduler.on('error', (err, task) => {
  console.log(`Error in ${task.name}:\n ${err.stack}`);
});

scheduler.task('name1', '2024-11-01T14:00Z', (done) => {
  done(null, 'Task successed');
});

scheduler.task('name2', '2024-11-01T14:30Z', (done) => {
  done(new Error('Task failed'));
});

scheduler.task('name3', 500, (done) => {
  done(null, 'Task successed');
});

scheduler.task('name4', 800, (done) => {
  done(new Error('Task failed'));
});
