var img1 = Math.floor(Math.random() * 6+1);
var img2 = Math.floor(Math.random() * 6+1);


var srcImg1 = 'images/dice'+img1+'.png'
var srcImg2 = 'images/dice'+img2+'.png'

document.querySelector('.dice .img1').setAttribute('src', srcImg1);
document.querySelector('.dice .img2').setAttribute('src', srcImg2);
 function whoWin(pleyer1, player2) {
    if( pleyer1> player2) {
        document.querySelector('h1').innerHTML = ' 🚩Pleyer 1 Win!'
    } else if (player2>pleyer1){
        document.querySelector('h1').innerHTML = 'Pleyer 2 Win! 🚩'

    } else{
        document.querySelector('h1').innerHTML = 'Draw!'
    }
 }
 whoWin(img1, img2);