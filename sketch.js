//Create variables here
var dog, dogHappy
var dogImage,dogHappyImg,foodS,foodStock
var fedTime,lastFed,milkImg

 function preload()
{
  //load images here
  
dogImage=loadImage("images/dog.png")

dogHappyImg=loadImage("images/dogImg1.png")

milkImg=loadImage("images/Milk.png")
}

function setup() {
  createCanvas(600, 600);
  
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
dog= createSprite(300,400,20,20)
dog.addImage(dogImage)
dog.scale=0.2

feed=createButton("feed the dog");
feed.position(700,95)
fedTime.mousePressed(feedDog)

addFodd=createButton("add food")
addFodd.position(800,95)
addFood.mousePressed(addFoods)

}


function draw() {  

  background("lightBlue")
  
 
    
fill (25,255,254);
textSize(15);
if(lastFed>12){
  text("last feed: "+ lastFed%12+"pm",350,30);
}else if(lastFed==0){
  text("last feed:12 AM",350,30);
}else{
  text("last feed: "+lastFed+ "AM",350,30);
}





food.display()



  
  drawSprites();
  //add styles here
  textSize(25)
  text("Press up arrow to feed dawg",160,100)
  
}

function readStock(data) {
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function writeStock(x) {
 
  if (x<+0) {
  x=0;
}else{
  x=x-2;
}

database.ref('/').update({
  Food:x })
}

function feedDog() {

  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:HTMLSourceElement()
  })
}

function addFoods(){

  foodS++;
  database.ref('/').update({
    Food:foodS})
  }