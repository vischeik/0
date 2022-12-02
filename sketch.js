var song;
var button;
var jumpButton;
var amp;
var t=0;

function setup(){
        createCanvas(200,200);
        song = loadSound('Blast Off.mp3',loaded);
        button = createButton('play')
        button.mousePressed(togglePlaying);
        jumpButton = createButton('jump')
        jumpButton.mousePressed(jumpSong);

        amp = new p5.Amplitude();

song.addCue(2,changeBackground,color(0,0,0));
song.addCue(4,changeBackground,color(255,255,255));
song.addCue(6,changeBackground,color(100,100,100));
}

function changeBackground(col) {
        background(col);
}

function jumpSong() {
         var len = song.duration();
         var t = 0;
         console.log(t);
         song.jump(t);
}

function togglePlaying(){
    if(!song.isPlaying()){
            song.play();
            song.setVolume(0.3);
            button.html('pause');
    }else{
    song.stop();
    button.html('play');
            }
    }

    function draw() {
        console.log(amp. getLevel());
        background(255, 255,255)
        noStroke();
        fill(80,80,80);
        ellipse(width/2,height/2,640,amp.getLevel()*5000);
        fill(255,255,255);
        ellipse(width/2, height/2, 640, amp.getLevel()*500);
    }

    function loaded() {
        console.log('loaded');
    }