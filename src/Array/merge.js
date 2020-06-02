/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * \
 *
 * 给出一个区间的集合，请合并所有重叠的区间。

 示例 1:

 输入: [[1,3],[2,6],[8,10],[15,18]]
 输出: [[1,6],[8,10],[15,18]]
 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 示例 2:

 输入: [[1,4],[4,5]]
 输出: [[1,5]]
 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。


 重点在于先按左边界进行排序

 然后左边界第一个值肯定小于等于下一个左边界的第一个值，
 那么判断2数组是否相交就是判断  第一个数的第一个值是不是 小于第二个数的第一个值，大于或者在第二个数的区间内都算相交

 如果相交，则将当前数组的值设置为undefined，下一个值得最小值肯定是第一个数的第一个值，第二个值则比较第二个值
 */



var merge = function(intervals) {
	intervals.sort(function (a,b) {
		return a[0] - b[0]
	})

	//只需要遍历到最后二位
	for(var i =0;i<intervals.length-1;i++){
		let now = intervals[i],
			next = intervals[i+1];

		if(!(now[1]<next[0])){
			intervals[i] = undefined;

			intervals[i+1] = [now[0],Math.max(now[1],next[1])]
		}
	}
	return intervals.filter(q => q);
};

console.log(merge([1,7,3,6,5,6]))