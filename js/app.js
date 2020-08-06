'use strict';
var totalCorrect = 0;

// //asks for username
var userName= prompt('Hello! What is your name?');
// console.log('User\'s name is ' + userName);
alert('Welcome ' + userName + ', you are about to learn all about Taylor Johnson.');

function userHappy(){
  var happy= prompt('Are you happy?');
  // console.log('User is happy? ' + happy.toLowerCase());
  if (happy.toLowerCase() === 'y' || happy.toLowerCase() === 'yes' ){
    alert('Correct! You are the happiest!');
    //increases total correct answers count by 1
    // totalCorrect++;
  } else if (happy.toLowerCase() === 'n' || happy.toLowerCase() === 'no'){
    alert('Incorrect! Cheer up ' + userName);
  } else {
    alert('Please enter y or n');
  }
}
userHappy();

function know(){
  var knowIt= prompt('Do you know it?');
  // console.log('User knows it? ' + knowIt.toLowerCase());
  if (knowIt.toLowerCase() === 'y' || knowIt.toLowerCase() === 'yes'){
    alert('Correct! You know what\'s up!');
    //increases total correct answers count by 1
    totalCorrect++;
  } else if (knowIt.toLowerCase() === 'n' || knowIt.toLowerCase() === 'no'){
    alert('Incorrect, you gon learn today ' + userName + ' !');
  } else {
    alert('Please enter y or n');
  }
}
know();

// function face()
// var face= prompt('Does your face surely show it?');
// // console.log('User\'s face surely shows it? ' + face.toLowerCase());
// if (face.toLowerCase() === 'y' || face.toLowerCase() === 'yes'){
//   alert('Correct! What a face it is!');
//   //increases total correct answers count by 1
//   totalCorrect++;
// } else if (face.toLowerCase() === 'n' || face.toLowerCase() === 'no'){
//   alert('Incorrect! ' + userName + ' is a sad panda!');
// } else {
//   alert('Please enter y or n');
// }

// var clap= prompt('Did you clap your hands?');
// // console.log('User clapped their hands? ' + clap.toLowerCase());
// if (clap.toLowerCase() === 'y' || clap.toLowerCase() === 'yes'){
//   alert('Correct! That was loud!');
//   //increases total correct answers count by 1
//   totalCorrect++;
// } else if (clap.toLowerCase() === 'n' || clap.toLowerCase() === 'no'){
//   alert('Incorrect! ' + userName + ', don\'t tell me you missed!');
// } else {
//   alert('Please enter y or n');
// }

// var stomp= prompt('Did you stomp your feet?');
// // console.log('User stomped their feet? ' + stomp.toLowerCase());
// if (stomp.toLowerCase() === 'y' || stomp.toLowerCase() === 'yes'){
//   alert('Correct! Happy feet!');
//   //increases total correct answers count by 1
//   totalCorrect++;
// } else if (stomp.toLowerCase() === 'n' || stomp.toLowerCase() === 'no'){
//   alert('Incorrect !' + userName + ' get moving!');
// } else {
//   alert('Please enter y or n');
// }
// alert(userName + ', thank you for being happy and visiting my website!');
// console.log('User chose spice level ' + numSpice);

function spicy(){
  for(var i=0; i < 4; i++){
    var numSpice = parseInt(prompt('How spicy do I like my food out of 5 start?'));
    if(numSpice === 4){
      alert('Correct!');
      //increases total correct answers count by 1
      totalCorrect++;
      break;
    }else if(numSpice > 4){
      alert('Too high!');
    }else if(numSpice < 4){
      alert('Too low!');
    }if(i === 3){
      alert('You\'re out of tries! The correct asnwer is 4!');
      break;
    }
  }
}
spicy();

function travel(){
  var myTravels = ['london', 'hawaii', 'sweden'];
  var flag = false;
  for(var j = 0; j < 6; j++){
    var guess = prompt('Guess a tourist destination I have traveled to.');
    for(var n = 0; n < myTravels.length; n++){
    // console.log(myTravels[n]);
      if(guess.toLowerCase() === myTravels[n]){
        alert('Correct! I have been to ' + myTravels[0] + ', ' + myTravels[1] + ' & ' + myTravels[2]);
        //increases total correct answers count by 1
        totalCorrect++;
        flag = true;
      // break;
      }
    }
    if(flag===true){
      break;
    } else{
      alert('Nope! I wish!');
    }
    if(j === 5){
      alert('You\'re out of tries! The correct asnwers are ' + myTravels[0] + ', ' + myTravels[1] + ' & ' + myTravels[2]);
      break;
    }

  }
}
travel();

alert('You guessed ' + totalCorrect + '/7 correst answers! Well done!');
