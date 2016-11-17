window.onload = function(){
	
var topLine = $("#topLineNav");
var rightLine = $("#rightLineNav");
var bottomLine = $("#bottomLineNav");
var leftLine = $("#leftLineNav");
var startDiv = $("#startPage");
var homeMain = $("#homeMain");
var overlay = $("#overlay");
var navLinesMenu = $("#nav-icon3");
var webContainer = $("#webContainer");
var wholePageStart = $("#wholePageStart");
	
var navTester = true;


	

	$("#continueFirst").click(function() {
		startDiv.animate({"opacity" : "0"}, 1200);
		setTimeout(function(){ 
			startDiv.delay(1201).css({"display" : "none"});
			homeMain.css({"display" : "block"});
			homeMain.animate({"opacity" : "1"}, 1200);
		} ,1201);	
		
		setTimeout(function(){ 	
				
				homeMain.css({"display" : "block"});
				homeMain.animate({"opacity" : "1"}, 1200);
				topLine.delay(0).animate({"width" : "100%"}, 1200);
				rightLine.delay(100).animate({"height" : "100vh"}, 1200);
				bottomLine.delay(250).animate({"width" : "100%"}, 1200);
				leftLine.delay(200).animate({"height" : "100vh"}, 1200);
				webContainer.delay(1400).animate({"opacity" : "1"}, 800);
				navLinesMenu.delay(650).animate({"opacity" : "1"}, 300);
			
				
		} ,1500);
	});


	$(document).ready(function(){
			$('#nav-icon3').click(function(){
				$(this).toggleClass('open');
				
				if(navTester == true){
					$(".menuContainer").css({"display" : "block"});
					$("#aboutSection").delay(0).animate({"opacity" : "1"}, 300);
					$("#webSection").delay(100).animate({"opacity" : "1"}, 300);
					$("#ModelingSection").delay(200).animate({"opacity" : "1"}, 300);
					$("#graphicSection").delay(300).animate({"opacity" : "1"}, 300);
					$("#contactSection").delay(400).animate({"opacity" : "1"}, 300);
					
					navTester = false;
				}else{
					$("#aboutSection").delay(200).animate({"opacity" : "0"}, 150);
					$("#webSection").delay(150).animate({"opacity" : "0"}, 150);
					$("#ModelingSection").delay(100).animate({"opacity" : "0"}, 150);
					$("#graphicSection").delay(50).animate({"opacity" : "0"}, 150);
					$("#contactSection").delay(0).animate({"opacity" : "0"}, 150);
					setTimeout(function(){
						
						$(".menuContainer").delay(350).css({"display" : "none"});
					}, 350);

					
					navTester = true;
				}
			});

		
		var hoverMain = $(".hoverMain");

	
			hoverMain.mouseenter(function(el) {
				el = $(this);
				startHoverEffect(el);
			})
			hoverMain.mouseleave(function(el) {
				el = $(this);
				stopHoverEffect(el);
			});
		
	});	

	function startHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'2px'}, 350);
			el.find(".hover3").stop().animate({'left':'0px'}, 250);

	}
	function stopHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'200px'}, 350);
			el.find(".hover3").stop().animate({'left':'-200px'}, 250);
	}


	
	
	
	
//	var firstHeight = $( window ).height() * 2;
	
	
	$(window).scroll(function() {
			var height = $(window).scrollTop();
			var webTop = $("#webContainer").offset().top;
//			console.log(height);
			console.log(webTop);

			if(height <= webTop) {
				$("#body").animate({"background-color" : "#d0d0d0"}, 1000);
				$(".navLines").animate({"background-color" : "#737373"}, 1000);
				$(".span").animate({"background-color" : "#737373"}, 300);
				
			} 
			
			if(height >= (webTop - 400)) {
				$("#body").animate({"background-color" : "#272727"}, 1000);
				$(".navLines").animate({"background-color" : "#ffffff"}, 1000);
				$(".span").animate({"background-color" : "#ffffff"}, 300);
			}
	});
	
	
	$(".ster").click(function(){
		$(".sterPop").css({"display" : "block"});
		$(".sterPop").animate({"opacity" : "1"}, 400);
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
}





































