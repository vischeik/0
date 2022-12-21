var song1;
var song2;
var button;
var button2;
var button3;
var button4;
var amp;

var SliderA;
var SliderG;
var SliderS;


//셋업 구간
function preload() {
  song1 = loadSound("Blast Off.mp3");
  song2 = loadSound("Dreams.mp3");
}

function setup() {
  createCanvas(640, 480);
  background(51);

  var CTime1 = map(song1.currentTime(),0,song1.duration(),0,100);


  amp = new p5.Amplitude();

  button = createButton("play");
  button.mousePressed(togglePlaying1);
  button.position(505,425);

  button2 = createButton("Music1");
  button2.mousePressed(togglePlaying2);
  button2.position(505,455);

  button3 = createButton("Jump");
  button3. mousePressed(togglePlaying3);
  button3.position(580,395);

  button4 = createButton("reset");
  button4. mousePressed(togglePlaying4);
  button4.position(505,395);


  SliderA= createSlider(0,1,0.5,0.01);
  SliderA.position(500,245);

  SliderG= createSlider(1,5,0);
  SliderG.position(500,345);

  SliderS= createSlider(0.25,2,1,0.25);
  SliderS.position(500,295);

  music = 1;
  song1.setVolume(0,5);


}

function draw() {


  var Dur1=song1.duration();
  var Dur2=song2.duration();
  var GSliderP=SliderG.value();
  var SSliderP=SliderS.value();
  var ASliderP=SliderA.value();

  var CTime1 = map(song1.currentTime(),0,song1.duration(),0,100);
  var CTime2 = map(song2.currentTime(),0,song2.duration(),0,100);
  var CTime1L= map(CTime1,0,100,0,480);
  var CTime1C= map(CTime1,0,100,0,255);
  var CTime2L= map(CTime2,0,100,0,255);
  var round= map(SSliderP,0.25,2,0,20);
  


  song1.setVolume(SliderA.value());
  song2.setVolume(SliderA.value());

  let Speed = map(SliderS.value(),0.25,2,0.25,2);
  Speed = constrain(Speed,0.25,2)
  song1.rate(Speed);
  song2.rate(Speed);


  background(0,0,10);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  noStroke();
  colorMode(HSB);

  fill(0,0,20);
  rect(480,0,160,480)
  fill(200, 30, 100);
  rectMode(RADIUS);
  rect(width / 2 -60, height / 2, diam, diam, round);
  rectMode(CORNER);

  textSize(15);
  text('볼륨',495,225);
  text('속도',495,275);
  text('구간점프',495,325);

 
  fill(255);
  textSize(10);
  text(ASliderP,610,275);
  text(SSliderP,610,325);
  text('1',500,370);
  text('2',528.75,370);
  text('3',557.5,370);
  text('4',586.25,370);
  text('5',615,370);


  fill(200, 100, 100);
  rect(0,475,CTime1L,5);
  fill(60, 100, 100);
  rect(0,465,CTime2L,5);


  
}

function togglePlaying1() {
  if (music === 1) {
    if (!song1.isPlaying()) {
      song1.setVolume(0.3);
      song1.rate(1);
      song1.play();
      song2.pause();
      button.html("pause");


     

    } else {
      song1.pause();
      button.html("play");

    }
  }

  if (music === 2) {
    if (!song2.isPlaying()) {
      song2.setVolume(0.3);
      song2.rate(1);
      song2.play();
      song1.pause();
      button.html("pause");
    

    } else {
      song2.pause();
      button.html("play");
    }
  }
}

function togglePlaying2() {
  if (music === 1) {
    music = 2;
    button2.html("Music2");
    song1.pause();
    button.html("play");
    
  } else {
    music = 1;
    button2.html("Music1");
    song2.pause();
    button.html("play");
  }
}

function togglePlaying3(){
  jumpv1=map(SliderG.value(),0,6,0,216);
  song1.jump(jumpv1);

  jumpv2=map(SliderG.value(),0,6,0,253);
  song2.jump(jumpv2);


}

function togglePlaying4(){

  song1.jump(0);
  song2.jump(0);
}
