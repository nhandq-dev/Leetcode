function getCommon(nums1: number[], nums2: number[]): number {
    if (nums1[0] > nums2[nums2.length - 1] || nums2[0] > nums1[nums1.length - 1]) return -1
    let runner1 = 0
    let runner2 = 0

    while (runner1 < nums1.length && runner2 < nums2.length) {
        if (nums1[runner1] === nums2[runner2]) return nums1[runner1]

        if (nums1[runner1] > nums2[runner2]) {
            runner2++
        } else {
            runner1++
        }
    }

    return -1
};