'use strict';
var user = prompt('What is your Jedi name?');
console.log('user:' + user);

alert('greetings padawan ' + user + ', I\'m thinking of a number 1-10, use the force and tell me what that number is');

function q0(){
  var answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
  for (var i = 0; i < 4; i++) {
    console.log('user\'s answer:' + answer);

    if (answer === '4') {
      alert('Yay good job! You read my mind!');
      break;
    } else if (answer < 4) {
      alert('too low');
    } else if (answer > 4) {
      alert('too high');
    }
    answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
}
}

function q1(){
  var question1 = prompt('do you practice the dark side? Yes or no');
  console.log('question1:' + question1);

  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    alert('Dark powers are with you');
  } else {
    alert('Bright! Your path is enlightened');
  }
}

function q2(){
  var question2 = prompt(user + ', lets find out more about you, Do you practice the force on earth?');
  console.log('question2:' + question2);

  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
    alert('you are in violation of Earths laws REPORTED TO JEDI SECTOR');
  } else {
    alert('Good Jedi do well and good will come in return');
  }
}

function q3(){
  var question3 = prompt(user + ',you are on the right path, would you train with Yoda?');
  console.log('question3:' + question3);

  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    alert('Aha little did you know, Yoda I am');
  } else {
    alert('Why then, Yoda will teach you not');
  }
}

function q4(){
  var question4 = prompt(user + ', what is your purpose for this test of force? are you looking to learn more about your powers');
  console.log('question4:' + question4);

  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
    alert('Well then I have the resources for you, email me and we will set you up with the light or dark side');
  } else {
    alert('Then what IS your goal of this quiz???');
  }
}

function q5(){
  var question5 = prompt(user + ', Please refer us to your fellow Jedis, will you do this?');
  console.log('question5:' + question5);

  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
    alert('Thank you and may the force be with you');
  } else {
    alert('Good luck in this world padawan');
  }
}

  var sport = ['hockey', 'lacrosse', 'pingpong', 'basketball', 'baseball'];
  var count = 0;
  var right;
  var correct = 0;

function sportGame(){
    while (count <= 6) {
      var sportquestion = prompt('what sport have i played').toLowerCase();

      for (var i = 0; i < sport.length; i++){
        console.log(sport[i]);
        if (sport[i] === sportquestion){
          alert('wow!!s! How did you know??');
          right = true;
          break;
        }
      }

      if(right){
        correct++;
        sport.splice(i, 1);
      } else {
        alert('wrong. guess again');
        count++;
      }
      if(correct === 5){
        break;
      }
      console.log('count:' + count);
      console.log(sport);
      right = false;
    }
    alert('you got ' + correct + ' out of 5');
    if (correct === 5){
      alert('you got them all. the force is with you.');
    } else if (correct > 2){
      alert('not bad, padawan');
    }  else {
        alert('better luck next time!');
      }
}

q0();
q1();
q2();
q3();
q4();
q5();
sportGame();
