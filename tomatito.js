const tomatitoSprite = new Image();
tomatitoSprite.src = 'toma.png'


class Tomatito {
 constructor(){
  this.x = 150;
  this.y = 200;
  this.vy = 0;
  this.ogWidth = 941;
  this.ogHeight = 680
  this.width = this.ogWidth/10
  this.height = this.ogHeight/10
  this.weight = 1;
 }
 update(){
  let curve = Math.sin(angle) * 15;
  if (this.y > canvas.height - (this.height * 2) + curve){
      this.y = canvas.height - (this.height * 2) + curve;
      this.vy = 0;
  } else {
      this.vy += this.weight;
      this.vy *= 0.9
      this.y += this.vy;
  }
  if (this.y < 0+ this.height  ){
   this.y = 0 + this.height 
   this.vy = 0;
  }
  if (spacePressed && this.y > this.height  * 1.1) this.run();
 
 }
 draw(){
  ctx.fillStyle = 'red';
  ctx.drawImage(tomatitoSprite, 0, 0, this.ogWidth, this.ogHeight, this.x - 6, this.y - 85, this.width * 3, this.height *3)
 }
 run(){
  this.vy -= 2;
 }
}

const tomatito = new Tomatito();