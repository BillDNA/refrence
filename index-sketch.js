let cb;
let b;
function setup() {
  // put setup code here
  let c = createCanvas(800,600);
  c.parent(select('#canvas-container'));
  createNavBtns();
  cb = new CodeBlock(
  {
  	code: [
  	{txt:'let vel = {x:0,y:0};'},
  	{txt:'let loc = {x:400,y:300};'},
  	{txt:'function setup() {'},
  	{txt:'\tvel = {\n\t\tx:random(-1,1) * 10,\n\t\ty:random(-1,1) * 10\n\t};'},
  	{txt:'\tloc = {x:400,y:300};'},
  	{txt:'}'},

  	]
  });
  setupVars();
  windowResized();

  //<pre data-src="plugins/toolbar/prism-toolbar.js" data-label="Hello World!"></pre>
  


  Prism.plugins.toolbar.registerButton('pause-play', {
		text: 'Pause', // required
		onClick: function (env) { // optional
			isPlaying = !isPlaying;
		}
	});

  b = Prism.plugins.toolbar.registerButton('select-code', function(env) {
  	var button = document.createElement('button');
  	button.innerHTML = 'Select Code';

  	button.addEventListener('click', function () {
	// Source: http://stackoverflow.com/a/11128179/2757940
	if (document.body.createTextRange) { // ms
		var range = document.body.createTextRange();
		range.moveToElementText(env.element);
		range.select();
	} else if (window.getSelection) { // moz, opera, webkit
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(env.element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
});

  	return button;
  });


  cb.pre.attribute('data-line', '3,5');
  Prism.highlightElement(cb.code.elt);
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
