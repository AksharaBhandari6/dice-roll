let n = (Math.random() * 6) + 1;
n = Math.floor(n);

let m = (Math.random() * 6) + 1;
m = Math.floor(m);

let x = "./images/dice" + n +".png";
let y = "./images/dice" + m +".png";

const imgs =  document.querySelectorAll('img');


imgs[0].setAttribute('src',x);
imgs[1].setAttribute('src',y);


let heading = document.querySelector('h1');

if (n > m){
    heading.innerHTML = "Player 1 Wins!"
}
else if (m > n){
    heading.innerHTML = "Player 2 Wins!"
}
else if(m === n){
    heading.innerHTML = "Draw!"
}