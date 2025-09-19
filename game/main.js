document.getElementById("shirushi").innerText = "これはゲームです!!!!!";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");



// width="480" height="640"
let x =255;
let tama =
window.addEventListener("keydown",(e) => {
    if(e.key === "ArrowLeft"){
        x -= 10;
    }else if(e.key === "ArrowRight"){
        x += 10;
    }else if(e.key === "space"){
        tama += 1;
    }
});

let y1 =0;
let y2 =-150;
function gameLoop() {
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "blue";
ctx.fillRect(x,480,30,30);
ctx.fillStyle = "red";
ctx.fillRect(150,y1,30,30);
y1 +=5;
ctx.fillStyle = "red";
ctx.fillRect(300,y2,30,30);
y2 +=5;
requestAnimationFrame(gameLoop);
}

gameLoop();