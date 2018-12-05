<?php 

//code challenge solution by duplex kamdjou
//29/11/2019 

//Get the content of the JSON data
$resouce = file_get_contents('people.json');

//We decode the string data into a associated array
$people = json_decode($resouce, true);

//declaration the variables.
$emails  = "";
$newDataSet = array(); // sorted by age descending


//Handle the errors from importing the json file.
$error =  json_last_error_msg();
if($error !== 'No error'){
	echo $error. ' - from you JSON data.'; 
}else{
	$emails_list     = get_email_list($people);
	$sorted_data_set = get_sorted_data_set($people);
}


echo 'Email List: '. $emails_list; //print the list of emails
var_dump($sorted_data_set); //print the new sorted data with a new field.


/*********************************************************************/
/****************functions to handle subtask**************************/
/*********************************************************************/

//to get the final email list after processing
function get_email_list($people){
	$emails ="";
	foreach($people['data'] as $person) {
		foreach ($person as $key => $value) {
			if($key === 'email')
				 $emails .= $value.', '; //comma concatenated email 
		}
	}
	return rtrim($emails,", "); //removed the last character ', '
}

//to get the final data set after processing
function get_sorted_data_set($people)
{
	$my_array = array();
	$ages = array(); 
	foreach($people['data'] as $person) {

		//we populate the new array called "ages"
		array_push_assoc($ages, 'age', $person['age']);
		$new_array = $person['first_name'].' '.$person['last_name'];

		/*here we call a higher-order-function 
		 to add a new field with the key 'name' to the array*/
		array_push($my_array, array_push_assoc($person, 'name', $new_array));
	}
	usort($my_array, "age_sort"); //then we sort it in Decending order
	return $my_array;
}

//push to an assiative array
function array_push_assoc($array, $key, $value){
	$array[$key] = $value;
	return $array;
}

//Here we return zero if equal, -1 if a is greater than b and 1 if not
function age_sort($a, $b) {
  $a = $a['age'];
  $b = $b['age'];
  if ($a == $b)
    return 0;
  return ($a > $b) ? -1 : 1;
}