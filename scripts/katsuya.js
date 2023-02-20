var sketch = function(katsu){

    let dropSound;
    let motions = [];

    katsu.preload = function(){
        dropSound = katsu.loadSound('../materials/katsuya/ぴちょん単発.mp3');
    }

    katsu.setup = function(){
        katsu.createCanvas(katsu.windowWidth, katsu.windowHeight);
    }

    katsu.draw = function(){
        katsu.background(0, 10);
        for (let i = 0; i < motions.length; i++) {
            motions[i].draw();
            if (motions[i].lifetime < 0) {
                motions.splice(i, 1);
            }
        }
    }

    katsu.keyTyped = function(){
        if (katsu.key == 'a') {
            motions.push(new MotionA());
            dropSound.play();
        }
    }

    class MotionA {
        constructor() {
        
            this.positionX = katsu.random(katsu.width);
            this.positionY = katsu.random(katsu.height);
            this.size = katsu.random(100);
            this.color = katsu.color(0, katsu.random(255), 255, 200);
            this.lifetime = 100;
        }
    
        draw() {
            this.size += 10;
            this.lifetime--;
            katsu.noStroke();
            katsu.fill(this.color);
            katsu.ellipse(this.positionX, this.positionY, this.size);
        }
    }
    
}

new p5(sketch, "canvas");