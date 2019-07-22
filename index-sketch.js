let navBtns = {};


function setup() {
  // put setup code here
  createCanvas(800,600);
  navBtns.data = createButton('Data Structures');

  navBtns.sorting = createButton('Sorting Algorithms');
  navBtns.sorting.mouseReleased(goToPage);
  navBtns.search = createButton('Search Algorithms');
  navBtns.daily = createButton('Daily Coding Problems');
}

function draw() {
  // put drawing code here
  background("#0A0");
}

let goToPage = function(path) {
	console.log('here');
	//location.href='http://google.com';
}