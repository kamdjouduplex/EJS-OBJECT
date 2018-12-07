
//pseudo code to solve the problem
// 1. generate a random number between 0 and 100.
// 2. get a number from the user.
// 3. compare the number with the random number.
// 4. if greater we pop greater an ask the number again
// 5. if smaller we pop the number and ask for it again
// 6. if gest we pop congratulation
// 7. we add the loop to do it atmost 7 times

let generatedNumber = Math.floor( Math.random() * 100);

function guestedNumber(g_num) {
	let u_num = Number(prompt("guest the number"));
	if (u_num == g_num) {
		alert("congratulation");
		return;
	} else if(u_num > g_num){
		alert("your gest number is bigger, try again");
		guestedNumber();
	} else if(u_num < g_num){
		alert("your gest number is smaller, try again");
		guestedNumber();
	}
}

let i = 1;
do{
	guestedNumber(generatedNumber);
}while(i <= 7){
	guestedNumber(generatedNumber);
}



