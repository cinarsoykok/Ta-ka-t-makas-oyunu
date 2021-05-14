var playerName1 = prompt("Player 1:(Enter your name)");
var playerName2 = prompt("Player 2:(Enter your name)");

document.querySelector(".pl1").innerHTML = playerName1;
document.querySelector(".pl2").innerHTML = playerName2;

var randomNumber1 = Math.floor(Math.random()*3) + 1;
var randomImage = "img/" + randomNumber1 + ".jpg";
document.querySelector(".img1").setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random()*3) + 1;
var randomImage1 = "img/" + randomNumber2 + ".jpg";
document.querySelector(".img2").setAttribute("src", randomImage1);
/*function generateNumberandImg(count){
  for(var i=1; i<=count; i++){
      var randomNumber = Math.floor(Math.random()*3) + 1;
      var randomImage = "img/" + randomNumber + ".jpg";
      document.querySelector(`img${i}`).setAttribute("src", randomImage);
  }
}
generateNumberandImg(2);*/

if((randomNumber1 == 1 && randomNumber2 == 2) || (randomNumber1==3 && randomNumber2 == 1)|| (randomNumber1==2 && randomNumber2 == 3)){
    document.querySelector("h1").innerHTML = playerName2 + " wins";
}else if((randomNumber1 == 2 && randomNumber2 == 1 )|| (randomNumber1==1 && randomNumber2 == 3) ||(randomNumber1==3 && randomNumber2 == 2) ){
    document.querySelector("h1").innerHTML = playerName1 + " wins"; 
}else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML ="Draw!";
}
