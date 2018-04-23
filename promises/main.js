 var number = document.querySelector(".input-box");
 var btn = document.querySelector(".btn");



btn.addEventListener('click', function () {
  if(number.value > 0 ){
    successCallback(number.value); }
  else if(number.value < 0){
	failureCallback(number.value);
  }
}

	  , false);

	
	
	
	

	

function successCallback(result) {
  console.log("Succeeded with result " + result);
}

function failureCallback(result) {
  console.log("Failured with result " + result);
}