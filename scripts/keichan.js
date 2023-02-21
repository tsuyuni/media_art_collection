var sketch = function(kei){

    let sound;
    let fft;
    let spectrum;

    kei.preload = function(){
        sound = kei.loadSound('../materials/keichan/bgmSound.mp3');
    }


    kei.setup = function(){
        kei.createCanvas(kei.windowWidth, kei.windowHeight);
        fft = new p5.FFT(0.8, 32);
        kei.noStroke();
    }

    kei.draw = function(){
        kei.blendMode(kei.BLEND);
        kei.background(255, 215, 0);
        kei.blendMode(kei.OVERLAY); 
        spectrum = fft.analyze();
        let rectWidth = kei.width / spectrum.length;
        kei.noFill();
        kei.stroke(153, 50, 204);
        kei.strokeWeight(17);
        for (let i = 0; i < spectrum.length; i++) {
            let radius = spectrum[i] / 2
            kei.ellipse(kei.width/2-240*kei.cos(kei.PI/3*i + kei.frameCount/40), kei.height/2-100*kei.sin(kei.PI/9*i), 2 * radius);
        }
    }

    kei.mouseClicked = function(){

        if(sound.isPlaying()) {
            sound.pause();
        } else {
            sound.loop();
        }
    }
}

new p5(sketch, "canvas");