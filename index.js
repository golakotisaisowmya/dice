var randomNumber1=Math.random()*6;

randomNumber1=Math.floor(randomNumber1)+1;

var randomImage1="dice"+randomNumber1+".png";
// var imageSource1="images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
var randomNumber2=Math.random()*6;

randomNumber2=Math.floor(randomNumber2)+1;
var randomImage2="dice"+randomNumber2+".png";
// var imageSource2="images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "🚩player1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML= "player2 wins!🚩";
}


else {
  document.querySelector("h1").innerHTML= "Draw!";
}
