console.log("hello");

//Method of String

//substring()
var str="Hello world!";
var sub= str.substring(1,4);
console.log(sub);

//replace()
var str= "Hello world!";
var rep= str.replace("world!", "Nice to meet you.");
console.log(rep);



//slice()
var str= "Hello world!";
var sli= str.slice(0,4);
console.log(sli);


//Methods of Array

//reverse
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

//length()
fruits.length;
console.log(fruits);

//copyWithin()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);

//sort()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

