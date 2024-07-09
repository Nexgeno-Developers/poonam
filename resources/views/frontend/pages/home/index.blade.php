@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')


<!-- section MASTHEAD -->
<!--<div class="">-->
<section class="section section-masthead d-none" data-arts-os-animation="animated"
    data-background-color="var(--color-dark-1)"></section>
<!-- - section MASTHEAD -->
<!-- section PROJECTS SLIDER FULLSCREEN -->
<section class="section section-fullheight section-projects section-projects-slider bg-dark-1 overflow"
    data-arts-theme-text="light" data-arts-os-animation="animated">
    <div class="section-fullheight__inner section-fullheight__inner_mobile text-center">
        <div class="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider">
            <!-- slider CONTENT -->
            <div class="slider-fullscreen-projects__content swiper-container pointer-events-none js-slider-fullscreen-projects__content"
                style="height:325px;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="h1 text-start slider__heading js-split-text d-flex justify-content-center"
                            data-split-text-type="lines, words, chars">
                            <div class="destined_to_desing">
                                <span class="fontsize_middle peachy_flightoe_font font_70">DESTINED <p
                                        class="fontsize_middle peachy_flightoe_font font_30"> TO </p> </span> <span
                                    class="fontsize_middle peachy_flightoe_font font_100">DESIGN </span>
                            </div>
                            <div class="art">
                                <span class="amsterdam_font font-size100 art_100">Art</span>
                            </div>
                            <!--DESTINED TO DESIGN-->
                            <!--<span class="amsterdam_font">Art</span>-->
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="h1 text-start slider__heading js-split-text d-flex justify-content-center"
                            data-split-text-type="lines, words, chars">
                            <div class="destined_to_desing">
                                <span class="fontsize_middle peachy_flightoe_font font_70">DESTINED <p
                                        class="fontsize_middle peachy_flightoe_font font_30"> TO </p> </span> <span
                                    class="fontsize_middle peachy_flightoe_font font_100">DESIGN </span>
                            </div>
                            <div class="art">
                                <span class="amsterdam_font font-size100 art_100">Art</span>
                            </div>
                            <!--DESTINED TO DESIGN-->
                            <!--<span class="amsterdam_font">Art</span>-->
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="h1 text-start slider__heading js-split-text d-flex justify-content-center"
                            data-split-text-type="lines, words, chars">
                            <div class="destined_to_desing">
                                <span class="fontsize_middle peachy_flightoe_font font_70">DESTINED <p
                                        class="fontsize_middle peachy_flightoe_font font_30"> TO </p> </span> <span
                                    class="fontsize_middle peachy_flightoe_font font_100">DESIGN </span>
                            </div>
                            <div class="art">
                                <span class="amsterdam_font font-size100 art_100">Art</span>
                            </div>
                            <!--DESTINED TO DESIGN-->
                            <!--<span class="amsterdam_font">Art</span>-->
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="h1 text-start slider__heading js-split-text d-flex justify-content-center"
                            data-split-text-type="lines, words, chars">
                            <div class="destined_to_desing">
                                <span class="fontsize_middle peachy_flightoe_font font_70">DESTINED <p
                                        class="fontsize_middle peachy_flightoe_font font_30"> TO </p> </span> <span
                                    class="fontsize_middle peachy_flightoe_font font_100">DESIGN </span>
                            </div>
                            <div class="art">
                                <span class="amsterdam_font font-size100 art_100">Art</span>
                            </div>
                            <!--DESTINED TO DESIGN-->
                            <!--<span class="amsterdam_font">Art</span>-->
                        </div>
                    </div>
                </div>
            </div>
            <!-- - slider CONTENT -->
            <!-- slider IMAGES -->
            <!--data-mousewheel-enabled="data-mousewheel-enabled"  data-counter-style="roman"-->
            <div class="slider-fullscreen-projects__images swiper-container js-slider-fullscreen-projects__images"
                data-transition-effect="distortion" data-aspect-ratio="1.5"
                data-transition-displacement-img="{{ asset('/assets/frontend/image/bg-displacement-7.jpg') }}" data-speed="1200"
                data-autoplay-enabled="true" data-autoplay-delay="6000">
                <div class="swiper-wrapper">
                    <div class="swiper-slide overflow">
                        <div class="slider__images-slide-inner js-transition-img overflow" data-swiper-parallax="90%">
                            <div class="slider__bg lazy-bg js-transition-img__transformed-el"
                                data-texture-src="{{ asset('/assets/frontend/image/Banner_main.jpg') }}"></div>
                        </div>
                    </div>
                    <div class="swiper-slide overflow">
                        <div class="slider__images-slide-inner js-transition-img overflow" data-swiper-parallax="90%">
                            <div class="slider__bg lazy-bg js-transition-img__transformed-el"
                                data-texture-src="{{ asset('/assets/frontend/image/Banner_main.jpg') }}"></div>
                        </div>
                    </div>
                    <div class="swiper-slide overflow">
                        <div class="slider__images-slide-inner js-transition-img overflow" data-swiper-parallax="90%">
                            <div class="slider__bg lazy-bg js-transition-img__transformed-el"
                                data-texture-src="{{ asset('/assets/frontend/image/Banner_main.jpg') }}"></div>
                        </div>
                    </div>
                    <div class="swiper-slide overflow">
                        <div class="slider__images-slide-inner js-transition-img overflow" data-swiper-parallax="90%">
                            <div class="slider__bg lazy-bg js-transition-img__transformed-el"
                                data-texture-src="{{ asset('/assets/frontend/image/Banner_main.jpg') }}"></div>
                        </div>
                    </div>
                </div>
                <!-- overlay -->
                <div class="slider__overlay overlay overlay_circle-dark overlay_deither"></div>
                <!--<div class="slider__circle"></div>-->
                <!-- - overlay -->
            </div>
            <!-- PAGE scroll down 
                <div class="section-masthead__wrapper-scroll-down section-masthead__wrapper-scroll-down_center"
                  style="translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
                  <div class="circle-button js-circle-button js-circle-button_curved" data-arts-os-animation="animated">
                     curved label 
                    <div class="circle-button__outer">
                      <div class="circle-button__wrapper-label"
                        style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%;">
                        <div class="circle-button__label small-caps">
                          <div aria-label="SCROLL DOWN" style="position: relative; height: 3.18415em;"><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.350849em) rotate(-51.062deg); transform-origin: center 5.61359em;">S</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.387168em) rotate(-41.2592deg); transform-origin: center 5.61359em;">C</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.376889em) rotate(-31.1105deg); transform-origin: center 5.61359em;">R</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.422116em) rotate(-20.4976deg); transform-origin: center 5.61359em;">O</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.336459em) rotate(-10.4217deg); transform-origin: center 5.61359em;">L</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.336459em) rotate(-1.48362deg); transform-origin: center 5.61359em;">L</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.164461em) rotate(5.16991deg); transform-origin: center 5.61359em;">&nbsp;</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.402243em) rotate(12.6972deg); transform-origin: center 5.61359em;">D</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.422116em) rotate(23.6469deg); transform-origin: center 5.61359em;">O</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.570816em) rotate(36.8356deg); transform-origin: center 5.61359em;">W</span><span
                              style="position: absolute; bottom: auto; left: 50%; transform: translateX(-0.425542em) rotate(50.0699deg); transform-origin: center 5.61359em;">N</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="circle-button__inner">
                      <div class="circle-button__circle" data-arts-scroll-down="data-arts-scroll-down"
                        data-arts-cursor="data-arts-cursor" data-arts-cursor-hide-native="true"
                        data-arts-cursor-scale="0">
                        <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                          <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
                        </svg>
                      </div>
                       browsers with touch support 
                      <div class="circle-button__icon circle-button__icon-touch">
                        <svg enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z">
                          </path>
                        </svg>
                      </div>
                       - browsers with touch support 
                       - browsers without touch support 
                      <div class="circle-button__icon circle-button__icon-mouse">
                        <svg class="svg-mouse" width="23px" height="35px" viewBox="0 0 23 35" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                           border 
                          <path class="svg-mouse__border"
                            d="M11.5,0 C5.15875132,0 0,5.23135343 0,11.6610111 L0,23.3396542 C0,29.7691456 5.15875132,35 11.5,35 C17.8412487,35 23,29.7693119 23,23.3396542 L23,11.6610111 C23,5.23135343 17.8410847,0 11.5,0 Z M21.7222404,23.3396542 C21.7222404,29.0545544 17.136538,33.7037222 11.5,33.7037222 C5.86346203,33.7037222 1.27775956,29.0545544 1.27775956,23.3396542 L1.27775956,11.6610111 C1.27775956,5.946111 5.86346203,1.29627781 11.5,1.29627781 C17.136538,1.29627781 21.7222404,5.94594466 21.7222404,11.6610111 L21.7222404,23.3396542 Z">
                          </path>
                           - border 
                           wheel 
                          <path class="svg-mouse__wheel"
                            d="M11.5,4 C11.2238902,4 11,4.28321727 11,4.63321727 L11,10.3667827 C11,10.7167827 11.2238902,11 11.5,11 C11.7761098,11 12,10.7167827 12,10.3667827 L12,4.63321727 C11.9998717,4.28321727 11.7761098,4 11.5,4 Z">
                          </path>
                           - wheel 
                        </svg>
                      </div>
                       - browsers without touch support 
                    </div>
                  </div>
                </div>
                PAGE scroll down -->

            <!-- slider COUNTER -->
            <!--<div class="slider__wrapper-counter slider-fullscreen-projects__counter">-->
            <!--  <div class="slider__counter slider__counter_current">-->
            <!--    <div class="js-slider-fullscreen-projects__counter-current swiper-container">-->
            <!--      <div class="swiper-wrapper"></div>-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="slider__counter-divider slider-fullscreen__counter-divider"></div>-->
            <!--  <div class="slider__counter slider__counter_total js-slider-fullscreen-projects__counter-total"></div>-->
            <!--</div>-->
            <!-- - slider COUNTER -->

            <!-- slider ARROWS -->
            <div class="slider__arrow slider__arrow_left slider__arrow_absolute js-slider__arrow-prev">
                <div class="arrow arrow-left js-arrow" data-arts-cursor="data-arts-cursor"
                    data-arts-cursor-hide-native="true" data-arts-cursor-scale="0"
                    data-arts-cursor-magnetic="data-arts-cursor-magnetic">
                    <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
                    </svg>
                    <div class="arrow__pointer arrow-left__pointer"></div>
                    <div class="arrow__triangle"></div>
                </div>
            </div>
            <div class="slider__arrow slider__arrow_right slider__arrow_absolute js-slider__arrow-next">
                <div class="arrow arrow-right js-arrow" data-arts-cursor="data-arts-cursor"
                    data-arts-cursor-hide-native="true" data-arts-cursor-scale="0"
                    data-arts-cursor-magnetic="data-arts-cursor-magnetic">
                    <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
                    </svg>
                    <div class="arrow__pointer arrow-right__pointer"></div>
                    <div class="arrow__triangle"></div>
                </div>
            </div>
            <!-- - slider ARROWS -->
            <!-- slider CANVAS -->
            <div class="slider__wrapper-canvas">
                <div class="slider__wrapper-canvas-inner">
                    <canvas class="slider__canvas"></canvas>
                </div>
            </div>
            <!-- - slider CANVAS -->
        </div>
    </div>
</section>

<!-- - section PROJECTS SLIDER FULLSCREEN -->
<section class="introduction_part home_intro_Bg pb-md-4 pb-0"> <!--remove class "pt-small" -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-lg-12">
                <section class="section section-content clearfix text-center"
                    data-arts-os-animation="data-arts-os-animation">
                    <div class="section-content__inner">
                        <div class="w-100"></div>
                        <div class="w-100"></div>
                        <div class="animheadertext-2">
                            <h2 class="js-split-words2 trajanPro_regular font50">INTRODUCTION</h2>
                            <h5 class="js-split-words2 pb-2 trajanPro_regular font26">DESIGN & STRATEGIC DEVELOPMENT
                            </h5>
                        </div>
                        <div class="w-100"></div>
                        <div class="anim-para-text">
                            <div class="fw-container fw-container-floattext">
                                <div class="js-split-p-letter anim-text__desc">
                                    Resin has no bounds—be it size, color, proportion, or dynamics.
                                    At Poonam Shah Arts, we challenge ourselves to meet our clients’
                                    needs while pushing the envelope to allow resin to meet its true
                                    potential in a home, office, or personalized gifting space.
                                    From wardrobes to wall art, our pieces add vibrancy and versatility
                                    to their surroundings, and provide our clients with a bespoke
                                    product that will be the talk of the town.
                                </div>
                            </div>
                        </div>

                        <!--<div class="section-content__text split-text js-split-text mt-1" data-split-text-type="lines"-->
                        <!--  data-split-text-set="lines">-->
                        <!--  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the-->
                        <!--    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and-->
                        <!--    scrambled it to make a type specimen book.</p>-->
                        <!--  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the-->
                        <!--    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and-->
                        <!--    scrambled it to make a type specimen book.</p>-->
                        <!--</div>-->
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
<!--</div>-->

<section class="section services_section border_2 section-grid" data-arts-os-animation="data-arts-os-animation">
    <div class="container">
        <div class="row section-content">
            <div class="col-md-4 padd0">
                <div class="row">
                    <div class="col-md-12 padd0">
                        <div class="homeboxanimate services_box services_bg">
                            <div class="mb-3 mb-xxl-4">
                                <h3 class="homeboxanimate-heading color_white peachy_flightoe_font font50">RASIN <span
                                        class="amsterdam_font">Bar</span></h3>
                            </div>
                            <div class="mb-3">
                                <p class="homeboxanimate-para color_white">
                                    As global interest in and demand for resin creations grows, so does the need
                                    for experimentation and exploration.
                                </p>
                            </div>
                            <div class="homeboxanimate-btn-bracket the-button white">
                                <a href="#" class="homeboxanimate-btn-text color_white">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 padd0">
                        <div class="homeboxanimate services_box services_bg_gray">
                            <div class="animheadertext-2 mb-3 mb-xxl-4">
                                <h3 class="homeboxanimate-heading peachy_flightoe_font font50">THE <span
                                        class="amsterdam_font">Vogue</span></h3>
                            </div>
                            <div class="anim-para-text mb-3">
                                <p class="homeboxanimate-para">
                                    Whether the pieces are exclusive one-of-a-kind show stoppers,
                                    or high-volume gifts and presentations, the quality and
                                    uniqueness of the product shines through.
                                </p>
                            </div>
                            <div class="homeboxanimate-btn-bracket the-button">
                                <a class="homeboxanimate-btn-text">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="home_section_container">
                    <div class="figure-member figure-member_has-social">
                        <div class="figure-member__avatar home_section_img">
                            <img class="img_height1 w-100" src="{{ asset('/assets/frontend/image/services_img_middle.jpg')}}" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="row">
                    <div class="col-md-12 padd0">
                        <div class="homeboxanimate services_box services_bg_gray">
                            <div class="animheadertext-2 mb-3 mb-xxl-4">
                                <h3 class="homeboxanimate-heading peachy_flightoe_font font50 pour_to_product"> <span
                                        class="amsterdam_font">From</span> Pour to Productivity </h3>
                            </div>
                            <div class="anim-para-text mb-3">
                                <p class="homeboxanimate-para">
                                    The unique features of resin allow it to be used in multiple ways and alongside
                                    various other materials. There is no limit to what resin can do and what it can
                                    become.
                                </p>
                            </div>
                            <div class="homeboxanimate-btn-bracket the-button">
                                <a class="homeboxanimate-btn-text">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 padd0">
                        <div class="homeboxanimate services_box services_bg">
                            <div class="animheadertext-2 mb-3 mb-xxl-4">
                                <h3 class="homeboxanimate-heading color_white peachy_flightoe_font font50">HOME <span
                                        class="amsterdam_font">Interiors</span></h3>
                            </div>
                            <div class="anim-para-text mb-3">
                                <p class="homeboxanimate-para color_white">
                                    Whether you are looking to add delicate floral elements to your
                                    space or represent the larger world of water bodies and geological enigmas,
                                    our tabletops combine ingenuity with imagination to create a show
                                    stopping centerpiece for your home.
                                </p>
                            </div>
                            <div class="homeboxanimate-btn-bracket the-button white">
                                <a href="#" class="homeboxanimate-btn-text color_white">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="home_section_container">
                    <div class="figure-member figure-member_has-social">
                        <div class="figure-member__avatar home_section_img">
                            <img class="img_height w-100" src="{{ asset('/assets/frontend/image/services_lft.jpg')}}" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4 padd0">
                <div class="homeboxanimate services_box services_bg">
                    <div class="animheadertext-2 mb-3 mb-xxl-4">
                        <h3 class="homeboxanimate-heading color_white peachy_flightoe_font font50">CANVAS <span
                                class="amsterdam_font">Art</span>
                        </h3>
                    </div>
                    <div class="anim-para-text mb-3">
                        <p class="homeboxanimate-para color_white">
                            A blank canvas is an artist’s playground. Poonam’s expressions through pigments,
                            glitter, stones, crystals, and other materials add unique textures and complexity
                            to her pieces, along with a glass-like finish that adds brightness and radiance.
                        </p>
                    </div>
                    <div class="homeboxanimate-btn-bracket the-button white">
                        <a href="#" class="homeboxanimate-btn-text color_white">Read More</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="home_section_container">
                    <div class="figure-member figure-member_has-social">
                        <div class="figure-member__avatar home_section_img">
                            <img class="img_height w-100" src="{{ asset('/assets/frontend/image/services_rght.jpg')}}" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4 padd0">
                <div class="homeboxanimate services_box services_bg_gray">
                    <div class="animheadertext-2 mb-3 mb-xxl-4">
                        <h3 class="homeboxanimate-heading peachy_flightoe_font font50"> <span
                                class="amsterdam_font">Sculptures </span></h3>
                    </div>
                    <div class="anim-para-text mb-3">
                        <p class="homeboxanimate-para">
                            Poured resin has a charm of its own—it takes the shape of the object
                            while highlighting the dips and bends and individual features of the structure,
                            giving a sense of unity while embellishing the sculpture.
                        </p>
                    </div>
                    <div class="homeboxanimate-btn-bracket the-button">
                        <a class="homeboxanimate-btn-text">Read More</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="home_section_container">
                    <div class="figure-member figure-member_has-social">
                        <div class="figure-member__avatar home_section_img">
                            <img class="img_height w-100" src="{{ asset('/assets/frontend/image/services_middle.jpg')}}" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 padd0">
                <div class="homeboxanimate services_box services_bg_gray">
                    <div class="animheadertext-2 mb-3 mb-xxl-4">
                        <h3 class="homeboxanimate-heading peachy_flightoe_font font50">VANITY <span
                                class="amsterdam_font">Mirror </span></h3>
                    </div>
                    <div class="anim-para-text mb-3">
                        <p class="homeboxanimate-para">
                            A crucial component of any designed space, mirrors can be embellished and
                            emphasized with the use of resin techniques, giving a final look that
                            is a balance of glass and gloss.
                        </p>
                    </div>
                    <div class="homeboxanimate-btn-bracket the-button">
                        <a class="homeboxanimate-btn-text">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="bottom_services border_3">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 padd0">
                <div class="box homeboxanimate">
                    <img src="{{ asset('/assets/frontend/image/serv_hover1.jpg')}}">
                    <div class="box-content">
                        <h3 class="homeboxanimate-heading peachy_flightoe_font font50">FOR THE<span
                                class="amsterdam_font">Little Ones</span>
                        </h3>
                        <p class="homeboxanimate-para">
                            Brighten up your child’s room with ethereal and imaginative pieces that
                            bring together resin, light, colour, and fun! Choose themes and materials
                            that your child will love and allow us to embed those interests and passions
                            into their physical surroundings.

                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 padd0">
                <div class="box homeboxanimate">
                    <img src="{{ asset('/assets/frontend/image/serv_hover2.jpg')}}">
                    <div class="box-content">
                        <h3 class="homeboxanimate-heading peachy_flightoe_font font50">Wardrobe<span
                                class="amsterdam_font"> Panels</span> </h3>
                        <p class="homeboxanimate-para">
                            Don’t get stuck with the standard veneers and closet doors—upgrade your
                            space with wardrobe panels that not only complement the colors and
                            textures of your room, but are also highly functional, with camouflaged
                            handles that create a seamless backdrop to your space.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<canvas id="js-webgl"></canvas>
    <!-- PhotoSwipe -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" data-arts-theme-text="light">
      <!-- background -->
      <div class="pswp__bg"></div>
      <!-- - background -->
      <!-- slider wrapper -->
      <div class="pswp__scroll-wrap">
        <!-- slides holder (don't modify)-->
        <div class="pswp__container">
          <div class="pswp__item">
            <div class="pswp__img pswp__img--placeholder"></div>
          </div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <!-- - slides holder (don't modify)-->
        <!-- UI -->
        <div class="pswp__ui pswp__ui--hidden">
          <!-- top bar -->
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)" data-arts-cursor="data-arts-cursor"
              data-arts-cursor-scale="1.2" data-arts-cursor-magnetic="data-arts-cursor-magnetic"
              data-arts-cursor-hide-native="true"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen" data-arts-cursor="data-arts-cursor"
              data-arts-cursor-scale="1.2" data-arts-cursor-magnetic="data-arts-cursor-magnetic"
              data-arts-cursor-hide-native="true"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- - top bar -->
          <!-- left arrow -->
          <div class="pswp__button pswp__button--arrow--left">
            <div class="arrow arrow-left js-arrow" data-arts-cursor="data-arts-cursor"
              data-arts-cursor-hide-native="true" data-arts-cursor-scale="0"
              data-arts-cursor-magnetic="data-arts-cursor-magnetic">
              <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
              </svg>
              <div class="arrow__pointer arrow-left__pointer"></div>
              <div class="arrow__triangle"></div>
            </div>
          </div>
          <!-- - left arrow -->
          <!-- right arrow -->
          <div class="pswp__button pswp__button--arrow--right">
            <div class="arrow arrow-right js-arrow" data-arts-cursor="data-arts-cursor"
              data-arts-cursor-hide-native="true" data-arts-cursor-scale="0"
              data-arts-cursor-magnetic="data-arts-cursor-magnetic">
              <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
              </svg>
              <div class="arrow__pointer arrow-right__pointer"></div>
              <div class="arrow__triangle"></div>
            </div>
          </div>
          <!-- - right arrow -->
          <!-- slide caption holder (don't modify) -->
          <div class="pswp__caption">
            <div class="pswp__caption__center text-center"></div>
          </div>
          <!-- - slide caption holder (don't modify) -->
        </div>
        <!-- - UI -->
      </div>
      <!-- slider wrapper -->
    </div>
    <!-- - PhotoSwipe -->


    <!-- List Hover Shaders -->
    <script id="list-hover-vs" type="x-shader/x-vertex">
      uniform vec2 uOffset;
      
      varying vec2 vUv;
      
      vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
        float M_PI = 3.1415926535897932384626433832795;
        position.x = position.x + (sin(uv.y * M_PI) * offset.x);
        position.y = position.y + (sin(uv.x * M_PI) * offset.y);
        return position;
      }
      
      void main() {
        vUv =  uv + (uOffset * 2.);
        vec3 newPosition = position;
        newPosition = deformationCurve(position,uv,uOffset);
        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
      }
    </script>
    <script id="list-hover-fs" type="x-shader/x-fragment">
      uniform sampler2D uTexture;
      uniform float uAlpha;
      uniform float uScale;
      
      varying vec2 vUv;
      
      vec2 scaleUV(vec2 uv,float scale) {
        float center = 0.5;
        return ((uv - center) * scale) + center;
      }
      
      void main() {
        vec3 color = texture2D(uTexture,scaleUV(vUv,uScale)).rgb;
        gl_FragColor = vec4(color,uAlpha);
      }
      
    </script>
    <!-- - List Hover Shaders -->
    <!-- Slider Textures Shaders -->
    <script id="slider-textures-vs" type="x-shader/x-vertex">
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    </script>
    <script id="slider-textures-horizontal-fs" type="x-shader/x-fragment">
      varying vec2 vUv;
      
      uniform sampler2D texture;
      uniform sampler2D texture2;
      uniform sampler2D disp;
      
      uniform float dispFactor;
      uniform float effectFactor;
      
      void main() {
      
        vec2 uv = vUv;
      
        vec4 disp = texture2D(disp, uv);
      
        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      
        vec4 _texture = texture2D(texture, distortedPosition);
        vec4 _texture2 = texture2D(texture2, distortedPosition2);
      
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      
        gl_FragColor = finalTexture;
      
      }
    </script>
    <script id="slider-textures-vertical-fs" type="x-shader/x-fragment">
      varying vec2 vUv;
      
      uniform sampler2D texture;
      uniform sampler2D texture2;
      uniform sampler2D disp;
      
      uniform float dispFactor;
      uniform float effectFactor;
      
      void main() {
      
        vec2 uv = vUv;
      
        vec4 disp = texture2D(disp, uv);
      
        vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
        vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));
      
        vec4 _texture = texture2D(texture, distortedPosition);
        vec4 _texture2 = texture2D(texture2, distortedPosition2);
      
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      
        gl_FragColor = finalTexture;
      
      }
      
    </script>
    <!-- - Slider Textures Shaders -->


    <!-- - COMPONENTS -->

    <!-- <script src="https://maps.googleapis.com/maps/api/js?callback=Function.prototype&amp;key=AIzaSyBwR_TrF6h7-pMxkKv_q2t8BXX3w6QuFOc" async></script> -->



@endsection

{{--
@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')
@isset($banners)
<section class="banner_main_section">
    <div class="container">
        <div class="banner_icons">
            @isset($banners[0])
            <div class="banner_icons1 position_absolute">
                <img src="{{ asset('storage/' .$banners[0]) }}" alt="Banner 1" />
            </div>
            @endisset

            @isset($banners[1])
            <div class="banner_icons2 position_absolute">
                <img src="{{ asset('storage/' .$banners[1]) }}" alt="Banner 2" />
            </div>
            @endisset

            @isset($banners[2])
            <div class="banner_icons3 position_absolute">
                <img src="{{ asset('storage/' .$banners[2]) }}" alt="Banner 3" />
            </div>
            @endisset

            @isset($banners[3])
            <div class="banner_icons4 position_absolute">
                <img src="{{ asset('storage/' .$banners[3]) }}" alt="Banner 4" />
            </div>
            @endisset

            @isset($banners[4])
            <div class="banner_icons5 position_absolute">
                <img src="{{ asset('storage/' .$banners[4]) }}" alt="Banner 5" />
            </div>
            @endisset

            @isset($banners[5])
            <div class="banner_icons6 position_absolute">
                <img src="{{ asset('storage/' .$banners[5]) }}" alt="Banner 6" />
            </div>
            @endisset
        </div>
    </div>
    <div class="heading-1">
        <h1>END TO END <span>SOLUTIONS</span></h1>
    </div>
</section>
@endisset
<div class="wrapp">
    <div class="anim-text negative-mt js-main-screen-text">
        <div class="fw-container fw-container-floattext">
            <div class="anim-text__title">INTRODUCTION</div>
            <div class="anim-text__desc js-animated-text translation-block text_fotns">{{ $homeDetails->introduction }}
            </div>
            <div class="view_more_button_div">
                <a class="view_more_button" href="{{ route('about-us') }}">
                    VIEW MORE
                </a>
            </div>
        </div>
    </div>
    @isset($marques)
    <section class="marquee">
        @isset($marques[0])
        <marquee behavior="alternate" direction="left" scrollamount="6">{{ $marques[0] }}</marquee>
        @endisset

        @isset($marques[1])
        <marquee behavior="alternate" direction="right" scrollamount="3">{{ $marques[1] }}</marquee>
        @endisset

        @isset($marques[2])
        <marquee behavior="alternate" direction="left" scrollamount="6">{{ $marques[2] }}</marquee>
        @endisset
    </section>
    @endisset
    <!-- <section id="section-65d5cb403227d"
            class=" fw-main-row-custom fw-main-row-top auto  tf-sh-bbab0552158703666369e6bfa378d615 negative-mt"><div class="fw-container-fluid"><div class="fw-row"><div id="column-e07bb40afd778d30f1b63d347621d6e3"
                  class="fw-col-sm-12 tf-sh-e07bb40afd778d30f1b63d347621d6e3  fw-col-no-padding"><div class="fw-main-row-overlay"></div><div class="fw-col-inner"><div class="animated-skew-texts --dark-style"><div class="animated-skew-texts__container"><div class="animated-skew-texts__row-wrap --row-1"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">Ships repair</span><span class="animated-skew-texts__text">PORTS</span><span class="animated-skew-texts__text">VESSEL OWNERS</span><span class="animated-skew-texts__text">SHIP YARDS</span></div></div><div class="animated-skew-texts__row-wrap --row-2"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">LOGISTICS</span><span class="animated-skew-texts__text">HEAVY LIFT</span><span class="animated-skew-texts__text">INSURANCE</span><span class="animated-skew-texts__text">OIL AND GAS</span></div></div><div class="animated-skew-texts__row-wrap --row-3"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">BANKS</span><span class="animated-skew-texts__text">SHIP RECYCLING</span><span class="animated-skew-texts__text">SUBSEA</span><span class="animated-skew-texts__text">SALVAGE</span></div></div></div></div></div></div></div></div></section> -->
    <section id="section-65d5cb4035911"
        class=" fw-ourbusiness fw-main-row-custom auto  tf-sh-a748fbe2fbb6ef2cd135e81de70cf48b ">
        <div class="fw-container-fluid">
            <div class="fw-row">
                <div id="column-1bd17aff4ac2df4b0e021d62b8f5f6cd"
                    class="fw-col-sm-12 tf-sh-1bd17aff4ac2df4b0e021d62b8f5f6cd  fw-col-no-padding">
                    <div class="fw-main-row-overlay"></div>
                    <div class="fw-col-inner">
                        <div id="scale-title" class="scale-title">
                            <div class="scale-title__title-wrap">
                                <div class="scale-title__title js-split-letters translation-block">OUR BUSINESS</div>
                            </div>
                        </div>
                        @isset($businessData)
                        <div class="buisnes_section">
                            <div class="container">
                                <div class="row justify-content-center">
                                @isset($businessData[0])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[0]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/Ports.png"> -->
                                            </div>
                                            <p>{!! $businessData[0]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[1])
                                <div class="col-md-3 col-6">
                                    <div class="buisness_box">
                                        <div class="buis_img hvr-bounce-in1">
                                            {!! $businessData[1]['icon'] !!}
                                            <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/VESSEL-OWNERS.png"> -->
                                        </div>
                                        <p>{!! $businessData[1]['name'] !!}</p>
                                    </div>
                                </div>
                                @endisset
                                @isset($businessData[2])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[2]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/SHIP-YARDS.png"> -->
                                            </div>
                                            <p>{!! $businessData[2]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[3])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[3]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/LOGISTICS-HEAVY-LIFT.png"> -->
                                            </div>
                                            <p>{!! $businessData[3]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[4])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[4]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/OIL-AND-GAS.png"> -->
                                            </div>
                                            <p>{!! $businessData[4]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[5])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[5]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/BANKS.png"> -->
                                            </div>
                                            <p>{!! $businessData[5]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[6])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[6]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/SHIP-RECYCLING.png"> -->
                                            </div>
                                            <p>{!! $businessData[6]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[7])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[7]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/SUBSEA.png"> -->
                                            </div>
                                            <p>{!! $businessData[7]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[8])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[8]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/INSURANCE.png"> -->
                                            </div>
                                            <p>{!! $businessData[8]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[9])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[9]['icon'] !!}
                                                <!-- <img src="http://poonam.webtesting.pw/wp-content/uploads/2024/03/SALVAGE.png"> -->
                                            </div>
                                            <p>{!! $businessData[9]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                </div>
                            </div>
                        </div>
                        @endisset
                        <section class="platform">
                            <div class="news__title">
                                <div class="news__title-item">THE BUSINESS'S STATISTICAL ANALYSIS </div>
                                <!-- <div class="news__title-item">SERVICES</div> -->
                                <!-- <div class="news__title-item">THE</div> -->
                            </div>
                            <div class="display_flex">
                                <div class="col-md-6 col-12 p-0">
                                    <img class="counter_img " src="/assets/images/a_platform.webp" alt="shipimage">
                                </div>
                                <div class="col-md-6 col-12 p-0">
                                    @isset($counter)
                                    <div class="news ">
                                        <div class="news__main">
                                            <div class="fw-container">
                                                <!--<div class="news__row-line"></div>-->
                                                <div class="news__reports">
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[0]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[0]['name'] }}</div>
                                                    </a>

                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[1]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[1]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[2]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[2]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[3]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[3]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endisset
                                </div>
                            </div>
                        </section>
                        @if(isset($project))
                        <section class="work">
                            <div class="work__left">
                                <div class="work__text">
                                    @foreach ($project as $index => $projects)
                                    <div class="work__info">
                                        <div class="work__left-bl">
                                            <!-- <span class="work__num">{{ $index + 1 }}</span> -->
                                            <h2 class="title">{{ $projects['title'] }}<span
                                                    class="stroke">PROJECTS</span></h2>
                                            <!-- <p class="text_fotns mb-0 pb-0">
                                                {{ \Carbon\Carbon::parse($projects['date'])->format('M d, Y') }}</p> -->

                                            <!-- @php
                                            echo html_entity_decode($projects['description']);
                                            @endphp -->

                                            <a href="{{ route('projects') }}" class="work__link">Read More</a>
                                        </div>
                                    </div>
                                    @endforeach

                                </div>
                            </div>
                            <div class="work__right">
                                <div class="work__right-bl">
                                    <div class="work__photo">
                                        @foreach ($project as $index => $projecta)
                                        @if (isset($projecta['image']))
                                        <div class="work__photo-item">
                                            <img src="{{ asset('storage/' . $projecta['image']) }}" alt="">
                                        </div>
                                        @endif
                                        @endforeach
                                    </div>

                                </div>
                            </div>
                        </section>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
    @if(isset($project))
    <section class="work_carousel">
        <div class="work__text">
            <div id="work_carousel" class="owl-carousel owl-theme">
                @foreach($project as $index => $projects)
                <div class="work__info">
                    <div class="work__left-bl">
                        <!--<span class="work__num">{{ sprintf('%02d', $index + 1) }}</span>-->
                        <img src="{{ asset('storage/' . $projects['image']) }}" alt="{{ $projects['title'] }}">
                        <h2 class="title">{{ $projects['title'] }}
                            <!-- <span class="stroke">PROJECTS</span> -->
                        </h2>
                        <!--<p class="text_fotns mb-0 pb-0">{{ date('M.d, Y', strtotime($projects['date'])) }}</p>-->
                        @php
                            echo html_entity_decode($projects['description']);
                        @endphp
                        <a href="{{ route('projects') }}" class="work__link">Read More</a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>
    @endif


    @endsection
    --}}