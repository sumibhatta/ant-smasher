//create a ball object
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//starting position of ball
// let xb = canvas.width / 2;
// let yb = canvas.height / 2;



//make ball object
function Ball(radius, x, y) {
    this.radius = radius; //ball radius
    this.x = x; // x-pos
    this.y = y; //y-pos
    //random velocity of balls
    //(pixel per second) make it fps
    let xv = Math.floor(Math.random() * 25 + 100) / FRAMES;
    let yv = Math.floor(Math.random() * 25 + 100) / FRAMES;
    if (Math.floor(Math.random() * 2) == 0) {
        xv = -xv;
    }
    if (Math.floor(Math.random() * 2) == 0) {
        yv = -yv;
    }

    this.draw = function () {
        let img = document.getElementById('ant');
		c.drawImage(img, this.x, this.y,100, 100);
        
        // c.beginPath();
        // c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        // c.fillStyle = '#fff';
        // c.fill();
        // c.closePath();
    }
    this.update = function () {
        this.draw();
        this.x += xv;
        this.y += yv;
        //  if ((this.x +this.radius) >= canvas.width){this.x -= this.x}
        //  if ((this.y +this.radius) >= canvas.height){this.y -= this.y}
        if (this.x - this.radius < 0 && xv < 0) { xv = -xv }
        if (this.x + this.radius > canvas.width && xv > 0) { xv = -xv }
        if (this.y - this.radius < 0 && yv < 0) { yv = -yv }
        if (this.y + this.radius > canvas.height && yv > 0) { yv = -yv }
    }

    

    this.detectCollision = function(i) {
    for (let j = 0; j < ants.length; j++) {
      if (j != i) {
        let dx = Math.abs(ants[i].x - ants[j].x);
        // console.log('distx',dx)
        let dy = Math.abs(ants[i].y - ants[j].y);
        // console.log('disty',dy)
        let sumOfRadius = RADIUS+RADIUS;
        let length = Math.sqrt(dx**2 + dy**2);
        
        if(dx**2+dy**2<= sumOfRadius**2){
            // console.log('collided')
            if(length<sumOfRadius+2){
                xv =-xv;
                yv = -yv;
                this.x +=xv;
                this.y +=yv;
            }
            
        }
      }
    }
  };

};


//Initalze 
// let circle1, circle2;
// let ants = [];
function init() {
    for (let i = 0; i < NUMBEROFANTS; i++) {
        let ant = new Ball(RADIUS, Math.random()*1000, Math.random()*1000)
        ants.push(ant)
    }
    // console.log(ants)
}


//animate here 
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach(a => {
        a.update();
        for (let i = 0; i < ants.length; i++) {
            ants[i].detectCollision(i)    
    }
    });
    // collisonResolution(circle1, circle2)
}

init();
animate();
// canvas.addEventListener('click', smash)
//collision detection and resolution

//collision detection 
// function collisionDetection(c1, c2){
//     let dx = c1.x - c2.x;
//     let dy = c1.y - c2.y;
//     let sumOfRadius = c1.radius +c2.radius;
//     // console.log(sumOfRadius)
//     if((dx**2+dy**2)<= sumOfRadius**2){
//         // console.log('collided')
//         return true;
//     }
//     return false;
// };



//collision resolution
// function collisonResolution(c1, c2){

//     let dx = c1.x - c2.x;
//     let dy = c1.y - c2.y;
//     let sumOfRadius = c1.radius +c2.radius;
//     if((dx**2+dy**2)<= sumOfRadius**2){
//         let lengthBetweenTwo = Math.sqrt(dx**2 +dy**2);
//         console.log(lengthBetweenTwo)
//         if (lengthBetweenTwo <= c1.radius) {
//             if (dx <= c1.radius) {
//               c1.xv = -c1.xv;
//               c2.xv = -c2.xv;
//               c1.x += c1.xv;
//             }
//             if (dy <= c1.radius) {
//                 c1.yv = -c1.yv;
//                 c2.yv = -c2.yv;
//                 c1.y += c1.yv;
//             }
//           }

//     }

// }





