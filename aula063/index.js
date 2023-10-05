const nums1 = [1, 2 , 3]
const nums2 = [4, 5, 6]
//const a3 = nums1.concat(nums2, [7, 8, 9], 'Gabriel')
// ...rest -> ...spread
const a3 = [...nums1, 'Gabriel', ...nums2, ...[7, 8, 9]]

console.log(a3)
console.log(typeof(a3))