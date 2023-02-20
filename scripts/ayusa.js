var sketch = function(ayu){

    let words = [
        'MINASE IORI♡',
        '☆',
        'IDOLM＠STER',
    ];
      
    let colorList = [
        [255, 0, 100],
        [255, 0, 100],
        [0, 0, 80],
        [255, 255, 255]
    ];
      
    ayu.setup = function(){
        ayu.createCanvas(ayu.windowWidth, ayu.windowHeight);
        ayu.background(240);
    }
      
    ayu.draw = function(){
        ayu.fill(colorList[ayu.floor(ayu.random(colorList.length))]);
        ayu.textFont('Chewy');
        ayu.textSize(ayu.random(50));
        ayu.textAlign(ayu.CENTER, ayu.CENTER);
        ayu.text(words[ayu.floor(ayu.random(words.length))], ayu.random(ayu.width), ayu.random(ayu.height));
    }    
}

new p5(sketch, "canvas");