<script src="/assets/frontend/js/popper.min.js"></script>
<script src="/assets/frontend/js/bootstrap.min.js"></script>
<script src="/assets/frontend/js/jquery.min.js"></script>
<script src="/assets/frontend/js/jquery.fancybox.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- VENDOR SCRIPTS -->
<script src="/assets/frontend/js/vendor.js?<?php echo time(); ?>"></script>

<!--Custom Js-->

<script src="/assets/frontend/js/components.js"></script>
<script src="/assets/frontend/js/style.js"></script>
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

<script>
        var swiper = new Swiper('.services_swiper', {
            loop: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });

    var swiper = new Swiper('.gallery_swiper', {
        loop: true,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });



    $(document).ready(function(){
        // Define CSS classes for fading in and out the images using clip-path
        var revealDuration = 0.5;
        var revealEase = "power2.inOut";
        // Function to run the animation
        function runAnimation() {
            if ($("#page-header").hasClass("opened")) {
                // console.log("opened");
                gsap.fromTo(".header__wrapper-overlay-menu .link-img",
                    { opacity: 0, clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)" },
                    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", opacity: 1,delay:0.6, duration: revealDuration, ease: revealEase }
                );
                gsap.fromTo(".header__wrapper-overlay-menu .hover-right-arrow img",
                    { opacity: 0, clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)" },
                    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", opacity: 1,delay:0.6, duration: revealDuration, ease: revealEase }
                );
            } else {
                // console.log("closed");
                gsap.to(".header__wrapper-overlay-menu .link-img",
                    { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)", opacity: 0, duration: revealDuration, ease: revealEase }
                );
                gsap.to(".header__wrapper-overlay-menu .hover-right-arrow img",
                    { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)", opacity: 0, duration: revealDuration, ease: revealEase }
                );
            }
            // console.log("run completed");
        }
        // Observe changes to the class attribute of #page-header
        var targetNode = document.getElementById('page-header');
        var observer = new MutationObserver(function(mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    runAnimation();
                }
            }
        });
        // Observer configuration: observe changes to attributes
        var config = { attributes: true };
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
        // Trigger the class change on #page-header when #js-burger is clicked
        $('body').on('click', '#js-burger', function(){
            $("#page-header").toggleClass("opened");
        });

    });
</script>