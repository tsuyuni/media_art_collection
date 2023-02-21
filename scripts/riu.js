var sketch = function(riu){

    let dropSound;
    let motions = [];

    riu.preload = function(){
        dropSound = riu.loadSound('../materials/riu/rain.mp3');
    }

    riu.setup = function(){
        riu.createCanvas(riu.windowWidth, riu.windowHeight);
    }

    riu.draw = function(){
        riu.background(119, 136,153);
        for (let i = 0; i < motions.length; i++) {
            motions[i].draw();
      
            if (motions[i].lifetime < 0) {
                motions.splice(i, 1);
            }
        }
    }

    riu.keyTyped = function(){
        if (riu.key == 'a') {
          motions.push(new MotionA());
        //   dropSound.stop();
          dropSound.play();
        }
    }

    class MotionA {

        constructor() {
            this.positionX = riu.random(riu.width);
            this.positionY = riu.random(riu.height);
            this.size = riu.random(20);
            this.color = riu.color(135+riu.random(-20, 20), 206+riu.random(-20, 20), 250+riu.random(-20, 20), 200);
            this.lifetime = 10;
        }
      
        draw(){
            this.size += 5;
            this.lifetime--;
            riu.stroke(119,136,155)
            riu.fill(this.color,10);
            riu.ellipse(this.positionX, this.positionY, this.size);
        }
    }
}

new p5(sketch, "canvas");