document.addEventListener("DOMContentLoaded",(function(){var e=u(".navbar"),o=u(document),t=u(".navbar__link"),n=u(".footer__link"),i=new ScrollMagic.Controller,a={heroSection:!1,howSection:!1,whySection:!1,jobCategories:!1},r=new Swiper(".swiper",{direction:"horizontal",speed:1e3,autoplay:{delay:7e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}});function c(e){return document.documentElement.scrollTop<window.screen.height*e-.5*window.screen.height}function s(){document.documentElement.scrollTop<1==0?(e.addClass("navbar--white"),e.nodes[0].style.opacity="1"):e.removeClass("navbar--white")}function l(e){e.preventDefault();var o=e.target.href.substr(e.target.href.indexOf("#")+1);u("#"+o).scroll()}new ScrollMagic.Scene({triggerElement:".hero.section",duration:1e3}).setClassToggle(".navbar","section--hero").on("enter",(function(){var e;!1===a.heroSection&&c(1)&&(a.heroSection=!0,(e=gsap.timeline()).fromTo([".hero__title",".hero__description"],2,{opacity:0,x:100},{opacity:1,x:0}),e.fromTo([".navbar"],.5,{opacity:0},{opacity:1}),e.fromTo([".hero__btn",".swiper-pagination"],1,{opacity:0},{opacity:1})),r.autoplay.start()})).on("leave",(function(){r.autoplay.stop()})).addTo(i),new ScrollMagic.Scene({triggerElement:".how-gpc-works.section",duration:1e3}).setClassToggle(".navbar","section--how-gpc-works").on("enter",(function(){var e;!1===a.howSection&&c(2)&&(a.howSection=!0,(e=gsap.timeline()).fromTo(".how__header",1,{opacity:0,y:50},{opacity:1,y:0}),e.fromTo(".step__body",1,{opacity:0,x:-250},{opacity:1,x:0,stagger:.5}))})).addTo(i),new ScrollMagic.Scene({triggerElement:".why-gpc.section",duration:1e3}).setClassToggle(".navbar","section--why-gpc").on("enter",(function(){var e;!1===a.whySection&&c(3)&&(a.whySection=!0,(e=gsap.timeline()).fromTo(".why__header",1,{opacity:0,y:50},{opacity:1,y:0}),e.fromTo(".why__item",.5,{opacity:0,scale:.5},{opacity:1,scale:1,stagger:.25,ease:"back.out(1.7)"}))})).addTo(i),new ScrollMagic.Scene({triggerElement:".job-categories.section",duration:1e3}).setClassToggle(".navbar","section--job-categories").on("enter",(function(){var e;!1===a.jobCategories&&c(4)&&(a.jobCategories=!0,(e=gsap.timeline()).fromTo([".job-categories__header"],1,{opacity:0,y:50},{opacity:1,y:0}),e.fromTo([".job-item",".job-categories__button"],.5,{opacity:0,scale:.5,pointerEvents:"none"},{opacity:1,scale:1,stagger:.2}).set([".job-item",".job-categories__button"],{pointerEvents:"unset"}))})).addTo(i),o.on("scroll",s),t.on("click",(function(e){l(e)})),n.on("click",(function(e){l(e)})),r.on("touchMove",(function(){r.autoplay.stop()})),r.on("touchEnd",(function(){r.autoplay.start()})),s(),function(){for(var e=u(".job-item__title").nodes,o=0;o<e.length;o+=1){if("Staff Accountant/Bookkeeper"===e[o].innerHTML){var t=e[o].innerHTML.split("/");e[o].innerHTML=t[0]+"/<br>"+t[1]}"Controller"===e[o].innerHTML&&u(e[o]).siblings(".job-item__icon").addClass("controller")}}()}));