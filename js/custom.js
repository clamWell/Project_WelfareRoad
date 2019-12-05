$(function(){

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

	var deviceName = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? "iosdevice" : navigator.userAgent.match(/Android/i) ? "android" : navigator.userAgent.match(/BlackBerry/i) ? "blackberry" : navigator.userAgent.match(/IEMobile/i) ? "iemobile" : navigator.userAgent.match(/Silk/i) ? "kindle" : "computer"

	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}

	// 스크롤, 디멘션 세팅(S)
	var scrollDetph = $(".actual-scroll").height();
	//var $chrSpreadDiv = $("#characterAni"),
	var $chrSpreadDiv = $(".character-spread"), 
		$scrContainer = $(".scroll-animate-area"),
		$dimensionHorizon = $(".horizon-dimension");

	function settingDimenstionWidth(){
		$(".horizon-dimension-1").width(scrollDetph); // 근경
		$(".horizon-dimension-2").width(scrollDetph*0.5); // 근-원경
		$(".horizon-dimension-3").width(scrollDetph*0.25); // 원경
		$(".horizon-dimension-4").width(scrollDetph*0.1); // 초원경
		$(".horizon-dimension-5").width(scrollDetph); // 근경 중 캐릭터 위로 덮는 요소들
	}
	settingDimenstionWidth();

	function ShowCharacterBox(){ // 시작하면 캐릭터 하늘에서 떨어짐
		$(".character-holder").stop().animate({"bottom":"20%"}, 1000, "swing", function(){
			defaultCharcterFrame();
			canScroll = true;
			canChrAni = true;
		});
	}
	// 스크롤, 디멘션 세팅(E)

	//afterLoad
	function afterLoad(){
		$("body").removeClass("fixed");
		$(".horizon-dimension").animate({"top":"0%"}, 1200, "easeInCubic");
		$(".loading-page").animate({"position":"absolute", "top":"-100%"}, 1200, "easeInCubic", function(){
			chrFall();
			ShowCharacterBox();
		});
	}

	// 현재 스크롤 위치 감지하여 변수에 담기
	var preVP, VP = 0;
	function detectPageVerticalPosition(){
		preVP = VP;
		if (isMobile == false){ // PC
			VP = (ieTest == true) ? document.documentElement.scrollTop : pageYOffset // ie 9 이하는 scrollTop 아니면 pageYOffset
		} else { //모바일
			if( VP = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX) < 0){
				VP = 0
			}
	    }
	}

	////// 캐릭터 뛰는 동작 (S)
	var chrStatus = "run";
	var canScroll,canChrAni = false;
	var chrWidth = 150;
	var chrRunStartFrame = 1, chrRunEndFrame = 2;
	var chrStart, chrEnd, counter = 0;
	var chrAniTimer;
	var switcher = 1;
	var VP_when_moving1, VP_when_moving2;

	//기본 서있는 자세로
	function defaultCharcterFrame(){
		$chrSpreadDiv.css("left", "0px");
	};

	function chrFall(){
	  $chrSpreadDiv.css("left", "-450px");
	}

	//캐릭터 움직이도록 프레임변경
	function chrRun() {

		if (chrStatus == "run")	chrStart = chrRunStartFrame, chrEnd = chrRunEndFrame;

		$chrSpreadDiv.css("left", (-1 * chrWidth * counter)  + "px");

		if (chrStart + counter + switcher > chrEnd)	switcher = -1;
		if (chrStart + counter + switcher == chrStart) VP_when_moving1 = VP;
		if (chrStart + counter + switcher < chrStart){
			if (VP_when_moving1 == (VP_when_moving2 = VP)) return clearChrAniTimer();
			switcher = 1;
		}
		counter += switcher;

	}

	function makeChrRun(){
		if(canChrAni == true){
			canChrAni = false;
			clearInterval(chrAniTimer);
			chrAniTimer = setInterval(function() { chrRun() }, 200);
		}
	}

	function clearChrAniTimer() {
		clearInterval(chrAniTimer);
		defaultCharcterFrame();
		counter = 1, switcher = 1;
		canChrAni = true;

	}
	////// 캐릭터 뛰는 동작 (E)

	function scrollAct(){
		makeChrRun();
		moveLayers();
		animateObject();
	};

	////// 화면 이동 (S)
	var dimensionSpeed = new Array;
	function setLayerSpeed(){ // 각 근~원경별로 레이어 움직이는 스피드 지정
		for (var i = 0; i < $dimensionHorizon.length; i++) {
			var widthGap =  $dimensionHorizon.eq(i).width() - screenWidth;
			var speedFactor = widthGap / ( scrollDetph - screenWidth ) ;
			dimensionSpeed.push(speedFactor)
		}
	};
	setLayerSpeed();

	var layersMovement = "horizontal"; //일단 디폴트를 수평이동으로 설정해둠

	function moveLayers() {
		if (layersMovement == "horizontal") {
			for (var e = 0; e < $dimensionHorizon.length; e++){
				$dimensionHorizon.eq(e).css("left", (-1 * dimensionSpeed[e] * VP) + "px" );
			}
		}else{

		}
	}
	////// 화면 이동 (E)

	var $aniObs = $(".aniOb");
	var bankAniDone = false;
	var nowSendingHeart = false; 
	var workBuildingArrive = false;
	var nowElevator = false;
	var weddingPlaneGoUp = false;

	function animateObject(){
		if (layersMovement == "horizontal"){
			for(a=0;a<$aniObs.length;a++){
				var aniObsStartPos = $aniObs.eq(a).position().left;
					aniObsEndPos = $aniObs.eq(a).position().left + $aniObs.eq(a).width();
				//뱅크 애니메이션
				if( (VP + screenWidth*0.7 > aniObsStartPos) && (VP + screenWidth*0.7 < aniObsEndPos) && ( $aniObs.eq(a).hasClass("bank-sign") ) && (bankAniDone == false) ){
					  animateBank(),
					  bankAniDone = true;
				}
				//남편 만나면 하트
				if( (VP + screenWidth*0.7 > aniObsStartPos) && (VP + screenWidth*0.7 < aniObsEndPos) && ( $aniObs.eq(a).hasClass("meet-husband")) && nowSendingHeart == false ){
					sendHeart();
				}
				//남편이 여자캐릭터 방향으로 방향전환
				if( (VP + $(".character-holder").position().left  > aniObsEndPos) && $aniObs.eq(a).hasClass("meet-husband") ){
					$(".husband .husband-holder img").css({"left":"-90px"});
				}else if( (VP + $(".character-holder").position().left <= aniObsEndPos) && $aniObs.eq(a).hasClass("meet-husband")){
					$(".husband .husband-holder img").css({"left":"0px"});
				}
				
				// 뱅기 모드 시작
				if( $aniObs.eq(a).hasClass("workbuilding-area") && (VP + $(".character-holder").position().left  > aniObsEndPos) ){
					weddingPlaneGoUp = true; 
					console.log("허니문떠남")
					//$(".character-box-plane").animate({"top":"-350px", "transform":"rotate(-15deg)", "-ms-transform":"rotate(-15deg)","-webkit-transform":"rotate(-15deg)","-moz-transform":"rotate(-15deg)"}, 800);  
				}

			}

			//일하는 건물 도착하면 엘리베이터 타고 올라가게
			if( ( VP + $(".character-holder").position().left >  $(".workbuilding-area").position().left-50 ) && workBuildingArrive == false && nowElevator == false){
				workBuildingArrive = true;
				console.log("빌딩도착");
				$("body").addClass("fixed");
				$("html, body").css({ scrollTop: $(".workbuilding-area").position().left-$(".character-holder").position().left }, chrGoUpBuilding() );
			}
			//일하는 건물에서 다시 엘리베이터 타고 내려가게
			if(  ( VP + $(".character-holder").position().left < $(".workbuilding-area").position().left+50 ) && workBuildingArrive == true&&nowElevator == false){
				workBuildingArrive = false;
				console.log("빌딩다시내려가야함");
				$("html, body").css({ scrollTop: $(".workbuilding-area").position().left-$(".character-holder").position().left }, chrGoDownBuilding() );
				$("body").addClass("fixed");
			}



		}

	};

	function chrGoUpBuilding(){
		nowElevator = true;
		console.log("빌딩올라가기");
		$(".horizon-dimension").stop().animate({"top":"1140px"}, 1200, "swing",function(){
			$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left+200);
			$("body").removeClass("fixed");
			nowElevator = false;
		});
	}
	function chrGoDownBuilding(){
		nowElevator = true;
		console.log("빌딩내려가기");
		$(".horizon-dimension").stop().animate({"top":"0%"}, 1200, "swing",function(){
			//$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left-300);
			$("body").removeClass("fixed");
			nowElevator = false;
		});
	};

	// 은행 애니메이션
	function animateBank(){
		$(".bank-sign").animate({"top":"-15%"}, 800, "swing", function(){
			makeMoneyfly();
			$(".flying-money").animate({"top":"-80%", "right":"-1200px"}, 1500, "swing", function(){
				canMoneyFly = false;
				$(".flying-money").animate({"top":"-0%"}, 700, "easeInElastic");
			});
		});
		$(".bank-sign-front img").addClass("rotate");
	};

	var moneyWidth = 150;
	var canMoneyFly = true;
	var moneyFlyTimer;
	var moneyCounter = 0;
	function moneyfly() {
		if(canMoneyFly ==false){
			$(".flying-money-slider").css("left", 0);
			clearInterval(moneyFlyTimer);
		}else{
			$(".flying-money-slider").css("left", (-1 * moneyWidth * moneyCounter)  + "px");
			if(moneyCounter>=1){
				moneyCounter = 0;
			}else{
				moneyCounter++;
			}
		}
	};
	function makeMoneyfly(){
		if(canMoneyFly ==true){
			moneyFlyTimer = setInterval(function() { moneyfly() }, 200);
		}
	};
	// 은행 애니메이션


	// 남편 만나는 애니메이션
	function sendHeart(){
		nowSendingHeart = true;
		var $heart = $(".husband .heart");
		for(h=0; h<$heart.length;h++){		
			$heart.eq(h).delay(300 * h).animate({"width": "30px", "top":"0", "left":"-100px","opacity":"0"}, 700, "swing");
		}			
	};	
	// 남편 만나는 애니메이션

	// 캐릭터 스테이지 구분 체크
	var $changePoint = $(".change-point");
	var nowChrStage = 0;
	function changeChrBox(n){
		if( nowChrStage == n){ // 스테이지 같음 아무런 액션 하지 않음
			
		}else if( nowChrStage !== n ){ //스테이지 바뀜
			nowChrStage = n;
			console.log(n+"번째 스테이지");
				
			if(n==0 || n==2){ // 기본복장
				$(".character-holder .character-box").hide();
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread").hide();
				$(".character-holder .character-spread-a").show();
			}else if(n==1){ //학사모
				$(".character-holder .character-box").hide();
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread").hide();
				$(".character-holder .character-spread-b").show();			
			}else if(n==3){ //정장
				$(".character-holder .character-box").hide();
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread").hide();
				$(".character-holder .character-spread-c").show();			
			}else if(n==4){ // 비행기
				$(".character-holder .character-box").hide();
				$(".character-holder .character-box-plane").show();
			}		
		}

	};

	function checkChrBoxState(){
		var chrPos = VP + $(".character-holder").position().left;
		if( chrPos < $changePoint.eq(0).position().left){ // Chr stage 0
			changeChrBox(0);
		}else if( chrPos >= $changePoint.eq($changePoint.length-1).position().left ){ // Chr lastStage
			changeChrBox($changePoint.length);
		}else if( chrPos >= $changePoint.eq(0).position().left && chrPos < $changePoint.eq($changePoint.length-1).position().left){
			for(c=0;c<$changePoint.length-1;c++){
				if( chrPos >= $changePoint.eq(c).position().left && chrPos <$changePoint.eq(c+1).position().left){
					changeChrBox(c+1);
				}
			}				
		} 
	};
	// 캐릭터 스테이지 구분 체크


	$(window).on("load", function(){
		afterLoad();
	})
	.on("scroll", function() {
		if (canScroll == true){
			detectPageVerticalPosition();
			scrollAct();
			checkChrBoxState();
		} else {
			window.scrollTo(0, 0);
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
