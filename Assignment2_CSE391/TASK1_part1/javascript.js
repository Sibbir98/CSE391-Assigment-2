var qoutes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela ',
    'The way to get started is to quit talking and begin doing. -Walt Disney',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    'Life is what happens when you are busy making other plans -John Lennon'

   
]


    var randomNumber = Math.floor(Math.random() * (qoutes.length));
    document.getElementById('Display').innerHTML = qoutes[randomNumber];


document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.getElementById('Display').style.color= 'gray'; 
  document.getElementById('Display').style.border= 'thick solid gray'; 
  
}

function switchWhite() {
document.getElementById('Display').style.color= 'white'; 
document.getElementById('Display').style.border= 'thick solid black'; 
 }

function switchBlue() {
  document.getElementById('Display').style.color= 'blue'; 
  document.getElementById('Display').style.border= 'thick solid blue'; 
}

function switchYellow() {
  document.getElementById('Display').style.color= 'yellow'; 
  document.getElementById('Display').style.border= 'thick solid yellow'; 
}