var sketch = function(tsuri){

    let angle = 6;
    let backImage;

    tsuri.preload = function(){
        backImage = tsuri.loadImage("../materials/tsuribito/218488.jpg");
    }

    tsuri.setup = function(){
        tsuri.createCanvas(tsuri.windowWidth, tsuri.windowHeight);
        tsuri.angleMode(tsuri.DEGREES);
        tsuri.background(248,220,216);
    }

    tsuri.draw = function(){
        tsuri.image(backImage, tsuri.windowWidth/2 - tsuri.windowHeight/2, 0, tsuri.windowHeight, tsuri.windowHeight);
        tsuri.tint(255,255,255,10);
       
        angle++;
     
        tsuri.translate(tsuri.width / 2, tsuri.height / 2);
       
       
        tsuri.rotate(angle);
        tsuri.fill(250,100,0,100)
        tsuri.ellipse(0,0,20);
        tsuri.stroke(250, 100, 0, 100);
        tsuri.strokeWeight(5);
        tsuri.line(0, 0, 0, 180);

        let positionX = tsuri.random(20,160);
        let positionY = tsuri.random(20,50);
        tsuri.noStroke();
        tsuri.fill(200);
        tsuri.ellipse(positionX,positionY,5);
      
    }  
}

new p5(sketch, "canvas");









