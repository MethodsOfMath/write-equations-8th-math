questionArea = document.getElementById("Question");
equationArea = document.getElementById("Equation");
translateArea = document.getElementById("translate");
equationShowing = ['','','','','',''];
currentQuestion = 0;

Questions = [
  {
    Question: "<p> Mango Music charges <button onclick='eq(0,0)'>$16.00</button> <button onclick='eq(0,1)'>per month</button> <button onclick='eq(0,2)'>plus</button> <button onclick='eq(0,3)'>a one-time membership fee of $12.99</button> for their music streaming service.</p>  <p>Top Tunes charges <button onclick='eq(0,5)'>$10.00</button> <button onclick='eq(0,6)'>per month</button>   for their music streaming service. With this subscription to Top Tunes, there is a <button onclick='eq(0,7)'>one-time fee of $36.99</button> for membership.<p> For how many months, m, would <button onclick='eq(0,4)'>both subscriptions cost the same</button>?</p>",
   Equation: ['16', 'm', ' +', ' 12.99 ', ' = ', ' 10', 'm', ' + 36.99'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Mango%20Music%20charges%20%2416.00%20per%20month%20plus%20a%20one-time%20membership%20fee%20of%20%2412.99%20for%20their%20music%20streaming%20service.%0A%0ATop%20Tunes%20charges%20%2410.00%20per%20month%20for%20their%20music%20streaming%20service.%20With%20this%20subscription%20to%20Top%20Tunes%2C%20there%20is%20a%0Aone-time%20fee%20of%20%2436.99%20for%20membership.%20%0A%0AFor%20how%20many%20months%2C%20m%2C%20would%20both%20subscriptions%20cost%20the%20same%3F&op=translate"
  },
   {
    Question: "<p>Maria earns <button onclick='eq(1,0)'>$7.35</button> <button onclick='eq(1,1)'>an hour</button> at Sonic <button onclick='eq(1,2)'>plus</button> <button onclick='eq(1,3)'>an extra $20 every week</button>  for wearing roller skates for her shifts.</p>  <p>Hannah earns <button onclick='eq(1,5)'>$8.25</button> <button onclick='eq(1,6)'>per hour</button> at Whataburger, but she <button onclick='eq(1,7)'>must pay</button> <button onclick='eq(1,8)'>$16</button> for her uniform to be cleaned each week.<p> For what number of hours, h, would Maria and Hannah work if <button onclick='eq(1,4)'>they earned the same amount in a week</button>?</p>",
   Equation: ['7.35', 'h', ' +', ' 20 ', ' = ', ' 8.25', 'h', ' - ', ' 16'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Maria%20earns%20%247.35%20an%20hour%20at%20Sonic%20plus%20an%20extra%20%2420%0Aevery%20week%20for%20wearing%20roller%20skates%20for%20her%20shifts.%0AHannah%20earns%20%248.25%20per%20hour%20at%20Whataburger%2C%20but%20she%0Amust%20pay%20%2416%20for%20her%20uniform%20to%20be%20cleaned%20each%20week.%0AFor%20what%20number%20of%20hours%2C%20h%2C%20would%20Maria%20and%20Hannah%0Awork%20if%20they%20earned%20the%20same%20amount%20in%20a%20week%3F&op=translate"
  },
   {
    Question: "<p>Leo bought a video game for <button onclick='eq(2,3)'>$59.97</button> <button onclick='eq(2,2)'>plus</button> <button onclick='eq(2,0)'>2</button> <button onclick='eq(2,1)'>controllers</button>.  Mike rented the game for<button onclick='eq(2,8)'>$7.99 per day for 3 days</button> <button onclick='eq(2,7)'>plus</button> he bought <button onclick='eq(2,5)'>3</button>  <button onclick='eq(2,6)'>controllers</button>. What is the cost, x, of each controller if <button onclick='eq(2,4)'>Leo and Mike spent the same amount</button>?",
   Equation: ['2', 'x ', ' + ', ' 59.97 ', ' = ', ' 3', 'x', ' + ', ' 3(7.99)'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=%20%20Leo%20bought%20a%20video%20game%20for%20%2459.97%20plus%202%20controllers.%20%20Mike%20rented%20the%20game%20for%20%247.99%20per%20day%20for%203%20days%20plus%20he%20bought%203%20controllers.%20%20What%20is%20the%20cost%2C%20x%2C%20of%20each%20controller%20if%20Leo%20and%20Mike%20spent%20the%20same%20amount%3F&op=translate"
  },
  
  {
    Question: "<p>David went to 7-11 and bought bags of hot fries for <button onclick='eq(3,0)'>$2.75</button> <button onclick='eq(3,1)'>each</button> and he had a coupon for <button onclick='eq(3,3)'>$5.00</button> <button onclick='eq(3,2)'>off</button>. Jazmin went to QT and bought bags of hot fries for <button onclick='eq(3,5)'>$2.25</button> <button onclick='eq(3,6)'>each</button> <button onclick='eq(3,7)'>and</button> a soda for <button onclick='eq(3,8)'>$1.50</button>. For what number of bags of hot fries, b, would <button onclick='eq(3,4)'>David and Jazmin spend the same amount</button>?</p></button>",
   Equation: ['2.75', 'b ', ' - ', ' 5 ', ' = ', ' 2.25', 'b', ' + ', ' 1.5'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=%20%20David%20went%20to%207-11%20and%20bought%20bags%20of%20hot%20fries%20for%20%242.75%20each%20and%20he%20had%20a%20coupon%20for%20%245.00%20off.%20Jazmin%20went%20to%20QT%20and%20bought%20bags%20of%20hot%20fries%20for%20%242.25%20each%20and%20a%20soda%20for%20%241.50.%20For%20what%20number%20of%20bags%20of%20hot%20fries%2C%20b%2C%20would%20David%20and%20Jazmin%20spend%20the%20same%20amount%3F%20&op=translate"
  },

    {
    Question: "<p>Candi has crates that weigh <button onclick='eq(4,0)'>60 pounds</button> <button onclick='eq(4,1)'> each</button>, <button onclick='eq(4,2)'>plus</button> <button onclick='eq(4,3)'>a box that weighs 17.5 pounds</button>. Manny has crates that weigh <button onclick='eq(4,5)'>50 pounds</button> <button onclick='eq(4,6)'>each</button>, <button onclick='eq(4,7)'>plus</button>  <button onclick='eq(4,8)'>one box that weighs 97.5 pounds</button>.  How many crates, x, would it take for <button onclick='eq(4,4)'>Candi and Manny to have the same weight of crates and boxes</button>?",
   Equation: ['60', 'x', ' + ', ' 17.5', ' = ',' 50', 'x', ' + ', ' 97.5'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=Candi%20has%20crates%20that%20weigh%2060%20pounds%20each%2C%20plus%20a%20box%20that%20weighs%2017.5%20pounds.%20Manny%20has%20crates%20that%20weigh%2050%20pounds%20each%2C%20plus%20one%20box%20that%20weighs%2097.5%20pounds.%20%20How%20many%20crates%2C%20x%2C%20would%20it%20take%20for%20Candi%20and%20Manny%20to%20have%20the%20same%20weight%20of%20crates%20and%20boxes%3F&op=translate"
  },
{
    Question: "<p>Erica and her sister <button onclick='eq(5,2)'>paid the same amount</button> for dance classes. Erica paid <button onclick='eq(5,0)'>$123.95</button> <button onclick='eq(5,1)'>for each week</button> she was enrolled in the classes. Her sister purchased a VIP membership for <button onclick='eq(5,5)'>a one time fee of $100</button> and paid <button onclick='eq(5,3)'>$45</button>  <button onclick='eq(5,4)'>for each week</button> she was enrolled in the classes.",
   Equation: ['123.95', 'x', ' = ', ' 45', 'x', ' + 100'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=Erica%20and%20her%20sister%20paid%20the%20same%20amount%20for%20dance%20classes.%20Erica%20paid%20%24123.95%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.%20Her%20sister%20purchased%20a%20VIP%20membership%20for%20a%20one%20time%20fee%20of%20%24100%20and%20paid%20%2445%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.&op=translate"
  },  
  {
    Question: "<p>Nicholas is buying shirts for his  baseball team. He will pay <button onclick='eq(6,0)'>$9.50</button> <button onclick='eq(6,1)'>for each shirt</button> <button onclick='eq(6,2)'>plus</button> <button onclick='eq(6,3)'>a one-time fee of $22.50</button> for the design.</p>  <p>Alex is buying shirts for another team from a different vendor. He will pay <button onclick='eq(6,5)'>$12</button> <button onclick='eq(6,6)'>for each shirt</button> and gets a <button onclick='eq(6,8)'>$10</button> <button onclick='eq(6,7)'>discount.</button> <p> According to league rules, all teams have to <button onclick='eq(6,4)'>spend the same amount of money</button> on t-shirts and buy the same amount of t-shirts. </p> <p>Write an equation to find x, the number of shirts each team must buy according to these weird league rules.</p></button>",
   Equation: ['9.5', 'x', ' +', ' 22.5 ', ' = ', ' 12', 'x', ' - ', ' 10'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Nicholas%20is%20buying%20shirts%20for%20his%20baseball%20team.%20He%20will%20pay%20%249.50%20for%20each%20shirt%20plus%20a%20one-time%20fee%20of%20%2422.50%20for%20the%20design.%0A%0AAlex%20is%20buying%20shirts%20for%20another%20team%20from%20a%20different%20vendor.%20He%20will%20pay%20%2412%20for%20each%20shirt%20and%20gets%20a%20%2410%20discount.%0A%0AAccording%20to%20league%20rules%2C%20all%20teams%20have%20to%20spend%20the%20same%20amount%20of%20money%20on%20t-shirts%20and%20buy%20the%20same%20amount%20of%20t-shirts.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20shirts%20each%20team%20must%20buy%20according%20to%20these%20weird%20league%20rules.&op=translate"
  },
  {
    Question: "<p>A fish is swimming at a constant rate toward the ocean floor.<button onclick='eq(7,4)'> From a starting position of 7 meters</button> <button onclick='eq(7,3)'>below sea level,</button> the fish is <button onclick='eq(7,0)'>descending</button> <button onclick='eq(7,1)'>3 meters</button>  <button onclick='eq(7,2)'>per second.</button></p><p><button onclick='eq(7,9)'> From a starting position of 20 meters</button> <button onclick='eq(7,8)'>below sea level,</button> another fish is <button onclick='eq(7,6)'>ascending 3 meters</button>  <button onclick='eq(7,7)'>per second.</button></p> <p>Write an equation to find x, the number of seconds it takes for the fish to reach the <button onclick='eq(7,5)'>same depth.</button>",
   Equation: [ '-','3', 'x' , ' - ', ' 7 ', ' = ','3', 'x ', ' - ', ' 20'],
    Translation: "https://translate.google.com/?sl=en&tl=es&text=A%20fish%20is%20swimming%20at%20a%20constant%20rate%20toward%20the%20ocean%20floor.From%20a%20starting%20position%20of%207%20meters%20below%20sea%20level%2C%20the%20fish%20is%20descending%203%20meters%20per%20second.%0A%0AFrom%20a%20starting%20position%20of%2020%20meters%20below%20sea%20level%2C%20another%20fish%20is%20ascending%203%20meters%20per%20second.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20seconds%20it%20takes%20for%20the%20fish%20to%20reach%20the%20same%20depth.&op=translate"
  },
  {
    Question: "<p>A fish is swimming at a constant rate toward the ocean floor.<button onclick='eq(8,4)'> From a starting position of 3 meters</button> <button onclick='eq(8,3)'>below sea level,</button> the fish is <button onclick='eq(8,0)'>descending</button> <button onclick='eq(8,1)'>7 meters</button>  <button onclick='eq(8,2)'>per second.</button></p><p><button onclick='eq(8,9)'> From a starting position of 30 meters</button> <button onclick='eq(8,8)'>below sea level,</button> another fish is <button onclick='eq(8,6)'>ascending 7 meters</button>  <button onclick='eq(8,7)'>per second.</button></p> <p>Write an equation to find x, the number of seconds it takes for the fish to reach the <button onclick='eq(8,5)'>same depth.</button>",
   Equation: [' -','7', 'x ', ' - ', ' 3 ', ' = ', ' 7', 'x', ' - ', ' 30'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=A%20fish%20is%20swimming%20at%20a%20constant%20rate%20toward%20the%20ocean%20floor.From%20a%20starting%20position%20of%203%20meters%20below%20sea%20level%2C%20the%20fish%20is%20descending%207%20meters%20per%20second.%0A%0AFrom%20a%20starting%20position%20of%2030%20meters%20below%20sea%20level%2C%20another%20fish%20is%20ascending%207%20meters%20per%20second.%0A%0AWrite%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20seconds%20it%20takes%20for%20the%20fish%20to%20reach%20the%20same%20depth.%0A&op=translate"
  },
     
  {
    Question: "<p>A pilot takes a taxi from the airport to a hotel.The taxi driver charges a <button onclick='eq(9,3)'>$2.50 initial charge</button>  <button onclick='eq(9,2)'>plus</button> <button onclick='eq(9,0)'>$2.65</button>  <button onclick='eq(9,1)'>per mile.</button></p> <p>The co-pilot takes an Uber from the airport to the hotel.The Uber driver charges <button onclick='eq(9,5)'>$3</button>  <button onclick='eq(9,6)'>per mile</button>  and gives a <button onclick='eq(9,8)'>$5</button>  <button onclick='eq(9,7)'>discount.</button> </p> <p>When they get to the hotel, they compare receipts and notice they paid the <button onclick='eq(9,4)'>same amount.</button> Write an equation to find x, the number of miles from the airport to the hotel.",
   Equation: ['2.65', 'x', ' +', ' 2.5', ' = ', ' 3', 'x ', ' - ', ' 5'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=A%20%20pilot%20takes%20a%20taxi%20from%20the%20airport%20to%20a%20hotel.The%20taxi%20driver%20charges%20a%20%242.50%20initial%20charge%20plus%20%242.65%20per%20mile.%0A%0AThe%20co-pilot%20takes%20an%20Uber%20from%20the%20airport%20to%20the%20hotel.The%20Uber%20driver%20charges%20%243%20per%20mile%20and%20gives%20a%20%245%20discount.%0A%0AWhen%20they%20get%20to%20the%20hotel%2C%20they%20compare%20receipts%20and%20notice%20they%20paid%20the%20same%20amount.%20Write%20an%20equation%20to%20find%20x%2C%20the%20number%20of%20miles%20from%20the%20airport%20to%20the%20hotel.&op=translate"
  },
  {
    Question: "<p>Erica and her sister paid the <button onclick='eq(10,4)'>same amount</button> for dance classes. Erica paid a <button onclick='eq(10,3)'>$123.95 registration fee</button> <button onclick='eq(10,2)'>and</button>  <button onclick='eq(10,0)'>$45</button>  <button onclick='eq(10,1)'>for each week</button> she was enrolled in the classes.<p>Erica's sister paid a <button onclick='eq(10,8)'>$45 registration fee</button> <button onclick='eq(10,7)'>and</button>  <button onclick='eq(10,5)'>$123.95</button>  <button onclick='eq(10,6)'>for each week</button> she was enrolled in the classes.",
   Equation: ['45', 'x', ' + ', ' 123.95', ' = ',' 123.95', 'x', ' + ', ' 45'],
   Translation:"https://translate.google.com/?sl=en&tl=es&text=Erica%20and%20her%20sister%20paid%20the%20same%20amount%20for%20dance%20classes.%20Erica%20paid%20a%20%24123.95%20registration%20fee%20and%20%2445%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.%0A%0AErica%27s%20sister%20paid%20a%20%2445%20registration%20fee%20and%20%24123.95%20for%20each%20week%20she%20was%20enrolled%20in%20the%20classes.&op=translate"
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
