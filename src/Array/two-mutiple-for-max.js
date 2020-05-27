/*
在一个给定的数组nums中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

示例 1:

输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.

 */


var dominantIndex = function(nums) {
    var max = 0,
      i=0,
      len = nums.length,
      target = -1,
      nums2 = [];
    for(i;i<len;i++){
        if(nums[i]>max){
            max = nums[i];
            target = i;
        }
        nums2.push(nums[i]*2)
    }
    nums2.splice(target,1);
    return nums2.every((item)=>item<=max)? target:-1

};
console.log(dominantIndex([3,6,1,0]))


var dominantIndex2 = function(nums) {
    var max = Math.max.apply(null,nums);
    var index = nums.indexOf(max);
    nums = nums.filter(item=>2*item>max);
    return nums.length > 1?-1:index
};
console.log(dominantIndex2([3,6,1,0]))
