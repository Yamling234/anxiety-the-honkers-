


//variables for three gifs
let girlHappy;
let girlSad;
let girlWave;

//FADE IN TEXT
var fade;
var fadeAmount = 5

function preload(){
   //set up gif:
   //use loadImage
   girlWave = loadImage("wave.gif");
   girlHappy = loadImage("happy.gif");
   girlSad = loadImage("sad.gif");
}
    
function setup(){    
createCanvas(800,800);

// position images using center coordinates.
  imageMode(CENTER);

//FADE IN TEXT
  textSize(50)
  fade = 1
}

function draw()
{
background(255);

//display animations
image(girlWave,200,300,300,380);
image(girlSad,400,300,300,380)
image(girlHappy,600,300,300,380)

//FADE IN TEXT
fill(255, 0, 0, fade)
text("Go!", 100,100)
if (fade<0) fadeAmount=10; 
 
if (fade>255) fadeAmount=-10; 
 
fade += fadeAmount; 
print(fade)
}