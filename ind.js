function fun(){
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.getElementsByClassName("massage")[0].innerHTML=("Player 1 wins");
}
else if(randomNumber1<randomNumber2)
{
    document.getElementsByClassName("massage")[0].innerHTML=("Player 2 wins");
}
else
{
    document.getElementsByClassName("massage")[0].innerHTML=("Draw WTF!!!!!!!!!!");
}
}
function change ()
{
    let arr = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
    let a = arr.length
    colorName ="#";
    for(let i=0; i<6; i++)
    {
      let idx =(Math.floor(Math.random()* a));
      colorName+=arr[idx];
    }
    console.log(colorName);

  document.body.style.backgroundColor =colorName;
//   play.style.boxShadow =colorName;


}
let play=document.getElementById('refreshButton')
play.addEventListener("click", fun) ;
play.addEventListener("mouseover",change);

    