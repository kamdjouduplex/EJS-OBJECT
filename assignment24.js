
// 1. Combine strings s1 and s2.
// 2. Split the new string into an array of characters.
// 3. Filter for unique values into a new array.
// 4. Sort the new array from a to z and join it together, removing the commas.
//return a new longuest unique string

document.write("</br> ***************Output of the first exercise***************** </br>");
function getNewProcessedStr(s1, s2) {
  let c = s1 + s2;
  let d = [...c]; //or d = c.split("");

  let e = d.filter((v, i, self) => ( self.indexOf(v) === i ));
  return e.sort().join('');

  //return [...new Set(s1 + s2)].sort().join('');
}

let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq";
document.write(getNewProcessedStr(s1, s2));
document.write("</br></br>");


let list = [54,2,87, 3,65, 58, 785, 21, 35, 33, 545, 369, 458, 3582, -15, -7855, 325, 1];

/**********exo 01**********************/
//searching algorithm
document.write("</br> ***************Output of the first exercise***************** </br>");
function search(array, key){
	let low = 0;
	let high = array.length-1;
	let middle = 0;
	//we must sort the array first into incremental order
	//befor we can use the binary search
	let array_sorted = array.sort((a, b) => a-b );
	while(low <= high){
		middle = Math.floor( (low+high)/2 );
		if(key == array_sorted[middle]){
			return "the value "+ key + " was found on the list";
		}else if(key > array_sorted[middle]) {
			low = middle+1;
		}else {
			high = middle-1;
		}
	}

	return "the value "+key+" was not found in the list";
}
document.write("the list of numbers </br>");
document.write("["+list+"] </br>");
let searching = search(list, 35);
document.write(searching);


/**********exo 02**********************/
//palindrome algorithm
document.write("</br></br>");
document.write("</br> ***************Output of the second exercise***************** </br>");
function palindrome(str){
	let reg = /[\W]/gi;
	let valid_str = str.toLowerCase().replace(reg, "");

	let reversed = valid_str.split("").reverse().join("");
	if(reversed == valid_str) return "Yes, it's a palindrome";
	return "No, it's not a palindrome";
}
document.write(palindrome("madam"));

/**********exo 03**********************/
// Find the maximum value in a list of numbers
document.write("</br></br>");
document.write("</br> ***************Output of the thirdth exercise***************** </br>");
let max = function(a) {
    var m = a[0];
    for (var i = 1; i < a.length; i++) {
		if (m < a[i]) m = a[i];
    }
    document.write("max number is = "+m);
}
document.write("the list of numbers </br>");
document.write("["+list+"] </br>");
max(list);


/**********exo 04**********************/
document.write("</br></br>");
// Find the minimum value in a list of numbers
document.write(" ***************Output of the fourth exercise***************** </br>");
let min = function(a) {
    var m= a[0];
    for (var i = 1; i < a.length; i++) {
		if (m > a[i]) m = a[i];
    }
    document.write("min number is = "+ m);
}
document.write("the list of numbers </br>");
document.write("["+list+"] </br>");
min(list);



