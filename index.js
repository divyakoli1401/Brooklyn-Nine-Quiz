var readlineSync = require("readline-sync");
var chalk = require("chalk");
console.log(chalk.cyan.bgWhiteBright.bold("Welcome to Brooklyn-99 Quiz!!!"));
userName = readlineSync.question("Please Enter Your Name: ");
console.log("Hello "+ userName + " enjoy playing the quiz");
score = 0;

function play (question,options,answer){
  console.log(chalk.magenta.bold.bgWhiteBright(question));
  console.log(chalk.bold(options));
  userAnswer = readlineSync.question("Enter your Answer: ");
  if(userAnswer === answer){
    console.log(chalk.green.bold("Right Answer!"));
    score = score + 1;
  }else{
    console.log(chalk.red.bold("Wrong Answer :("));
  }
  console.log("Your score is "+ score);
  console.log("----------------")
}

quizQuestions = [{
  question:"What is Terry's favourite food?",
  options:"a. Milk \nb. Yogurt",
  answer:"b"
  },{
  question:"What is Nutriboom?",
  options:"a. A pyramid scheme \nb. Terry's Nickname",
  answer:"a"
  },{
  question:"Which character's parent's got married?",
  options:"a. Boyle's and Lennetti's \nb. Peralta's and Lennetti's",
  answer:"a"
  },{
  question:"What is the Vulture's real name?",
  options:"a. Jason Stenley \nb. Keith Pembroke",
  answer:"b"
  },{
  question:"What drug does the team try to take out in season 2",
  options:"a. Molly \nb. GigglePig",
  answer:"b"
  },{
  question:"Who is captain Holt's biggest nemesis?",
  options:"a. Mary Spencer  \nb. Madeline Wuntch",
  answer:"b"
  },{
  question:"When does Jake propse Amy?",
  options:"a. Jimmy Jabs \nb. Halloween Heist",
  answer:"b"
  },{
  question:"What does Jake attempt to steal from Holt in first Halloween Heist?",
  options:"a. Watch \nb. MedaL OF Valour",
  answer:"b"
  },{
  question:"How many times did Teddy propose Amy?",
  options:"a. 4 \nb. 3",
  answer:"a"
  },{
  question:"What is Charle's son name?",
  options:"a. Nikolaj \nb. Mac",
  answer:"a"
  }
  ]

for(var i = 0; i< quizQuestions.length; i++){
    play(quizQuestions[i].question,quizQuestions[i].options,quizQuestions[i].answer)
}

if(score > 4){
  console.log(chalk.bold.cyan("Yay!!! " + userName + " your final score is " + score));
}else{
  console.log(chalk.bold.cyan("Your final score is " + score + " Better Luck next time " + userName));
}