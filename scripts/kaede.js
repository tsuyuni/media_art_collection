var sketch = function(kaede){

    let dropSound;
    let motions = [];

    kaede.preload = function(){
        // 雪のサウンド
        dropSound = kaede.loadSound('../materials/kaede/yuki.mp3');
    }

    kaede.setup = function(){
        // キャンバスをつくる
        kaede.createCanvas(kaede.windowWidth, kaede.windowHeight);
    }

    kaede.draw = function(){

        kaede.background(0, 20);
      
        for (let i = 0; i < motions.length; i++) {
          // 表示する
          motions[i].draw();
      
          // 表示時間が0になったら
          if (motions[i].lifetime < 0) {
            // 配列から消す
            motions.splice(i, 1);
          }
        }
    }

    kaede.draw = function(){

        kaede.background(0, 20);
      
        // 配列の長さだけ処理する
        for (let i = 0; i < motions.length; i++) {
          // 表示する
          motions[i].draw();
      
          // 表示時間が0になったら
          if (motions[i].lifetime < 0) {
            // 配列から消す
            motions.splice(i, 1);
          }
        }
    }

    kaede.keyTyped = function(){
        // aを入力したら
        if (kaede.key == 'a') {
          // クラス「MotionA」を配列に追加する
          motions.push(new MotionA());
      
          // サウンドを再生する
          dropSound.play();
        }
    }

    class MotionA {
        // 初期化
        constructor() {
          // 円の位置
          this.positionX = kaede.random(kaede.width);
          this.positionY = kaede.random(kaede.height);
      
          // 円の大きさ
          this.size = kaede.random(150);
      
          // 円の色
          this.color = kaede.color(150, kaede.random(250), 250, 150);
      
          // 円が表示される時間
          this.lifetime = 100;
        }
      
        // 表示
        draw() {
          // 円を大きくする
          this.size += 10;
      
          // 表示される時間をへらす
          this.lifetime--;
      
          // 輪郭（りんかく）を消す
          kaede.noFill();
      
          // ぬりつぶす
          kaede.stroke(this.color);
      
          // 円を描く
          kaede.ellipse(this.positionX, this.positionY, this.size);
        }
      }

}

new p5(sketch,"canvas-1");