// Store the items array with a global scope.
var items = [];
// This takes and array of items and creates the neccessary page elements
function createPageElements(items) {
  var page_elements = [];
  $.each(items, function (key, val) {
    // Create a new element for resource
    var page_element = '<div class="item board_item text-center">';
    page_element +=
      '<div class="board_image" style="background-image: url(' +
      val.image +
      ');"></div>';
    page_element += "<h4>" + val.title + "</h4>";
    page_element += "<p>" + val.summary + "</p>";
    page_element +=
      '<a class="btn btn-primary" href="' + val.url + '">View Board</a>';
    page_element += '<a class="btn btn-secondary" href="/boards/">View All</a>';
    page_element += "</div>";
    page_elements.push(page_element);
  });
  return page_elements;
}
// This takes and array of items and creates the neccessary page elements
function createGridElements(items) {
  var page_elements = [];
  $.each(items, function (key, val) {
    // Create a new element for resource
    // Create a new element for resource
    var page_element = "<div class='col col-12 col-sm-6 col-lg-4 mb-3 d-flex'>";
    page_element += '<div class="card h-100">';
    page_element +=
      '<img class="card-img-top lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="' +
      val.image +
      '" alt="Card image cap">';
    page_element += '<div class="card-body">';
    page_element += '<h5 class="card-title">' + val.title + "</h5>";
    page_element += "<p class='card-text'>" + val.summary + "</p>";
    page_element += "</div>";
    page_element += "<div class='card-footer'>";
    page_element +=
      '<a target="_blank" href="' +
      val.url +
      '" class="m-2 btn btn-primary">View Board</a></div>';
    page_element += "</div>";
    page_element += "</div>";
    page_elements.push(page_element);
  });
  return page_elements;
}
// Get the JSON Data
$(document).ready(function () {
  if ($("#ai_boards_slider").length > 0 || $("#ai_boards_grid").length > 0) {
    var ai_boards_json_url =
      "https://www.96boards.org/assets/json/ai_boards.json";
    $.getJSON(ai_boards_json_url, function (data) {
      items = data;
    });
  }
});
// Display boards once the ajaxStop event is fired
$(document).ajaxStop(function () {
  // If the ai_boards_slider id exists - add carousel elements.
  if ($("#ai_boards_slider").length > 0) {
    var page_elements = createPageElements(items);
    $("#ai_boards_slider").html(page_elements);
    // instantiate owl carousel
    var ai_boards_carousel = $("#ai_boards_slider");
    ai_boards_carousel.owlCarousel({
      items: 4,
      loop: false,
      dots: false,
      nav: true,
      margin: 10,
      autoplay: true,
      rewind: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
  // If the ai_boards_grid id exists - add grid elements.
  if ($("#ai_boards_grid").length > 0) {
    var page_elements = createGridElements(items);
    $("#ai_boards_grid").html(page_elements);
  }
});
