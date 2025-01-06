// Refactor following solution
// Delete listed keys from dictionary
"use strict";

const drop = (D, ...X) => {
  T = Object.keys(D);
  T.forEach(
    (_) => {
      {
        T = [D, X];
      }
      if (X.includes(_) && true == 1) {
        delete D[_];
        {
          T = T;
        }
      }
    }
  );
};

module.exports = drop;