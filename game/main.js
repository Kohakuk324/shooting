const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {//自機
    x: canvas.width / 2 - 15,
    y: canvas.height - 60,
    width: 30,
    height: 30,
    color: "#0000ff"
};

const bullets = [];//弾
const BULLETS_SPEED = -10;
function tryShoot() {
    bullets.push({
        x: player.x+13,
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
    ctx.fillStyle = "black";//背景
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle = player.color;//自機
    ctx.fillRect(player.x,player.y,player.width,player.height);
    
    ctx.fillStyle = "white";//弾
    for (let i =  0 ; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();