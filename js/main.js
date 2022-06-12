/*
взято https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomNumber (min, max) {
  if (max <= min) {
    return false;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber (4, 13);


/*
взято http://kodesource.top/javascript/form/string-length.php
*/

function lengthString(inputText, maxlength)
{
  const userInput = inputText.value;
  if (userInput.length <= maxlength)
  {
    return true;
  }
  else
  {
    return false;
  }
}
lengthString (document.querySelector('.text__hashtags'), 10);
