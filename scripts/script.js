// paste JavaScript here
questionArea = document.getElementById("Question");
equationArea = document.getElementById("Equation");
translateArea = document.getElementById("translate");
equationShowing = ['','','','','',''];
currentQuestion = 0;

Questions = [
  {
    Question: "<p>Nicholas is buying shirts for his  baseball team. He will pay <button onclick='eq(0,0)'>$9.50</button> <button onclick='eq(0,1)'>for each shirt</button> <button onclick='eq(0,2)'>plus</button> <button onclick='eq(0,3)'>a one-time fee of $22.50</button> for the design.</p>  <p>Alex is buying shirts for another team from a different vendor. He will pay <button onclick='eq(0,5)'>$12</button> <button onclick='eq(0,6)'>for each shirt</button> and gets a <button onclick='eq(0,8)'>$10</button> <button onclick='eq(0,7)'>discount.</button> <p> According to league rules, all teams have to <button onclick='eq(0,4)'>spend the same amount of money</button> on t-shirts and buy the same amount of t-shirts. </p> <p>Write an equation to find x, the number of shirts each team must buy according to these weird league rules.</p></button>",
   Equation: ['9.5', 'x', ' +', ' 22.5 ', ' = ', ' 12', 'x', ' - ', ' 10'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Nicholas%20is%20buying%20shirts%20for%20his%20baseball%20team.%20He%20will%20pay%20%249.50%20for%20each%20shirt%20plus%20a%20one-time%20fee%20of%20%2422.50%20for%20the%20design.%0A%0AAlex%20is%20buying%20shirts%20for%20another%20team%20from%20a%20different%20vendor.%20He%20will%20pay%20%2412%20for%20each%20shirt%20and%20gets%20a%20%2410%20discount.%0A%0AAccording%20to%20league%20rules%2C%20all%20teams%20have%20to%20spend%20the%20same%20amount%20of%20money%20on%20t-shirts%20and%20buy%20the%20same%20amount%20of%20t-shirts.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20shirts%20each%20team%20must%20buy%20according%20to%20these%20weird%20league%20rules.&op=translate"
  },
  {
    Question: "<p>A fish is swimming at a constant rate toward the ocean floor.<button onclick='eq(1,4)'> From a starting position of 7 meters</button> <button onclick='eq(1,3)'>below sea level,</button> the fish is <button onclick='eq(1,0)'>descending</button> <button onclick='eq(1,1)'>3 meters</button>  <button onclick='eq(1,2)'>per second.</button></p><p><button onclick='eq(1,9)'> From a starting position of 20 meters</button> <button onclick='eq(1,8)'>below sea level,</button> another fish is <button onclick='eq(1,6)'>ascending 3 meters</button>  <button onclick='eq(1,7)'>per second.</button></p> <p>Write an equation to find x, the number of seconds it takes for the fish to reach the <button onclick='eq(1,5)'>same depth.</button>",
   Equation: [ '-','3', 'x' , ' - ', ' 7 ', ' = ','3', 'x ', ' - ', ' 20'],
    Translation: "https://translate.google.com/?sl=en&tl=es&text=A%20fish%20is%20swimming%20at%20a%20constant%20rate%20toward%20the%20ocean%20floor.From%20a%20starting%20position%20of%207%20meters%20below%20sea%20level%2C%20the%20fish%20is%20descending%203%20meters%20per%20second.%0A%0AFrom%20a%20starting%20position%20of%2020%20meters%20below%20sea%20level%2C%20another%20fish%20is%20ascending%203%20meters%20per%20second.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20seconds%20it%20takes%20for%20the%20fish%20to%20reach%20the%20same%20depth.&op=translate"
  },
  {
    Question: "<p>A fish is swimming at a constant rate toward the ocean floor.<button onclick='eq(2,4)'> From a starting position of 3 meters</button> <button onclick='eq(1,3)'>below sea level,</button> the fish is <button onclick='eq(2,0)'>descending</button> <button onclick='eq(2,1)'>7 meters</button>  <button onclick='eq(2,2)'>per second.</button></p><p><button onclick='eq(2,9)'> From a starting position of 30 meters</button> <button onclick='eq(2,8)'>below sea level,</button> another fish is <button onclick='eq(2,6)'>ascending 7 meters</button>  <button onclick='eq(2,7)'>per second.</button></p> <p>Write an equation to find x, the number of seconds it takes for the fish to reach the <button onclick='eq(2,5)'>same depth.</button>",
   Equation: [' -','7', 'x ', ' - ', ' 3 ', ' = ', ' 7', 'x', ' - ', ' 30'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=A%20fish%20is%20swimming%20at%20a%20constant%20rate%20toward%20the%20ocean%20floor.From%20a%20starting%20position%20of%203%20meters%20below%20sea%20level%2C%20the%20fish%20is%20descending%207%20meters%20per%20second.%0A%0AFrom%20a%20starting%20position%20of%2030%20meters%20below%20sea%20level%2C%20another%20fish%20is%20ascending%207%20meters%20per%20second.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20seconds%20it%20takes%20for%20the%20fish%20to%20reach%20the%20same%20depth.%0A&op=translate"
  },
     
  {
    Question: "<p>A pilot takes a taxi from the airport to a hotel.The taxi driver charges a <button onclick='eq(3,3)'>$2.50 initial charge</button>  <button onclick='eq(3,2)'>plus</button> <button onclick='eq(3,0)'>$2.65</button>  <button onclick='eq(3,1)'>per mile.</button></p> <p>The co-pilot takes an Uber from the airport to the hotel.The Uber driver charges <button onclick='eq(3,5)'>$3</button>  <button onclick='eq(3,6)'>per mile</button>  and gives a <button onclick='eq(3,8)'>$5</button>  <button onclick='eq(3,7)'>discount.</button> </p> <p>When they get to the hotel, they compare receipts and notice they paid the <button onclick='eq(3,4)'>same amount.</button> Write an equation to find x, the number of miles from the airport to the hotel.",
   Equation: ['2.65', 'x', ' +', ' 2.5', ' = ', ' 3', 'x ', ' - ', ' 5'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=A%20%20pilot%20takes%20a%20taxi%20from%20the%20airport%20to%20a%20hotel.The%20taxi%20driver%20charges%20a%20%242.50%20initial%20charge%20plus%20%242.65%20per%20mile.%0A%0AThe%20co-pilot%20takes%20an%20Uber%20from%20the%20airport%20to%20the%20hotel.The%20Uber%20driver%20charges%20%243%20per%20mile%20and%20gives%20a%20%245%20discount.%0A%0AWhen%20they%20get%20to%20the%20hotel%2C%20they%20compare%20receipts%20and%20notice%20they%20paid%20the%20same%20amount.%20Write%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20miles%20from%20the%20airport%20to%20the%20hotel.&op=translate"
  },
  {
    Question: "<p>Erica and her sister paid the <button onclick='eq(4,4)'>same amount</button> for dance classes. Erica paid a <button onclick='eq(4,3)'>$123.95 registration fee</button> <button onclick='eq(4,2)'>and</button>  <button onclick='eq(4,0)'>$45</button>  <button onclick='eq(4,1)'>for each week</button> she was enrolled in the classes.<p>Erica's sister paid a <button onclick='eq(4,8)'>$45 registration fee</button> <button onclick='eq(4,7)'>and</button>  <button onclick='eq(4,5)'>$123.95</button>  <button onclick='eq(4,6)'>for each week</button> she was enrolled in the classes.",
   Equation: ['45', 'x', ' + ', ' 123.95', ' = ',' 123.95', 'x', ' + ', ' 45'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=Erica%20and%20her%20sister%20paid%20the%20same%20amount%20for%20dance%20classes.%20Erica%20paid%20a%20%24123.95%20registration%20fee%20and%20%2445%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.%0A%0AErica%27s%20sister%20paid%20a%20%2445%20registration%20fee%20and%20%24123.95%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.&op=translate"
  },
 
    {
    Question: "<p>Erica and her sister <button onclick='eq(5,2)'>paid the same amount</button> for dance classes. Erica paid <button onclick='eq(5,0)'>$123.95</button> <button onclick='eq(5,1)'>for each week</button> she was enrolled in the classes. Her sister purchased a VIP membership for <button onclick='eq(5,5)'>a one time fee of $100</button> and paid <button onclick='eq(5,3)'>$45</button>  <button onclick='eq(5,4)'>for each week</button> she was enrolled in the classes.",
   Equation: ['123.95', 'x', ' = ', ' 45', 'x', ' + 100'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=Erica%20and%20her%20sister%20paid%20the%20same%20amount%20for%20dance%20classes.%20Erica%20paid%20%24123.95%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.%20Her%20sister%20purchased%20a%20VIP%20membership%20for%20a%20one%20time%20fee%20of%20%24100%20and%20paid%20%2445%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.&op=translate"
  }
];

function showQuestion(n) {
  questionArea.innerHTML = Questions[n].Question;
equationShowing = ['','','','','',''];
  equationArea.innerHTML = equationShowing.join('');
  translateArea.innerHTML = "<a href='" + Questions[n].Translation + "' target='_blank'>Translation and Text to Speech</a>"
}

function eq(q,n){
  equationShowing[n] = Questions[q].Equation[n];
  equationArea.innerHTML = equationShowing.join('');
}

function AFTER() {
  equationShowing[3] = '';
  equationShowing[4] = '';
  equationShowing[5] = '';
  equationArea.innerHTML = equationShowing.join('');
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === Questions.length || currentQuestion > Questions.length ) {
    questionArea.innerHTML = "Questions Complete!";
    currentQuestion = -1;
  } else {
  showQuestion(currentQuestion);
  }
}

showQuestion(0);


