var sketch = function(shin){

    let sound;
    let fft;
    let spectrum;

    shin.preload = function(){
        sound = shin.loadSound('../materials/shingo/bgmSound.mp3');
    }

    shin.setup = function(){
        shin.createCanvas(shin.windowWidth, shin.windowHeight);
        fft = new p5.FFT(0.8, 16);
    }

    shin.draw = function(){

        shin.background(140);
        spectrum = fft.analyze();
        shin.fill(0,10,20,30);
        shin.stroke(255, 255, 255 );
        for (let i = 0; i < spectrum.length; i++) {
            shin.rect(shin.windowWidth/2-shin.windowHeight*2/5,shin.windowHeight/10,spectrum[i]/300*shin.windowHeight,spectrum[i]/300*shin.windowHeight);
        }
    }

    shin.mouseClicked = function(){
        if(sound.isPlaying()) {
            sound.pause();
        } else {
            sound.loop();
        }
    }

}

new p5(sketch, "canvas");