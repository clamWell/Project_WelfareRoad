$(window).load(function() {

	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2019/labordeath/",
		isMobile = screenWidth <= 710 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false;

	var agent = navigator.userAgent.toLowerCase();
	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		ieTest = true;
	} else {
		ieTest = false;
	}

	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	};

	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
	});

	function settingDimenstionWidth(){
		var scrollDetph = $(".actual-scroll").height();
		$(".horizon-dimension-1").width(scrollDetph);
		$(".horizon-dimension-2").width(scrollDetph*0.5);
		$(".horizon-dimension-3").width(scrollDetph*0.25);
		$(".horizon-dimension-4").width(scrollDetph*0.1);
	}
	settingDimenstionWidth();

	function ShowCharacterBox(){
		$(".character-holder").stop().animate({"bottom":"20%"}, 1000, "swing", function(){});
	}; 

	//afterLoad
	function afterLoad(){
		$("body").removeClass("fixed");
		$(".horizon-dimension").animate({"top":"0%"}, 1200, "easeInCubic");
		$(".loading-page").animate({"position":"absolute", "top":"-100%"}, 1200, "easeInCubic", function(){
			 ShowCharacterBox();
		});
	}
	afterLoad();	
	

	chrSpreadDiv = document.getElementById("characterAni");
	function defaultCharcterFrame(){
		chrSpreadDiv.style.left = "0px"
	};

	var shiftRobbyFrameTimer = setInterval(function() { shiftRobbyFrame() }, 200)



	$(window).scroll(function() {
		var nowScroll = $(window).scrollTop();


	});

});

// 공유

function sendSns(sns) {
  var url = encodeURIComponent(location.href),
    txt = encodeURIComponent($("title").html());
  switch (sns) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
