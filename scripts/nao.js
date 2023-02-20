var sketch = function(nao){

    let angle = 18;

    nao.setup= function(){
        nao.createCanvas(nao.windowWidth, nao.windowHeight);
        nao.angleMode(nao.DEGREES);
    }

    nao.draw = function(){

        nao.background(10, 600, 400, 1);
        angle+=1;

        nao.push();
        nao.translate(nao.width / 4, nao.height / 4);
        nao.rotate(angle);
        nao.stroke(3,50,100);
        nao.strokeWeight(30);
        nao.line(1500, 300,10, 10);
        nao.fill(40, 0, 100);
        nao.ellipse(10, 3,90);
        nao.pop();
    
        nao.push();
        nao.translate(nao.width / 4 * 3, nao.height / 4 * 3);
        nao.rotate(angle + 100);
        nao.stroke(3,50,10);
        nao.strokeWeight(30);
        nao.line(1500, 300,10, 1);
        nao.fill(4, 20, 10);
        nao.ellipse(10, 30,90);
        nao.pop();
    }
}

new p5(sketch, "canvas");