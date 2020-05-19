var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // [100, 80, 60, 70, 60, 75, 85]
  // stack: [[100,1], []]
  let span = 1;

  if (this.stack.length === 0) {
    this.stack.push([price, span]);
    return span;
  }

  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    span += this.stack.pop()[1];
  }

  this.stack.push([price, span]);

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner();

var param_1 = obj.next(100);
var param_2 = obj.next(80);
var param_3 = obj.next(60);
var param_4 = obj.next(70);
var param_5 = obj.next(60);
var param_6 = obj.next(75);
var param_7 = obj.next(85);

console.log(obj);
