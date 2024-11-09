let playButton;
let startButton;
let girlHappy;
let girlSad;
let girlWave;
let currentState = 0;



function preload() {

    img1 = loadImage("orangegirl.jpg")
    imgPlaceHolder = loadImage("cat explode the only way is up copy.png")
    girlHappy=loadImage("happy.gif")
    girlSad = loadImage("sad.gif")
    girlWave = loadImage("wave.gif")
}

function setup(){
    createCanvas(1000,1000)
    if (currentState == 0) {
        startButton = createButton("START GAME");
  startButton.mousePressed(drawInstructions);
  startButton.position(207, 299);
  startButton.style("font-family", "Optima bold");
  startButton.style("font-size", "30px");
  startButton.style("background-color", color(23,13,70));
}




}


function drawInstructions() {
if (currentState == 1) {
  background(237, 39, 36);
  startButton.remove();
  currentState += 1 


  // INSTRUCTIONS TITLE
  fill(255);
  textSize(50);
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

}

function startGame(){
  playButton.remove();
  currentState === 2
}


function keyPressed(){
    currentState = currentState + 1
}

