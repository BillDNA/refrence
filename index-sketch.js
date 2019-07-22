let cb;
let c ;
function setup() {
  // put setup code here
  c = createCanvas(800,600);
  c.parent(select('#canvas-container'));
  createNavBtns();
  cb = new CodeBlock();
}

function draw() {
  // put drawing code here
  background("#0A0");
}

let goToPage = function(path) {
	location.href=path;
}
function windowResized() {
	let x = (windowWidth * 0.4375) / 800;
	let xx = -((1-x)*800)/2;
	let h = windowHeight - 50; //TODO fix to correct number when css nav btns
	let y = (h * 0.45) / 600;
	let yy = -((1-y)*600)/2;
	console.log(y + ' vs ' + yy);
    c.style('transform', "translate("+xx+"px, "+yy+"px)scale("+x+"," + y + ")");
}