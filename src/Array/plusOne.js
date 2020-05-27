/*
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
 */


var plusOne = function(digits) {
    var arr =[],
        num = 0,
        next = 1;

while (digits.length){
    num = digits.pop()
    if(num+next>9){
        num = 0;
        next = 1;
    }else {
        num = num + next
        next = 0;
    }
    arr.push(num)
}
if(next){
    arr.push(1)
}
     return arr.reverse()
};

console.log(plusOne([9]));

var plusOne2 = function(digits) {
    var i =digits.,
      len = digits.length
    for (var i = 0;i<digits.length;){
    }
};

