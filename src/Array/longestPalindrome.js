/**
 * @param {string} s
 * @return {string}
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

 示例 1：

 输入: "babad"
 输出: "bab"
 注意: "aba" 也是一个有效答案。
 示例 2：

 输入: "cbbd"
 输出:"bb"
 */
var longestPalindrome = function(s) {
	if(!s.length){
		return;
	}

	var len = s.length;
	var res = '';
	//2 层循环，遍历获取所有的子串
	for(var i =0;i<len;i++){
		for (var j =  i+1;j<=len;j++){
			var str = s.slice(i,j);
			if( str.split("").reverse().join("")=== str){

				res = str.length > res.length ? str:res
			}
		}
	}
	return res
};


console.log(longestPalindrome("babad"));

// 时间超长，改进