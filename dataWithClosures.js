function createCounter() {
    let count = 0;  // Initialize count variable

    return {
        increment() {
            count++;  // Increment count
            console.log(this.count);  // 'this.count' is undefined because 'this' refers to the object, not the variable 'count'
        },
        getCount: function() {
            return count;  // Return the current count
        }
    };
}

const counter = createCounter();  // Create counter object

counter.increment();  // Increment count and log 'undefined'
console.log(counter.getCount());  // Get current count (0)
counter.increment();  // Increment count again
console.log(counter.getCount());  // Get current count (1)
