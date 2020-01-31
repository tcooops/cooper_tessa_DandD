(() => {
	// set up the puzzle pieces and boards
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		puzzleBoard = document.querySelector('.puzzle-board'),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img');

	//store the image names here 
	// the [] signifies an array
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		//change the thumbnail image on the left to match the button image

		//index comes with a "forEach"... it's just part of it. You have to index your names
		pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg` )

		//and set a background image on the drop zone container
		//debugger;

		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`
		//aboive is referring to a variable inside a string itself. Thats the $ and curly brackets.
		//the dollar sign is a "JavaScript Expression"
		// do something, change the property, make something update on the page.
	}

// add some event heading for the new buttons
navButtons.forEach(button => button.addEventListener('click', changeImageSet));

})();
