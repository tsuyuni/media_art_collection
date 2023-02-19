var sketch = function(p){

    let positionX;
    let positionY;
    let velocityX;
    let velocityY;
    let a;
    let b;
    let boxSize = 150; 

    p.preload = function(){

        a = p.loadSound("../materials/boss/a.mp3");
        b = p.loadSound("../materials/boss/b.mp3");

    }

    p.setup = function(){

        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    
        positionX = p.width / 2;
        positionY = p.height / 2;
        velocityX = 3.33333333333333333333;
        velocityY = 2.22222222222222222222;
    
    }

    p.draw = function(){

        p.background(0);
        p.ambientLight(60);
        p.pointLight(255,255,0, -250, 0, 250);
        p.pointLight(0, 255, 0, 250, 0, 250);
        p.pointLight(0, 255, 255, 250, 0, -250);
        p.pointLight(255,0,255, -250, 0, -250);
        p.pointLight(255,0,0, 240, 0, 240);
        p.pointLight(0,0,255, 240, 0, -240);
        p.pointLight(255, 0, 0, -240, 0, -240);
        p.specularMaterial(250);
    
        positionX += velocityX;
    
        if (positionX > p.width / 2 || positionX < - p.width / 2) {
            velocityX *= -1;
        }
    
        positionY += velocityY;
    
        if (positionY > p.height / 2 || positionY < -p.height / 2) {
            velocityY *= -1;
        }
    
        p.translate(positionX, positionY);
        p.rotateX(p.frameCount * 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
        p.rotateY(p.frameCount * 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
    
    
        p.box(boxSize);
        p.noStroke();
    
        if (boxSize > 150){
            boxSize -= 5;
        }
    
        if (boxSize < 150){
            boxSize += 5;
        }
    
    }

    p.keyPressed = function(){

        if (p.keyCode == 81){
    
            b.play();
    
            if (boxSize > 100) {
    
                boxSize -= 100;
    
            } else {
    
                boxSize = 0;
    
            }
        }
    
        if (p.keyCode == 80){
    
            a.play();
            boxSize += 100;
    
        }
    }

}


new p5(sketch,"canvas-2");