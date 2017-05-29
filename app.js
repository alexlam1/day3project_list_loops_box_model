'use strict';
var user = prompt('What is your given jedi name?');
var totalScoreAll = (0);
console.log('user:' + user);

alert('greetings padawan ' + user + ', I\'m master the master of force, I have code to keep you from using extra powers. Lets play a game. 1-10, pick a number! use the force organically and tell me what that number is');
var answer = prompt(user + ', you may guess up to 4 times. Please use your natural force and focus!');
for (var i = 0; i < 4; i++) {
  console.log('user\'s answer:' + answer);

  if (answer === '4') {
    alert('You truly read my mind! Right on Jedi!');
    totalScoreAll++;
    break;
  } else if (answer < 4) {
    alert('too low, try again');
  } else if (answer > 4) {
    alert('too high, try again');
  }
  answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
}

var question1 = prompt('Do I practice the dark side? yes or no');
//console.log('question1:' + question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
  alert('Dark powers MUST be with you');
} else {
  alert('Bright! My path IS enlightened');
  totalScoreAll++;
}

var question2 = prompt(user + ', lets find out who I really am, Do I practice the force on earth?');
//console.log('question2:' + question2);
if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
  alert('Thats violation of the Jedi empire! I follow rules');
} else {
  alert('Good Jedi! trust and good is to come in return');
  totalScoreAll++;
}

var question3 = prompt(user + ',you are on the right path, would I train with master Yoda?');
//console.log('question3:' + question3);
if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
  alert('Aha...');
  totalScoreAll++;
} else {
  alert('Why then, Yoda will teach you not');
}

var question4 = prompt(user + ', IS my purpose pure.');
//console.log('question4:' + question4);

if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
  alert('Purity is my goal');
  totalScoreAll++;
} else {
  alert('then what is my purpose');
}

var question5 = prompt(user + 'do you believe that I am Master Yoda');
//console.log('question5:' + question5);

if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
  alert('Thank you, all though, I am not.');
} else {
  totalScoreAll++;
  alert('The force is on your side, who am I? Take 6 guesses and please only type a first name, case sensative, coding is new here and my computer wont compute you. HINT this master knows this code best.');
}

var sport = ['Luke', 'Han Solo', 'Anikon', 'Alex', 'Alexander'];
var count1 = 0;
var flag;
while (count1 <= 5) {
  var sportquestion = prompt('Who... Will... I... Be...');
  for (i = 0; i < sport.length; i++) {
    if (sportquestion === sport[i]) {
      alert('wowser! How did ya do it? You MUST be a jedi');
      totalScoreAll++;
      flag = true;
      //console.log(sport);
      break;
    }
  }
  if(flag) {
    break;
  } else {
    alert('Think simpler');
    count1++;
  }
}

alert('your final score is ' + totalScoreAll + ' out of 7 ');
