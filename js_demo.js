let colors = ['808080','000000','FF0000','800000','FFFF00','808000','00FF00','008000','00FFFF',
'008080','0000FF','000080','FF00FF','800080'];
let random_color = function(colors_list){
					let rand_nber = Math.floor( Math.random()*14 );
					return colors_list[rand_nber];
				};

const data_base_url = 'https://jsonplaceholder.typicode.com/';
const pics_base_url = 'https://via.placeholder.com/120/';

let container = document.getElementById('all-data');


fetch(data_base_url+'users')
	.then( response => {
		if(response.ok)
			return response.json();
		else
			throw new Error('something went wrong');
	})
	.then( users => {
		let user_list = [];
		for(let data of users){
			let color = random_color(colors);
			let user = `<div class="col-md-4 card">
					<div class="row p-2">
						<div class="col-md-5 pt-3">
							<img src="${pics_base_url}${color}/fff?text=user-${data.id}" alt="" class="avatar">
						</div>
						<div class="col-md-7">
							<h5>${data.name}</h5>
							<small>
								<city>${data.address.city}, ${data.address.street}-${data.address.suite} (${data.address.zipecode})</city>
							</small>
							<p>
						        ${data.email} <br>
						        ${data.website} <br>
						        ${data.phone}
						    </p>
						</div>
					</div>
					<div class="row">
						<ul>
							<li>
								<a href="">edit the user data</a>
							</li>
							<li>
								<a class="text-danger" href="">delete the user</a>
							</li>
						</ul>
					</div>
				</div>`;
			user_list.push(user);
		}
		container.innerHTML = user_list.join('');
	})
	.catch( (error) => {
		console.log('Error: ', error.message);
	})