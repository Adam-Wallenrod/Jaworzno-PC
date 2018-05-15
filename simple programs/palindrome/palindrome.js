console.log("Palindrome script is working");

var word = document.querySelector('input');
var btn = document.querySelector('button');
var result = document.querySelector('.result');


/*
function checkWord() {
   var letters = [];

   letters = word.value.toUpperCase().split('');

   console.log(letters);
   console.log(letters.length);

   for(var i = 0; i < Math.floor(letters.length/2) ; i++){
     if(letters[i] === letters[letters.length - 1 - i]){
       console.log("letter in " + i + " iteration are the same");
     }
     else {
         console.log("it's not a palidrome");
         result.textContent = "It's not a palidrome"
         break;
     }

    if( i === (Math.floor(letters.length/2)-1) ){
       console.log("Palidrome!");
       result.textContent = "Palidrome"
     }

   }

   word.value = "";

}

btn.addEventListener('click', checkWord);

*/

function isPalindrome(str) {
  str = str.replace(/\W/g, '');
  str = str.toLowerCase();
  return (str == str.split('').reverse().join(''));
}


function checkWord() {
  if(isPalindrome(word.value)){
    console.log("Palidrome!");
    result.textContent = "Palidrome"
  }
  else {
    console.log("it's not a palidrome");
    result.textContent = "It's not a palidrome";
  }
}




btn.addEventListener('click', checkWord);
