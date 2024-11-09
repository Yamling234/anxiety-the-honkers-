
/*let playButton;
let startButton;
let girlHappy;
let girlSad;
let girlWave;

function preload() {

    img1 = loadImage("orangegirl.jpg")
    imgPlaceHolder = loadImage("cat explode the only way is up copy.png")
    girlHappy=loadImage("happy.gif")
    girlSad = loadImage("sad.gif")
    girlWave = loadImage("wave.gif")
}


//p5.js reference from: https://editor.p5js.org/sara_almulla/sketches/LGDKZucEW

function setup() {
  createCanvas(1000,1000);
  background(100, 50, 50);
  
  startButton = createButton("START GAME");
  startButton.mousePressed(drawInstructions);
  startButton.position(207, 299);
  startButton.style("font-family", "Optima bold");
  startButton.style("font-size", "30px");
  startButton.style("background-color", color(23,13,70));
}

function drawInstructions() {
  background(237, 39, 36);
  startButton.remove();


  // INSTRUCTIONS TITLE
  fill(255);
  textSize(30); // (font name, font size)
  text("INSTRUCTIONS:", 20, 80);


  // INSTRUCTIONS BODY TEXT
  textSize (19);
  noStroke();
  text("A randomly generated scene will pop up", 22, 110);
  text("on the screen, and you need to find Waldo", 22, 130);
  text("amongst the crowd. Once you're sure", 22, 150);
  text("you've found him, click on his little body", 22, 170);
  text("and the game will reveal whether you've", 22, 190);
  text("succeeded or not.", 22, 210);
  text("For context, this is Waldo -->", 22, 250);


  // PLAY BUTTON
  let blue1 = color(0, 156, 219);
  playButton = createButton("PLAY");
  playButton.mousePressed(startGame);
  playButton.position(22, 285);
  playButton.style("font-family", "Optima bold");
  playButton.style("font-size", "30px");
  playButton.style("background-color", blue1);
}

function startGame() {
  playButton.remove();

}

*/






// code is based off a tutorial on youtube by Tech Head Online https://youtu.be/3pI3SQjfVyA?si=Ego6vKCTX7NWzI9g

//da title

let girlHappy;
let girlSad;
let girlWave;
let bg;

function preload() {

    img1 = loadImage("orangegirl.jpg")
    imgPlaceHolder = loadImage("cat explode the only way is up copy.png")
    girlHappy=loadImage("happy.gif")
    girlSad = loadImage("sad.gif")
    girlWave = loadImage("wave.gif")
    bg = loadImage("canva background03.png")
}

let title =["Lily's Adventures"]

let questionsLevel1 = [
    "Depression can be caused by external events. (true/false)",
    "Lily's grades do not meet her expectations, the best way to cope with it is to isolate herself. (true/false)",
    "Lily had just witnessed a traumatic event, should she keep this to herself? (yes/no)",
    "Lily often has arguments with her parents, should she, (A), ask reddit for advice or (B), share with a trusted friend (A/B)",
    "Lily just got rejected by her dream course. She allows herself to feel sad for a few days, is this a healthy way to cope? (yes/no)", 
    "Lily found out that her close friend had made hurtful remarks behind her back. Should she confront them? (yes/no)"

]
let answers1 = [

    "true","false","no", "B","yes","yes"

]

let answerBox;
let counter = 0;
let score = 0; 
let submitButton;


function setup() {
    createCanvas(1000, 1000);
    background(255);

    answerBox = createInput()
    answerBox.position(50,320)

    submitButton = createButton("submit answer")
    submitButton.size(150,30)
    submitButton.position(49,360)
    submitButton.mousePressed(submitAnswer)
}
function draw(){
    clear()
    background(bg)
     if (counter === 1) {
    img1 = image(girlWave, 600, 400, 200, 300);
     } 

    textSize(17);
    fill(255);
    text(score,50,250);
    if (counter < questionsLevel1.length)
    text(questionsLevel1[counter], 50, 300)

   
      if (score < 4 && score > 1) {
        img2 = image(girlSad, 600, 400, 200, 300);

     } else if (counter >= 2 && score === 0 || counter >=2 && score < 3) {
        img2 = image(girlSad, 600, 400, 200, 300);
     }
     else if (counter >= 2 && score >= 3){
        img3 = image(girlHappy, 600, 400, 200, 300)
     }

//rectangle
  fill(140,50,120, 159)
        rect(570,10, 420 ,250)
// instructions title
        textSize(19);
        noStroke();
        fill(255)
        text("Instructions", 590,50)
//instruvitonss
        fill(255)
        textSize (19);
        noStroke();
        text("In this game, Lily will guide you through ", 590, 110);
        text("a series of questions, each worth 1 point.", 590, 130);
        text("The options are written beside each question", 590, 150);
        text("in brackets. Write your answer in the", 590, 170);
        text("answer box and click submit. At the end,", 590, 190);
        text("Lily will share your total score. Have fun", 590, 210);
        text("and let's see how many points you can rack up!", 590, 230);

}

//alerts for answer submission,, p5.js reference: https://editor.p5js.org/enickles/sketches/2iqajlGso
function submitAnswer(){
    if (answerBox.value() == answers1[counter]) {
        score += 1;
        alert("Correct! Well done.");
    } else {
        alert("Incorrect.");
    }

    if (counter < questionsLevel1.length){
        counter += 1;   
    }
    if (counter === 1){
        window.alert("Lily's here!")
    }

     if  (counter < 4 && counter > 1) {
        window.alert("Oh no! Lily is crying D: Earn more points to make her feel better")

    } else if (counter >= 2 && score >= 5){
        window.alert("Lily's feeling a lot better now!")
     }

  

}


