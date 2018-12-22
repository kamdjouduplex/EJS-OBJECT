//variables
var name = "Tonypro";
var first_name= "Kamdjou";
var last_name= "Duplex";
var age = 30;
var nber1 = 15; 
var nber2 = 3;
var str_nber = '12';
var sum = nber1 / nber2;
var colors = ['black', 'white', 'yellow', 'red', 'green', 'blue'];

//for loop
//for(init value; condition; incrementation)
//{ body of our for loop }
for(var i=0; i<10; i++){
 console.log(i);
}


//do while loop
console.log('from do While loop');
var i=1;
do{
    console.log(i);
    i++
}while(i >= 100)


//scope variables
var global = "je suis global";
do{ //do while loop
    let global= 'je ne suis pas global';
    console.log(global);
}while(false);

console.log(global);

//while loop
//initial value
//while(condition)
//{ body incrementor}
console.log('from While loop');
var i=1;
while(i <= 100)
{
    console.log(i);
    i++
}


//conditonal statement
var question = "will it rain today";
var answer = false;
if("something"){
 console.log('bring your humbrella with you');
}else{
    console.log('bring a cap for the sun');
}


//javascript object
var person = {
    name: 'tony',
    age: 25,
    color: 'black',
    talk: function(){
        return 'I am talking';
    },
    names: ['kamdjou', 'duplex', 'tony']
}

function greeting(name){
    console.log('Hello '+ name);
}
greeting('Etienne');

function max(...values){
    return values.join('');
}
var max_set = max(1,5,6,8,5,32,5, 'hello', 'age', 88);

console.log(max_set);


//ES6 Syntax
let name1 = "ypour name";
let name2 = "ypour name";
const url = "http://google.com";

name1 = 'Kamdjou';
name2 = 'Duplex';

let numbers = [1,5,6,8,5,32,5,56];
let person = {
        name: 'tony',
        age: 25,
        color: 'black',
        talk: function(){
            return 'I am talking';
        },
        names: ['kamdjou', 'duplex', 'tony']
    };
// arrow function 

function greeting(name){
    return 'Hello '+ name;
}
let greet = function(name){
    return 'Hello '+ name;
}
    
let greetHim = (name) => {
    return 'Hello '+ name;
}


console.log(greetHim('Etienne'));

let numbers = [1,5,6,8,5,32,5,56];
let newArray = [];
numbers.map( (el) => newArray.push(el*8) )


//destructuring assignement
[name, age, color] = ["Kamdjou", 25, 'black'];
console.log(color);

