$(".slider").slick({infinite:!0,autoplay:!0,autoplaySpeed:6e3,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,infinite:!0,speed:500}},{breakpoint:600,settings:{slidesToShow:1,infinite:!0,speed:500}},{breakpoint:300,settings:{slidesToShow:1,infinite:!0,speed:500}}]}),$(".slider-button-0").on("click",function(){$(".slider").slick("slickGoTo",0,!1)}),$(".slider-button-1").on("click",function(){$(".slider").slick("slickGoTo",1,!1)}),$(".slider-button-2").on("click",function(){$(".slider").slick("slickGoTo",2,!1)}),$(".slider").on("beforeChange",function(e,d,s,l){var i=[".slider-button-",s].join(""),a=[".slider-button-",l].join("");$(".slider-info-holder").removeClass("fadeIn"),$(".slider-info-holder").addClass("fadeOut"),$(".slider-info-title").removeClass("fadeInSlow"),$(".slider-info-title").addClass("fadeOut"),$(".slider-info-excerpt").removeClass("fadeInSupaSlow"),$(".slider-info-excerpt").addClass("fadeOut"),$(".slider-info-readmore").removeClass("fadeInSupaSlow"),$(".slider-info-readmore").addClass("fadeOut"),$(i).removeClass("active"),$(a).addClass("active"),console.log(l,s)}),$(".slider").on("afterChange",function(){$(".slider-info-holder").removeClass("fadeOut"),$(".slider-info-holder").addClass("fadeIn"),$(".slider-info-title").delay(1e3).removeClass("fadeOut"),$(".slider-info-title").delay(1e3).addClass("fadeInSlow"),$(".slider-info-excerpt").delay(2e3).removeClass("fadeOut"),$(".slider-info-excerpt").delay(2e3).addClass("fadeInSupaSlow"),$(".slider-info-readmore").delay(3e3).removeClass("fadeOut"),$(".slider-info-readmore").delay(3e3).addClass("fadeInSupaSlow")}),$(document).ready(function(){$(".slider-button-0").addClass("active"),$(".slider-info-holder").removeClass("fadeOut"),$(".slider-info-holder").addClass("fadeIn"),$(".slider-info-title").removeClass("fadeOut"),$(".slider-info-title").delay(800).addClass("fadeInSlow"),$(".slider-info-excerpt").removeClass("fadeOut"),$(".slider-info-excerpt").delay(1e3).addClass("fadeInSupaSlow"),$(".slider-info-readmore").delay(2e3).removeClass("fadeOut"),$(".slider-info-readmore").delay(2e3).addClass("fadeInSupaSlow")}),$(".slider").on("swipe",function(e,d,s){$(".slider-info-holder").removeClass("fadeIn"),$(".slider-info-holder").addClass("fadeOut"),$(".slider-info-title").removeClass("fadeInSlow"),$(".slider-info-title").addClass("fadeOut"),$(".slider-info-excerpt").removeClass("fadeInSupaSlow"),$(".slider-info-excerpt").addClass("fadeOut"),$(".slider-info-readmore").removeClass("fadeInSupaSlow"),$(".slider-info-readmore").addClass("fadeOut")});
//# sourceMappingURL=sliderControl.js.map