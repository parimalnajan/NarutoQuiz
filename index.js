const chalk = require('chalk');
var readlineSync=require("readline-sync");

var score=0;
var userName=readlineSync.question("Please enter your name: ");

var highscores=[{name:"Rushabh",points:7},{name:"Daulat",points:7}]
 


console.log(chalk.blue("Hello, "+userName+"\n"+"How well you know Naruto?"));
console.log(chalk.grey("For Review purposes, correct answers are:b,c,b,c,a,b,c,b"))


//start

function play(question,options,answer){

  var ans=readlineSync.question("\n"+chalk.magentaBright(question)+"\n"+options+"\n");
  var ans=ans.toLowerCase();
   while(ans < "a" || ans > "d" || ans.length != 1){
      console.log(chalk.red('Enter a valid option i.e a,b,c or d'));
      ans = readlineSync.question(chalk.white('Answer: '));
    }

  if(ans.toLowerCase() === answer.toLowerCase()){
  console.log(chalk.green("Correct!"));
  score=score+1;
  
  } else {
    console.log(chalk.red("wrong."));
    }
    console.log(chalk.gray("Current score: "+score));

}

var questions=[
  {
    question: 'What is Samehada?',
    options: 'A)Hat B)Sword C)Martial Art form',
    answer: 'B'
  },
  {
    question: 'Which of these is another word for ninja?',
    options: 'A)Kunoichi B)Arigato C)Shinobi',
    answer: 'C',
  },
  {
    question:'Which Hokage sealed the nine-tailed fox inside Naruto?',
    options:'A)second Hokage B)fourth Hokage C)third Hokage ',
    answer:"B",

  },
  {  
    question:'Which character can only use taijutsu? ',
    options:'A)Gaara B)TenTen C)Rock Lee ',
    answer:'C'
  },
  {
    question:'What does Chidori mean? ',
    options:'A)one thousand birds B)Ten thousand volts C)one thousand swords ',
    answer:'A'
  },
  {
    question:'The Sharingan is what type of jutsu? ',
    options:'A)Genjutsu B)Doujutsu C)Ninjutsu ',
    answer:'B'

  },
  {
     question:'How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams? ',
     options:'A)Three B)Four C)Five ',
      answer:'C'
  },
  {
    question:'What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara? ',
    options:'A)Seventh Gate B)Primary Lotus C)Daytime Tiger ',
    answer:'B'

  }
  
  
  ]

//startpoint
  for(i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].options,questions[i].answer);

    if(i===3&&score<4){
      console.log("\n you did not reach level2");
      break;
    }
    else if(i===3&&score===4){
      console.log(chalk.green("Congratulations! you have entered level2"))
    }
  }
  console.log("\n \n"+"your total score: "+score);
  if(score>=4){console.log(chalk.green("\n"+"Congrats! you made it to the leaderboard!") )}

  if(score<4){
    console.log(chalk.red("\n"+"Unfortunately, You did not make it to the leaderboard."));
    }

  if(score>=5&&score<=7){
    highscores[2]=highscores[1];
    highscores[1]=highscores[0]
    highscores[0]={name:userName,points:score}
    console.log(highscores);
  }

  if(score===8){
    highscores[2]={name:userName,points:score}
     console.log(highscores);
  };