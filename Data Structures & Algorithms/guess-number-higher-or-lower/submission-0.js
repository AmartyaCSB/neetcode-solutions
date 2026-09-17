/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 1;
        let end = n;
        while(start <= end) {
            let mid = Math.floor(start +(end-start)/2);
            if(guess(mid) > 0)
                start = mid+1; 
            else if(guess(mid) < 0)
                end = mid-1;
            else
                return mid;
        }
        return -1;
    }
}
