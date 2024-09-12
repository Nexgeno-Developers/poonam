$(document).ready(function(){
    $(window).mousemove(function(e){
        var y = e.clientY;
        $(".hover-element").css("margin-top", y);
        // $(".header__wrapper-menu ul li").addClass("hover-element");
    });
    
    $(".header__wrapper-menu ul li[menuname]").mouseenter(function(){
        var activeLinkId = $(this).attr("menuname");
        $(".link-img img").removeClass("active");
        $(".link-img img#" + activeLinkId).addClass("active");
    });
});



// remove menu arrow when sub menu opened 

//zuber code

document.querySelector('.hover-right-arrow').addEventListener('click', function() {
  document.querySelector('.about-menu').classList.add('new-class');
});

document.querySelector('.arrow-left').addEventListener('click', function() {
  document.querySelector('.about-menu').classList.remove('new-class');
});
//zuber code 


/*
$(document).ready(function(){
    // Function to animate CSS properties with GSAP
    function animateLiOnHover(element, properties, duration) {
        gsap.to(element, {
            duration: duration,
            css: properties,
            ease: "power2.out"
        });
    }

    // Add GSAP animations to <li> elements on hover
    $(".header__wrapper-menu ul li").hover(function(){
        animateLiOnHover($(this), {
            backgroundPosition: "-6% 0",
            width: "80%",
            backgroundColor: "#564a26",
            zIndex: -1
        }, 0.3); // Adjust duration as needed
    }, function(){
        animateLiOnHover($(this), {
            backgroundPosition: "",
            width: "",
            backgroundColor: "",
            zIndex: ""
        }, 0.3); // Adjust duration as needed
    });
});
*/


// About Page
if (document.querySelector('.design_den')) {
    // Create a timeline
  var tl3 = gsap.timeline();

  // Animate the text from left and right after pinning
  tl3.from('.first_text', {
    scrollTrigger: {
      trigger: '.design_den',
      start: 'top 100%',
      end: 'center 70%',
      markers: false,
      scrub: 0.6
    },
    x: -300,
    duration:0.4,
    ease: "back.in(1)",
  });

  tl3.from('.second_text', {
    scrollTrigger: {
      trigger: '.design_den',
      start: 'top 100%',
      end: 'center 70%',
      markers: false,
      scrub: 0.6
    },
    x: 300,
    duration:0.4,
    ease: "back.in(1)",
  });
}
   function createParallax(classname, triggerclass) {
        const layers = document.querySelectorAll(classname);

        // Image Parallax
        layers.forEach(img => {
            const speed = img.dataset.speed;
            gsap.to(img, {
                duration: 1,
                yPercent: speed * 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerclass,
                    start: 'top bottom',
                    scrub: 1,
                }
            });
        });
    }
    
/*
  function createParallax(classname, triggerclass) {
    const layers = document.querySelectorAll(classname);

    layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        let lastScrollY = window.pageYOffset;

        gsap.to(layer, {
            y: () => {
                const scrollY = window.pageYOffset;
                const deltaY = scrollY - lastScrollY;
                lastScrollY = scrollY;
                return layer.offsetTop + deltaY * speed;
            },
            duration: 1,
            ease: "ease.in(2)",
            scrollTrigger: {
                trigger: triggerclass,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false,
            }
        });
    });
}
*/


 function parallaxEffect(event) {
    const container = document.querySelector('.parallax-container');
    const image = container.querySelector('.parallax-image');
    const boundingRect = container.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = boundingRect.bottom - event.clientY; // Calculate distance from bottom
    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;
    const tiltX = (mouseX - centerX) / centerX * 10; // Adjust tilt sensitivity as needed
    const tiltY = (mouseY - centerY) / centerY * 10; // Adjust tilt sensitivity as needed
    image.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
}

function resetTilt() {
    const container = document.querySelector('.parallax-container');
    const image = container.querySelector('.parallax-image');
    image.style.transform = 'rotateY(0deg) rotateX(0deg)';
}
 
// function parallaxEffect(event) {
//     const container = document.querySelector('.parallax-container');
//     const image = container.querySelector('.parallax-image');
//     const boundingRect = container.getBoundingClientRect();
//     const mouseX = event.clientX - boundingRect.left;
//     const mouseY = boundingRect.bottom - event.clientY; // Calculate distance from bottom
//     const centerX = boundingRect.width / 2;
//     const centerY = boundingRect.height / 2;
//     const tiltX = (mouseX - centerX) / centerX * 10; // Adjust tilt sensitivity as needed
//     const tiltY = (mouseY - centerY) / centerY * 10; // Adjust tilt sensitivity as needed
//     image.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
// }

// function resetTilt() {
//     const container = document.querySelector('.parallax-container');
//     const image = container.querySelector('.parallax-image');
//     image.style.transform = 'rotateY(0deg) rotateX(0deg)';
// }

$(document).ready(function() {
  setTimeout(function() {
    createParallax('.parallax-layer2', '.parallax-container2');
    createParallax('.parallax-layer3', '.parallax-container3');
    const tl2 = gsap.timeline();

    tl2.to(".heading_inner_text", {
      duration: 1.5,
      ease: "power4.out",
      delay: 1,
      opacity: 1,
      translateY: 0,
      translateX: 0,
      skewX: -20,
      skewY: 0,
      stagger: {
        amount: 0.6
      }
    })
    .to(".heading_inner_text", {
      duration: 0.2,
      skewX: -15, // Skew to -15deg
    })
    .to(".heading_inner_text", {
      duration: 0.2,
      skewX: 15, // Skew to 15deg
    })
    .to(".heading_inner_text", {
      duration: 0.2,
      skewX: -10, // Skew to -10deg
    })
    .to(".heading_inner_text", {
      duration: 0.1,
      skewX: 10, // Skew to 10deg
    })
    .to(".heading_inner_text", {
      duration: 0.1,
      skewX: 0, // Skew back to 0deg
    });
    
    
    // COMMON FUNCTION
function textAnimations(triggerNode) {
          var startPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '80%';
          if (!triggerNode) return false;
          var textNodes = triggerNode.querySelectorAll('div > div');
          var anim = gsap.timeline().to(textNodes, {
            duration: 1,
            // force3D: true,
            translateY: 0,
            translateX: 0,
            rotation: 0,
            ease: "circ.out",
            stagger: 0.020
          });
          anim.pause();
          ScrollTrigger.create({
            trigger: triggerNode,
            start: "top ".concat(startPos),
            bottom: 'bottom top',
            scroller: 'body',
            once: true,
            markers: false,
            onToggle: function onToggle(self) {
              if (!self.isActive) return false;
              anim.play();
            },
            scrub: true
          });
        }
        
function animateTextOnScroll(className, triggerClass) {
    const elements = document.querySelectorAll(className);
    const triggers = document.querySelectorAll(triggerClass);

    triggers.forEach(trigger => {
        const elementsInTrigger = trigger.querySelectorAll(className);

        elementsInTrigger.forEach(element => {
            const splitText = new SplitText(element, { type: 'words', charsClass: `js-split-letters-text` });

            gsap.fromTo(splitText.words,
                {
                    opacity: 0,
                    y: '100%',
                },
                {
                    opacity: 1,
                    y: '0%',
                    duration: 0.4,
                    ease: 'ease.in',
                    scrollTrigger: {
                        trigger: trigger,
                        start: "15% 75%",
                        end: "center center",
                        
                        toggleActions: "play none none none",
                        markers: false
                    },
                    stagger: 0.12
                }
            );
        });
    });
}
animateTextOnScroll('.js-split-words2', '.animheadertext-2');

function animateParaOnScroll(className, triggerClass) {
        const elements = document.querySelectorAll(className);
        const triggers = document.querySelectorAll(triggerClass);

        triggers.forEach(trigger => {

            const elementsInTrigger = trigger.querySelectorAll(className);

            elementsInTrigger.forEach(element => {
                const splitText = new SplitText(element, { type: 'words, chars', charsClass: `js-split-letter` });

                gsap.from(splitText.chars,
                    {
                        opacity: 0,
                        scale:0.5,
                        ease: 'back.out',
                        duration: 0.4,
                        scrollTrigger: {
                            trigger: trigger,
                            start: "15% 70%",
                            end: "center center",
                            toggleActions: "play none none none",
                            markers: false
                        },
                        stagger: 0.01
                    }
                );
            });
        });
}

animateParaOnScroll('.js-split-p-letter', '.anim-para-text');

function animatebtnTextOnScroll(className, triggerClass) {
    const elements = document.querySelectorAll(className);
    const triggers = document.querySelectorAll(triggerClass);

    triggers.forEach(trigger => {
        const elementsInTrigger = trigger.querySelectorAll(className);

        // Animation for trigger elements
        gsap.from(trigger, {
            opacity: 0,
            x: 100,
            scale: 0.1,
            ease: 'back',
            letterSpacing: '10px',
            duration: 1,
            scrollTrigger: {
                trigger: trigger,
                start: "15% 70%",
                end: "center center",
                toggleActions: "play none none none",
                markers: false
            },
            stagger: 0.02
        });

        elementsInTrigger.forEach(element => {
            const splitText = new SplitText(element, { type: 'chars', charsClass: `js-split-letter-btn` });

            // Animation for letters within elements
            gsap.from(splitText.chars, {
                delay: 0.6, // Delay for 0.3 seconds
                opacity: 0,
                x: 100,
                scale: 0.1,
                ease: 'back',
                letterSpacing: '10px',
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 80%",
                    end: "center center",
                    
                    toggleActions: "play none none none",
                    markers: false
                },
                stagger: 0.02
            });
        });
    });
}
animatebtnTextOnScroll('.js-split-btn-letter', '.anim-button-text');
    
function animateHomeBoxes() {
    const triggerElements = document.querySelectorAll('.homeboxanimate');
    
    triggerElements.forEach(triggerElement => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 80%",
                end: "center center",
                toggleActions: "play none none none",
                markers: false
            }
        });
    
        // Animate heading
        const headingElements = triggerElement.querySelectorAll('.homeboxanimate-heading');
        headingElements.forEach(element => {
            const splitText = new SplitText(element, { type: 'words', charsClass: 'js-split-letters-text' });
            tl.fromTo(splitText.words,
                {
                    opacity: 0,
                    y: '100%',
                },
                {
                    opacity: 1,
                    y: '0%',
                    duration: 1,
                    ease: 'ease.in',
                    stagger: 0.2
                }
            );
        });
    
        // Animate paragraph
        const paraElements = triggerElement.querySelectorAll('.homeboxanimate-para');
        paraElements.forEach(element => {
            const splitText = new SplitText(element, { type: 'words, chars', charsClass: 'js-split-letter' });
            tl.from(splitText.chars,
                {
                    opacity: 0,
                    scale: 0.5,
                    ease: 'back.out',
                    duration: 1,
                    stagger: 0.014
                },
                '-=0.5' // Adjust timing overlap if needed
            );
        });
    
        // Animate each button with div
        const buttonDivs = triggerElement.querySelectorAll('.homeboxanimate-btn-bracket');
        buttonDivs.forEach(buttonDiv => {
            tl.from(buttonDiv, {
                opacity: 0,
                x: 100,
                scale: 0.1,
                ease: 'back',
                letterSpacing: '10px',
                duration: 1,
                stagger: 0.02
            });
    
            // Animate button text split within this button div
            const btnTextElements = buttonDiv.querySelectorAll('.homeboxanimate-btn-text');
            btnTextElements.forEach(element => {
                const splitText = new SplitText(element, { type: 'words, chars', charsClass: 'js-split-letter-btn' });
                tl.from(splitText.chars, {
                    delay: 0.6, // Delay for 0.6 seconds
                    opacity: 0,
                    x: 100,
                    scale: 0.1,
                    ease: 'back',
                    letterSpacing: '10px',
                    duration: 1,
                    stagger: 0.02
                }, '-=0.8'); // Adjust timing overlap if needed
            });
        });
    });
}

// Call the function to initialize the animation
animateHomeBoxes();


  
    
  }, 2000); // 2-second timeout
});

    // Reusable function for fade up animation
    function fadeUpAnimation(selector) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          //markers:true,
          start: "top center", // Adjust this based on your requirement
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "ease.in(2)"
      });
    }

    // Reusable function for fade slide from left animation
    function fadeSlideLeftAnimation(selector) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          //markers:true,
          start: "top center", // Adjust this based on your requirement
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "ease.in(2)"
      });
    }
    // Reusable function for fade up animation
    function fadeDownAnimation(selector) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          //markers:true,
          start: "top center", // Adjust this based on your requirement
          toggleActions: "play none none none",
        },
        duration: 1,
        delay:1,
        opacity: 0,
        y: -500,
        ease: "ease.in(2)"
      });
    }

    // Reusable function for fade slide from left animation
    function fadeSlideRightAnimation(selector) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          //markers:true,
          start: "top center", // Adjust this based on your requirement
          toggleActions: "play none none none",
        },
        duration: 1,
        delay:1,
        opacity: 0,
        x: 200,
        ease: "ease.in(2)"
      });
    }

    // Apply animations to elements
    document.querySelectorAll('.gsap-fade-up').forEach((elem) => {
      fadeUpAnimation(elem);
    });

    document.querySelectorAll('.gsap-fade-slide-left').forEach((elem) => {
      fadeSlideLeftAnimation(elem);
    });
    // Apply animations to elements
    document.querySelectorAll('.gsap-fade-fromuptodown').forEach((elem) => {
      fadeDownAnimation(elem);
    });

    document.querySelectorAll('.gsap-fade-slide-right').forEach((elem) => {
      fadeSlideRightAnimation(elem);
    });
window.onload = function () {
      
    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".image-wrapper-profile",
    //         start: "10% center", // Animation starts when the trigger element is 10% into the viewport vertically
    //         end: "end center",
    //         //markers: false, // This is optional, just for visualization of the trigger
    //         scrub: 0.5, // Adjust the scrub value as needed for the desired effect
    //         once: true
    //     }
    // });

    // tl.to(".overlay", { x: "-100%", duration: 0.6, ease: "power3.inOut" })
    //     .fromTo(".profile_img", { scale: 1.2 }, { scale: 1, duration: 1.4, ease: "power4.inOut" });

    var animatedTextNodes = document.querySelectorAll('.js-animated-text');

    if (animatedTextNodes.length) {
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
    }
    
    document.querySelectorAll('.anim-text').forEach(function (e) {
      return textAnimations(e, '97%');
    });

// service page
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery_details_section", // Set the trigger element
    start: "top center", // Start the animation when the top of the trigger element reaches the center of the viewport
    end: "center center", // End the animation when the bottom of the trigger element reaches the center of the viewport
    toggleActions: "play none none none", // Play the animation once when the trigger element enters the viewport
    markers: false, // Add markers for debugging purposes
    scrub: 0.5,
    once: true
  }
});

// Select all elements with the class "service-images"
var images = gsap.utils.toArray('.service-images');

// Loop through each image and add animations to the timeline
images.forEach(function(image, index) {
  // Add animation to move the image in from the right and fade in
  tl6.from(image, {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "slow(0.7,0.7,false)",
    // Stagger the animations by index times 0.2 seconds
    stagger: 0.2 * index
  });
});



// Gallery Page
  // Common animation function
function animategalleryOnScroll(className, animationProps) {
  const targets = document.querySelectorAll(className);

  targets.forEach((target, index) => {
    const isEven = index % 2 === 0;
    const imageAnimProps = isEven ? animationProps.evenImage : animationProps.oddImage;
    const textAnimProps = isEven ? animationProps.eventext : animationProps.oddtext;

    const tl10 = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom 80%",
        once: true,
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    });

    // Image animation
    tl10.fromTo(target.querySelector(".gallery_img img"), 
      imageAnimProps.from, 
      { ...imageAnimProps.to, duration: 0.3, ease: "power2.inOut" })
      .fromTo(target.querySelector(".gallery_content"), 
      textAnimProps.from, 
      { ...textAnimProps.to, duration: 0.2 }, "-=0.25");
  });
}

// Animation properties for images
const evenImageAnimationProps = {
  from: { opacity: 0, x: -120 },
  to: { opacity: 1, x: 0, ease: "power2.inOut" }
};

const oddImageAnimationProps = {
  from: { opacity: 0, x: 120 },
  to: { opacity: 1, x: 0, ease: "power2.inOut" }
};

// Animation properties for text
const eventextAnimationProps = {
  from: { opacity: 0, y: -120 },
  to: { opacity: 1, y: 0 }
};

const oddtextAnimationProps = {
  from: { opacity: 0, y: 120 },
  to: { opacity: 1, y: 0 }
};

// Trigger animation on .gallery_box_inner
animategalleryOnScroll(".gallery_box_inner", {
  evenImage: evenImageAnimationProps,
  oddImage: oddImageAnimationProps,
  eventext: eventextAnimationProps,
  oddtext: oddtextAnimationProps
});


  
  /*
  function animategalleryOnScroll(className, animationProps) {
    const targets = document.querySelectorAll(className);

    targets.forEach(target => {
      const tl10 = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "bottom 60%",
          once: true,
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });

      // Image animation
      tl10.fromTo(target.querySelector(".gallery_img img"), 
        animationProps.image.from, 
        { ...animationProps.image.to, duration: 0.3, ease: "power2.inOut" })
        .fromTo(target.querySelector(".gallery_content"), 
        animationProps.text.from, 
        { ...animationProps.text.to, duration: 0.2 }, "-=0.1");
    });
  }

const imageAnimationProps = {
    from: { opacity: 0, x: -120},
    to: { opacity: 1, x: 0, y: 0, ease: "power2.inOut" }
};

// Animation properties for text
const textAnimationProps = {
  from: { opacity: 0, x: 120, y: 120 },
  to: { opacity: 1, x: 0, y: 0}
};

// Trigger animation on .gallery_box_inner
animategalleryOnScroll(".gallery_box_inner", {
  image: imageAnimationProps,
  text: textAnimationProps
});

Animation properties for image
const imageAnimationProps = {
  from: { scaleX: 0 },
  to: { scaleX: 1, duration: 0.4, ease: "power2.inOut" }
};

const imageAnimationProps = {
    from: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    to: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, ease: "power2.inOut" }
};

*/


// Gallery Deatil Page
/*const galleryimages = document.querySelectorAll('.main_section_gallery_detail .the_gallery_img');

galleryimages.forEach((image, index) => {
    ScrollTrigger.create({
        trigger: image,
        start: "top 70%", // Change start position if needed
        end: "center center",
        markers: false,
        onEnter: () => {
            gsap.to(image, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                delay: index * 0.1 // Delay each image by 0.2 seconds
            });
        }
    });

    // Set initial state
    gsap.set(image, { opacity: 0, y: 100 }); // Initially, images are transparent and below
});
*/
// Function to apply fade-up animation with stagger
function applyFadeUpAnimation() {
  gsap.utils.toArray('.animate-fadeup').forEach((element, index) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',  
        end: 'center center',
        toggleActions: 'play none none none',
        marker:false
      }
    })
    .fromTo(element, 
      { opacity: 0, marginTop: '30%' }, 
      { 
        opacity: 1, 
        marginTop: 0,
        duration: 0.5, 
        ease: 'power4.out'
      }, index * 0.1); // Adjust stagger based on index
  });
}

// Call the function to initialize animations
applyFadeUpAnimation();


function animategalleryBoxes() {
  const triggerElements = document.querySelectorAll('.main_section_gallery_detail .the_gallery_img');
  
  triggerElements.forEach((triggerElement, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 90%",    // Animation starts when the top of the element is 80% from the top of the viewport
        end: "top center", // Animation ends when the center of the element is at the center of the viewport
        markers: false,      // Set to true if you want to see the start and end markers for debugging
        //scrub: 1,         // Smooth scrubbing, takes into account the scroll speed
      }
    });

    // Animate the image itself
    tl.fromTo(triggerElement, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power4.out",
      delay: index * 0.1 // Delay each image based on its index
    });

    // Animate paragraph text
    const paraElements = triggerElement.querySelectorAll('.the_gallery_img_para');
    paraElements.forEach(element => {
      const splitText = new SplitText(element, { type: 'words,chars', charsClass: 'js-split-letter' });
      tl.from(splitText.chars, {
        opacity: 0,
        scale: 0.5,
        ease: 'back.out',
        duration: 0.5,
        stagger: 0.015
      }, '-=0.6'); // Adjust timing overlap if needed
    });
  });
}

// Call the function to initialize the animation
animategalleryBoxes();






// function animateImageleftOnScroll(className, triggerClass) {
//     const triggers = document.querySelectorAll(triggerClass);

//     triggers.forEach(trigger => {
//         const tl7 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: trigger,
//                 start: "top center",
//                 end: "center center",
//                 scrub: 0.5,
//                 once: true,
//                 markers: false
//             }
//         });

//         const targetElements = trigger.querySelectorAll(className); // Use querySelectorAll instead of querySelector

//         if (targetElements.length > 0) { // Check if there are matching elements
//             tl7.to(targetElements, { // Apply animation to all matching elements at once
//                 backgroundColor: 'rgb(172 81 81 / 71%)',
//                 duration: 0.4,
//                 clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 100% 0%)",
//                 ease: "power4.out"
//             })
//             .to(`${className} img`, {
//                 duration: 0.3,
//                 clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%)", // Reverse the polygon points for right to left animation
//                 ease: "power3.in"
//             }, "-=0.4");
//         }
//     });
// }

// Usage:
//animateImageleftOnScroll('.home_section_img_left', '.home_section_container_left');

function animateImagerightOnScroll(className2, triggerClass2) {
    const triggers3 = document.querySelectorAll(triggerClass2);

    triggers3.forEach(trigger => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "top 70%",
                end: "center center",
                scrub: 0.5,
                once: true,
                //markers: false
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
animateImagerightOnScroll('.home_section_img_right', '.home_section_container_right');

function animateImageleft2OnScroll(className2, triggerClass2) {
    const triggers3 = document.querySelectorAll(triggerClass2);

    triggers3.forEach(trigger => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "top 70%",
                end: "center center",
                scrub: 0.5,
                once: true,
                //markers: false
            }
        });

        const targetElements2 = trigger.querySelectorAll(className2); // Query elements within current trigger

        targetElements2.forEach(element => {
            tl.to(element.querySelector("img"), { // Use element as the context
                duration: 0.6,
                clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                ease: "power3.in"
            });
        });
    });
}

// Usage:
animateImageleft2OnScroll('.home_section_img_left', '.home_section_container_left');


function animatehomeImageOnScroll(className, triggerClass) {
    const triggers = document.querySelectorAll(triggerClass);

    triggers.forEach(trigger => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                end: "center 80%",
                once: true,
                //markers: false
            }
        });

        const targetElements = trigger.querySelectorAll(className);
        targetElements.forEach(element => {
            tl.fromTo(element, {
                y: "100%",
            }, {
                y: "0%",
                duration: 1,
                ease: "ease.in"
            });
        });
    });
}

// Usage:
animatehomeImageOnScroll('.home_section_img', '.home_section_container');

    ScrollTrigger.refresh();
};



// zuber gsap code for smooth scroll
/* Created by OSUblake: https://greensock.com/forums/topic/17300-smooth-page-scroll/ */





// new


