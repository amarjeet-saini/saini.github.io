let particles = [];

let nums = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // let p = new Particle(300,380);
  // particles.push(p);
}

function draw() {
  background(0);
  let p = new Particle(windowWidth/2,windowHeight-30);
  particles.push(p);
  for (let i = particles.length - 1; i > 0; i--) {
    if (particles[i].visible()) {
      particles.splice(i,1);
    }
    particles[i].update();
    particles[i].show();  
  }
}
