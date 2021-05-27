/*
* 最近相关性的用栈解决问题
*/

// 思路： 利用栈的方法，遇到左括号类型的（预先构件好map）则压入栈中，
// 否则从栈顶取出元素与当前元素比较是否相等
export default function isValid(s){
    s = s.split("");
    if( s.length % 2 === 1){
        return false;
    }
    var stack = [];
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for(var i= 0; i < s.length; i++){
        if(map[s[i]]){
            // 是左边的元素之一，则入栈
            stack.push(s[i]);
        }else {
            // 否则则取出栈顶元素进行对比
            if(map[stack.pop()] !== s[i]){
                return false
            }
        }
    }
    return stack.length <= 0;
}