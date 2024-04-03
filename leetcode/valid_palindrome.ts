/**
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 and removing all non-alphanumeric characters, it reads the same forward and backward. 
 Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

/**
 * The regular expression /[^a-z0-9]/gi matches any character that 
 * is not a lowercase letter, an uppercase letter, or a number.
 * The g flag means "global", so it will replace all occurrences, 
 * not just the first one. The i flag means "case-insensitive", 
 * so it will match both lowercase and uppercase letters.
 */
function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
    return str.split('').reverse().join('') === str
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

