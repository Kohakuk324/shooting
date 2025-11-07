export const enemies = [];
const SIZE = 26;
const enemyImage = new Image();
enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPEnaTjO3Bhl_nUapYh7CYQCGcvNFv0KIDbWOPhdQSg-Cz4zh1nHBfxVoTwt-sN2NdeV6sRggpFUgwxWxhILZnT0Dc2N2d3eBz-urwwzpPwdYkfN29HqzmaTAN9DCVdXWbhrz7h870_SYf/s1600/fantasy_game_character_slime.png";
function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 5) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImage, e.x, e.y, e.width, e.height);
  }
}
