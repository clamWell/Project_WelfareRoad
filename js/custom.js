function sendSns(e){var a=encodeURIComponent(location.href),t=encodeURIComponent($("title").html());switch(e){case"facebook":window.open("http://www.facebook.com/sharer/sharer.php?u="+a);break;case"twitter":window.open("http://twitter.com/intent/tweet?text="+t+"&url="+a)}}$(function(){var e=!1,o=$(window).width(),n=$(window).height(),i=o<=800,r=o>400&&o<=800&&n<450,u=navigator.userAgent.toLowerCase();e="Netscape"==navigator.appName&&-1!=u.indexOf("trident")||-1!=u.indexOf("msie");var g,w,b,y,v,x,C=navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?"iosdevice":navigator.userAgent.match(/Android/i)?"android":navigator.userAgent.match(/BlackBerry/i)?"blackberry":navigator.userAgent.match(/IEMobile/i)?"iemobile":navigator.userAgent.match(/Silk/i)?"kindle":"computer",k=$(".character-spread"),O=$(".actual-scroll").height();$scrContainer=$(".scroll-animate-area"),$dimensionHorizon=$(".horizon-dimension"),dimensionSpeed=new Array,$changePoint=$(".change-point"),$stagePoint=$(".flag-point"),$aniObs=$(".aniOb");var P,D,q,M,E,U,S,I,T,z,B,G,H,A="run",N=!1,L=$(".character-holder").width(),j=1,X=2,J=0,R=1,_=!1,V=.2*$(".character-holder").position().left,Y=.6*(o-$(".character-holder").position().left-$(".character-holder").width()),F=0,K=touchStartX=touchCurrentX=touchEndX=0,Q="horizontal",W=$(".flying-money").width(),Z=[],ee=0,ae={v:0,m:0,p:0,call:""},te=0,oe=0,ne=0,ie=0,re=0,se=!0,le=0,ce=[!1,!1,!1],he=[!1,!1,!1,!1,!1,!1],pe=nowSendingHeart=workBuildingArrive=nowElevator=weddingPlaneGoUp=weddingPlaneGoDown=weddingPlaneComplete=honeymoonPops=houseHeartDone=drugGiven=babyCry=changeImgShow=goMartDown=goMartUp=goMartComplete=outMartUp=outMartDown=outMartComplete=babyVaccineDone=skillCardShow=husbandCanJump=neighboorCanHello=isToyRun=grandpaCanMove=annuityGiven=canSeagullMove=levelUpDone=parentalLeaveShow=!1;if(1==r)$(".character-holder").css({left:"120px"});else if(1==i){$(".character-holder").css({left:(o-$(".character-holder").width())/2+"px"});var de=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",de+"px")}function ue(){$(".character-holder").stop().animate({bottom:"15%"},800,"swing",function(){fe(),$(".intro-title .main-title-1 img").animate({left:"0",top:"0px",opacity:"1"},500,"easeInOutBack"),$(".intro-title .main-title-2 img").delay(200).animate({left:"0",top:"0px",opacity:"1"},400,"easeInOutBack",function(){$(".charcter-baloon").fadeIn(),$(".intro-title .sub-title img").animate({left:"0px",opacity:"1"},500,"swing")}),window.setTimeout(function(){P=!0,N=!0,$(".intro-manual").show()},500)})}function fe(){k.css("left","0px")}function $e(){k.css("left",-1*L*3)}function me(){if(1!=_){var e=5==te?$(".character-box-wedding").width():11==te?$(".character-box-family").width():L;if("run"==A&&(D=j,q=X),k.css("left",-1*e*J+"px"),D+J+R>q&&(R=-1),D+J+R==D&&(U=F),D+J+R<D){if(U==F)return clearInterval(M),fe(),J=1,R=1,void(N=!0);R=1}J+=R}}function ge(){$(".jump-point").each(function(e){var a;a=this,(S<=$(a).position().left-Y&&F>$(a).position().left-Y||S>=$(a).position().left+$(a).width()-V&&F<$(a).position().left+$(a).width()-V)&&(_=!0,$e(),$(".character-holder").stop().animate({bottom:["30%","swing"]},250,function(){!function(e){F>$(e).position().left-Y&&F<$(e).position().left+$(e).width()-V&&$(".character-holder").stop().animate({bottom:["15%","easeInCubic"]},150,function(){_=!1,fe()})}(a)})),function(e){(S<$(e).position().left-V+$(e).width()&&F>=$(e).position().left-V+$(e).width()||S>$(e).position().left-Y&&F<=$(e).position().left-Y)&&$(".character-holder").stop().animate({bottom:["15%","easeInCubic"]},150,function(){_=!1,fe()})}(this)})}function we(){"vertical"==Q?F=T:"horizontal"!=Q&&"verticalUpdown"!=Q&&"objectUpdown"!=Q||(S=F,"computer"==C?F=1==e?document.documentElement.scrollTop:pageYOffset:((F=K+(touchStartX-touchCurrentX))<0&&(F=0),F>$(".actual-scroll").height()-o&&(F=$(".actual-scroll").height()-o)),I=F-S,F<=0&&Re(0))}function be(){if(0==Fe&&F>.2*o&&(Fe=!0,$(".intro-manual").hide(),$(".stage-navi").addClass("navi-show"),1==i?$(".info-layer ").animate({top:"35px"},500):$(".info-layer ").animate({top:"0px"},500),1==i&&setTimeout(function(){$(".stage-navi .des").hide()},3e3)),"horizontal"==Q){for(a=0;a<$aniObs.length;a++){var e=$aniObs.eq(a).position().left;if(aniObsEndPos=$aniObs.eq(a).position().left+$aniObs.eq(a).width(),F+.7*o>e&&F+.7*o<aniObsEndPos&&$aniObs.eq(a).hasClass("bank-sign")&&0==pe&&(pe=!0,xe()),$aniObs.eq(a).hasClass("academy-area")&&F+.5*o>e&&F+.7*o<aniObsEndPos&&0==levelUpDone&&Oe(),F+.7*o>e&&F+.7*o<aniObsEndPos&&$aniObs.eq(a).hasClass("meet-husband")&&0==nowSendingHeart&&Pe(),F+$(".character-holder").position().left>aniObsEndPos&&$aniObs.eq(a).hasClass("meet-husband")?$(".husband .husband-holder img").css({left:-1*$(".husband .husband-holder").width()+"px"}):F+$(".character-holder").position().left<=aniObsEndPos&&$aniObs.eq(a).hasClass("meet-husband")&&$(".husband .husband-holder img").css({left:"0px"}),$aniObs.eq(a).hasClass("workbuilding-area")&&F+$(".character-holder").position().left>aniObsEndPos&&0==weddingPlaneGoUp&&0==weddingPlaneComplete){weddingPlaneGoUp=!0,x=$(".wedding-photo-area").position().left+$(".wedding-photo-area").width()/2-aniObsEndPos;var t=1==i?180:350;(Z=[]).push({start:"horizontal",o:$(".character-box-plane"),s:0,e:-1*t,m:0,p:t/x*-1,call:"objectUpdown"}),Z.push({start:"objectUpdown",o:$(".character-box-plane"),s:-1*t,e:0,m:-1*t,p:t/x,call:"verticalUpdown"});var r=1==i?520:1140,s=1==i?150:500;ae.start="objectUpdown",ae.s=r,ae.e=0,ae.m=r,ae.p=r/($changePoint.eq(4).position().left-s-aniObsEndPos-2*x)*-1,ae.call="horizontal",Q="objectUpdown"}else $aniObs.eq(a).hasClass("workbuilding-area")&&F+$(".character-holder").position().left<=aniObsEndPos&&(1==weddingPlaneGoUp||1==weddingPlaneGoDown||1==weddingPlaneComplete)&&(weddingPlaneGoUp=!1,weddingPlaneComplete=!1,weddingPlaneGoDown=!1);if($aniObs.eq(a).hasClass("workbuilding-area")&&F+$(".character-holder").position().left<=$changePoint.eq(4).position().left&&0==weddingPlaneGoDown&&1==weddingPlaneGoUp&&1==weddingPlaneComplete){weddingPlaneGoDown=!0,x=$(".wedding-photo-area").position().left+$(".wedding-photo-area").width()/2-aniObsEndPos;t=1==i?180:350;(Z=[]).push({start:"horizontal",o:$(".character-box-plane"),s:-1*t,e:0,m:-1*t,p:t/x,call:"objectUpdown"}),Z.push({start:"objectUpdown",o:$(".character-box-plane"),s:0,e:-1*t,m:0,p:t/x*-1,call:"verticalUpdown"});r=1==i?520:1140,s=1==i?150:500;ae.start="objectUpdown",ae.s=0,ae.e=r,ae.m=0,ae.p=r/($changePoint.eq(4).position().left-s-aniObsEndPos-2*x),ae.call="horizontal",Q="verticalUpdown"}else $aniObs.eq(a).hasClass("workbuilding-area")&&F+$(".character-holder").position().left<=$changePoint.eq(4).position().left&&1==weddingPlaneGoDown&&1==weddingPlaneGoUp&&1==weddingPlaneComplete&&(Q="verticalUpdown");if($aniObs.eq(a).hasClass("wedding-photo-area")&&F+$(".character-holder").position().left>e-1e3&&0==honeymoonPops&&De(),$aniObs.eq(a).hasClass("honeymoon-house-area")&&F+$(".character-holder").position().left>e+.3*o&&0==houseHeartDone&&qe(),$aniObs.eq(a).hasClass("healthcenter-area")&&F+$(".character-holder").position().left>aniObsEndPos-.5*o&&0==drugGiven){drugGiven=!0;var l=$(".drug-aniOb");for(d=0;d<l.length;d++)l.eq(d).find("img").delay(300*d).animate({top:"0px",opacity:"1"},800,"easeOutElastic")}$aniObs.eq(a).hasClass("hospital-area")&&F+$(".character-holder").position().left>aniObsEndPos-300&&0==babyCry&&(babyCry=!0,$(".babycry img").animate({width:1==i?"150px":"230px",opacity:"1"},800,"easeOutElastic")),F+.7*o>$(".parental-leave-text-holder").position().left&&0==parentalLeaveShow&&Ee();var c=$(".mart-escalator-shade").width();if($aniObs.eq(a).hasClass("mart-area")&&F+$(".character-holder").position().left>e+.1*c&&0==goMartDown&&0==goMartComplete){goMartDown=!0;var h=1==i?450:.8*n;ae.start="horizontal",ae.s=0,ae.m=0,ae.e=-1*h,ae.p=h/(.6*c)*-1,ae.call="horizontal",Q="verticalUpdown"}else if($aniObs.eq(a).hasClass("mart-area")&&F+$(".character-holder").position().left<=e+.75*c&&1==goMartDown&&1==goMartComplete&&0==goMartUp){goMartUp=!0;h=1==i?450:.8*n;ae.start="horizontal",ae.s=-1*h,ae.e=0,ae.m=-1*h,ae.p=h/(.6*c),ae.call="horizontal",Q="verticalUpdown"}else $aniObs.eq(a).hasClass("mart-area")&&F+$(".character-holder").position().left<=e+.1*c?(goMartUp=!1,goMartDown=!1,goMartComplete=!1):$aniObs.eq(a).hasClass("mart-area")&&F+$(".character-holder").position().left>e+.75*c&&1==goMartDown?goMartComplete=!0:$aniObs.eq(a).hasClass("mart-area")&&F+$(".character-holder").position().left<e+.75*c&&1==goMartUp&&1==goMartDown&&1==goMartComplete&&(Q="verticalUpdown");if($aniObs.eq(a).hasClass("mart-escalator-reverse-shade")&&F+$(".character-holder").position().left>e+.1*c&&0==outMartUp&&0==outMartComplete){outMartUp=!0;h=1==i?450:.8*n;ae.start="horizontal",ae.s=-1*h,ae.m=-1*h,ae.e=0,ae.p=h/(.6*c),ae.call="horizontal",Q="verticalUpdown"}else if($aniObs.eq(a).hasClass("mart-escalator-reverse-shade")&&F+$(".character-holder").position().left<=e+.75*c&&1==outMartUp&&1==outMartComplete&&0==outMartDown){outMartDown=!0;h=1==i?450:.8*n;ae.start="horizontal",ae.s=0,ae.e=-1*h,ae.m=0,ae.p=h/(.6*c)*-1,ae.call="horizontal",Q="verticalUpdown"}else $aniObs.eq(a).hasClass("mart-escalator-reverse-shade")&&F+$(".character-holder").position().left<=e+.1*c?(outMartUp=!1,outMartDown=!1,outMartComplete=!1):$aniObs.eq(a).hasClass("mart-escalator-reverse-shade")&&F+$(".character-holder").position().left>e+.75*c&&1==outMartUp?outMartComplete=!0:$aniObs.eq(a).hasClass("mart-escalator-reverse-shade")&&F+$(".character-holder").position().left<e+.75*c&&1==outMartUp&&1==outMartDown&&1==outMartComplete&&(Q="verticalUpdown");$aniObs.eq(a).hasClass("player-change")&&F+$(".character-holder").position().left+.2*o>e&&F+$(".character-holder").position().left<aniObsEndPos&&0==changeImgShow&&(changeImgShow=!0,$(".change-img-holder").addClass("change-img-holder-show")),$aniObs.eq(a).hasClass("healthcenter-area-second")&&F+$(".character-holder").position().left>e+400&&F+$(".character-holder").position().left<aniObsEndPos&&0==babyVaccineDone&&(babyVaccineDone=!0,$(".baby-vaccine").addClass("baby-vaccine-show")),$aniObs.eq(a).hasClass("skill-card-area")&&F+.5*o>e&&F+$(".character-holder").position().left<aniObsEndPos&&0==skillCardShow&&(skillCardShow=!0,$(".skill-card img").animate({width:1==i?"180px":"289px",top:"0"},600,"easeOutBounce"),$(".skill-up-text img").delay(100).animate({width:1==i?"150px":"182px"},500,"easeOutBounce")),$aniObs.eq(a).hasClass("community-center-area")&&F+.7*o>e&&F+.7*o<aniObsEndPos&&0==annuityGiven&&Ie(),$aniObs.eq(a).hasClass("park-area")&&F+.5*o>e&&F<aniObsEndPos&&0==isToyRun&&Se()}if(-1!==ce.indexOf(!1))for(m=0;m<$(".mart-shelves").length;m++)F+$(".character-holder").position().left>$(".mart-area").position().left+$(".mart-shelves").eq(m).position().left-200&&0==ce[m]&&(ce[m]=!0,$(".mart-shelves").eq(m).find(".mart-item img").addClass("show"));var p=1==i?0:50;if(F+$(".character-holder").position().left>$(".workbuilding-area").position().left-p&&0==workBuildingArrive&&0==nowElevator&&(Q="vertical",T=$(".workbuilding-area").position().left-$(".character-holder").position().left,workBuildingArrive=!0,$("body").addClass("fixed"),$("html, body").css({scrollTop:$(".workbuilding-area").position().left-$(".character-holder").position().left},(nowElevator=!0,void $(".horizon-dimension").stop().animate({top:1==i?"520px":"1140px"},1200,"swing",function(){$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left+ye),$("body").removeClass("fixed"),nowElevator=!1,Q="horizontal"})))),F+$(".character-holder").position().left<$(".workbuilding-area").position().left+p&&1==workBuildingArrive&&0==nowElevator&&(Q="vertical",T=$(".workbuilding-area").position().left-$(".character-holder").position().left,workBuildingArrive=!1,$("html, body").css({scrollTop:$(".workbuilding-area").position().left-$(".character-holder").position().left},(nowElevator=!0,void $(".horizon-dimension").stop().animate({top:"0%"},1200,"swing",function(){$("html, body").scrollTop($(".workbuilding-area").position().left-$(".character-holder").position().left-ye),$("body").removeClass("fixed"),nowElevator=!1,Q="horizontal"}))),$("body").addClass("fixed")),-1!==he.indexOf(!1))for(f=0;f<$(".flag-point").length;f++)F+$(".character-holder").position().left>$(".flag-point").eq(f).position().left-200&&0==he[f]&&(he[f]=!0,$(".flag-point").eq(f).find(".flag-color").animate({top:"30px"},1e3,"easeOutElastic"));if(F+$(".character-holder").position().left>$(".ending-harbor-area").position().left){var u=F+$(".character-holder").position().left-$(".ending-harbor-area").position().left;$(".character-box-car").css({left:-1*u+"px"}),$(".info-layer").hide(),$(".ending-layer").show(),$(".ending-layer").stop().animate({top:"30px"},800,"easeInOutCubic")}F+$(".character-holder").position().left<=$(".ending-harbor-area").position().left&&($(".info-layer").show(),$(".ending-layer").hide(),$(".ending-layer").css({top:"-500px"}))}}$(window).resize(function(){if(1==i){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}});var ye=1==i?100:200;function ve(){1==i?$(".flying-money").css({top:"25px",right:"0px",opacity:"1"}):$(".flying-money").css({top:"40px",right:"5px"}),setTimeout(function(){xe()},2e3)}function xe(){$(".bank-sign-front img").addClass("rotate"),$(".bank-sign").animate({top:1==i?"0%":"-25%"},500,"easeOutBounce",function(){for(f=0;f<$(".flying-money").length;f++)1==i?f==$(".flying-money").length-1?$(".flying-money").eq(f).delay(200*f).animate({top:"140%",right:"-350px",opacity:"0"},1200,"swing",function(){$(".bank-sign-front img").removeClass("rotate"),setTimeout(function(){ve()},500)}):$(".flying-money").eq(f).delay(200*f).animate({top:"140%",right:"-350px",opacity:"0"},1200,"swing"):f==$(".flying-money").length-1?$(".flying-money").eq(f).delay(200*f).animate({top:"-10%",right:"-1200px"},1200,"swing",function(){$(".bank-sign-front img").removeClass("rotate"),setTimeout(function(){ve()},1e3)}):$(".flying-money").eq(f).delay(200*f).animate({top:"-10%",right:"-1200px"},1200,"swing")})}function Ce(e,a){var t=e,o=t.width()/2;function n(){t.css({left:-o+"px"}),setTimeout(function(){t.css({left:0}),setTimeout(function(){t.css({left:-o+"px"})},a)},a)}setInterval(function(){n()},2*a)}function ke(e,a,t){var o=e,n=o.width()/a,i=0;setInterval(function(){o.css({left:-n*i+"px"}),i>=a-1?i=0:i++},t)}function Oe(){for(levelUpDone=!0,l=0;l<$(".level-aniOb").length;l++)l==$(".level-aniOb").length-1?$(".level-aniOb").eq(0).delay(100*l).animate({top:"0",opacity:"1"},700,"easeOutBounce",function(){$(".skillup img").animate({opacity:"1",top:"0"},500,"easeOutBounce",function(){setTimeout(function(){$(".level-aniOb").css({top:"30px",opacity:"0"}),$(".skillup img").css({opacity:"0",top:"-40px"}),setTimeout(function(){Oe()},500)},1e3)})}):$(".level-aniOb").eq($(".level-aniOb").length-l-1).delay(100*l).animate({top:"0",opacity:"1"},700,"easeOutBounce")}function Pe(){nowSendingHeart=!0;var e=$(".husband .heart");for(h=0;h<e.length;h++)e.eq(h).delay(300*h).animate({width:"30px",top:"0",left:"-100px",opacity:"0"},700,"swing")}function De(){honeymoonPops=!0;var e=$(".honeymoon-aniOb");for(h=0;h<e.length;h++)h==e.length-1?e.eq(h).delay(150*h).animate({width:1==i?"120px":"200px",opacity:"1"},800,"easeOutElastic",function(){setTimeout(function(){$(".honeymoon-aniOb").css({width:"0px",opacity:"0"}),setTimeout(function(){De()},500)},500)}):e.eq(h).delay(150*h).animate({width:1==i?"120px":"200px",opacity:"1"},800,"easeOutElastic")}function qe(){houseHeartDone=!0;var e=$(".house-heart");for(h=0;h<e.length;h++)e.eq(h).delay(300*h).animate({width:"68px",top:"150px",left:"70%",opacity:"0"},800,"swing")}function Me(){1==husbandCanJump&&(B=setInterval(function(){0==husbandCanJump?($(".husbandBack img").css("left","0px"),clearInterval(B)):1==husbandCanJump&&($(".husbandBack img").css("left",-116*ne+"px"),ne>=1?ne=0:ne++)},500))}function Ee(){parentalLeaveShow=!0;var e=$(".parental-leave-text-holder .text-holder > img");for(t=0;t<e.length;t++)e.eq(t).delay(100*t).animate({opacity:"1",top:"0"},500,"easeOutBounce")}function Ue(){1==neighboorCanHello&&(G=setInterval(function(){0==neighboorCanHello?($(".neighboor-family-holder .pa img").css("left","0px"),clearInterval(G)):1==neighboorCanHello&&($(".neighboor-family-holder .pa img").css("left",-110*ie+"px"),ie>=2?ie=0:ie++)},300))}function Se(){isToyRun=!0,$(".move-fast img").animate({left:"0"},400,"swing",function(){$(".big-toy .toy-holder").animate({left:"0"},800,"easeOutBounce")})}function Ie(){annuityGiven=!0;var e=$(".support-money");for(a=0;a<e.length;a++)e.eq(a).find("img").delay(200*a).animate({width:1==i?"90px":"150px",opacity:"1",left:"0"},800,"easeOutBounce"),2==a&&$(".surplus img").delay(200*a).animate({width:1==i?"30px":"59px",opacity:"1",top:"0"},800,"easeOutBounce",function(){setTimeout(function(){$(".support-money img").css({width:"0px",opacity:"0"}),$(".surplus img").css({width:"0px",opacity:"0"}),setTimeout(function(){Ie()},500)},500)})}function Te(){1==canSeagullMove&&(H=setInterval(function(){0==canSeagullMove?($(".sea-gull img").css("left","0px"),clearInterval(H)):1==canSeagullMove&&($(".sea-gull img").css("left",-1*$(".sea-gull").width()*re+"px"),re>=1?re=0:re++)},250))}function ze(e){$(".character-holder").css({opacity:"1"}),te==e||te!==e&&(te=e,$(".character-holder .character-box").hide(),$(".character-holder .character-spread").hide(),$(".intro-manual").hide(),$(".husbandBack-stand").hide(),$(".grandma-stand").hide(),$(".grandpa-stand").hide(),$(".husband").hide(),$(".dimension-bg").fadeOut(),$(".car-wheel").removeClass("car-wheel-rotate"),$(".passenger > div").hide(),$(".charcter-baloon").hide(),husbandCanJump=!1,neighboorCanHello=!1,grandpaCanMove=!1,canSeagullMove=!1,e>=12&&$(".dimension-bg-oldYear").fadeIn(),0==e||2==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-spread-a").show()):1==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-spread-b").show()):3==e||12==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-spread-c").show(),12==e?($(".husbandBack-stand").show(),husbandCanJump=!0,Me()):3==e&&$(".husband").show()):4==e?($(".character-holder .character-box-plane").show(),$(".dimension-bg-wedding").fadeIn()):5==e?(weddingPlaneComplete=!0,$(".character-holder .character-box-wedding").show(),$(".character-holder .character-box-wedding .character-spread").show(),$(".dimension-bg-night").fadeIn()):6==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-box-normal-husband").show(),$(".character-holder .character-spread-f").show(),$(".character-holder .character-spread-g").show()):7==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-box-normal-husband").show(),$(".character-holder .character-spread-a").show(),$(".character-holder .character-spread-o").show()):8==e||9==e||10==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-box-normal-husband").show(),$(".character-holder .character-spread-j").show(),$(".character-holder .character-spread-m").show()):11==e?($(".character-holder .character-box-family").show(),$(".character-holder .character-spread-n").show(),neighboorCanHello=!0,Ue()):13==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-box-normal-husband").show(),$(".character-holder .character-spread-c").show(),$(".character-holder .character-spread-i").show(),$(".grandma-stand").show()):14==e?($(".character-holder .character-box-normal").show(),$(".character-holder .character-box-normal-husband").show(),$(".character-holder .character-spread-c").show(),$(".character-holder .character-spread-i").show(),$(".character-holder .character-box-normal-grandma").show(),$(".character-holder .character-spread-l").show()):15==e?($(".character-holder .character-box-car").show(),$(".grandpa-stand").show(),$(".car-grandma").show(),$(".car-woman").show(),$(".car-man").show(),$(".car-wheel").addClass("car-wheel-rotate"),grandpaCanMove=!0):16==e&&($(".character-holder .character-box-car").show(),$(".car-grandpa").show(),$(".car-grandma").show(),$(".car-woman").show(),$(".car-man").show(),$(".car-wheel").addClass("car-wheel-rotate"),canSeagullMove=!0,Te()))}function Be(e){oe==e||oe!==e&&(oe=e,$(".stage-navi .navi-wrap ul li").removeClass("on"),0==e||$(".stage-navi .navi-wrap ul li").eq(e-1).addClass("on"))}1==se&&(z=setInterval(function(){0==se?($(".flying-money-slider").css("left",0),clearInterval(z)):($(".flying-money-slider").css("left",-1*W*le+"px"),le>=1?le=0:le++)},200)),Ce($(".flag img"),300),Ce($(".flying-resume img"),300),Ce($(".warm-holder img"),500),ke($(".sky-baloon img"),3,400),ke($(".fountain-area .fountain img"),4,300);var Ge=policyData.filter(function(e,a,t){return"yes"==t[a].represent});function He(e){switch(null==e?oe:e){case 0:return"-";case 1:return"청년";case 2:return"신혼";case 3:return"임신·출산";case 4:return"육아";case 5:return"재취업";case 6:return"노년"}}function Ae(e){switch(e){case 0:return"#fff";case 1:return"#607aff";case 2:return"#ffd802";case 3:return"#ff6d8c";case 4:return"#bcd133";case 5:return"#0067a5";case 6:return"#ff7800"}}function Ne(){$(".hide-btn").hide(),1==i?$(".info-layer").stop().animate({top:"35px"},500):$(".info-layer").stop().animate({top:"0px"},500),$(".info-layer").addClass("info-layer-box-close"),$(".toggle-box").stop().slideUp(200,"swing",function(){$(".show-btn").fadeIn()})}function Le(){$(".show-btn").hide(),1==i?$(".info-layer").stop().animate({top:"10px"},500):$(".info-layer").stop().animate({top:"20px"},500),$(".info-layer").removeClass("info-layer-box-close"),$(".toggle-box").stop().slideDown(400,"easeInOutCubic",function(){$(".hide-btn").fadeIn()})}function je(e){Je==e||Je!==e&&(Je=e,0==e?Ne():($(".tempo-box").hide(),$(".real-box").show(),function(e){var a=He()+"정책 "+Ge[e].policyStage.substr(Ge[e].policyStage.length-1);for($(".info-layer .policy-name").html(Ge[e].category),$(".info-layer .policy-panel .policy-desc-simple").css({"border-color":Ae(oe)}),$(".info-layer .policy-desc-simple p").html("<span class='type'>"+a+"</span>"+Ge[e].policy),$(".info-layer .policy-desc-specific p").html(Ge[e].desSpecific),$("#goPolicyRep").attr("href",Ge[e].link),$(".info-layer .policy-list ul").html(""),p=0;p<policyData.length;p++){var t=Ge[e].policyStage;policyData[p].policyStage==t&&"no"==policyData[p].represent&&(null==policyData[p].policyType?$(".info-layer .policy-list ul").append("<li><a href='"+policyData[p].link+"' target='_blank' class='goPolicyOther'><div class='each-policy policy-noType'><span class='name'>"+policyData[p].policy+"</span><p class='see-more'><span class='text'>정책 자세히 보기</span><span class='more-icon'><img src='http://img.khan.co.kr/spko/storytelling/2019/running/outlink-icon.png' alt=''></span></p></div></a></li>"):$(".info-layer .policy-list ul").append("<li><a href='"+policyData[p].link+"' target='_blank' class='goPolicyOther'><div class='each-policy'><span class='type'>"+policyData[p].policyType+"</span><span class='name'>"+policyData[p].policy+"</span><p class='see-more'><span class='text'>정책 자세히 보기</span><span class='more-icon'><img src='http://img.khan.co.kr/spko/storytelling/2019/running/outlink-icon.png' alt=''></span></p></div></a></li>"))}$("#policyList").scrollTop(0),Le()}(e-1)))}$(".tempo-box").hide(),$(".real-box").show();var Xe=$(".policy-layer-point"),Je=0;function Re(e){switch(e){case 0:ee=0,ae={v:0,m:0,p:0,call:""},se=!0,le=0,pe=!1,honeymoonPops=!1;case 1:houseHeartDone=!1;case 2:drugGiven=babyCry=!1;case 3:ce=[!1,!1,!1],babyVaccineDone=!1,husbandCanJump=!1,neighboorCanHello=!1,isToyRun=!1;case 4:skillCardShow=!1;case 5:grandpaCanMove=!1,annuityGiven=!1,canSeagullMove=!1}e>=1?(weddingPlaneComplete=weddingPlaneGoUp=!0,weddingPlaneGoDown=!1,ee=1):weddingPlaneGoUp=weddingPlaneGoDown=weddingPlaneComplete=!1,nowSendingHeart=workBuildingArrive=e>0,e<=3?(goMartDown=goMartUp=goMartComplete=!1,outMartUp=outMartDown=outMartComplete=!1):(goMartDown=goMartComplete=!0,goMartUp=!1,outMartUp=outMartComplete=!0,outMartDown=!1),he.forEach(function(a,t,o){a[t]=t<e}),fe()}function _e(e){touchStartX=e.targetTouches[0].pageX,K=F}function Ve(e){e.preventDefault(),touchCurrentX=e.targetTouches[0].pageX,1==P&&(we(),Ke())}function Ye(e){return e.preventDefault(),touchEndX=e.changedTouches[0].pageX,!1}$(".tempo-box").show(),$(".real-box").hide(),$(".hide-btn").on("click",function(e){e.preventDefault(),Ne()}),$(".show-btn").on("click",function(e){e.preventDefault(),Le()}),$(".stage-navi .navi-wrap ul li").on("mouseenter",function(){1==i||$(".stage-navi .des").show()}),$(".stage-navi .navi-wrap ul li").on("mouseleave",function(){1==i||$(".stage-navi .des").hide()}),$(".stage-navi .navi-wrap ul li").on("click",function(){var e=$(this).index();E=$stagePoint.eq(e).position().left,$(".character-holder").stop().fadeOut(100,function(){Re(e),"computer"==C?(window.scrollTo(0,E),Q="horizontal"):(F=E,Q="horizontal",Ke()),$(".horizon-dimension").css("top","0px"),setTimeout(function(){$(".character-holder").fadeIn()},500)})});var Fe=!1;function Ke(){var e,a,t;$(".charcter-baloon").hide(),function(){var e=F+$(".character-holder").position().left;if(e<$changePoint.eq(0).position().left)ze(0);else if(e>=$changePoint.eq($changePoint.length-1).position().left)ze($changePoint.length);else if(e>=$changePoint.eq(0).position().left&&e<$changePoint.eq($changePoint.length-1).position().left)for(c=0;c<$changePoint.length-1;c++)e>=$changePoint.eq(c).position().left&&e<$changePoint.eq(c+1).position().left&&ze(c+1)}(),function(){var e=F+$(".character-holder").position().left;if(e<$stagePoint.eq(0).position().left)Be(0);else if(e>=$stagePoint.eq($stagePoint.length-1).position().left)Be($stagePoint.length);else if(e>=$stagePoint.eq(0).position().left&&e<$stagePoint.eq($stagePoint.length-1).position().left)for(s=0;s<$stagePoint.length-1;s++)e>=$stagePoint.eq(s).position().left&&e<$stagePoint.eq(s+1).position().left&&Be(s+1)}(),1==N&&(N=!1,clearInterval(M),M=setInterval(function(){me()},200)),function(){if("vertical"==Q&&(F=T),oe<=2&&1==weddingPlaneGoDown||1==goMartUp||1==outMartDown?(b=ae.e,y=ae.s,v=-1):(b=ae.s,y=ae.e,v=1),"objectUpdown"==Q){if(1==weddingPlaneGoDown?(g=Z[ee].e,w=Z[ee].s):(g=Z[ee].s,w=Z[ee].e),I>0){if(v*Z[ee].p>0&&w<Z[ee].m||v*Z[ee].p<0&&w>Z[ee].m)return Z[ee].o.css("top",w+"px"),Q=Z[ee].call,void(Z.length!=ee+1&&ee++)}else if(I<0&&(v*Z[ee].p>0&&g>Z[ee].m||v*Z[ee].p<0&&g<Z[ee].m))return Z[ee].o.css("top",g+"px"),Q=Z[ee].start,void(ee>0&&ee--);Z[ee].m+=Z[ee].p*v*I,Z[ee].o.css("top",Z[ee].m+"px")}if("verticalUpdown"==Q){if(I>0){if(v*ae.p>0&&y<ae.m||v*ae.p<0&&y>ae.m)return Q=ae.call,void $(".horizon-dimension").css("top",y+"px")}else if(I<0&&(v*ae.p>0&&b>ae.m||v*ae.p<0&&b<ae.m))return Q=ae.start,void $(".horizon-dimension").css("top",b+"px");ae.m+=ae.p*v*I,$(".horizon-dimension").css("top",ae.m+"px")}for(var e=0;e<$dimensionHorizon.length;e++)$dimensionHorizon.eq(e).css("left",-1*dimensionSpeed[e]*F+"px")}(),be(),4==te?(e=$(".plane-holder"),a=-1*$(".plane-holder").height()):(e=k,a=-$(".character-holder").height()),I>0&&e.css("top","0px"),I<0&&e.css("top",a+"px"),ge(),t=F/(O-o)*100,1==i?$(".scroll-value").css({width:t+"%",background:Ae(oe)}):$(".scroll-value").css({height:t+"%",background:Ae(oe)}),function(){var e=F+$(".character-holder").position().left;if(e<Xe.eq(0).position().left)je(0);else if(e>=Xe.eq(Xe.length-1).position().left+Xe.eq(Xe.length-1).width())je(0);else for(p=0;p<Xe.length;p++){var a=Xe.eq(p).position().left,t=Xe.eq(p).position().left+Xe.eq(p).width();e>=a&&e<t?je(p+1):e>=t&&e<Xe.eq(p+1).position().left&&je(0)}}()}function Qe(){$("body").removeClass("fixed"),$(".search-list-area").hide(),$(".top-wave .wave-deco-1").css({left:"-100px",top:"-100px",opacity:"0"}),$(".top-wave .wave-deco-2").css({bottom:"-100px",right:"-100px",opacity:"0"}),$(".search-list-layer .layer-boxing .title-img img").css({top:"70px",opacity:"0"})}function We(){$("body").addClass("fixed"),$(".search-list-area").show(),$(".search-list-layer .layer-boxing .title-img img").animate({opacity:"1",top:"0px"},600,"easeInCubic"),$(".top-wave .wave-deco-1").delay(200).animate({left:"0",top:"0",opacity:"1"},1e3,"easeInCubic"),$(".top-wave .wave-deco-2").delay(200).animate({right:"0",bottom:"0",opacity:"1"},1e3,"easeInCubic")}function Ze(e){var a;a=isNaN(e)?e:He(e);var t=0;for($(".result-list").html(""),p=0;p<policyDataforSearch.length;p++)(0==isNaN(e)&&policyDataforSearch[p].onedepth==a||1==isNaN(e)&&-1!=policyDataforSearch[p].policy.indexOf(e))&&(t++,$(".result-list").append("<div class='each-result-item'><a href='"+policyDataforSearch[p].link+"' target='_blank'><p class='policy-name'>"+policyDataforSearch[p].policy+"</p><div class='see-more-btn'>정책 자세히 보기 <span class='more-icon'><img src='http://img.khan.co.kr/spko/storytelling/2019/running/outlink-icon-purple.png' alt=''></span></div></a></div>"));"재취업"==a&&5==e?$(".show-total-number .category-name").html("재취업·워라밸"):$(".show-total-number .category-name").html(a),$(".show-total-number span.number").html(t),$(".category-detail").hide(),$(".category-detail-list").hide(),0==isNaN(e)&&("육아"!=a&&"노년"!=a||($(".category-detail").show(),"육아"==a?$("#detail-list-baby").show():"노년"==a&&$("#detail-list-oldyear").show()))}$(".horizon-dimension-1").width(O),$(".horizon-dimension-2").width(.3*O),$(".horizon-dimension-3").width(.2*O),$(".horizon-dimension-4").width(.1*O),$(".horizon-dimension-5").width(O),function(){for(var e=0;e<$dimensionHorizon.length;e++){var a=($dimensionHorizon.eq(e).width()-o)/(O-o);dimensionSpeed.push(a)}}(),1==e&&$("body").on("mousewheel",function(){event.preventDefault();var e=event.wheelDelta,a=window.pageYOffset;window.scrollTo(0,a-e)}),$(window).on("load",function(){$("body").removeClass("fixed"),$(".horizon-dimension").animate({top:"0%"},1200,"easeInCubic"),$(".loading-page").animate({position:"absolute",top:"-100%"},1200,"easeInCubic",function(){$e(),ue()}),document.getElementsByClassName("dimension-holder")[0].addEventListener("touchstart",_e,!1),document.getElementsByClassName("dimension-holder")[0].addEventListener("touchmove",Ve,!1),document.getElementsByClassName("dimension-holder")[0].addEventListener("touchend",Ye,!1),window.scrollTo(0,0)}).on("scroll",function(){1==P?(we(),Ke()):window.scrollTo(0,0)}).on("onbeforeunload",function(){window.scrollTo(0,0)}),$("input.input_txt").focus(function(){$(this).parents(".search-bar").addClass("search-bar-focus")}),$("input.input_txt").blur(function(){$(this).parents(".search-bar").removeClass("search-bar-focus")}),$(".search-icon").click(function(e){$(".autocomplete-items").remove(),Ze(document.getElementById("searchPolicy").value),$(".search-bf").hide(),$(".search-aft").slideDown()}),1==i?$(".category-list .list-item .thumb").each(function(e,a){$(this).css({background:Ae(e+1)})}):($(".category-list .list-item .thumb").mouseenter(function(){var e=$(this).parents("div").parents("li").index();$(this).css({background:Ae(e+1)})}),$(".category-list .list-item .thumb").mouseleave(function(){$(this).css({background:"#a7b3bf"})})),Qe(),$(".banner-img").on("click",function(e){e.preventDefault(),We()}),$(".serach-layer-close-btn").on("click",function(e){e.preventDefault(),Qe(),$(".search-category-holder .category-list ul li").removeClass("on"),$(".search-bf").show(),$(".search-aft").hide(),$(".show-total-number .category-name").html(""),$(".show-total-number span.number").html(""),$(".result-list").html("")}),$(".go-search-direct").on("click",function(e){e.preventDefault(),We()}),$(".category-detail .category-detail-list ul li").on("click",function(e){var a=$(this).parents("ul").parents(".category-detail-list").attr("data-detail");if(console.log(a),1==$(this).hasClass("on"))for($(".category-detail .category-detail-list ul li").removeClass("on"),$(".result-list").html(""),p=0;p<policyDataforSearch.length;p++)policyDataforSearch[p].onedepth==a&&$(".result-list").append("<div class='each-result-item'><a href='"+policyDataforSearch[p].link+"' target='_blank'><p class='policy-name'>"+policyDataforSearch[p].policy+"</p><div class='see-more-btn'>정책 자세히 보기 <span class='more-icon'><img src='http://img.khan.co.kr/spko/storytelling/2019/running/outlink-icon-purple.png' alt=''></span></div></a></div>");else{$(".category-detail .category-detail-list ul li").removeClass("on"),$(this).addClass("on"),$(".result-list").html("");var t=$(this).html();for(p=0;p<policyDataforSearch.length;p++)policyDataforSearch[p].onedepth==a&&policyDataforSearch[p].twodepth==t&&$(".result-list").append("<div class='each-result-item'><a href='"+policyDataforSearch[p].link+"' target='_blank'><p class='policy-name'>"+policyDataforSearch[p].policy+"</p><div class='see-more-btn'>정책 자세히 보기 <span class='more-icon'><img src='http://img.khan.co.kr/spko/storytelling/2019/running/outlink-icon-purple.png' alt=''></span></div></a></div>")}}),$(".search-category-holder .category-list ul li").on("click",function(e){$(".category-detail .category-detail-list ul li").removeClass("on"),$(".search-category-holder .category-list ul li").removeClass("on"),$(this).addClass("on"),e.preventDefault(),Ze($(this).index()+1),$(".search-bf").hide(),$(".search-aft").slideDown()});var ea=policyDataforSearch.map(function(e,a,t){return e.policy});!function(e,a){var t;function o(e){if(!e)return!1;!function(e){for(var a=0;a<e.length;a++)e[a].classList.remove("autocomplete-active")}(e),t>=e.length&&(t=0),t<0&&(t=e.length-1),e[t].classList.add("autocomplete-active")}function n(a){for(var t=document.getElementsByClassName("autocomplete-items"),o=0;o<t.length;o++)a!=t[o]&&a!=e&&t[o].parentNode.removeChild(t[o])}e.addEventListener("input",function(o){var i,r,s,l=this.value;if(n(),!l)return!1;for(t=-1,(i=document.createElement("DIV")).setAttribute("id",this.id+"autocomplete-list"),i.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(i),s=0;s<a.length;s++){var c=a[s].indexOf(l);if(-1!=c){r=document.createElement("DIV");for(var h="",p=0;p<a[s].length;p++)p==c&&(h+="<strong>"),h+=a[s][p],p==c+l.length-1&&(h+="</strong>");r.innerHTML=h,r.innerHTML+="<input type='hidden' value='"+a[s]+"'>",r.addEventListener("click",function(a){e.value=this.getElementsByTagName("input")[0].value,n(),Ze(e.value),$(".search-bf").hide(),$(".search-aft").slideDown()}),i.appendChild(r)}}}),e.addEventListener("keydown",function(a){var i=document.getElementById(this.id+"autocomplete-list");i&&(i=i.getElementsByTagName("div")),40==a.keyCode?(t++,o(i)):38==a.keyCode?(t--,o(i)):13==a.keyCode&&(a.preventDefault(),t>-1?i&&i[t].click():(n(),Ze(e.value),$(".search-bf").hide(),$(".search-aft").slideDown()))}),document.addEventListener("click",function(e){n(e.target)})}(document.getElementById("searchPolicy"),ea)});