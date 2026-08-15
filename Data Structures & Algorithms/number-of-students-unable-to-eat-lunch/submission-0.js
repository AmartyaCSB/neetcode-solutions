class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length;
        const cnt = new Int32Array(2);
        //count 0s and 1s
        for(let student of students){
            cnt[student]++;
        }
    //now see if those student can eat sandwich
        for(let s of sandwiches){
            if(cnt[s] > 0){
                cnt[s]--;
                res--;
            }
            else
            {
                break;
            }
        }
        return res;
    }
}
