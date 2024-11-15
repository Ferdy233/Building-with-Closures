function createCounter() {
    let count = 0; 

    return {
        increment() {
            count++; 
            console.log(this.count);  //this will return undefined because it does not know this.count
        },
        getCount: function() {
            return count;  
        }
    };
}

const counter = createCounter(); 

counter.increment();  
console.log(counter.getCount());  
counter.increment(); 
console.log(counter.getCount()); 
