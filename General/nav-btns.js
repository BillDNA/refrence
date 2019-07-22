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