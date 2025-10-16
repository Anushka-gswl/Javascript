console.log("hello")
let a=10;
console.log(a);
var name="Anu";
var age=20;
console.log(name);
console.log(age);
console.log("My name is " +name+ " and my age is " +age);
console.log('My name is  ${name} and my age is  ${age}');

let b="Delhi";
b="Lucknow";
console.log(b);

let s=true;
console.log(s);
console.error("this is error");

console.warn("this is warning");
console.info("This is info");
console.debug("this is debug");
console.table({name:'Anushka',age:27,city:"delhi"});
console.clear();
for(let i=0;i<3;i++){
    console.count("loop executed");
}