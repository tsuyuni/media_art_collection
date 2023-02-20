var sketch = function(tana){

    let positionX = [];
    let positionY = [];
    let velocityY = [];
    let circleSize = [];
    let colorIndex =[];
    let sound1;
    let sound2;

    let colorList = [
        [200, 0, 100],
        [0, 270, 220],
        [200,800 , 100],
    ];

    tana.preload = function(){
        sound1 = tana.loadSound('../materials/tanahashi/681.mp3');
        sound2 = tana.loadSound('../materials/tanahashi/485.mp3');
    }

    tana.setup = function(){
        tana.createCanvas(tana.windowWidth, tana.windowHeight);
        for(let i = 0; i < 30; i++) {
            positionX[i] = tana.random(tana.width);
            positionY[i] = tana.random(tana.height);
            velocityY[i] = tana.random(3, 10);
            circleSize[i] = tana.random(10, 80);
            colorIndex[i] = tana.floor(tana.random(colorList.length));
        }
    }

    tana.draw = function(){
    
        tana.background(0, 10, 40);
        for(let i = 0; i < 30; i++) {

            positionY[i] -= velocityY[i];
            tana.stroke(colorList[colorIndex[i]]);
            tana.strokeWeight(20);
            tana.ellipse(positionX[i], positionY[i], circleSize[i]);
            if (positionY[i] < - circleSize[i]) {
                positionY[i] = tana.height + circleSize[i];
            }
        }
    }

    tana.keyPressed = function(){
        if(tana.keyCode == 65){
            sound1.play();
        } else if (tana.keyCode == 83){
            sound2.play();
        }
    }
}

new p5(sketch, "canvas");