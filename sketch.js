let depressedgirl;

function setup()
{
    createCanvas(1000,1000);
    
}



function preload(){
    depressedgirl = loadImage("orangegirl.jpg");

}

function draw()
{



   
    
    background(162,30,240);
    fill(255,0,0);
    image(depressedgirl , 490 , 190);

    

    stroke(0);
    strokeWeight(10);
    fill(255,234,0);
    rect(310,330,300,100);

    fill(0,255,0);
    textSize(20);
    text("START GAME" , 395 , 385 );

    stroke(0);
    strokeWeight(15);
    fill(255,0,0);
    textSize(60);
    text("MENTAL HEALTH QUIZ" , 140 , 140);

 noLoop();
    

    

}

function mouseClicked()
{

  const quizData = [
    // Level 1: 
    {  
      question: "You accidentally tripped and fell while walking to class.",
      options: ["Go home and cry to sleep", "Jump down a building", "Stay calm and apologise to the person", "Walk away"],
      answer: "Stay calm and apologise to the person"
    },
    
    {
      question: "Your grades did not meet your expectations.",
      options: ["It's the end of the world", "Know there's always another pathway for you", "Self-doubting your entire existence", "Isolate yourself"],
      answer: "Know there's always another pathway for you"
    },
    {
      question: "You have just witnessed a traumatic event.",
      options: ["Keep it to yourself", "Use an unhealthy coping mechanism", "Act like nothing has happened", "Share with a trusted adult"],
      answer: "Share with a trusted adult"
    },
  
    // Level 2: 
    {
      question: "You often have arguments with your parents.",
      options: ["Tell a friend about it", "Share with your school counsellor", "Ask Gooflw for advice", "Confront your parents during the heated argument"],
      answer: "Share with your school counsellor"
    },
    {
      question: "You just joined a new school and you have no friends",
      options: ["Mind your own business", "Try and make small talk with your peers", "Wait until the right time to make friends", "Wait for an extrovert to adopt you"],
      answer: "Try and make small talk with your peers"
    },
    {
      question: "You just got rejected by your dream course.",
      options: ["Sit on the chair and stare into blank space", "Allow yourself to be sad for a few days and continue life again", "Distract yourself by keeping busy", "Hurt yourself"],
      answer: "Allow yourself to be sad for a few days and continue life again"
    },
  
    // Level 3  
    {
      question: "You just embarrassed yourself in public.",
      options: ["Look out the window", "Ignore it", "Tell someone about it", "Listen to sad music"],
      answer: "Tell someone about it"
    },
    {
      question: "You have just witnessed a traumatic event.",
      options: ["Allow yourself to be sad for a day and then continue with life", "Everything happened for a reason and say it's part of life", "Be more in control so as to avoid it from happening again", "Get it off your chest by telling a trusted adult"],
      answer: "Get it off your chest by telling a trusted adult"
    },
    {
      question: "Someone you trusted said negative remarks about your body behind your back.",
      options: ["Stay silent", "Rethink what they said and improve yourself", "Take it as constructive criticism", "Confront the person about their hurtful comments"],
      answer: "Confront the person about their hurtful comments"
    },

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function setup() {
    createCanvas(1000, 1000);
    textAlign(CENTER, CENTER);
    textSize(15);
    showQuestion();
  }
  
  function showQuestion() {
    background(150,80,100);
    const question = quizData[currentQuestion];
    text(question.question, width / 2, 50);
    
    // options 
    for (let i = 0; i < question.options.length; i++) {
      const option = question.options[i];
      const optionY = 100 + i * 60;
      
      fill(200);
      rect(350, optionY, 300, 50, 10);
      
      fill(0);
      text(option, width / 2, optionY + 25);
    }
  }
  
  function mousePressed() {
    const question = quizData[currentQuestion];
    
    // if the click is inside the option button
    for (let i = 0; i < question.options.length; i++) {
      const optionY = 100 + i * 60;
      
      if (mouseX > 250, mouseX < 400, mouseY > optionY, mouseY < optionY + 50) {
        const selectedOption = question.options[i];
        if (selectedOption === question.answer) {
          score++;
        }
        currentQuestion++;
        
        // Show next question or results
        if (currentQuestion < quizData.length) {
          showQuestion();
        } else {
          showResult();
        }
        break;
      }
    }
  }
  
  function showResult() {
    background(255);
    fill(0);
    textSize(32);
    text("Quiz Completed!", width / 2, height / 2 - 40);
    textSize(24);
    text(`Your score: ${score}/${quizData.length}`, width / 2, height / 2 + 40);
  }
}