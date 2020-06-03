/**
 * @param {string[]} strs
 * @return {string}
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。
 */

var longestCommonPrefix = function(strs) {
	if(!strs.length){
		return ""
	}
	var first = strs[0];
	for (var i =1;i<=first.length;i++){
		var a = strs.every(function (item) {
			return item.slice(0,i) === first.slice(0,i)
		})
		if (!a){
			return first.slice(0,i-1)
		}
	}
	return first
};


console.log(longestCommonPrefix(["a","b"]));