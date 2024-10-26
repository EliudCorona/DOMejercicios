const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d');




//Cuerpo
ctx.fillStyle = 'white';
ctx.roundRect(200, 200, 200, 100, [0,0,50,50]);
ctx.fill();

//Cabeza
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.roundRect(145, 60, 300, 150, [100,100, 20, 20]);
ctx.fill();


//marca Cabeza
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.roundRect(235, 80, 100, 100, [50, 50, 30, 30]);
ctx.fill();
ctx.beginPath();
ctx.roundRect(350, 140, 60, 60, [10, 10, 20, 20]);
ctx.fill();
ctx.beginPath();
ctx.roundRect(155, 130, 50, 60, [10, 10, 20, 20]);
ctx.fill();
ctx.beginPath();
ctx.roundRect(350, 80, 30, 30, [10, 10, 20, 20]);
ctx.fill();
ctx.beginPath();
ctx.roundRect(175, 80, 30, 30, [20, 10, 10, 10]);
ctx.fill();




//Ojos
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(250, 200, 20, 40, 10);
ctx.fill();
ctx.beginPath();
ctx.roundRect(320, 200, 20, 40, 10);
ctx.fill();



//sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.roundRect(500, 20, 70, 70, 30);
ctx.fill(); 

//Tierra
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.roundRect( 0, 300, 600, 300, [0,0,50,50]);
ctx.fill();
