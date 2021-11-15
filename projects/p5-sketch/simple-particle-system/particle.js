class Particle {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.vx = random(-1,1);
        this.vy = random(-5,-1);
        this.alpha = 255;
    }

    show() {
        noStroke();
        fill(226, 88, 34, this.alpha);
        ellipse(this.x, this.y, 16);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 2;
    }

    visible() {
        return this.alpha < 0;
    }


}