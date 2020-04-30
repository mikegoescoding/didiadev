const $hamburger = $(".hamburger");
(function($) {
	$(document).ready(function() {
		$(".hamburger").on("click", function() {
			toggleNavigation($(this), $(".nav-pane"));
			$hamburger.toggleClass("is-active");
		});

		function toggleNavigation(btn, nav) {
			btn.toggleClass("open");
			nav.toggleClass("open");
		}
	});
})(jQuery);

// Modal Image Gallery
function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}
