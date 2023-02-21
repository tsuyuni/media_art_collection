var sketch = function(saya){

    let words = [
        'orange',
        'tana☆',
        'ワイ',
        'Apple'
    ];
      
    let colorList = [
        [255, 0, 100],
        [0, 200, 200],
        [0, 0, 80],
        [255, 255, 255]
    ];
      
    saya.setup = function(){
        saya.createCanvas(saya.windowWidth, saya.windowHeight);
        saya.background(240);
    }
      
    saya.draw = function(){
        saya.fill(colorList[saya.floor(saya.random(colorList.length))]);
        saya.textFont('Chewy');
        saya.textSize(saya.random(50));
        saya.textAlign(saya.CENTER, saya.CENTER);
        saya.text(words[saya.floor(saya.random(words.length))], saya.random(saya.width), saya.random(saya.height));
    }

}

new p5(sketch, "canvas");