// PROFILE GENERATOR..
const { rawListeners } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('What do you think of Node.js? ', (answer) => {
  let res = 'hmm'; let ans1 = answer; 
  if (answer === 'ok') {res = 'Oh ok..';} 
    else if (ans1 === 'great') {res = 'Awesome, glad you are enjoying..';}
    else if (ans1 === 'excellent') {res = 'Cool!';} 
    else if (ans1 === 'seriously?!') {res = 'Is there a problem?';}
    else if (ans1 === "bad") {res = '...Well that\'s your opinion...'; setTimeout(function(){process.exit(0)}, 1000); }
      else {res = 'Alright then,';}
  console.log(`${res} Thank you for your valuable feedback: ${answer}`);

r1.question('What is your favorite fruit? ', (answer) => {
  let res = 'hmm, I don\'t know that..'; let ans2 = answer;
  if (ans2 === 'apple' | ans2 === 'Apple' | ans2 === '🍎' | ans2 === '🍏') {res = `🍏: Niice, I like apples too.. Especially the Sour-kind 🍏...`;};
  if (ans2 === 'banana' | ans2 === 'Banana' | ans2 === '🍌') {res = `🍌: Nothing like a good ol, Cavandish ${ans2} too..`;};
  if (ans2 === 'pear' | ans2 === 'Pear' | ans2 === '🍐') {res = `🍐: I like ${ans2}s too..`;};  
  if (ans2 === 'mango' | ans2 === 'Mango' | ans2 === '🥭') {res = `🥭: I'm arlight with ${ans2}s..`;};  
  if (ans2 === 'pineapple' | ans2 === 'Pineapple' | ans2 === 'Pine apple' | ans2 === 'pine apple' | ans2 === 'ananas' | ans2 === 'Ananas' | ans2 === '🍍') {res = `🍍: I love ${ans2} over pizza..`;};
  if (ans2 === 'lemon' | ans2 === 'Lemon' | ans2 === 'Lemons' | ans2 === 'lemons' | ans2 === '🍋') {res = `🍋: Yes! ${ans2}s so good with tea..`;};
  if (ans2 === 'orange' | ans2 === 'Orange' | ans2 === 'tangy' | ans2 === 'Tangerine' | ans2 === 'tangerine' | ans2 === 'clementine' | ans2 === 'clemantine'  | ans2 === 'clemintine' | ans2 === '🍊') {res = `🍊: For sure! ${ans2}s best packed with Vitamin-C..`;};
  if (ans2 === 'watermelon' | ans2 === 'Watermelon' | ans2 === 'water melon' | ans2 === 'Water melon' | ans2 === '🍉') {res = `🍉: Oh yeah! ${ans2}s great when it\'s crisp..`;};
  if (ans2 === 'melon' | ans2 === 'Melon' | ans2 === 'honeydew' | ans2 === 'cantalope' | ans2 === 'Cantalope' | ans2 === 'Honeydew' | ans2 === 'Honey dew' | ans2 === '🍈') {res = `🍈: Good for you! I\m ok with ${ans2}s..`;};
  if (ans2 === 'peach' | ans2 === 'Peach' | ans2 === '🍑') {res = `🍑: ${ans2}s so good!!..`;};
  if (ans2 === 'peaches' | ans2 === 'Peaches' | ans2 === '🍑🍑') {res = `🎵..I gpt my ${ans2}s out in Georgia..🎵!!..`;};
  if (ans2 === 'cherry' | ans2 === 'Cherry' | ans2 === 'Cherries' | ans2 === 'cherries' | ans2 === '🍒') {res = `🍒: ${ans2}s, it\'s the pits!..`;};
  if (ans2 === 'strawberry' | ans2 === 'Strawberry' | ans2 === 'Strawberries' | ans2 === 'strawberries' | ans2 === '🍓') {res = `🍓: Ah yeah, ${ans2}s are nice..`;};
  if (ans2 === 'grapes' | ans2 === 'Grape' | ans2 === 'Sour grapes' | ans2 === 'Sourgrapes' | ans2 === 'sour grapes' | ans2 === '🍇') {res = `🍇: Especially like the sour ${ans2}s, seedless of course!..`;};
  if (ans2 === 'coconut' | ans2 === 'coconuts' | ans2 === 'coco nut' | ans2 === 'Coco nuts' | ans2 === '🥥') {res = `🥥: ${ans2}s? well..sure! why not!`;};
  if (ans2 === 'tomato' | ans2 === 'Tomato' | ans2 === 'Tomatoes' | ans2 === 'tomatoes' | ans2 === 'pomidore' | ans2 === '🍅') {res = `🍅: Well, since it\'s technically a fruit, ${ans2}s are classified as berries, then what makes of a pizza??..`;};
  if (ans2 === 'cucumber' | ans2 === 'Cucumber' | ans2 === 'cucumbers' | ans2 === 'Cucumbers' | ans2 === '🥒') {res = `🥒: Welp, since ${ans2}s are technically a berry, have you tried ${ans2}-Pepsi ?..`;};
  if (ans2 === 'lychee' | ans2 === 'Lychee' | ans2 === 'leechee' | ans2 === 'Leechee' | ans2 === '🥀') {res = `🥀: My personal favorite! ${ans2}s taste like a berry-form of a Nestle Ice-Tea!..`;};
  console.log(`${ans2}? ${res}`);
  console.log(`Thank you for your valuable feedback!`);
  setTimeout(function(){console.log(`In Summary, your reaction to Node.js is: '${ans1}'...and your favorite fruit is ${ans2}..`); }, 2000);
  setTimeout(function(){console.log(`Cheers!`)}, 5000);     
  r1.close();
    });
  });   

// Elements for Creative writing:
// character
// setting
// narrative
// plot
// conflict
// theme
// voice

// Elements for Game Design
// objective
// constraints
// interactivity
// inertia
// surprise
// strategy
// fun
// flavor
// hook
// narrative

// mechanics
// space
// goals
// rules
// components

// players (character)
// goal
// rules
// comments

//FUN:
// conflict
// strategy and chance
// aesthetics
// theme and story
// rewards

//Successful:
// story and gameplay

//Generator:                            eg.
// Environment: where game is set..   supermarket
// Goal: what you have to achieve..   complete the puzzle
// Genre: the style of the game..     action
// Rules: obstacles to overcome..     can't touch the floor
// wildcard: a random feature..       magic spell

// Genre: Physics
// Rule: Leave Something Behind
// Setting: Dystopia
// Theme: Power and Corruption
