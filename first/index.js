const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); 

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor(position)
    {
        this.position.position;

        this.width = 30;
        this.height = 150;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Sprite({
    x :0,
    y :0,
})
const Enemy = new Sprite({
    x :400,
    y :100,
})

console.log(player);

Enemy.draw();
player.draw();
