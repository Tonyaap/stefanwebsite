let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fotostefankniest.png') {
      myImage.setAttribute('src','images/fototwee.png');
    } else {
      myImage.setAttribute('src','images/fotostefankniest.png');
    }
}


         