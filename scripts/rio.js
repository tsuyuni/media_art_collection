var sketch = function(rio){

    let hueValue = 0;

    rio.setup =function(){
        rio.createCanvas(rio.windowWidth, rio.windowHeight);
        rio.colorMode(rio.HSB, 360, 100, 100, 100);
    }

    rio.draw = function(){
        rio.background(hueValue, 100, 100);
        hueValue++;
        if(hueValue > 360) {
            hueValue = 0;
        }
    }
}

new p5(sketch, "canvas");