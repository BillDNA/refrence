let cb;
function setup() {
  // put setup code here
  let c = createCanvas(800,600);
  c.parent(select('#canvas-container'));
  createNavBtns();
  cb = new CodeBlock();
}

function draw() {
  // put drawing code here
  background("#0A0");
}
