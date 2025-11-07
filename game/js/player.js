const playerImage = new Image();
playerImage.src = "https://tse3.mm.bing.net/th/id/OIP.tnBqc0lJThp8iev-KnJGigHaHF?rs=1&pid=ImgDetMain&o=7&rm=3";

export const player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    color: "blue",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player",player);
}

export function drawPlayer(ctx) {
    ctx.fillStyle = player.color; 
    ctx.drawImage( playerImage, player.x,player.y,player.width,player.height);

}