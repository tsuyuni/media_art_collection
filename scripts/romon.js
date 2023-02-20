var sketch = function(rom){

    let angle = 0;

    rom.setup = function(){
        rom.createCanvas(rom.windowWidth, rom.windowHeight);
        rom.angleMode(rom.DEGREES);
    }

    rom.draw = function(){
        rom.background(0, 6, 40, 5);
        angle+= 10;
        rom.translate(rom.width / 2, rom.height / 2);
        rom.rotate(angle);
        rom.stroke(3333, 90, 150);
        rom.strokeWeight(9);
        rom.line(0, 0, 0, 200);
        rom.fill(255, 0, 150);
        rom.ellipse(60, 0, 30);
    }
}

new p5(sketch, "canvas");