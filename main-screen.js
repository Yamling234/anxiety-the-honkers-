// to frankenstein once main quiz is done
// states reference https://editor.p5js.org/mbardin/sketches/lSYhg5Xr

let playButton;
let startButton;


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
}

