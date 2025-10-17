export const enemies = [];
const SIZE=26;

function pushEnemies(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5;

    enemies.push({x, y, width: w, height: h, vy});
}

export function spawnEnemy(canvas) {
    if (enemies.length < 5) {
        spawnEnemy(canvas);
    }
}

 export function updateEnemies(canvas) {
     for (let i = enemies.length-1; i >= 0; i--) {
        const e = enemies[i];
         e.y += e.vy;
         if (e.y > canvas.height) {
             enemies.splice(i, 1);
         }
     }
 }

     ctx.fillStyle = "#ffffffff";//弾
    for (let i =  0 ; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
 export function drawEnemies(ctx) {
     ctx.fillStyle = "#ff0000ff";
     for (const e of enemies) {
         ctx.fillRect(e.x, e.y, e.width, e.height);
     }
 }
