/*
взято https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomNumber (min, max) {
  const minimum = Math.min(min, max);
  const maximum = Math.max(min, max);
  if (minimum == maximum) {
    return maximum;
  }
  min = Math.ceil(minimum);
  max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber (4, 13);
getRandomNumber (10, 7);
getRandomNumber (13, 13);

/*
взято http://kodesource.top/javascript/form/string-length.php
*/

function lengthString(inputText, maxlength) {
  const userInput = inputText.value;
  return userInput.length <= maxlength;
  }
lengthString (document.querySelector('.text__hashtags'), 11)
