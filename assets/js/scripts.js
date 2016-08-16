// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

    // Mobile menu toggle
    (function($) {
      var toggle_menu = $("#toggleMenu");
      var menu_top = $("#menuTop");
      toggle_menu.click(function() {
        menu_top.toggleClass("active");
      });
    })(jQuery);

});


