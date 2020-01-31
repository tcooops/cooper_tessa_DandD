(() => {

  // set up the puzzle pieces and boards
  // navButtons -> images buttons at the bottom of the page
  let navButtons = document.querySelectAll(#buttonHolder img);

  // functions go here => what we wanht to have happen when our triggers fire
  function changeImageSet() {
    //change the thumbnail images on the left to match the button image and set a background image on the drop zone container
    debugger;
  }

  //a dd some event handling for the navButtons
  navButtons.forEach(button => button).addListenerEvent('click', changeImageSet));

})();
