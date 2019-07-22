let navBtns = {};

function createNavBtns() {
	navBtns.div = createDiv();
	navBtns.div.addClass('nav');
//Data
	navBtns.data = createButton('Data Structures');
	navBtns.data.mouseReleased(function(){goToPage("/Data-Structures/index.html")});
	navBtns.data.parent(navBtns.div);
//Sorting
	navBtns.sorting = createButton('Sorting Algorithms');
	navBtns.sorting.mouseReleased(function(){goToPage("/Sorting-Algorithms/index.html")});
	navBtns.sorting.parent(navBtns.div);
//Search
	navBtns.search = createButton('Search Algorithms');
	navBtns.search.mouseReleased(function(){goToPage("/Search-Algorithms/index.html")});
	navBtns.search.parent(navBtns.div);
//Daily
	navBtns.daily = createButton('Daily Coding Problems');
	navBtns.daily.mouseReleased(function(){goToPage("/Daily-Coding-Problems/index.html")});
	navBtns.daily.parent(navBtns.div);
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
	let c = select("#defaultCanvas0");
    c.style('transform', "translate("+xx+"px, "+yy+"px)scale("+x+"," + y + ")");
}