(function svgMenu() {
	var pathA = document.getElementById('pathA'),
	pathB = document.getElementById('pathB'),
  pathC = document.getElementById('pathC'),
	segmentA = new Segment(pathA, 8, 32),
	segmentB = new Segment(pathB, 8, 32),
	segmentC = new Segment(pathC, 8, 32);

	function inAC(s) { s.draw('80% - 24', '80%', 0.3, {delay: 0.1, callback: function(){ inAC2(s) }}); }
	function inAC2(s) { s.draw('100% - 54.5', '100% - 30.5', 0.6, {easing: d3_ease.ease('elastic-out', 1, 0.3)}); }
	function inB(s) { s.draw(8 - 6, 32 + 6, 0.1, {callback: function(){ inB2(s) }}); }
	function inB2(s) { s.draw(8 + 12, 32 - 12, 0.3, {easing: d3_ease.ease('bounce-out', 1, 0.3)}); }

	inAC(segmentA);
	inB(segmentB);
	inAC(segmentC);

	function outAC(s) { s.draw('90% - 24', '90%', 0.1, {easing: d3_ease.ease('elastic-in', 1, 0.3), callback: function(){ outAC2(s) }}); }
	function outAC2(s) { s.draw('20% - 24', '20%', 0.3, {callback: function(){ outAC3(s) }}); }
	function outAC3(s) { s.draw(8, 32, 0.7, {easing: d3_ease.ease('elastic-out', 1, 0.3)}); }
	function outB(s) { s.draw(8, 32, 0.7, {delay: 0.1, easing: d3_ease.ease('elastic-out', 2, 0.4)}); }

	outAC(segmentA);
	outB(segmentB);
	outAC(segmentC);

	var trigger = document.getElementById('menu-btn'),
    toCloseIcon = true;

	trigger.onclick = function() {
	    if (toCloseIcon) {
	        inAC(segmentA);
	        inB(segmentB);
	        inAC(segmentC);
			$(".mobile-menu").toggleClass("mobile-menu-active");
      $(".mobile-header").toggleClass("mobile-header-active");
	    } else {
	        outAC(segmentA);
	        outB(segmentB);
	        outAC(segmentC);
			$(".mobile-menu").toggleClass("mobile-menu-active");
      $(".mobile-header").toggleClass("mobile-header-active");
	    }
	    toCloseIcon = !toCloseIcon;
	};
})();

(function mapScroll() {
	$('#mapa').addClass('scrolloff');
	$('.mapa-container').on('click', function () {
		$('#mapa').removeClass('scrolloff');
	});

	$("#mapa").mouseleave(function () {
		$('#mapa').addClass('scrolloff');
	});
})();
