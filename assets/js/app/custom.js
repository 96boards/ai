$(document).ready(function () {
    $("button.nav.prev").css("opacity",".5");

    var
    	carousel = document.querySelector('.carousel'),
    	figure = carousel.querySelector('figure'),
    	nav = carousel.querySelector('nav'),
    	board_text = document.querySelector('#board-text'),
    	board_more_info = document.querySelector('#view-more-info'),
    	// numImages = figure.childElementCount,
    	numImages = 4,
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
      figure.id = currImage;
      // Ultra96
      if(figure.id == 0){
          board_text.innerHTML = "<h1 class='text-center'>Ultra96<h1>";
          board_more_info.href = "/products/ultra96/";
          $("button.nav.prev").css("opacity",".5");
          $("button.nav.next").css("opacity","1");
      }
      else if (figure.id == 1) {
        board_text.innerHTML = "<h1 class='text-center'>Sophon Edge<h1>";
        board_more_info.href = "/products/sophon-edge/";
        $("button.nav.prev").css("opacity","1");
        $("button.nav.next").css("opacity","1");
      }
      else if (figure.id == 2) {
          board_text.innerHTML = "<h1 class='text-center'>Rock960<h1>";
          board_more_info.href = "/products/rock960/";
          $("button.nav.prev").css("opacity","1");
          $("button.nav.next").css("opacity","1");
      }
      else if (figure.id == 3) {
          board_text.innerHTML = "<h1 class='text-center'>HiKey970<h1>";
          board_more_info.href = "/products/hikey970/";
          $("button.nav.next").css("opacity",".5");   
      }
    } 
});