class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (i < this.length) {
            return this.arr[i];
        }
        // Here we would throw an out of bounds exception
        return;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
       if (i < this.length) {
            this.arr[i] = n;
            return;
        }    
        return;
        // Here we would throw an out of bounds exception  
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length == this.capacity) {
            this.resize();
        }
        // insert at next empty position
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            this.length--;
            return this.arr[this.length];
        }  
    }

    /**
     * @returns {void}
     */
    resize() {
        // Create new array of double capacity
        this.capacity = 2 * this.capacity;
        const newArr = new Array(this.capacity); 
        for(let i=0; i < this.length; i++)
        {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
