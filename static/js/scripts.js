// (function svgMenu() {
// 	var pathA = document.getElementById('pathA'),
// 		pathB = document.getElementById('pathB'),
// 	    pathC = document.getElementById('pathC'),
// 	    segmentA = new Segment(pathA, 8, 32),
// 		segmentB = new Segment(pathB, 8, 32),
// 	    segmentC = new Segment(pathC, 8, 32);
//
// 	function inAC(s) { s.draw('80% - 24', '80%', 0.3, {delay: 0.1, callback: function(){ inAC2(s) }}); }
// 	function inAC2(s) { s.draw('100% - 54.5', '100% - 30.5', 0.6, {easing: d3_ease.ease('elastic-out', 1, 0.3)}); }
// 	function inB(s) { s.draw(8 - 6, 32 + 6, 0.1, {callback: function(){ inB2(s) }}); }
// 	function inB2(s) { s.draw(8 + 12, 32 - 12, 0.3, {easing: d3_ease.ease('bounce-out', 1, 0.3)}); }
//
// 	inAC(segmentA);
// 	inB(segmentB);
// 	inAC(segmentC);
//
// 	function outAC(s) { s.draw('90% - 24', '90%', 0.1, {easing: d3_ease.ease('elastic-in', 1, 0.3), callback: function(){ outAC2(s) }}); }
// 	function outAC2(s) { s.draw('20% - 24', '20%', 0.3, {callback: function(){ outAC3(s) }}); }
// 	function outAC3(s) { s.draw(8, 32, 0.7, {easing: d3_ease.ease('elastic-out', 1, 0.3)}); }
// 	function outB(s) { s.draw(8, 32, 0.7, {delay: 0.1, easing: d3_ease.ease('elastic-out', 2, 0.4)}); }
//
// 	outAC(segmentA);
// 	outB(segmentB);
// 	outAC(segmentC);
//
// 	var trigger = document.getElementById('menu-btn'),
//     toCloseIcon = true;
//
// 	trigger.onclick = function() {
// 	    if (toCloseIcon) {
// 	        inAC(segmentA);
// 	        inB(segmentB);
// 	        inAC(segmentC);
// 			$(".mobile-menu").toggleClass("mobile-menu-active");
// 	    } else {
// 	        outAC(segmentA);
// 	        outB(segmentB);
// 	        outAC(segmentC);
// 			$(".mobile-menu").toggleClass("mobile-menu-active");
// 	    }
// 	    toCloseIcon = !toCloseIcon;
// 	};
// })();

(function bannerPrincipal(){
	$('.banner-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: '<svg version="1.1" class="left-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.622 487.622" style="enable-background:new 0 0 487.622 487.622;" xml:space="preserve"><g><g><circle style="fill:#D21819;" cx="243.811" cy="243.811" r="243.811"/><path style="fill:#C20809;" d="M486.922,262.38L365.708,121.912l-131.415,87.582l-112.381,34.317l202.325,230.212 C413.786,442.74,479.517,360.705,486.922,262.38z"/><polygon style="fill:#FFFFFF;" points="121.913,243.811 365.708,121.912 281.928,243.811 365.708,365.708 		"/></g></g></svg>',
		nextArrow: '<svg version="1.1" class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.622 487.622" style="enable-background:new 0 0 487.622 487.622;" xml:space="preserve"><g><g><circle style="fill:#D21819;" cx="243.811" cy="243.811" r="243.811"/><path style="fill:#C20809;" d="M486.922,262.38L365.708,121.912l-131.415,87.582l-112.381,34.317l202.325,230.212 C413.786,442.74,479.517,360.705,486.922,262.38z"/><polygon style="fill:#FFFFFF;" points="121.913,243.811 365.708,121.912 281.928,243.811 365.708,365.708 		"/></g></g></svg>',
		speed: 1500
	});
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
