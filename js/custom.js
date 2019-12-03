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

	var scrollDetph = $(".actual-scroll").height();
	var $chrSpreadDiv = $("#characterAni"),
		$scrContainer = $(".scroll-animate-area"),
		$dimensionHorizon = $(".horizon-dimension");

	function settingDimenstionWidth(){		
		$(".horizon-dimension-1").width(scrollDetph);
		$(".horizon-dimension-2").width(scrollDetph*0.5);
		$(".horizon-dimension-3").width(scrollDetph*0.25);
		$(".horizon-dimension-4").width(scrollDetph*0.1);
	}
	settingDimenstionWidth();

	function ShowCharacterBox(){
		$(".character-holder").stop().animate({"bottom":"20%"}, 1000, "swing", function(){		
			defaultCharcterFrame();
			canScroll = true; 
			canChrAni = true; 
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


	function defaultCharcterFrame(){
		$chrSpreadDiv.css("left", "0px");
	};
	var canScroll,canChrAni = false; 
	var chrWidth = 150;
	var chrStart, chrEnd, counter = 0;
	var chrAniTimer;

	function chrFall(){
	  $chrSpreadDiv.css("left", "-450px");
	};

	function chrRun() {
		$chrSpreadDiv.css("left", (-1 * chrWidth * counter)  + "px");
		if(counter>=2){
			counter = 0;			
		}else{
			counter++;
		}			
	};
	
	function makeChrRun(){
		if(canChrAni ==true){	
			canChrAni = false;
			clearChrAniTimer();
			chrAniTimer = setInterval(function() { chrRun() }, 200);
		}
	};

	function clearChrAniTimer() {
	  clearInterval(chrAniTimer);
	};

	function scrollAct(){
		moveLayers();
		//makeChrRun();
		animateObject();
	};

	var dimensionSpeed = new Array;
	function setLayerSpeed(){
		for (var i = 0; i < $dimensionHorizon.length; i++) {
			var widthGap =  $dimensionHorizon.eq(i).width() - screenWidth;
			var speedFactor = widthGap / ( scrollDetph - screenWidth ) ;
			dimensionSpeed.push(speedFactor)
		}
	};
	setLayerSpeed();
	
	//일단 디폴트를 수평이동으로 설정해둠
	var layersMovement = "horizontal";

	function moveLayers() {
		if (layersMovement == "horizontal") {
			for (var e = 0; e < $dimensionHorizon.length; e++){ 
				$dimensionHorizon.eq(e).css("left", (-1 * dimensionSpeed[e] * VP) + "px" );
			}
		}else{
		
		}
	}

	//var bank = $(".bank-sign");
	var $aniObs = $(".aniOb");
	var bankAniDone = false;
	function animateObject(){
		if (layersMovement == "horizontal"){
			for(a=0;a<$aniObs.length;a++){
				var aniObsStartPos = $aniObs.eq(a).position().left;
					aniObsEndPos = $aniObs.eq(a).position().left + $aniObs.eq(a).width();
				/*
				 if( (preVP_trigger < aniObsStartPos || preVP_trigger > aniObsEndPos ) && (VP_trigger > aniObsStartPos) && (VP_trigger < aniObsEndPos) && ( $aniObs.eq(a) == $(".bank-sign") ) && (bankAniDone == false) ){
					  animateBank(),
					  bankAniDone = true;
				  } */
				if( (VP + screenWidth*0.7 > aniObsStartPos) && (VP + screenWidth*0.7 < aniObsEndPos) && ( $aniObs.eq(a).hasClass("bank-sign") ) && (bankAniDone == false) ){
					  animateBank(),
					  bankAniDone = true;
				} 
			}		
		}		
	};

		 
	function animateBank(){
		$(".bank-sign").animate({"top":"-15%"}, 800, "easeOutElastic");
		$(".bank-sign-front img").addClass("rotate");

	};

// 스크롤 때 마다 실행하는 함수들
//orientRobby(),  > 캐릭터 너비세팅
//checkRobbyJumpFallSwim(),moveLayers(),
//shiftUpDownHorizontalLayers(), animateInformationAndEnemiesElements(), animateRobbyRunSwim(), //hideScrollOrSwipeTextContainer(), hideContactConfirmationContainer(), deviceFunctionScrollSwipe(), printScrollSwipeText()

	$(window).scroll(function() {
		var nowScroll = $(window).scrollTop();
		if(canScroll==true){
			detectPageVerticalPosition();
			scrollAct();
		}

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
