var sketch = function(hiro){

    let positionX;
    let positionY;

    hiro.setup = function(){
        hiro.createCanvas(hiro.windowWidth, hiro.windowHeight);
        hiro.background(0, 0, 40);
        positionX = hiro.width / 2;
        positionY = hiro.height / 2;
    }

    hiro.draw = function(){
        hiro.fill(hiro.random(255), hiro.random(255), 255);
        hiro.ellipse(positionX, positionY, 15);
        let randomNumber = hiro.floor(hiro.random(4));
        if (randomNumber == 0) {
            positionX += 15;
        }
        else if (randomNumber == 1) {
            positionX -= 15;
        }
        else if (randomNumber == 2) {
            positionY += 15;
        }
        else if (randomNumber == 3) {
            positionY -= 15;
        }
    }

}

new p5(sketch, "canvas");