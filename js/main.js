// prova parallax
$(document).ready(function(){
     $('.parallax').parallax();
   });

   var canvas = document.getElementById('h5');
   var context = canvas.getContext('2d');

   context.beginPath();
   context.rect(90
                , 30, 406, 620);
   context.fillStyle = '#282828';
   context.fill();
   var canvas = document.getElementById('Canvas');
   var context = canvas.getContext('2d');

   context.beginPath();
   context.rect(90
                , -10, 400, 230);
   context.fillStyle = '#282828';
   context.fill();
