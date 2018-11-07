$(document).ready(function () {
    $("button.nav.prev").css("opacity",".5");

    var
    	carousel = document.querySelector('.carousel'),
    	figure = carousel.querySelector('figure'),
    	nav = carousel.querySelector('nav'),
    	board_text = document.querySelector('#board-text'),
    	board_more_info = document.querySelector('#view-more-info'),
    	numImages = figure.childElementCount,
    	theta =  2 * Math.PI / numImages,
      currImage = 0;
      
    // Add the event listener for clicking on the carousel navigation buttons
    nav.addEventListener('click', onClick, true);

    // This function spins the carousel upon clicking the navigation buttons
    function onClick(e) {
      e.stopPropagation();
      
    	var t = e.target;
    	if (t.tagName.toUpperCase() != 'BUTTON')
    		return;
    	if (t.classList.contains('next')) {
        if(currImage < (numImages - 1)){
            currImage++;
        }
    	}
      else if(t.classList.contains('prev')){
          if(currImage <= (numImages - 1) && currImage >= 1){
              currImage--;
          }
      }
      figure.style.transform = `rotateY(${currImage * -theta}rad)`;
      // Ultra96
      if(currImage == 0){
          $("button.nav.prev").css("opacity",".5");
          $("button.nav.next").css("opacity","1");
      }
      else if (currImage == numImages) {
          $("button.nav.next").css("opacity",".5");   
      }
      else{
        $("button.nav.prev").css("opacity","1");
        $("button.nav.next").css("opacity","1");
      }
      var current_slide_query_selector = "#" + currImage + 1;
      var slide_url = $(current_slide_query_selector).attr("data-url");
      var slide_text = $(current_slide_query_selector).attr("alt");

      board_text.innerHTML = "<h1 class='text-center'>" + slide_text + "<h1>";
      board_more_info.href = slide_url;
    } 
});