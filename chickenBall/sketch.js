var finx = 300;
var finy = 200;
var array = [];

//OBJECT CHICKEN
class Chicken{
  constructor(px,py,pr,pxvel,pyvel, pinitial){
    this.x = px;
    this.y = py;
    this.r = pr;
    this.xvel = pxvel;
    this.yvel = pyvel;
    this.initial = pinitial;
  }
  
  //checks if mouse is within distance of the dimensions of the chicken
  contains(mx, my){
    return dist(mx, my, this.x, this.y) < this.r + 50;
  }
  
  //invisible hitbox of chicken that moves it around
  display(mx,my){
    //if ball touches edge horizontally
    if(this.initial){
      this.xvel = random(-5,5);
      this.yvel = random(-5,5);
      this.initial = false;
    }
    
 if(this.x > width){
    this.xvel = random(-2,-3);
  }
  if(this.x < 10){
    this.xvel = random(2,3); 
  }

  this.x += this.xvel;
  finx = this.x;

  //if ball touches edge vertically
  if(this.y  > height){
    this.yvel = random(-2,-3);
  }
  if(this.y < 10){
    this.yvel = random(2,3);
  }

  this.y += this.yvel;
  finy = this.y;
    
  }
  
  returnXcord(){
    return this.x;
  }
  returnYcord(){
    return this.y; 
  }
  setXvel(px){
   this.xvel = px; 
  }
  setYvel(py){
     this.yvel = py;
  }
  
}

//OBJECT BUTTON
class Button{
  constructor(px, py,pr){
    this.x = px;
    this.y = py;
    this.r = pr;
  }
  
  //checks if mouse is within distance of the dimensions of the chicken
  contains(mx, my){
    return dist(mx, my, 50,50) < this.r;
  }
  
  //displays circular button on top left of screen
  display(mx,my){
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r, this.r);
  }
}






let chic, img, img2,but, sound, count;

//loads clucking sound
function preload(){
  sound = loadSound('cluck.ogg');
}

//sets up all images and creates button and chicken object
function setup(){
  createCanvas(600,400);
  img = loadImage('barn.png');
  img2 = loadImage('chicken.png');
  //chic = new Chicken(xcord,ycord,50);
  //pushes initial chicken into array
  array.push(new Chicken(300,200,50,0,0,true));
  but = new Button(50,50,50);
  count = 1;
}

//if mouse presses button
function mousePressed(){
  var k;
  for(k = 0;k < array.length; k++){
      if(array[k].contains(mouseX, mouseY)){
       array[k].setXvel( random(-25,25));
       array[k].setYvel( random(-25,25));
       xvel = random(-25,25);
       sound.play();
      }
  }
  if(but.contains(mouseX,mouseY)){
      array.push(new Chicken(300,200,50,0,0,true));
      count += 1;
      print(count + " chickens");
  }
}

//draws all the stuff on the screen
function draw(){
  image(img,0,0,600,400);
  var k;
  for(k = 0;k < array.length; k++){
  array[k].display(mouseX,mouseY);
  image(img2, array[k].returnXcord() - 35,array[k].returnYcord() - 30,60,60);
    image(img2, this.x - 35,this.y - 30,60,60);
  }
  but.display(mouseX,mouseY);
}