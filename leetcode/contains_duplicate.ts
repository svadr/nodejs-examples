/**
 * Given an integer array nums,
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

function containsDuplicate(nums: number[]): boolean {
    const store = new Map()
    
    for (let i of nums) {
        if (store.has(i)) {
            return true
        }
        store.set(i, 1)
    }

    return false
}

console.log(containsDuplicate([1,2,3,4,1]))
