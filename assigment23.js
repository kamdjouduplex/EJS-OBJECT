
//pseudo code to solve the problem
// 1. generate a random number between 0 and 100.
// 2. get a number from the user.
// 3. compare the number with the random number.
// 4. if greater we pop greater an ask the number again
// 5. if smaller we pop the number and ask for it again
// 6. if gest we pop congratulation
// 7. we add the loop to do it atmost 7 times

let g_num = Math.floor( Math.random() * 100);
	let count = 1;
	function guestedNumber() {
		
		while(count <= 7){
			let u_num = Number(prompt("guest the number ("+count+") chances"));
			
			if (u_num == g_num) {
				alert("Congratulation you win, Play again ?");
			} else if(u_num > g_num){
				alert("your gest number is bigger, try again");
				count++
				if (count != 7) {
					guestedNumber();
				}else{
					alert("You lost the game. Play again ?");
				}
				
			} else if(u_num < g_num){
				alert("your gest number is smaller, try again");
				count++
				if (count != 7) {
					guestedNumber();
				}else{
					alert("You lost the game. Play again ?");
				}
			}
		}
		
	}
	guestedNumber();
