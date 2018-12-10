
import * as module1 from './lib1.js';
import * as P from './lib2.js';

let module2 = P.person;

module1.log(module1.PI);
module1.log("Sum: ", module1.sum(25,6,4,8,25,45,63,23));
module1.log("Mult: ", module1.mult(25,6,4,8,25,45,63,23));

module2.greet();
module2.sayYourname();
module2.sing();
module2.mange();