
import * as module1 from './lib1.js';

let person = {};

person.name = "Tony";

person.greet = function(){
	module1.log("hello World!");
}

person.sayYourname = function(){
	module1.log("My name is: ", this.name);
}

person.sing = function(){
	module1.log("I am singing");
}

person.mange = function(){
	module1.log("I am eating");
}

export { person };