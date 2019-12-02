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
		$(".character-holder").stop().animate({"bottom":"20%"}, 1000, "swing", function(){
			//chrAniTimer = setInterval(function() { makeChrAni() }, 200);
			defaultCharcterFrame();
			canScroll = true; 
		});
	}; 

	//afterLoad
	function afterLoad(){
		$("body").removeClass("fixed");
		$(".horizon-dimension").animate({"top":"0%"}, 1200, "easeInCubic");
		$(".loading-page").animate({"position":"absolute", "top":"-100%"}, 1200, "easeInCubic", function(){
			chrFall();
			ShowCharacterBox();
		});
	}
	afterLoad();	
	

	var $chrSpreadDiv = $("#characterAni");
	function defaultCharcterFrame(){
		$chrSpreadDiv.css("left", "0px");
	};
	var canScroll = false; 
	var chrWidth = 150;
	var chrStart, chrEnd, counter = 0;
	var chrAniTimer;

	function chrFall(){
	  $chrSpreadDiv.css("left", "-450px");
	};

	function makeChrAni() {
		$chrSpreadDiv.css("left", (-1 * chrWidth * counter)  + "px");
		if(counter>=2){
			counter = 0;
		}else{
			counter++;
		}					
	};

	function clearChrAniTimer() {
	  clearInterval(chrAniTimer);
	};

	function scrollAct(){
		
	};

	var dimensionSpeed = new Array;
	function setLayerSpeed(){
	 
	  ///// 여기까지 12.02  

	};

	//일단 디폴트로 설정해둠
	var layersMovement = "horizontal";
	var dimensionHorizon = $(".horizon-dimension");

	function moveLayers() {
		if (layersMovement == "horizontal") {
			for (var e = 0; e < dimensionHorizon.length; e++)  dimensionHorizon[e].css("left", -1 * dimensionSpeed[e] * VP + "px"; ); 
		}else{
		
		}
	}

//orientRobby(), checkRobbyJumpFallSwim(), moveLayers(), shiftUpDownHorizontalLayers(), animateInformationAndEnemiesElements(), animateRobbyRunSwim(), //hideScrollOrSwipeTextContainer(), hideContactConfirmationContainer(), deviceFunctionScrollSwipe(), printScrollSwipeText()

	$(window).scroll(function() {
		var nowScroll = $(window).scrollTop();
		if(canScroll==true){
			detectPageVerticalPosition();
			scrollAct();
		}

	});

	var preVP, VP = 0; 
	function detectPageVerticalPosition(){
		preVP = VP;
		if(isMobile==false){ // PC
			VP = (ieTest==true) ? document.documentElement.scrollTop : pageYOffset // 익스플로는 scrollTop 아니면 pageYOffset
		}else{ //모바일
			if( VP = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX) < 0){
				VP = 0
			}	  
	    }
	}

	




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
