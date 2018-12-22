function getFormData(){
	let form = new FormData(document.querySelector('form'));
	let user = {
		name      : form.get('name'),
		username  : form.get('username'),
		email     : form.get('email'),
		phone     : form.get('phone'),
		city      : form.get('city'),
		state     : form.get('state'),
		zip       : form.get('zip'),
		website   : form.get('website'),
		suite     : form.get('suite'),
	};


	// POST adds a random id to the object sent
	fetch('https://jsonplaceholder.typicode.com/users/1', {
	    method: 'PATCH',
	    body: JSON.stringify(user),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
	  .then(response => response.json())
	  .then(json => {
	  	console.log(json);
	  	alert('Your data was created successfully');
	  })

	/* will return
	{
	  id: 101,
	  title: 'foo',
	  body: 'bar',
	  userId: 1
	}
	*/
	
}


<?php
$mycontent = $post->post_content; // wordpress users only
$word = str_word_count(strip_tags($mycontent));
$m = floor($word / 200);
$s = floor($word % 200 / (200 / 60));
$est = $m . ' minute' . ($m == 1 ? '' : 's') . ', ' . $s . ' second' . ($s == 1 ? '' : 's');
?>