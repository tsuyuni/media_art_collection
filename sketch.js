let circleX;
let circleY = 300;

let sketch = function(main){

    main.setup = function() {
        main.createCanvas(main.windowWidth, main.windowHeight);
        circleX = main.windowWidth*4/5;
        main.drawingContext.shadowOffsetX = 0;
        main.drawingContext.shadowOffsetY = 0;
        main.drawingContext.shadowBlur = 20;
    }
      
    main.draw = function() {
    
    main.background(9,14,31,90);
    main.noFill();
    main.strokeCap(main.SQUARE);
    main.translate(circleX, circleY);
    main.scale(3);
    
    main.push();
    main.stroke("#25bcff");
    main.drawingContext.shadowColor = "#25bcff";
    main.rotate(main.frameCount / 8);
    main.strokeWeight(3);
    main.strokeCap(main.ROUND);
    main.arc(0,0,20,20,0,main.PI*3/2);
    main.pop();
    
    main.push();
    main.stroke("#25bcff");
    main.drawingContext.shadowColor = "#25bcff";
    // rotate(PI * sin(frameCount / 60));
    main.strokeWeight(12);
    for (let i=0; i<48; i++){
        main.push();
        if (i % 16 < 2){
            main.noStroke();
        }
        main.arc(0,0,60,60,i*main.PI/24, i*main.PI/24+main.PI/60);
        main.pop();
    }
    main.pop();
    
    main.push();
    main.stroke("#25bcff");
    main.drawingContext.shadowColor = "#25bcff";
    main.rotate(main.PI * main.sin(main.frameCount / 60));
    main.strokeWeight(12);
    for (let i=0; i<6; i++){
        main.arc(0,0,95,95,i*main.PI/3, i*main.PI/3+main.PI/5);
    }
    main.pop();
    
    main.push();
    main.stroke("#25bcff");
    main.drawingContext.shadowColor = "#25bcff";
    main.rotate(-main.PI * main.sin(main.frameCount / 60));
    main.strokeWeight(2);
    for (let i=0; i<3; i++){
        main.arc(0,0,120,120,i*main.PI/1.5, i*main.PI/1.5+main.PI/3);
    }
    main.pop();
    
    main.push();
    main.stroke("#c30010");
    main.drawingContext.shadowColor = "#c30010";
    main.rotate(-main.PI/2);
    main.strokeWeight(6);  
    for (let i=0; i<72; i++){
        if (i > (main.frameCount/60)%72){
            main.noStroke();
        }
        main.arc(0,0,135,135,i*main.PI/36, i*main.PI/36+main.PI/48);
    }
    main.pop();
    
    }

}

new p5(sketch, "bg")

