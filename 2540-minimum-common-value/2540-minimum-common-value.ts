function getCommon(nums1: number[], nums2: number[]): number {
    if (nums1[0] > nums2[0]) return getCommon(nums2, nums1)
    if (nums2[0] > nums1[nums1.length - 1]) return -1
    if (nums1[0] === nums2[0]) return nums1[0]

    while (nums1[0] !== nums2[0]) {
        if (nums1[0] > nums2[0]) {
            nums2.shift()
        } else {
            nums1.shift()
        }

        if (nums1.length === 0 || nums2.length === 0) {
            return -1
        }
    }

    return nums1[0]
};

function binarySearch(arr: number[], candidate: number): number {
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        const mid = l + Math.floor((r-l)/2)

        if (candidate === arr[mid]) {
            return mid
        } if (candidate > arr[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return l
}