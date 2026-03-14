/**
 * 🎨 Mehndi Pattern Maker - Recursion
 *
 * Mehndi artist hai tu! Intricate patterns banane hain using RECURSION.
 * Yahan loops use karna MANA hai — sirf function khud ko call karega
 * (recursive calls). Har function mein base case aur recursive case hoga.
 *
 * Functions:
 *
 *   1. repeatChar(char, n)
 *      - Repeat char n times using recursion (NO loops, NO .repeat())
 *      - Base case: n <= 0 => return ""
 *      - Recursive: char + repeatChar(char, n - 1)
 *      - Agar char not a string or empty, return ""
 *
 *   2. sumNestedArray(arr)
 *      - Sum all numbers in an arbitrarily nested array
 *      - e.g., [1, [2, [3, 4]], 5] => 15
 *      - Skip non-number values
 *      - Base case: empty array => 0
 *      - Agar input not array, return 0
 *
 *   3. flattenArray(arr)
 *      - Flatten an arbitrarily nested array into a single flat array
 *      - e.g., [1, [2, [3, 4]], 5] => [1, 2, 3, 4, 5]
 *      - Agar input not array, return []
 *
 *   4. isPalindrome(str)
 *      - Check if string is palindrome using recursion
 *      - Case-insensitive comparison
 *      - Base case: string length <= 1 => true
 *      - Compare first and last chars, recurse on middle
 *      - Agar input not string, return false
 *
 *   5. generatePattern(n)
 *      - Generate symmetric mehndi border pattern
 *      - n = 1 => ["*"]
 *      - n = 2 => ["*", "**", "*"]
 *      - n = 3 => ["*", "**", "***", "**", "*"]
 *      - Pattern goes from 1 star up to n stars, then back down to 1
 *      - Use recursion to build the ascending part, then mirror it
 *      - Agar n <= 0, return []
 *      - Agar n is not a positive integer, return []
 *
 * Hint: Every recursive function needs a BASE CASE (when to stop) and a
 *   RECURSIVE CASE (calling itself with a smaller/simpler input).
 *
 * @example
 *   repeatChar("*", 4)        // => "****"
 *   sumNestedArray([1, [2, [3]]]) // => 6
 *   flattenArray([1, [2, [3]]]) // => [1, 2, 3]
 *   isPalindrome("madam")     // => true
 *   generatePattern(3)        // => ["*", "**", "***", "**", "*"]
 */
export const repeatChar = (str, n) => {
  if(typeof str !== 'string' || n < 0) return '';
  if(n === 0) return '';
  return str + repeatChar(str, n - 1);
};

export const sumNestedArray = (arr) => {
  if(!Array.isArray(arr)) return 0;
  return arr.reduce((sum, item) => {
    if(typeof item === 'number') return sum + item;
    if(Array.isArray(item)) return sum + sumNestedArray(item);
    return sum;
  }, 0);
};

export const flattenArray = (arr) => {
  if(!Array.isArray(arr)) return [];
  return arr.reduce((flat, item) => {
    if(Array.isArray(item)) return flat.concat(flattenArray(item));
    return flat.concat(item);
  }, []);
};

export const isPalindrome = (str) => {
  if(typeof str !== 'string') return false;
  const clean = str.toLowerCase();
  const helper = (s, left, right) => {
    if(left >= right) return true;
    if(s[left] !== s[right]) return false;
    return helper(s, left + 1, right - 1);
  };
  return helper(clean, 0, clean.length - 1);
};

export const generatePattern = (n) => {
  if(!Number.isInteger(n) || n <= 0) return [];
  const result = [];
  const ascending = (i) => {
    if(i > n) return;
    result.push('*'.repeat(i));
    ascending(i + 1);
  };
  const descending = (i) => {
    if(i < 1) return;
    result.push('*'.repeat(i));
    descending(i - 1);
  };
  ascending(1);
  descending(n - 1);
  return result;
};
