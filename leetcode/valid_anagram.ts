/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false 
 */

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const store = new Map()
    
    for (let i of s) {
        if (store.has(i)) {
            const currentValue = store.get(i)
            store.set(i, currentValue + 1)
        } else {
            store.set(i, 1)
        }
    }

    for (let i of t) {
        if (store.has(i)) {
            const currentValue = store.get(i) 
            store.set(i, currentValue - 1)
        }
    }

    for (let [_, value] of store.entries()) {
        if (value !== 0) {
            return false
        }
    }

    return true    
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))