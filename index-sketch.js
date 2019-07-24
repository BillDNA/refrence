let cb;
function setup() {
  // put setup code here
  let c = createCanvas(800,600);
  c.parent(select('#canvas-container'));
  createNavBtns();
  cb = new CodeBlock(
  	{
  		code: [
  			{txt:'let vel = {x:0,y:0};'},
  			{txt:'let loc = {x:400,y:300};'}
  			]
  	});
  setupVars();
  windowResized();
}
//The Code
let vel = {x:0,y:0};
let loc = {x:400,y:300};
function setupVars() {
  vel = {
  	x:random(-1,1) * 10,
  	y:random(-1,1) * 10
  };
  loc = {x:400,y:300};	
}

function draw() {
  // put drawing code here
  background("#0A0");
  fill(color("#f00"));
  rect(loc.x,loc.y,50,50);
  loc.x += vel.x;
  loc.y += vel.y;
  if(loc.y < 0 || loc.y > 550) {
  	vel.y = vel.y * -1;
  }
  if(loc.x < 0 || loc.x > 750) {
  	vel.x = vel.x * -1;
  }
}
