let cb;
function setup() {
  // put setup code here
  createCanvas(800,600);
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