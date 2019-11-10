



 var field = document.querySelector('div');
 var player = document.querySelector('#player');
 var stopmove = document.querySelector('#stop-moving');

 function movingPlayer(event) {

 player.style.top = event.clientY + "px";
player.style.left = event.clientX + "px";

 }


 field.addEventListener("click", movingPlayer);



 function stopMoving() {
     player.style.top = "0px";
    player.style.left = "0px";
      field.removeEventListener("click", movingPlayer);
    
 }
     stopmove.addEventListener('click', stopMoving);
