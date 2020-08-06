'use strict';

var userName= prompt('Hello! What is your name?');
// console.log('User\'s name is ' + userName);
alert('Welcome ' + userName + ', you are about to learn all about Taylor Johnson.');
var happy= prompt('Are you happy? (y/n)');
// console.log('User is happy? ' + happy.toLowerCase());

if (happy.toLowerCase() === 'y'){
  alert('Correct! You are the happiest!');
} else if (happy.toLowerCase() === 'n'){
  alert('Incorrect! Cheer up ' + userName);
} else {
  alert('Please enter y or n');
}
var knowIt= prompt('Do you know it? (y/n)');
// console.log('User knows it? ' + knowIt.toLowerCase());
if (knowIt.toLowerCase() === 'y'){
  alert('Correct! You know what\'s up!');
} else if (knowIt.toLowerCase() === 'n'){
  alert('Incorrect, you gon learn today ' + userName + ' !');
} else {
  alert('Please enter y or n');
}
var face= prompt('Does your face surely show it? (y/n)');
// console.log('User\'s face surely shows it? ' + face.toLowerCase());
if (face.toLowerCase() === 'y'){
  alert('Correct! What a face it is!');
} else if (face.toLowerCase() === 'n'){
  alert('Incorrect! ' + userName + ' is a sad panda!');
} else {
  alert('Please enter y or n');
}
var clap= prompt('Did you clap your hands? (y/n)');
// console.log('User clapped their hands? ' + clap.toLowerCase());
if (clap.toLowerCase() === 'y'){
  alert('Correct! That was loud!');
} else if (clap.toLowerCase() === 'n'){
  alert('Incorrect! ' + userName + ', don\'t tell me you missed!');
} else {
  alert('Please enter y or n');
}
var stomp= prompt('Did you stomp your feet? (y/n)');
// console.log('User stomped their feet? ' + stomp.toLowerCase());
if (stomp.toLowerCase() === 'y'){
  alert('Correct! Happy feet!');
} else if (stomp.toLowerCase() === 'n'){
  alert('Incorrect !' + userName + ' get moving!');
} else {
  alert('Please enter y or n');
}
alert(userName + ', thank you for being happy and visiting my website!');
