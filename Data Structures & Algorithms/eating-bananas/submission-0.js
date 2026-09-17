class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = Math.max(...piles);
        let res = end;
        while(start <= end)
        {
            const k = Math.floor((start+end)/2);
            let totalTime = 0;
            for(const p of piles)
            {
                totalTime += Math.ceil(p/k);
            }
            if(totalTime <= h)
            {
                res = k;
                end = k-1;
            }
            else
            {
                start= k+1;
            }
        }
        return res;
    }
}
