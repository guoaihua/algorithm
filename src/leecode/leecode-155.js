/**
 * initialize your data structure here.
 * 使用2个栈来维护最小值,
 * 每次push 将最小值推入栈顶
 * 空间换时间
 */
 var MinStack = function() {
    this.stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.min_stack.push(Math.min(val, this.min_stack[this.min_stack.length -1]));
    return this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min_stack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.min_stack[this.min_stack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack