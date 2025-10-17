import { player , initPlayer , drawPlayer} from "./player.js";
import { spawnEnemy , enemies } from "./enemies.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
spawnEnemy(canvas);

const bullets = [];
const BULLETS_SPEED = -10;
function tryShoot() {
    bullets.push({
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
        width: 5,
        height: 5,
        vy: BULLETS_SPEED,
    })
}

window.addEventListener("keydown",(e) => {
    if(e.key === "ArrowLeft"){
        if(player.x >10){
        player.x -= 10;
        }
    }else if(e.key === "ArrowRight"){
        if (player.x < canvas.width - player.width -10){
         player.x += 10;
        }
    }else if(e.key === "ArrowUp"){
        if (player.y >10){
         player.y -= 10;
        }
    } else if(e.key === "ArrowDown"){
        if (player.y < canvas.height - player.height -10){
         player.y += 10;
        }
    }else if(e.code === "Space"){
        tryShoot();
    }
 });

 function update() {
    for (let i =  0; i <bullets.length; i++) {//弾
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    if(bullet.y < 0) {
        bullets.splice(i,1);
    }
}
 }
function draw() {
    ctx.fillStyle = "#000000ff";//背景
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    drawPlayer(ctx);
}
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();