(function () {
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height();

	var controller = new ScrollMagic.Controller();

	var horizon_tween_1 = TweenMax.to(".horizon-dimension-1", 0.5, {
								left: -( $(".horizon-dimension-1").width()-screenWidth )
						   });
	var horizon_tween_2 = TweenMax.to(".horizon-dimension-2", 0.5, {
								left: -( $(".horizon-dimension-2").width()-screenWidth )
						   });
	var horizon_tween_3 = TweenMax.to(".horizon-dimension-3", 0.5, {
								left: -( $(".horizon-dimension-3").width()-screenWidth )
						   });
	var horizon_tween_4 = TweenMax.to(".horizon-dimension-4", 0.5, {
								left: -( $(".horizon-dimension-4").width()-screenWidth )
						   });

	
	var b_h = 300;
	new ScrollMagic.Scene({
				triggerElement: $(".actual-scroll")[0],
				triggerHook: "onEnter",
				offset: $(".dimension-holder").offset().top,
				duration: $(".actual-scroll").height()-$(".dimension-holder").offset().top
			}).setTween(horizon_tween_1).addTo(controller).addIndicators();
			
	new ScrollMagic.Scene({
				triggerElement: $(".actual-scroll")[0],
				triggerHook: "onEnter",
				offset: $(".dimension-holder").offset().top,
				duration: $(".actual-scroll").height()-$(".dimension-holder").offset().top
			}).setTween(horizon_tween_2).addTo(controller).addIndicators();

	new ScrollMagic.Scene({
				triggerElement: $(".actual-scroll")[0],
				triggerHook: "onEnter",
				offset: $(".dimension-holder").offset().top,
				duration: $(".actual-scroll").height()-$(".dimension-holder").offset().top
			}).setTween(horizon_tween_3).addTo(controller).addIndicators();
		
	new ScrollMagic.Scene({
				triggerElement: $(".actual-scroll")[0],
				triggerHook: "onEnter",
				offset: $(".dimension-holder").offset().top,
				duration: $(".actual-scroll").height()-$(".dimension-holder").offset().top
			}).setTween(horizon_tween_4).addTo(controller).addIndicators();


    new ScrollMagic.Scene({
			duration: $(".actual-scroll").height()-$(".dimension-holder").offset().top,
			offset: $(".dimension-holder").offset().top,
			triggerHook: "onEnter"
		}).setPin(".dimension-holder").addTo(controller).addIndicators();

	for(i=0; i<3; i++){
		$info = $(".info-layer .info-board").find(".each-item");
		new ScrollMagic.Scene({
		    triggerElement: $(".info-trigger")[i],
			duration: 500,
			offset: $(".dimension-holder").offset().top,
			triggerHook: "onEnter"
		}).setTween(TweenMax.to( $info.eq(i), 0.5, {
								display: "block",
								opacity: 1,
								scale: 1
						   })).addTo(controller);	
	}
  


  /*
	var scene1 = new ScrollMagic.Scene({
      triggerElement: "#trigger1", 
            triggerHook: 0.8
    })
    .setClassToggle("#animate1", "visible")
    .addTo(controller)
    .addIndicators();
    
    var revealElements = document.getElementsByClassName("animation2");
    for (var i=0; i<revealElements.length; i++) {
        
        var scene2 = new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addTo(controller)
        .addIndicators({name: "(box) " + (i+1), colorStart:"#F6B352", colorTrigger:"#F6B352"});
    }
    */

}())