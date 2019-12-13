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

	var $chrSpreadDiv = $(".character-spread"),
		scrollDetph = $(".actual-scroll").height();
		$scrContainer = $(".scroll-animate-area"),
		$dimensionHorizon = $(".horizon-dimension"),
		dimensionSpeed = new Array;

	var objectUpdown = [], oc = 0;
	var verticalUpdown = { v: 0, m: 0, p: 0, call:"" };

	var $changePoint = $(".change-point");
	var nowChrStage = 0;

	var moneyWidth = 150;
	var canMoneyFly = true;
	var moneyFlyTimer;
	var moneyCounter = 0;

	var $aniObs = $(".aniOb");
	var bankAniDone = false;
	var nowSendingHeart = false;
	var workBuildingArrive = false;
	var nowElevator = false;
	var weddingPlaneGoUp = false;
	var weddingPlaneGoDown = false;
	var weddingPlaneComplete = false;
	var honeymoonPops = false;
	var houseHeartDone = false;
	var drugGiven = false;
	var babyCry = false;
	var goMartDown = goMartUp = goMartComplete = false;
	var outMartUp = outMartDown = outMartComplete = false;
	var martItemshow = [false, false, false];
	var flagUp = [false, false, false,false, false, false];
	var babyVaccineDone = false;
	var skillCardShow = false;
	var upDownWidth;
	var oStartP, oEndP, vStartP, vEndP, updownSwitcher;

	var chrStatus = "run";
	var canScroll,canChrAni = false;
	var defaultchrWidth = 150;
	var chrRunStartFrame = 1, chrRunEndFrame = 2;
	var chrStart, chrEnd, counter = 0;
	var chrAniTimer;
	var switcher = 1;
	var chrJumping = false;

	var chrLeftEdge = $(".character-holder").position().left * 0.2;
	var chrRightEdge = (screenWidth - $(".character-holder").position().left - $(".character-holder").width()) * 0.6;

	console.log(chrLeftEdge);
	console.log(chrRightEdge);

	var VP_when_moving1, VP_when_moving2;
	var preVP, deltaVP, VP = 0;
	var touchVP = touchStartX = touchCurrentX = touchEndX = 0;
	var vertical_p;

	var layersMovement = "horizontal"; //일단 디폴트를 수평이동으로 설정해둠


	/////  스크롤, 디멘션 세팅(S)  /////
	function settingDimenstionWidth(){
		$(".horizon-dimension-1").width(scrollDetph); // 근경
		$(".horizon-dimension-2").width(scrollDetph*0.3); // 근-원경
		$(".horizon-dimension-3").width(scrollDetph*0.2); // 원경
		$(".horizon-dimension-4").width(scrollDetph*0.1);// 초원경
		$(".horizon-dimension-5").width(scrollDetph); // 근경 중 캐릭터 위로 덮는 요소들
	}

	// 시작하면 캐릭터 하늘에서 떨어짐
	function ShowCharacterBox(){
		$(".character-holder").stop().animate({"bottom":"15%"}, 1000, "swing", function(){
			defaultCharcterFrame();
			window.setTimeout(function(){
				canScroll = true;
				canChrAni = true;
				$(".stage-navi").addClass("navi-show");
				$(".info-layer ").animate({"top":"0px"},500);
			}, 500);
		});
	}
	/////  스크롤, 디멘션 세팅(E)  /////

	/////  캐릭터 뛰는 동작 (S)  /////

	// 캐릭터 방향 전환
	function orientChr(){
		var $orientChr, topValue;
		if (nowChrStage == 4){
			$orientChr = $(".plane-holder");
			topValue = -337;
		} else {
			$orientChr = $chrSpreadDiv;
			topValue = -175;
		}
		if (deltaVP > 0) $orientChr.css("top", "0px"); /// 눈 깜박임 추후 추가
		if (deltaVP < 0) $orientChr.css("top", topValue + "px");
	}

	//기본 서있는 자세로
	function defaultCharcterFrame(){
		$chrSpreadDiv.css("left", "0px");
	};

	function chrFall(){
	  	$chrSpreadDiv.css("left", "-450px");
	}

	//캐릭터 움직이도록 프레임변경
	function chrRun() {

		if (chrJumping == true) return;

		var chrWidth = nowChrStage == 5 ? 200 : defaultchrWidth;
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

	function chrJumpCheck(){
		$(".jump-point").each(function(i){
			chrJump(this);
			chrJumpFall(this);
		});
	}

	function chrJump(e){

		if (preVP <= $(e).position().left - chrRightEdge && VP > $(e).position().left - chrRightEdge || preVP >= $(e).position().left + $(e).width() - chrLeftEdge && VP < $(e).position().left + $(e).width() - chrLeftEdge){
			chrJumping = true;
			//console.log("up");
			chrFall();
			$(".character-holder").stop().animate({bottom: ["40%", "swing"]}, 250, function(){
				//console.log("up end")
				chrJumpDown(e);
			});
		}

	}

	function chrJumpDown(e) {
		if (VP > $(e).position().left - chrRightEdge && VP < $(e).position().left + $(e).width() - chrLeftEdge){
			$(".character-holder").stop().animate({bottom: ["15%", "easeInCubic"] }, 150, function(){
				chrJumping = false;
				//console.log("down");
				defaultCharcterFrame();
			});
		}
	}


	function chrJumpFall(e){

		if (preVP < $(e).position().left - chrLeftEdge + $(e).width() && VP >= $(e).position().left - chrLeftEdge + $(e).width() || preVP > $(e).position().left - chrRightEdge && VP <= $(e).position().left - chrRightEdge){
			$(".character-holder").stop().animate({bottom: ["15%", "easeInCubic"]}, 150, function(){
				chrJumping = false;
				//console.log("fall");
				defaultCharcterFrame();
			});
		}

	}

	////// 캐릭터 뛰는 동작 (E)  //////

	////// 화면 이동 (S)  /////
	function setLayerSpeed(){ // 각 근~원경별로 레이어 움직이는 스피드 지정
		for (var i = 0; i < $dimensionHorizon.length; i++) {
			var widthGap =  $dimensionHorizon.eq(i).width() - screenWidth;
			var speedFactor = widthGap / ( scrollDetph - screenWidth ) ;
			dimensionSpeed.push(speedFactor)
		}
	};

	// 현재 스크롤 위치 감지
	function detectPageVerticalPosition(){

		// 수직이동 - 애니메이션 처리의 경우
		if (layersMovement == "vertical"){

			VP = vertical_p;

		// 수평이동 혹은 배경이나 물체 수직이동
		} else if (layersMovement == "horizontal" || layersMovement == "verticalUpdown" || layersMovement == "objectUpdown"){

			preVP = VP;
			if (deviceName == "computer"){ // PC
				VP = (ieTest == true) ? document.documentElement.scrollTop : pageYOffset; // ie 9 이하는 scrollTop 아니면 pageYOffset
			} else { //모바일

				VP = touchVP + (touchStartX - touchCurrentX);

				if( VP < 0){
					VP = 0
				}

				if (VP > $(".actual-scroll").height() + screenWidth){
					VP = $(".actual-scroll").height() + screenWidth;
				}

				console.log(VP);
		    }

			deltaVP = VP - preVP;

			if (VP <= 0){
				//  초기위치로 돌아왔을 때 리셋용
			}

		}
	}

	function moveLayers() {

		if (layersMovement == "vertical") VP = vertical_p;

		if (weddingPlaneGoDown == true || goMartUp == true || outMartDown == true){
			vStartP = verticalUpdown.e;
			vEndP = verticalUpdown.s;
			updownSwitcher = -1;
		} else {
			vStartP = verticalUpdown.s;
			vEndP = verticalUpdown.e;
			updownSwitcher = 1;
		}

		//console.log(layersMovement);
		//console.log(weddingPlaneGoDown);
		if (layersMovement == "objectUpdown"){

			console.log("oc : " + oc);
			if (weddingPlaneGoDown == true){
				oStartP = objectUpdown[oc].e;
				oEndP = objectUpdown[oc].s;
			} else {
				oStartP = objectUpdown[oc].s;
				oEndP = objectUpdown[oc].e;
			}

			if (deltaVP > 0){

				if ((updownSwitcher * objectUpdown[oc].p > 0 && oEndP < objectUpdown[oc].m) || (updownSwitcher * objectUpdown[oc].p < 0 && oEndP > objectUpdown[oc].m)){
					objectUpdown[oc].o.css("top", oEndP + "px");
					layersMovement = objectUpdown[oc].call;
					if (objectUpdown.length != oc + 1) oc++;
					return;
				}

			} else if (deltaVP < 0){

				if ((updownSwitcher * objectUpdown[oc].p > 0 && oStartP > objectUpdown[oc].m) || (updownSwitcher * objectUpdown[oc].p < 0 && oStartP < objectUpdown[oc].m)){
					objectUpdown[oc].o.css("top", oStartP + "px");
					layersMovement = objectUpdown[oc].start;
					if (oc > 0) oc--;
					return;
				}

			}

			objectUpdown[oc].m += objectUpdown[oc].p * updownSwitcher * deltaVP;
			objectUpdown[oc].o.css("top", objectUpdown[oc].m + "px");

		}

		if (layersMovement == "verticalUpdown"){

			if (deltaVP > 0){

				if ((updownSwitcher * verticalUpdown.p > 0 && vEndP < verticalUpdown.m) || (updownSwitcher * verticalUpdown.p < 0 && vEndP > verticalUpdown.m)){
					layersMovement = verticalUpdown.call;
					$(".horizon-dimension").css("top", vEndP + "px");
					return;
				}


			} else if (deltaVP < 0){
				if ((updownSwitcher * verticalUpdown.p > 0 && vStartP > verticalUpdown.m) || (updownSwitcher * verticalUpdown.p < 0 && vStartP < verticalUpdown.m)){
					layersMovement = verticalUpdown.start;
					$(".horizon-dimension").css("top", vStartP + "px");
					return;
				}

			}

			console.log("vm : " + verticalUpdown.m);
			console.log("vs : " + vStartP);

			verticalUpdown.m += verticalUpdown.p * updownSwitcher * deltaVP;

			$(".horizon-dimension").css("top", verticalUpdown.m + "px");
		}

		for (var e = 0; e < $dimensionHorizon.length; e++){
			$dimensionHorizon.eq(e).css("left", (-1 * dimensionSpeed[e] * VP) + "px" );
		}

	}
	////// 화면 이동 (E)  //////

	function animateObjectS1(){
		for(a = 0; a < $aniObs.length; a++){
			var aniObsStartPos = $aniObs.eq(a).position().left;
				aniObsEndPos = $aniObs.eq(a).position().left + $aniObs.eq(a).width();
			//뱅크 애니메이션
			if( (VP + screenWidth*0.7 > aniObsStartPos) && (VP + screenWidth*0.7 < aniObsEndPos) && ( $aniObs.eq(a).hasClass("bank-sign") ) && (bankAniDone == false) ){
				  animateBank(),
				  bankAniDone = true;
			}

			//학원
			if( ( $aniObs.eq(a).hasClass("academy-area") ) && (VP + screenWidth*0.5 > aniObsStartPos) && (VP + screenWidth*0.7 < aniObsEndPos) && (levelUpDone == false) ){
				  animateLevelUp();
			}

			//일하는 건물 도착하면 엘리베이터 타고 올라가게
			if( ( VP + $(".character-holder").position().left >  $(".workbuilding-area").position().left-50 ) && workBuildingArrive == false && nowElevator == false){
				layersMovement = "vertical";
				vertical_p = $(".workbuilding-area").position().left - $(".character-holder").position().left;
				workBuildingArrive = true;
				console.log("빌딩도착");
				$("body").addClass("fixed");
				$("html, body").css({ scrollTop: $(".workbuilding-area").position().left-$(".character-holder").position().left }, chrGoUpBuilding() );
			}
			//일하는 건물에서 다시 엘리베이터 타고 내려가게
			if(  ( VP + $(".character-holder").position().left < $(".workbuilding-area").position().left+50 ) && workBuildingArrive == true && nowElevator == false){
				layersMovement = "vertical";
				vertical_p = $(".workbuilding-area").position().left - $(".character-holder").position().left;
				workBuildingArrive = false;
				console.log("빌딩다시내려가야함");
				$("html, body").css({ scrollTop: $(".workbuilding-area").position().left-$(".character-holder").position().left }, chrGoDownBuilding() );
				$("body").addClass("fixed");
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
			if ( $aniObs.eq(a).hasClass("workbuilding-area") && (VP + $(".character-holder").position().left  > aniObsEndPos) && weddingPlaneGoUp == false && weddingPlaneComplete == false){

				weddingPlaneGoUp = true;
				upDownWidth = ($(".wedding-photo-area").position().left + ($(".wedding-photo-area").width() / 2)) - aniObsEndPos;
				console.log("허니문떠남");

				objectUpdown = [];
				objectUpdown.push({
					start: "horizontal",
					o: $(".character-box-plane"),
					s: 0,
					e: -350,
					m: 0,
					p: -1 * (350 / upDownWidth),
					call: "objectUpdown"
				});
				objectUpdown.push({
					start: "objectUpdown",
					o: $(".character-box-plane"),
					s: -350,
					e: 0,
					m: -350,
					p: 350 / upDownWidth,
					call: "verticalUpdown"
				});

				verticalUpdown.start = "objectUpdown";
				verticalUpdown.s = 1140;
				verticalUpdown.e = 0;
				verticalUpdown.m = 1140;
				verticalUpdown.p = -1 * (1140 / ($changePoint.eq(4).position().left - 500 - aniObsEndPos - upDownWidth * 2));
				verticalUpdown.call = "horizontal";

				layersMovement = "objectUpdown";

			} else if ( $aniObs.eq(a).hasClass("workbuilding-area") && (VP + $(".character-holder").position().left <= aniObsEndPos) && ( weddingPlaneGoUp == true || weddingPlaneGoDown == true || weddingPlaneComplete == true) ){
				weddingPlaneGoUp = false;
				weddingPlaneComplete = false;
				weddingPlaneGoDown = false;
			}

			if ($aniObs.eq(a).hasClass("workbuilding-area") && VP + $(".character-holder").position().left <= $changePoint.eq(4).position().left && weddingPlaneGoDown == false && weddingPlaneGoUp == true && weddingPlaneComplete == true) {

				weddingPlaneGoDown = true;
				upDownWidth = ($(".wedding-photo-area").position().left + ($(".wedding-photo-area").width() / 2)) - aniObsEndPos;
				console.log("허니문돌아옴")

				objectUpdown = [];
				objectUpdown.push({
					start: "horizontal",
					o: $(".character-box-plane"),
					s: -350,
					e: 0,
					m: -350,
					p: 350 / upDownWidth,
					call: "objectUpdown"
				});
				objectUpdown.push({
					start: "objectUpdown",
					o: $(".character-box-plane"),
					s: 0,
					e: -350,
					m: 0,
					p: -1 * (350 / upDownWidth),
					call: "verticalUpdown"
				});

				verticalUpdown.start = "objectUpdown";
				verticalUpdown.s = 0;
				verticalUpdown.e = 1140;
				verticalUpdown.m = 0;
				verticalUpdown.p = 1140 / ($changePoint.eq(4).position().left - 500 - aniObsEndPos - upDownWidth * 2);
				verticalUpdown.call = "horizontal";
				layersMovement = "verticalUpdown";

			} else if ($aniObs.eq(a).hasClass("workbuilding-area") && VP + $(".character-holder").position().left <= $changePoint.eq(4).position().left && weddingPlaneGoDown == true && weddingPlaneGoUp == true && weddingPlaneComplete == true){
				layersMovement = "verticalUpdown";
			}


			//신혼 앨범 만나면 하트, 폭죽
			if( $aniObs.eq(a).hasClass("wedding-photo-area") && ( VP + $(".character-holder").position().left  > aniObsStartPos- 1000 ) && honeymoonPops == false ){
				AnimateHoneymoonPops();
			}

		}
	};

	function animateObjectS2(){
		if(  VP + $(".character-holder").position().left > $(".honeymoon-house-area").position().left +400 && houseHeartDone == false ){
			houseHeart();
		}			
	}

	function animateObjectS3(){
		// 보건소 지나갈 때 약 지원
		if( VP + $(".character-holder").position().left > $(".healthcenter-area").position().left + $(".healthcenter-area").width() -700 && drugGiven == false ){
			drugGiven = true;
			var $drug = $(".drug-aniOb");
			for(d=0; d<$drug.length;d++){
				$drug.eq(d).find("img").delay(300*d).animate({"top":"0px","opacity":"1"}, 800, "easeOutElastic");
			}
		}
		// 산부인과 병동 지나면서 아기출산
		if(  VP + $(".character-holder").position().left > $(".hospital-area").position().left + $(".hospital-area").width() -300 && babyCry == false ){
			babyCry = true;
			$(".babycry img").animate({"width":"230px","opacity":"1"}, 800, "easeOutElastic");

		}
	}

	function  animateObjectS4(){
		// 마트 진입 에스컬레이터
		var escalWidth = $(".mart-escalator-shade").width();

		if ( VP + $(".character-holder").position().left  > $(".mart-area").position().left + escalWidth * 0.1 && goMartDown == false && goMartComplete == false){

			goMartDown = true;

			verticalUpdown.start = "horizontal";
			verticalUpdown.s = 0;
			verticalUpdown.e = -(screenHeight * 0.8);
			verticalUpdown.p = -1 * ((screenHeight * 0.8) / (escalWidth * 0.6));
			verticalUpdown.call = "horizontal";

			layersMovement = "verticalUpdown";

		} else if ( VP + $(".character-holder").position().left <= $(".mart-area").position().left + escalWidth * 0.75 && goMartDown == true && goMartComplete == true && goMartUp == false ){

			goMartUp = true;

			verticalUpdown.start = "horizontal";
			verticalUpdown.s = -(screenHeight * 0.8);
			verticalUpdown.e = 0;
			verticalUpdown.m = -(screenHeight * 0.8);
			verticalUpdown.p = (screenHeight * 0.8) / (escalWidth * 0.6);
			verticalUpdown.call = "horizontal";

			layersMovement = "verticalUpdown";

		} else if ( VP + $(".character-holder").position().left <= $(".mart-area").position().left + escalWidth * 0.1){
			goMartUp = false;
			goMartDown = false;
			goMartComplete = false;
		} else if ( VP + $(".character-holder").position().left > $(".mart-area").position().left + escalWidth * 0.75 && goMartDown == true){
			goMartComplete = true;
		} else if ( VP + $(".character-holder").position().left < $(".mart-area").position().left + escalWidth * 0.75 && goMartUp == true && goMartDown == true && goMartComplete == true){
			layersMovement = "verticalUpdown";
		}

		// 마트 출구 에스컬레이터
		if ( VP + $(".character-holder").position().left > $(".mart-area").position().left + escalWidth * 0.1 && outMartUp == false && outMartComplete == false){

			outMartUp = true;

			verticalUpdown.start = "horizontal";
			verticalUpdown.s = -(screenHeight * 0.8);
			verticalUpdown.e = 0;
			verticalUpdown.p = (screenHeight * 0.8) / (escalWidth * 0.6);
			verticalUpdown.call = "horizontal";

			layersMovement = "verticalUpdown";

		} else if ( VP + $(".character-holder").position().left <= $(".mart-escalator-reverse-shade").position().left + escalWidth * 0.75 && outMartUp == true && outMartComplete == true && outMartDown == false ){

			outMartDown = true;

			verticalUpdown.start = "horizontal";
			verticalUpdown.s = 0;
			verticalUpdown.e = -(screenHeight * 0.8);
			verticalUpdown.m = 0;
			verticalUpdown.p = -1 *((screenHeight * 0.8) / (escalWidth * 0.6));
			verticalUpdown.call = "horizontal";

			layersMovement = "verticalUpdown";

		} else if ( VP + $(".character-holder").position().left <=  $(".mart-escalator-reverse-shade").position().left + escalWidth * 0.1){
			outMartUp = false;
			outMartDown = false;
			outMartComplete = false;
		} else if ( VP + $(".character-holder").position().left > $(".mart-escalator-reverse-shade").position().left + escalWidth * 0.75 && outMartUp == true){
			outMartComplete = true;
		} else if ( VP + $(".character-holder").position().left <  $(".mart-escalator-reverse-shade").position().left + escalWidth * 0.75 && outMartUp == true && outMartDown == true && outMartComplete == true){
			layersMovement = "verticalUpdown";
		}

		//마트에서 선반 지나면 영유아 제품 차례대로 나오게
		if(martItemshow.indexOf(false) !== -1){
			for(m=0; m<$(".mart-shelves").length; m++){
				if( VP + screenWidth*0.4 > $(".mart-area").position().left + $(".mart-shelves").eq(m).position().left-200 && martItemshow[m] == false ){
					martItemshow[m] = true;
					$(".mart-shelves").eq(m).find(".mart-item img").addClass("show");
				}
			}
		}

		//보건소 영유아 예방접종
		if( VP + $(".character-holder").position().left > $(".healthcenter-area-second").position().left +200 && VP + $(".character-holder").position().left < $(".healthcenter-area-second").position().left + $(".healthcenter-area-second").width() && babyVaccineDone == false ){
			babyVaccineDone = true;
			$(".baby-vaccine").addClass("baby-vaccine-show");
		}
		if( VP> $(".park-area").position().left  && VP< $(".park-area").position().left + $(".park-area").width() && isToyRun == false ){
			makeToyRun();
		}	
	
	}

	function animateObjectS5(){
		//자격증
		if( VP + screenWidth*0.5 > $(".skill-card-area").position().left  && VP + $(".character-holder").position().left <   $(".skill-card-area").position().left + $(".skill-card-area").width() && skillCardShow == false ){
			skillCardShow = true;
			$(".skill-card img").animate({"width":"289px", "top":"0"}, 500, "easeOutBounce");
			$(".skill-up-text img").delay(200).animate({"width":"182px"}, 500, "easeOutBounce");
		}
	}

	function animateObjectS6(){
		//동사무소 지날때 기초연금 수령
		if( VP + screenWidth*0.7 > $(".community-center-area").position().left && VP + screenWidth*0.7 < $(".community-center-area").position().left+ $(".community-center-area").width() && annuityGiven == false ){
			annuitySupport();
		}

	}


	///// 애니메이션 처리 /////
	function animateObject(s){
		var stage = s;
		if(stage !== 0 &&  (layersMovement == "horizontal")){			
			eval("animateObjectS"+stage+"();");
		}
		if(flagUp.indexOf(false) !== -1){//깃발
			for(f=0; f<$(".flag-point").length; f++){
				if( VP + screenWidth*0.7 > $(".flag-point").eq(f).position().left-200 && flagUp[f] == false ){
					flagUp[f] = true;
					$(".flag-point").eq(f).find(".flag-color").animate({"top":"30px"}, 1000, "easeOutElastic");
				}
			}
		}
	}
	///// 애니메이션 처리 /////


	function chrGoUpBuilding(){
		nowElevator = true;
		console.log("빌딩올라가기");
		$(".horizon-dimension").stop().animate({"top":"1140px"}, 1200, "swing",function(){
			$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left+200);
			$("body").removeClass("fixed");
			nowElevator = false;
			layersMovement = "horizontal";
		});
	}

	function chrGoDownBuilding(){
		nowElevator = true;
		console.log("빌딩내려가기");
		$(".horizon-dimension").stop().animate({"top":"0%"}, 1200, "swing",function(){
			$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left-300);
			$("body").removeClass("fixed");
			nowElevator = false;
			layersMovement = "horizontal";
		});
	}

	// 은행 애니메이션
	function animateBank(){
		makeMoneyfly();
		$(".bank-sign").animate({"top":"-5%"}, 700, "easeOutBounce", function(){			
			$(".flying-money").animate({"top":"-110%", "right":"-1200px"}, 1500, "swing", function(){
				canMoneyFly = false;
				$(".flying-money").animate({"top":"-0%"}, 700, "swing");
			});
		});
		$(".bank-sign-front img").addClass("rotate");
	}

	// 날개 파닥파닥
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
	}

	function makeMoneyfly(){
		if(canMoneyFly ==true){
			moneyFlyTimer = setInterval(function() { moneyfly() }, 200);
		}
	}

	var levelUpDone = false;
	//학원 레벨업
	function animateLevelUp(){
		levelUpDone = true; 	
		for(l=0; l<$(".level-aniOb").length; l++){
			if(l==$(".level-aniOb").length-1){
				$(".level-aniOb").eq(0).delay(l*100).animate({"top":"0","opacity":"1"}, 700, "easeOutBounce");	
				$(".skillup img").animate({"width":"211px","top":"0"}, 500, "easeOutBounce");
			}else{
				$(".level-aniOb").eq($(".level-aniOb").length-l-1).delay(l*100).animate({"top":"0","opacity":"1"}, 700, "easeOutBounce");	
			}
		}		
	}
	//학원 레벨업



	// 남편 만나는 애니메이션
	function sendHeart(){
		nowSendingHeart = true;
		var $heart = $(".husband .heart");
		for(h=0; h<$heart.length;h++){
			$heart.eq(h).delay(300 * h).animate({"width": "68px", "top":"0", "left":"-100px","opacity":"0"}, 700, "swing");
		}
	}

	// 신혼 폭죽, 하트
	function AnimateHoneymoonPops(){
		honeymoonPops = true;
		var $honeyPopItem = $(".honeymoon-aniOb");
		for(h=0; h<$honeyPopItem.length;h++){
			$honeyPopItem.eq(h).delay(200*h).animate({"width":"200px","opacity":"1"}, 800, "easeOutElastic");
		}
	}

	// 신혼집 애니메이션
	function houseHeart(){
		houseHeartDone = true;
		var $heart = $(".house-heart");
		for(h=0; h<$heart.length;h++){
			$heart.eq(h).delay(300 * h).animate({"width": "68px", "top":"150px", "left":"70%","opacity":"0"}, 800, "swing");
		}
	}

	var husbandCanJump = false,
  		husbandBackCounter = 0,
		husbandJumpTimer;

	//남편이 돌아와 점프하는 애니메이션
	function husbandBackJump(){
		if(husbandCanJump==false){
			$(".husbandBack img").css("left","0px");
			clearInterval(husbandJumpTimer);
		}else if(husbandCanJump==true){
			$(".husbandBack img").css("left", (-1 * 116 * husbandBackCounter)  + "px");
			if(husbandBackCounter>=1){
				husbandBackCounter = 0;
			}else{
				husbandBackCounter++;
			}
		}
	};
	function makehusbandJump(){
		if(husbandCanJump == true){
			husbandJumpTimer = setInterval(function() { husbandBackJump() }, 500);
		}
	}
	//남편이 돌아와 점프하는 애니메이션


	var grandpaCanMove = false, 
  		grandpaMoveCounter = 0,
		grandpaMoveTimer;
	//아버지 보행기 움직이는 애니메이션
	function grandpaMove(){	
		if(grandpaCanMove==false){
			$(".grandpa img").css("left","0px");
			clearInterval(grandpaMoveTimer);
		}else if(grandpaCanMove==true){
			$(".grandpa img").css("left", (-1 * 133 * grandpaMoveCounter)  + "px");
			if(grandpaMoveCounter>=1){
				grandpaMoveCounter = 0;
			}else{
				grandpaMoveCounter++;
			}
		}	
	};	
	function makeGrandpaMove(){
		if(grandpaCanMove == true){
			grandpaMoveTimer = setInterval(function() { grandpaMove() }, 500);
		}
	};
	//아버지 보행기 움직이는 애니메이션


	var neighboorCanHello = false,
  		neighboorHelloCounter = 0,
		neighboorHelloTimer;

	//옆집 아주머니 인사하는 액션
	function neighboorHello(){
		if(neighboorCanHello==false){
			$(".neighboor-family-holder .mom img").css("left","0px");
			clearInterval(neighboorHelloTimer);
		}else if(neighboorCanHello==true){
			$(".neighboor-family-holder .mom img").css("left", (-1 * 110 * neighboorHelloCounter)  + "px");
			if(neighboorHelloCounter>=2){
				neighboorHelloCounter = 0;
			}else{
				neighboorHelloCounter++;
			}
		}
	}

	function makeNeighboorHello(){
		if(neighboorCanHello == true){
			neighboorHelloTimer = setInterval(function() { neighboorHello() }, 300);
		}
	}
	//옆집 아주머니 인사하는 액션

	// 장난감 뛰어오는 액션
	var isToyRun = false;		
	function makeToyRun(){
		 isToyRun = true;
		$(".move-fast img").animate({"left":"0"}, 400, "swing", function(){
			$(".big-toy img").animate({"left":"0"}, 800, "easeOutBounce");
		});
	};
	// 장난감 뛰어오는 액션

	var annuityGiven = false;
	// 동사무소 기초연금 지원
	function annuitySupport(){
		annuityGiven = true;
		var $annuityItem = $(".support-money");
		for(a=0; a<$annuityItem.length;a++){
			$annuityItem.eq(a).find("img").delay(200*a).animate({"width":"150px","opacity":"1", "left":"0"}, 800, "easeOutBounce");
			if(a==2){ $(".surplus img").animate({"width":"59px","opacity":"1", "top":"0"}, 800, "easeOutBounce");}
		}
	}
	// 동사무소 기초연금 지원


	var canSeagullMove = false, 
  		SeagullMoveCounter = 0,
		SeagullMoveTimer;

	// 갈매기 파닥파닥
	function SeagullMove(){	
		if(canSeagullMove==false){
			$(".sea-gull img").css("left","0px");
			clearInterval(SeagullMoveTimer);
		}else if(canSeagullMove==true){
			$(".sea-gull img").css("left", (-1 * 100 * SeagullMoveCounter)  + "px");
			if(SeagullMoveCounter>=1){
				SeagullMoveCounter = 0;
			}else{
				SeagullMoveCounter++;
			}
		}	
	};	
	function makeSeagullMove(){
		if(canSeagullMove == true){
			SeagullMoveTimer = setInterval(function() { SeagullMove() }, 250);
		}
	};
	// 갈매기 파닥파닥


	//// 캐릭터 스테이지마다 바뀌는 부분 구분 체크 /////
	function hideChrBoxforChange(){
		$(".character-holder .character-box").hide();
		$(".character-holder .character-spread").hide();
		$(".husbandBack-stand").hide();
		$(".grandma-stand").hide();
		$(".grandpa-stand").hide();
		$(".dimension-bg").fadeOut();
		$(".car-wheel").removeClass("car-wheel-rotate");
		$(".passenger > div").hide();
		husbandCanJump = false;
		neighboorCanHello = false;
		grandpaCanMove = false;
		canSeagullMove = false;
	};

	function changeChrBox(n){

		if( nowChrStage == n){ // 스테이지 같음 아무런 액션 하지 않음
		}else if( nowChrStage !== n ){ //스테이지 바뀜
			nowChrStage = n;
			console.log("캐릭터 "+n+"번째 스테이지");
			hideChrBoxforChange();
			if(n>=12){
				$(".dimension-bg-oldYear").fadeIn();
			}
			if(n==0 || n==2){ // 기본복장
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread-a").show();
			}else if(n==1){ //학사모
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread-b").show();
			}else if(n==3 || n==12){ //정장
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread-c").show();
				if(n==12){  $(".grandma-stand").show();}
			}else if(n==4){ // 비행기
				$(".character-holder .character-box-plane").show();
				$(".dimension-bg-wedding").fadeIn();
			}else if(n==5){ // 신혼여행 끝
				weddingPlaneComplete = true;
				$(".character-holder .character-box-wedding").show();
				$(".character-holder .character-box-wedding .character-spread").show();
				$(".dimension-bg-night").fadeIn();
			}else if(n==6){ // 신혼집 이후 아내 임신
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-box-normal-husband").show();
				$(".character-holder .character-spread-f").show();
				$(".character-holder .character-spread-g").show();
			}else if(n==7){ // 출산 아이 함께
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-box-normal-husband").show();
				$(".character-holder .character-spread-h").show();
				$(".character-holder .character-spread-g").show();
			}else if(n==8 || n==10){ // 출산 이후 남편 정장 & 집 앞에서 남편 만남
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-box-normal-husband").show();
				$(".character-holder .character-spread-j").show();
				$(".character-holder .character-spread-i").show();
			}else if(n==9){ // 출산 이후 남편 출근, 아내 혼자 남음
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread-j").show();
				$(".husbandBack-stand").show();
				husbandCanJump = true; 
				makehusbandJump();
			}else if(n==11){ // 아내와 남편 육아 바톤터치
				$(".character-holder .character-box-normal-husband").show();
				$(".character-holder .character-spread-k").show();
				neighboorCanHello = true; 
			    makeNeighboorHello();
			}else if(n==13){ // 정장 아내 + 친정엄마
				$(".character-holder .character-box-normal").show();
				$(".character-holder .character-spread-c").show();
				$(".character-holder .character-box-normal-grandma").show();
				$(".character-holder .character-spread-l").show();
			}else if(n==14){ // 아내 + 남편 + 친정엄마 차안에
				$(".character-holder .character-box-car").show();
				$(".grandpa-stand").show();
				$(".car-grandma").show();
				$(".car-woman").show();
				$(".car-man").show();
				$(".car-wheel").addClass("car-wheel-rotate");
				grandpaCanMove= true; 
				//makeGrandpaMove();
			}else if(n==15){ // 아내 + 남편 + 친정엄마 + 친정아빠 차안에
				$(".character-holder .character-box-car").show();
				$(".car-grandpa").show();
				$(".car-grandma").show();
				$(".car-woman").show();
				$(".car-man").show();
				$(".car-wheel").addClass("car-wheel-rotate");
				canSeagullMove = true;
				makeSeagullMove();
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
	}
	////// 캐릭터 스테이지 구분 체크  /////

	//// 라이프사이클 스테이지 구분 ////
	function adjustStage(s){
		if( nowLifeStage == s){
		}else if( nowLifeStage !==s ){
			nowLifeStage = s;	
			$(".stage-navi .navi-wrap ul li").removeClass("on");
			if(s==0){				
				console.log("스테이지 진입 전 입니다");
			}else{
				$(".stage-navi .navi-wrap ul li").eq(s-1).addClass("on");
				console.log("지금은 "+s+"번째 스테이지 입니다");
			}			
			
		}	
	};

	var $stagePoint = $(".flag-point");
	var nowLifeStage = 0; 

	function checkStage(){
		var chrPos = VP + $(".character-holder").position().left;
		if( chrPos < $stagePoint.eq(0).position().left){ // stage 0
			adjustStage(0);
		}else if( chrPos >= $stagePoint.eq($stagePoint.length-1).position().left ){ // lastStage
			adjustStage($stagePoint.length);
		}else if( chrPos >= $stagePoint.eq(0).position().left && chrPos < $stagePoint.eq($stagePoint.length-1).position().left){
			for(s=0;s<$stagePoint.length-1;s++){
				if( chrPos >= $stagePoint.eq(s).position().left && chrPos <$stagePoint.eq(s+1).position().left){
					adjustStage(s+1);
				}
			}
		}
	}
	//// 라이프사이클 스테이티 구분 ////
	function makePolicyLayer(){
	
	

	}

	function hidePolicyLayer(){
		$(".hide-btn").hide();
		$(".info-layer").stop().animate({"top":"0"}, 500);
		$(".toggle-box").stop().slideUp(400, "easeInOutCubic", function(){
			$(".show-btn").fadeIn();
		});	
	}
	function ShowPolicyLayer(){
		$(".show-btn").hide();
		$(".info-layer").stop().animate({"top":"20px"}, 500);
		$(".toggle-box").stop().slideDown(400, "easeInOutCubic", function(){
			$(".hide-btn").fadeIn();
		});	
	}
	//// 정책 스테이지 구분 ////
	function showPolicyLayer(s){
		if( nowPolicyStage == s){
		}else if( nowPolicyStage !==s ){
			nowPolicyStage = s;
			if( s == 0){
				console.log("레이어 밖");
				hidePolicyLayer();
			}else{
				console.log(nowPolicyStage+"번째 정책 레이어");
				ShowPolicyLayer();
			}			
		}
	}

	var $policyPoint = $(".policy-layer-point");
	var nowPolicyStage = 0; 

	function checkPolicy(){
		var chrPos = VP + $(".character-holder").position().left;
		if( chrPos <  $policyPoint.eq(0).position().left){
			showPolicyLayer(0);
		}else if( chrPos >= $policyPoint.eq($policyPoint.length-1).position().left){
			showPolicyLayer(0);
		}else{
			for(p=0; p<$policyPoint.length; p++){
				var policyStart = $policyPoint.eq(p).position().left,
					policyEnd = $policyPoint.eq(p).position().left+$policyPoint.eq(p).width();
				if( chrPos >= policyStart && chrPos < policyEnd ){
					showPolicyLayer(p+1);
				}else if( chrPos >= policyEnd && chrPos < $policyPoint.eq(p+1).position().left ){
					showPolicyLayer(0);
				}
			}
		}
	
	}
	//// 정책 스테이지 구분 ////



	// progress bar 그리기
	function getPrgoressColor(){
		switch (nowLifeStage){
			case 0 :
				return "#fff";
				break;
			case 1 :
				return "#607aff";
				break;
			case 2 :
				return "#ffd802";
				break;
			case 3 :
				return "#ff6d8c";
				break;
			case 4 :
				return "#bcd133";
				break;
			case 5 :
				return "#0067a5";
				break;
			case 6 :
				return "#ff7800";
				break;		
		}
	};

	function drawProgressBar(){
		var nowScroll = VP;
		var fullScroll = scrollDetph-screenWidth;
		var ScrollPer = (nowScroll/fullScroll)*100;
		if(isMobile==true){
			$(".scroll-value").css({"width": ScrollPer+"%","background":getPrgoressColor()});
		}else{
			$(".scroll-value").css({"height": ScrollPer+"%", "background":getPrgoressColor()});
		}
	
	}

	//// 네비게이션 클릭 ////
	$(".stage-navi .navi-wrap ul li").on("click", function(){
		$(".character-holder").hide();
		$(".character-holder").fadeIn();
		var nav_index = $(this).index();
		var movePos = $stagePoint.eq(nav_index).position().left;
		window.scrollTo(0, movePos);		
	});

	//// 네비게이션 클릭 ////
		

	//// 정책 레이어 여닫기 ///
	$(".hide-btn").on("click", function(){		
		hidePolicyLayer();
	});
	$(".show-btn").on("click", function(){
		ShowPolicyLayer();
	});
	//// 정책 레이어 여닫기 ///


	function touchInit(){

		document.addEventListener("touchstart", handleStart, !1), document.addEventListener("touchmove", handleMove, !1), document.addEventListener("touchend", handleEnd, !1)

	}

	function handleStart(e){
		touchStartX = e.targetTouches[0].pageX;
		touchVP = VP;
	}

	function handleMove(e){
		e.preventDefault();
		touchCurrentX = e.targetTouches[0].pageX;
		if (canScroll == true){
			detectPageVerticalPosition();
			scrollAct();
		}
	}

	function handleEnd(e){
		e.preventDefault();
		touchEndX = e.changedTouches[0].pageX;
		return false;
	}

	function afterLoad(){
		$("body").removeClass("fixed");
		$(".horizon-dimension").animate({"top":"0%"}, 1200, "easeInCubic");
		$(".loading-page").animate({"position":"absolute", "top":"-100%"}, 1200, "easeInCubic", function(){
			chrFall();
			ShowCharacterBox();
		});
	}

	function scrollAct(){
		checkChrBoxState();
		checkStage();
		makeChrRun();
		moveLayers();
		animateObject(nowLifeStage);
		orientChr();
		chrJumpCheck();
		drawProgressBar();
		checkPolicy();
	}

	settingDimenstionWidth();
	setLayerSpeed();

	$(window).on("load", function(){
		afterLoad();
		touchInit();
	})
	.on("scroll", function() {
		if (canScroll == true){
			detectPageVerticalPosition();
			scrollAct();
		} else {
			window.scrollTo(0, 0);
		}
	}).on("onbeforeunload" , function(){
		window.scrollTo(0, 0);
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
