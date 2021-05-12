
var cvs=document.getElementById('canvas');
var ctx=cvs.getContext('2d');

//resim yükleme
var igne= new Image();
var balon=new Image();
var balon1=new Image();
var balon3=new Image();
igne.src="igne.png";
balon3.src="balon3.png";
balon.src="balon.png";
balon1.src="balon1.png";
var score=0;
igneX=100;
igneY=100;

//anahtarlar
document.addEventListener("keydown",yukari);
function yukari() {
  igneY -=25; 
  return igneY;
}
document.addEventListener("keydown",asagi);
function asagi() {
  igneY += 25; 
  return igneY;
}
document.addEventListener("keydown",sol);
function sol() {
  igneX -= 25; 
  return igneX;
}
document.addEventListener("keydown",sag);
function sag() {
  igneX += 25; 
  return igneX;
}

//ses dosyası ekleme
var balonses=new Audio(); 
balonses.src="balonses.mp3";

var gravity=0.1;

var balonlar=[];
balonlar[0]={
  x:cvs.width,
  y:0
  }
var balonlar1=[];
balonlar1[0]={
  x:cvs.width-150,
  y:50
}
var balonlar3=[];
balonlar3[0]={
  x:cvs.width,
  y:150
}

//resimleri çizme
function draw() {
ctx.drawImage(igne,igneX,igneY,75,55);
igneY += gravity;

var i;
  for(i=0;i<balonlar.length;i++){  
   balonlar[i].x--;
  if(balonlar[i].x == 600){
    balonlar.push({
      x:cvs.width,
      y:Math.floor(Math.random()*balon.height)
    });
  }
  ctx.drawImage(balon,balonlar[i].x,balonlar[i].y,70,100);

  if(igneX+ igne.width == balonlar[i].x &&
   igneY+igne.height == balonlar[i].y){
    score++;
    balonses.play();
    ctx.fillStyle="black";
    ctx.font="100 px Times New Roman";
    ctx.fillText("Score:" + score,50,cvs.height-45);
   }
}
  for(i=0;i<balonlar1.length;i++){
    ctx.drawImage(balon1,balonlar1[i].x,balonlar1[i].y,75,85);
    
   balonlar1[i].x--;
  if(balonlar1[i].x == 300){
    balonlar1.push({
      x:cvs.width,
      y:Math.floor(Math.random()*balon1.height)
    });
  }
    if( igneX+igne.width >= balonlar1[i].x && igneY+ igne.height >= balonlar1[i].y ) {
    ctx.fillStyle="black";
    ctx.font="100 px Times New Roman";
    ctx.fillText("Score:" + score,50,cvs.height-45);
   }
}

for(i=0;i<balonlar3.length;i++){
  ctx.drawImage(balon3,balonlar3[i].x,balonlar3[i].y,70,105);
  
 balonlar3[i].x--;
if(balonlar3[i].x == 1000){
  balonlar3.push({
    x:cvs.width,
    y:Math.floor(Math.random()*balon3.height)
  });
}  
    if(igneX+ igne.width >= balonlar3[i].x && igneY+ igne.height >= balonlar3[i].y) {
    
    ctx.fillStyle="black";
    ctx.font="100 px Times New Roman";
    ctx.fillText("Score:" + score,50,cvs.height-45);
   }
}

requestAnimationFrame(draw);
}
draw();