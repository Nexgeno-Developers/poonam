window.onload = function () {

  'use strict';

  var containerEl = document.querySelector(".scroll-container");
  var headerEl = document.querySelector('#header');
  var multiplier = 0.5;
  var lerp = 0.05; // для FF
  var mediaQuery = window.matchMedia('(max-width: 992px)');

  if (mediaQuery.matches) {
    multiplier = 2;
    lerp = 0.07;
  }

  var locoScroll = new LocomotiveScroll({
    el: containerEl,
    smooth: true,
    lerp: lerp,
    multiplier: multiplier,
    touchMultiplier: 1.5,
    firefoxMultiplier: 1000,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText); 

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(containerEl, {
    scrollTop: function scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: containerEl.style.transform ? "transform" : "fixed"
  });

  document.body.style.overflow = '';
  headerEl.classList.add('--ready');
  ScrollTrigger.refresh();
  locoScroll.start();
  
// gsap.fromTo(
//   ".loading-page",
//   { opacity: 1 },
//   {
//     opacity: 0,
//     display: "none",
//     duration: 1,
//     ease: "power4.out",
//     delay: 5.5,
// onComplete: function() {

const titles3d = gsap.utils.toArray('.rotating3d-text');
    gsap.fromTo(titles3d,
      { opacity: 0,duration: 0.1, },
      {opacity: 1, duration: 0.1, ease: "power4.out", }
    );
    const tl10 = gsap.timeline({ onComplete: startSecondAnimation, delay: 0.3 });

    titles3d.forEach(title3d =>{
      const splitTitle3d = new SplitText(title3d, { chars: true }); // Ensure SplitText is properly initialized
      tl10.from(splitTitle3d.chars, {
        duration:0.4,
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.01
      }, "<")
      .to(splitTitle3d.chars, {
        duration:0.4,
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.01
      }, "<1")
    });

    gsap.fromTo(
      ".loading-page",
      { opacity: 1, y:0, duration: 0.5, },
      {
        opacity: 0, y:-500,
        display: "none",
        duration: 1.5,
        ease: "power4.out",
        delay: 6.8,
      }
    );

    function startSecondAnimation() {
      const tl = gsap.timeline();

      tl.to(".banner_icons1 img", { opacity: 1, duration: 1, x: 0 })
        .to(".banner_icons2 img", { opacity: 1, duration: 1, y: 0 }, "-=0.5")
        .to(".banner_icons3 img", { opacity: 1, duration: 1, y: 0 }, "-=0.5")
        .to(".banner_icons4 img", { opacity: 1, duration: 1, y: 0 }, "-=0.5")
        .to(".banner_icons5 img", { opacity: 1, duration: 1, y: 0 }, "-=0.5")
        .to(".banner_icons6 img", { opacity: 1, duration: 1, x: 0 }, "-=0.5")
        .to(".heading-1", { opacity: 1, duration: 1.5, x: 0 }, "-=1.5");

      const tl2 = gsap.timeline();

      tl2.to(".heading_inner_text", {
        duration: 1.5,
        ease: "power4.out",
        delay: 1,
        opacity: 1,
        translateY: 0,
        translateX: 0,
        stagger: {
          amount: 0.6
        }
      
      });
    }

// }

//   }
// );

// gsap.fromTo(
//   ".logo-name",
//   {
//     y: 50,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     ease: "power4.in",
//     duration: 3,
//     delay: 2.3,
//   }
// );


  var animatedTextNodes = document.querySelectorAll('.js-animated-text');

  if (animatedTextNodes.length && !mediaQuery.matches) {
    animatedTextNodes.forEach(function (node) {
      node.split = new SplitText(node, {
        type: "lines,words",
        linesClass: "split-line"
      });
    });
  }


  var splitLettersNodes = document.querySelectorAll('.js-split-letters');

  if (splitLettersNodes.length) {
    new SplitText(splitLettersNodes, {
      type: "chars"
    });
  } //  разбить текст по словам


  var splitWordsNodes = document.querySelectorAll('.js-split-words');

  if (splitWordsNodes.length) {
    new SplitText(splitWordsNodes, {
      type: "words"
    });
  } // меню

  var menuItems = document.querySelectorAll('.js-animated-text-menu');
  var menuTextNodes = [];
  menuItems.forEach(function (el) {
    menuTextNodes.push(el.querySelectorAll('div > div'));
  });
  var menuAnim = gsap.timeline().to(menuTextNodes, {
    duration: .4,
    translateY: 0,
    translateX: 0,
    rotation: 0,
    ease: "circ.out",
    stagger: 0.05
  });
  $('.header__burger').on('click', function () {
    if ($(this).hasClass('--open')) {
      $(this).removeClass('--open');
      $('#header').removeClass('--menu-opened');
      menuTextNodes.forEach(function (el) {
        el.forEach(function (i) {
          $(i).css('transform', '');
        });
      });
    } else {
      menuAnim.restart();
      $(this).addClass('--open');
      $('#header').addClass('--menu-opened').removeClass('--scroll-down --dark-compact');
    }
  }); // Анимации и управление ими с помощью ScrollTrigger
  // 3D tilt анимация в футере

  document.body.style.overflow = '';


  var scaleTitleNode = document.querySelector('.scale-title');

  if (scaleTitleNode) {
    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function minWidth992px() {
        var letterEl = scaleTitleNode.querySelectorAll('.scale-title__title > div');
        var spanEl = document.createElement("span");
        letterEl[6].append(spanEl);
        var analyticReportsTitle = gsap.timeline().to(spanEl, {
          delay: 0.2,
          backgroundColor: '#bdbec2',
          keyframes: [{
            height: '100vh',
            duration: 2,
            ease: "power2.in",
            y: 0
          }, {
            width: '150vw',
            ease: "power2.in",
            duration: 2,
          }]
        }, '>').to('body', {
          backgroundColor: '#bdbec2',
          duration: 0,
          border:"none"
        }, '>');
        ScrollTrigger.create({
          trigger: '.scale-title',
          start: 'top top',
          end: "bottom -30%",
          scroller: '.scroll-container',
          pin: true,
          pinSpacing: false,
          // markers: true,
          animation: analyticReportsTitle,
          scrub: true,
        });
      }
    });
  }
  

    if (!mediaQuery.matches) {
      textAnimations(document.querySelector('.horizontal-scroll-images__info.research'));
      textAnimations(document.querySelector('.horizontal-scroll-images__info.portal'));
      textAnimations(document.querySelector('.partners__wrap'));
      document.querySelectorAll('.anim-text').forEach(function (e) {
        return textAnimations(e, '97%');
      });
      document.querySelectorAll('.numbered-list').forEach(function (e) {
        return textAnimations(e);
      });
      document.querySelectorAll('.simple-text').forEach(function (e) {
        return textAnimations(e);
      });
    }
    function textAnimations(triggerNode) {
      var startPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '80%';
      if (!triggerNode) return false;
      var textNodes = triggerNode.querySelectorAll('div > div');
      var anim = gsap.timeline().to(textNodes, {
        duration: .4,
        // force3D: true,
        translateY: 0,
        translateX: 0,
        rotation: 0,
        ease: "circ.out",
        stagger: 0.05
      });
      anim.pause();
      ScrollTrigger.create({
        trigger: triggerNode,
        start: "top ".concat(startPos),
        bottom: 'bottom top',
        scroller: '.scroll-container',
        once: true,
        // markers: true,
        onToggle: function onToggle(self) {
          if (!self.isActive) return false;
          anim.play();
        },
        scrub: true
      });
    }


  var animatedSkewTextsNode = document.querySelector('.animated-skew-texts');

  if (animatedSkewTextsNode) {
    var scrollTicker = function scrollTicker(speed, wrapper) {
      var items = wrapper.querySelector('.animated-skew-texts__row');
      var cloned = items.cloneNode(true);
      wrapper.appendChild(cloned);
      var ticker = gsap.timeline().to(wrapper, {
        x: -cloned.offsetWidth,
        repeat: -1,
        duration: speed,
        ease: Linear.easeNone
      });
      ticker.pause();
      return ticker;
    };
  
    var tickerEl1 = document.querySelector('.animated-skew-texts__row-wrap.--row-1');
    var tickerEl2 = document.querySelector('.animated-skew-texts__row-wrap.--row-2');
    var tickerEl3 = document.querySelector('.animated-skew-texts__row-wrap.--row-3');
    var ticker1 = scrollTicker(85, tickerEl1);
    var ticker2 = scrollTicker(60, tickerEl2);
    var ticker3 = scrollTicker(100, tickerEl3);
    var animatedSkewTexts = gsap.timeline().to(tickerEl1, {
      content: '"|"',
      color:"rgb(0, 0, 0)",
      xPercent: -13,
      yPercent: -50
    }, 0).to(tickerEl2, {
      content: '"|"',
      color:"rgb(169,170,174)",
      xPercent: -17,
      yPercent: -50
    }, 0).to(tickerEl3, {
      color:"rgb(0, 0, 0)",
      content: '"|"',
      xPercent: -10,
      yPercent: -50
    }, 0);
    ScrollTrigger.create({
      trigger: animatedSkewTextsNode,
      start: "top bottom",
      end: "bottom top",
      scroller: '.scroll-container',
      // markers: true,
      animation: animatedSkewTexts,
      scrub: .8,
      onEnter: function onEnter() {
        ticker1.play();
        ticker2.play();
        ticker3.play();
      },
      onLeave: function onLeave() {
        ticker1.pause();
        ticker2.pause();
        ticker3.pause();
      },
      onLeaveBack: function onLeaveBack() {
        ticker1.pause();
        ticker2.pause();
        ticker3.pause();
      },
      onEnterBack: function onEnterBack() {
        ticker1.play();
        ticker2.play();
        ticker3.play();
      }
    });
  }









      


  let workInfoItems = document.querySelectorAll('.work__photo-item');
  workInfoItems.forEach(function(item, index){
      item.style.zIndex = workInfoItems.length - index;
  });

  gsap.set(".work__photo-item", {
      clipPath: "inset(0px 0px 0px 0px)"
  });

  const animation = gsap.to('.work__photo-item:not(:last-child)', {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5,
      ease: "none"
  });

  ScrollTrigger.create({
      trigger: '.scroll-container .work .work__right',
      start: 'top 0%',
      end: '83% 28%',
      scroller: '.scroll-container',
      pin:true,
      pinSpacing:false,
      // markers:true,
      animation: animation, // Use the 'animation' variable here
      scrub: 2
  });


// Target all the .buisness_box elements
const buisnesBoxes = document.querySelectorAll('.buisness_box, .platform');

// Loop through each .buisness_box element
buisnesBoxes.forEach((buisnesBox, index) => {
  // Target the .buis_img element inside the current .buisness_box
  const buisnesSection = buisnesBox.querySelector('.buis_img, .counter_img');

  // Define different animations for each buisnesSection
  let buisnesSectionAnimation;
  switch (index % 5) {
    case 0:
      // Fade in from left
      buisnesSectionAnimation = gsap.from(buisnesSection, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
      });
      break;
    case 1:
      // Fade in from right
      buisnesSectionAnimation = gsap.from(buisnesSection, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
      });
      break;
    case 2:
      // Fade in from top
      buisnesSectionAnimation = gsap.from(buisnesSection, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
      });
      break;
    case 3:
      // Fade in from bottom
      buisnesSectionAnimation = gsap.from(buisnesSection, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
      break;
    case 4:
      // Fade in from the z-axis with a bounce effect
      buisnesSectionAnimation = gsap.from(buisnesSection, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out"
      });
      break;
    default:
      break;
  }

  // Create a ScrollTrigger for each .buisnes_section element
  ScrollTrigger.create({
    trigger: buisnesBox,
    start: 'top 70%', // Adjust the start position as needed
    end: 'bottom 10%', // Adjust the end position as needed
    scroller: '.scroll-container',
    animation: buisnesSectionAnimation,
    toggleActions: "play none none none",
    // markers: true // Set to true for debugging purposes
  });
});

// aboutus section-1
gsap.to(".aboutports_right_img-1", {
    duration: 0.8,
        scrollTrigger: {
            trigger: ".platform_abouts",
            start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
            end: "bottom center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
            scrub: true, // Smooth scrolling
             scroller: '.scroll-container',
             toggleActions: "play reverse none none",
            // markers: true // Display ScrollTrigger markers for debugging
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "expo.out"
    });
    
gsap.from(".aboutports_left_text-1", {
    opacity: 0, // Fade in
    y: 200, // Move up from 200px below its original position
    duration: 0.5, // Duration of the animation
    scrollTrigger: {
        trigger: ".platform_abouts",
        start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
        end: "center center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
        // scrub: true, // Smooth scrolling
        scroller: ".scroll-container",
        toggleActions: "play complete none none", // Action to take when the trigger enters/exits the viewport
        //markers: true // Display ScrollTrigger markers for debugging
    }
});

// section-2
gsap.to(".aboutports_left_img-2", {
    duration: 1,
        scrollTrigger: {
            trigger: ".platform_abouts_2",
            start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
            end: "30% center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
            scrub: true, // Smooth scrolling
             scroller: '.scroll-container',
             toggleActions: "play reverse none none",
            // markers: true // Display ScrollTrigger markers for debugging
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "expo.out"
    });
    
gsap.from(".aboutports_right_text-2", {
    opacity: 0, // Fade in
    y: 200, // Move up from 200px below its original position
    duration: 0.8, // Duration of the animation
    scrollTrigger: {
        trigger: ".platform_abouts_2",
        start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
        end: "30% center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
        // scrub: true, // Smooth scrolling
        scroller: ".scroll-container",
        toggleActions: "play complete none none", // Action to take when the trigger enters/exits the viewport
        //markers: true // Display ScrollTrigger markers for debugging
    }
});

// section-3
gsap.to(".aboutports_left_img-3", {
    duration: 1,
        scrollTrigger: {
            trigger: ".platform_abouts_3",
            start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
            end: "30% center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
            scrub: true, // Smooth scrolling
             scroller: '.scroll-container',
             toggleActions: "play reverse none none",
            // markers: true // Display ScrollTrigger markers for debugging
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "expo.out"
    });
    
gsap.from(".aboutports_left_text-3", {
    opacity: 0, // Fade in
    x: -200, // Move up from 200px below its original position
    duration: 0.8, // Duration of the animation
    scrollTrigger: {
        trigger: ".platform_abouts_3",
        start: "top center", // Trigger animation when top of .platform_abouts section reaches the center of the viewport
        end: "50% center", // End animation when bottom of .platform_abouts section reaches the center of the viewport
        // scrub: true, // Smooth scrolling
        scroller: ".scroll-container",
        toggleActions: "play complete none none", // Action to take when the trigger enters/exits the viewport
        //markers: true // Display ScrollTrigger markers for debugging
    }
});

function animateTextOnScroll(className, triggerClass) {
    // Select all elements with the specified class name
    const elements = document.querySelectorAll(className);
    const triggers = document.querySelectorAll(triggerClass);

    // Iterate over each trigger element
    triggers.forEach(trigger => {
        // Find the corresponding element to animate
        const element = trigger.querySelectorAll(className);

        if (element) {
            // Split the text into lines
            const splitText = new SplitText(element, { type: 'lines', linesClass: `js-split-words2-line` });

            // Animate each line
            splitText.lines.forEach(line => {
                // Split the line into words
                const wordsSplit = new SplitText(line, { type: 'words', wordsClass: `js-split-words2-text` });

                // Animate each word
                wordsSplit.words.forEach(word => {
                    gsap.fromTo(word, // Use fromTo to specify the start and end positions
                        {
                            y: '80%', // Start position
                        },
                        {
                            y: '0%', // End position
                            duration: 1, // Duration of the animation
                            ease: 'power3.out', // Easing function
                            scrollTrigger: {
                                trigger: trigger,
                                start: "top 70%", // Start animation when top of trigger element hits center of viewport
                                end: "center center", // End animation when bottom of trigger element reaches center of viewport
                                scroller: ".scroll-container",
                                toggleActions: "play none none none", // Action to take when the trigger enters/exits the viewport
                                //markers: true // Display ScrollTrigger markers for debugging
                            },
                            overwrite: "auto" // Allow GSAP to override existing inline styles
                        }
                    );
                });
            });
        }
    });
}

// Usage:
animateTextOnScroll('.js-split-words2', '.main_about_heading');

// team section
const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".team_sections_container",
        scroller: ".scroll-container",
        start: "top center",
        end: "center center",
        scrub: 3,
        //markers:true
    }
});

// Set initial position and rotation
gsap.set(".team_section", { y: 200, rotateY: -90 });

// Animation
tl6.to(".team_section", { y: 0, rotateY: 0, stagger: 0.4 });

function animateImageleftOnScroll(className, triggerClass) {
    const triggers = document.querySelectorAll(triggerClass);

    triggers.forEach(trigger => {
        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                scroller: ".scroll-container",
                start: "top center",
                end: "70% center",
                scrub: true,
                //markers: true
            }
        });

        const targetElements = trigger.querySelectorAll(className); // Use querySelectorAll instead of querySelector

        if (targetElements.length > 0) { // Check if there are matching elements
            tl7.to(targetElements, { // Apply animation to all matching elements at once
                // backgroundColor: 'rgb(212, 212, 212)',
                duration: 0.4,
                clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 100% 0%)",
                ease: "power4.out"
            })
            .to(`${className} img`, {
                duration: 0.3,
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%)", // Reverse the polygon points for right to left animation
                ease: "power3.in"
            }, "-=0.4");
        }
    });
}

// Usage:
animateImageleftOnScroll('.buisness_section_img_left', '.buisness_section_container_left');


function animateImagerightOnScroll(className2, triggerClass2) {
    const triggers3 = document.querySelectorAll(triggerClass2);

    triggers3.forEach(trigger => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                scroller: ".scroll-container",
                start: "top center",
                end: "center center",
                scrub: true,
                //markers: true
            }
        });

        const targetElements2 = trigger.querySelectorAll(className2); // Query elements within current trigger

        targetElements2.forEach(element => {
            tl.to(element.querySelector("img"), { // Use element as the context
                duration: 0.6,
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%)",
                ease: "power3.in"
            });
        });
    });
}

// Usage:
animateImagerightOnScroll('.buisness_section_img_right', '.buisness_section_container_right');



function animateSectionOnScroll(sectionClass, triggerClass) {
    const triggers = document.querySelectorAll(triggerClass);
    const sections = document.querySelectorAll(sectionClass);

    triggers.forEach((trigger, index) => {
        const section = sections[index];

        if (section) {
            const animationDirection = index % 2 === 0 ? 'left' : 'right';
            const initialPosition = animationDirection === 'left' ? '100%' : '-100%';

            gsap.fromTo(section,
                {
                    opacity: 0,
                    x: initialPosition,
                },
                {
                    opacity: 1,
                    x: '0%',
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top center',
                        end: 'bottom center',
                        scroller: '.scroll-container',
                        //markers: true,
                        toggleActions: 'play none none none',
                    },
                    overwrite: 'auto',
                }
            );
        }
    });
}

// Usage:
animateSectionOnScroll('.fadeup', '.section-fadeup');


gsap.fromTo(".fadeleft",
                {
                    opacity: 0,
                    x: -300,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ".section-fadeleft",
                        start: 'top center',
                        end: 'bottom center',
                        scroller: '.scroll-container',
                        //markers: true,
                        toggleActions: 'play none none none',
                    },
                    overwrite: 'auto',
                }
            );









  ScrollTrigger.addEventListener("refresh", function () {
    return locoScroll.update();
  }); // после того, как все настроено, вызываем refresh() ScrollTrigger и он обновит и LocomotiveScroll,
  // потому что могли быть добавлены отступы и т. д.

  ScrollTrigger.refresh();


};



// modal popup

