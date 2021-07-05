let myListItem = document.getElementById('liid');
myListItem.onclick = function(){
myListItem.textContent = "Welcome";
}
let myButton = document.querySelector('button');
myButton.onclick = function(){
alert('This message if from web browser.')
}
let myImg = document.querySelector('.myimage');

myImg.onclick = function(){
      let myImgSrc =  myImg.getAttribute('src');
      if(myImgSrc === "bgd.jpg"){
      myImg.setAttribute('src','life.jpg');}
      else{
      myImg.setAttribute('src','bgd.jpg');
      }
}