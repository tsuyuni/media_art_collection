var sketch = function(chu){

    let dropSound;
    let motions = [];

    chu.preload = function(){
        dropSound = chu.loadSound('../materials/chuson/sound.mp3');
        nozomi = chu.loadSound("../materials/chuson/nozomi.mp3");
    }

    chu.setup = function(){
        chu.createCanvas(chu.windowWidth, chu.windowHeight);
    }

    chu.draw = function(){
        chu.blendMode(chu.BLEND);
        chu.background(0, 10);
        chu.blendMode(chu.ADD);
        for (let i = 0; i < motions.length; i++) {
            motions[i].draw();
            if (motions[i].lifetime < 0) {
                motions.splice(i, 1);
            }
        }
    }

    chu.keyTyped = function(){
        if (chu.key == 'a') {
            motions.push(new MotionA());
            dropSound.play();
        }
        if (chu.key == 'b') {
            motions.push(new MotionB());

            nozomi.play();
        }
    }


    class MotionA {

        constructor() {

            this.positionX = chu.random(chu.width);
            this.positionY = chu.random(chu.height);
            this.size = chu.random(50);
            this.color = chu.color(chu.random(255), chu.random(255), chu.random(255),40);
            this.lifetime = 50;
        }

        draw() {
            this.size += 10;
            this.lifetime--;
            chu.noStroke();
            chu.fill(this.color);
            chu.ellipse(this.positionX, this.positionY, this.size);
        }
    }

    class MotionB {
        constructor() {
            this.positionX = chu.random(chu.width);
            this.positionY = chu.random(chu.height);
            this.size = chu.random(50);
            this.color = chu.color(chu.random(105), chu.random(55), chu.random(20),40);
            this.lifetime = 50;
        }

        draw() {

            this.size += 10;
            this.lifetime--;
            chu.strokeWeight(chu.random(255), chu.random(255), chu.random(255),255)
            chu.stroke(chu.random(255), chu.random(255), chu.random(255),255)
            chu.fill(this.color);
            chu.ellipse(this.positionX, this.positionY, this.size);
        }
    }
}

new p5(sketch, "canvas");