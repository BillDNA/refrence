let settings = {
	width: 800,
	height: 600,
	colors: {
		background: undefined,//color('#000'),
		element: undefined,//color('#0f0')
		unsorted: undefined,
		lastSwap: undefined,
		sorted: undefined,
		lookingAt: undefined,
	},
	stepsPerFrame: 10,
}

let array = [];
let currentSortingAlgorithm = undefined;
let isSorted = false;

let createNewArray = function() {
	currentSortingAlgorithm = undefined;
	isSorted = false;
	array = [];
	for(let i = 0; i < settings.width; i++) {
		array.push(random());
	}
}
let bubbleSort = {
	i: undefined,
	j: undefined,
	lastSwapI: undefined,
	lastSwapJ: undefined,
	start: function() {
		bubbleSort.i = array.length-1;
		bubbleSort.j = 1;
		currentSortingAlgorithm = bubbleSort;
	},
	step: function() {
		let j = bubbleSort.j;
		let i = bubbleSort.i;
		if(array[j-1] > array[j]) {
			let temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			bubbleSort.lastSwapI = j-1;
			bubbleSort.lastSwapJ = j;
		}
		j++;
		if(j > i) {
			i--;
			j = 1;
			if(i < 0) {
				currentSortingAlgorithm = undefined;
				isSorted = true;
			}
		}
		bubbleSort.j = j;
		bubbleSort.i = i;
	},
	lineColor: function(index) {
		if(bubbleSort.lastSwapI !== undefined && (index == bubbleSort.lastSwapI || index == bubbleSort.lastSwapJ)) {
			return settings.colors.lastSwap;
		}
		if(index > bubbleSort.i) {
			return settings.colors.sorted;	
		}
		return settings.colors.unsorted;
	}
}

let selectionSort = {
	minIdx: undefined,
	i: undefined,
	j: undefined,
	lastSwapIndex: undefined,
	start: function() {
		selectionSort.i = 0;
		selectionSort.j = 1;
		selectionSort.minIdx = 0;
		currentSortingAlgorithm = selectionSort;
	},
	step: function() {
		let j = selectionSort.j;
		let i = selectionSort.i;
		let minIdx = selectionSort.minIdx;
		if(array[j] < array[minIdx]) {
			minIdx = j;
		}
		j++;
		if(j >= array.length) {
			temp = array[i];
			array[i] = array[minIdx];
			array[minIdx] = temp;
			i++;
			j = i+1;
			selectionSort.lastSwapIndex = minIdx;
		}
		if(i >= array.length) {
			currentSortingAlgorithm = undefined;
			isSorted = true;
		}
		selectionSort.i = i;
		selectionSort.j = j;
		selectionSort.minIdx = minIdx;
	},
	lineColor: function(index) {
		if(index < selectionSort.i-1) {
			return settings.colors.sorted;
		}
		if(index === selectionSort.minIdx || index ===  selectionSort.j) {
			return settings.colors.lookingAt;
		}
		if(index === selectionSort.i-1 || index === selectionSort.lastSwapIndex) {
			return settings.colors.lastSwap;
		}
		return settings.colors.unsorted;
	}	
}
let insetionSort = {
	i: undefined,
	j: undefined,
	el: undefined,
	lastSwapI: undefined,
	start: function() {
		currentSortingAlgorithm = insetionSort;
		insetionSort.i = 1;
		insetionSort.el = array[i];
		insetionSort.j = 1;
	},
	step: function() {
		let j = insetionSort.j;
		let i = insetionSort.i;
		let el = insetionSort.el;

		if(j>0 && array[j-1]>el) {
			array[j] = array[j-1];
			j--;
		} else {
			array[j] = el;
			insetionSort.lastSwapI = j;
			i++;
			el = array[i];
			j = i;
			if( i >= array.length) {
				currentSortingAlgorithm = undefined;
				isSorted = true;
			}
		}
		insetionSort.i = i;
		insetionSort.j = j;
		insetionSort.el = el;
	},
	lineColor: function(index) {
		if(index === insetionSort.lastSwapI) {
			return settings.colors.lastSwap;
		}
		if(index === insetionSort.j) {
			return settings.colors.lookingAt;
		}
		if(index < insetionSort.i) {
			return settings.colors.sorted;
		}
		return settings.colors.unsorted;
	}
}
let mergeSort = {
	left: undefined,
	right: undefined,
	l: undefined,
	r: undefined,
	stack: undefined,
	stackI: undefined,
	start: function() {
		currentSortingAlgorithm = mergeSort;
		isSorted = false;
		mergeSort.stack = [{isSorted:false, si: 0, ei:array.length-1}];
		mergeSort.stackI = 0;
	},
	step: function() {
		console.log('looking at '+mergeSort.stackI+' / '+mergeSort.stack.length);
		if(mergeSort.stack[mergeSort.stackI].isSorted) {

			if(mergeSort.stackI+1 >= mergeSort.stack.length) {
				currentSortingAlgorithm = undefined;
				return;
			}
			if(mergeSort.stack[mergeSort.stackI+1].isSorted) {
				currentSortingAlgorithm = undefined;
			} else {
				mergeSort.stackI++;
			}
			/*mergeSort.stackI++;
			if(mergeSort.stackI >= mergeSort.stack.length) {
				if(mergeSort.stack.length === 1) {
					currentSortingAlgorithm = undefined;
					isSorted = true;
				} else {
					//start merching the sorted stacks

				}
			}*/
		} else { //splitting out the recusive nature of merge sort so it will be animatable
			let stackData = mergeSort.stack[mergeSort.stackI]
			let stackLength = stackData.ei - stackData.si
			if(stackLength > 0) { //split and push a stack
				let mid = Math.floor(stackLength / 2);
				let left = {isSorted:false, si: stackData.si, ei:stackData.si+mid};
				let right = {isSorted:false, si: stackData.si+mid+1, ei:stackData.ei};
				//now remove the to big unsorted stack and replace with these two 
				mergeSort.stack.splice(mergeSort.stackI,1);
				mergeSort.stack.push(left);
				mergeSort.stack.push(right);
			} else { // call the emelent sorted cuase there is only 1 entry
				mergeSort.stack[mergeSort.stackI].isSorted = true;
			}
		}

	},
	merge: function(left,right) {

	},
	lineColor: function() {
		return settings.colors.unsorted;
	}
}

let speedSlider;
function setup() {
	settings.colors.background = color('#000');
	settings.colors.sorted = color('#0f0');
	settings.colors.lastSwap = color('#f00');
	settings.colors.unsorted = color('#0a0');
	settings.colors.lookingAt = color('#ff0');
  	// put setup code here
  	createCanvas(settings.width,settings.height);
  	background(settings.colors.background);
  	createNewArray();


  	createElement('br');
  	speedSlider = createSlider(1,settings.width,settings.stepsPerFrame);
  	
  	createElement('br');

  	let bubbleSortBtn = createElement('button', 'Bubble Sort');
  	bubbleSortBtn.mouseClicked(bubbleSort.start)

  	createElement('br');
  	let selectionSortBtn = createElement('button', 'Selection Sort');
  	selectionSortBtn.mouseClicked(selectionSort.start);

  	createElement('br');
  	let insetionSortBtn = createElement('button', 'Insertion Sort');
  	insetionSortBtn.mouseClicked(insetionSort.start);
}

function draw() {
	settings.stepsPerFrame = speedSlider.value();
	background(settings.colors.background)
  	stroke(settings.colors.unsorted);
	if(isSorted) {
  		stroke(settings.colors.sorted);
	}
  	strokeWeight(1);
  	for(let i = 0; i < array.length; i++) {
  		if(currentSortingAlgorithm !== undefined) {

  			stroke(currentSortingAlgorithm.lineColor(i));
  		}
  		line(i,settings.height,i,settings.height-array[i]*settings.height);
  	}
  	if(currentSortingAlgorithm !== undefined) {
  		for(let i = 0; i < settings.stepsPerFrame; i++) {
  			if(currentSortingAlgorithm !== undefined) {
  				currentSortingAlgorithm.step();
  			}
  		}
  	}
}
