// https://dev.to/dcastro/4-javascript-things-you-need-to-know-37el

const user = {
    name:"Petter",
    lastName:"Parker",
    fullName: function (){
        return `${this.name} ${this.lastName}`;
    },
};

const print = function (greet) {
    console.log(`${greet} ${this.fullName()}`);
};

/** 
 * .call() just execute
 */
print.call(user, "hello");

/** 
 * .bind() create new copy of print function  
 */
const myBindedPrint = print.bind(user);
myBindedPrint("Hello");

/** 
 * .apply() funtion borrowing 
 */
const dog = {
    name: "Lulu",
    lastName: "Porsche",
};
const result = user.fullName.apply(dog);
console.log(result);

/** 
 * Simple function vs Arrow function to remove space
 */
function withoutSpace(value){
    return value.replace(/ /g, "");
}
const withoutSpace = (value) => value.replace(/ /g, "");
console.log(withoutSpace("Hi Mr.John "));

/** 
 * Simple function vs Arrow function to remove special charactors
 */
function removeSpecialChars(value){
    return value.replace(/[^a-zA-Z0-9]/g, "");
}
const removeSpecialChars = (value) => value.replace(/[^a-zA-Z0-9]/g, "");
console.log(removeSpecialChars("Hi Mr.John ***"));

/**
 * Compose many functions into one function
 */
const withoutSpace = (value) => value.replace(/ /g, "");
const removeSpecialChars = (value) => value.replace(/[^a-zA-Z0-9]/g, "");
const toLowerCase = (value) => value.toLowerCase();

/** 
 * Compose 2 functions 
 */
const compose = (f1, f2) => (value) => f2(f1(value));
const emptyImput = compose(withoutSpace, removeSpecialChars);
console.log(emptyImput("Hi Mr.John ***"));

/**
 * Compose many functions: method 1 
 */
const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);

/**
 * Compose many functions: method 2
 */
const compose = (...funcs) => value => {
    let output = value
    for (func of  funcs){
        output = func(output)
    }
    return output
}
const emptyImput = compose(withoutSpace, removeSpecialChars, toLowerCase);
console.log(emptyImput(" d222@AVID"));

