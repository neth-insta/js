var letter = [];
var word = "abaa";
var rword = "";

//put letter of word into stacks
for(let i = 0; i < word.length; i++){
    letter.push(word[i]);
}

// pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
    rword += letter.pop();
}

// if(word === rword){
//     console.log(`${word} is palindrome`);
// }else{
//     console.log(`${word} is not palindrome`);
// }

// Create a stack
var Stack = function(){
    this.count = 0;
    this.storage = {};

    // Add avalue onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove and returns the value at the end of the stack
    this.pop = function(){
        
        if(this.count === 0)
            return undefined;

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    // Return the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStake = new Stack();

myStake.push("cat");
myStake.push("dog");
myStake.push("cow");
console.log(myStake.storage);
myStake.pop();
// myStake.pop();
// console.log(myStake.storage);

console.log(myStake.peek());
// console.log(myStake.pop());
// console.log(myStake.size());

