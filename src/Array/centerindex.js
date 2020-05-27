// look for center index


/**
 * @param {number[]} nums
 * @return {number}
 *
 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个

 输入:
 nums = [1, 7, 3, 6, 5, 6]
 输出: 3
 解释:
 索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
 同时, 3 也是第一个符合要求的中心索引。

 */


// 先计算数组总和sum
// 左侧之和 = sum - 左侧之和 - 当前值

var pivotIndex = function(arr) {
    var len = arr.length,
      i = 0,
      sum = 0,
      temp =0;

    for(i;i<len;i++){
        sum+=arr[i]
    }
    return  arr.findIndex(function (item) {
        if(temp === sum - temp - item){
            return true
        }
        temp+=item;
    })

};
