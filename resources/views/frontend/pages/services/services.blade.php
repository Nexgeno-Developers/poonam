@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="inner_header border_1">
    <img src="{{ asset('/assets/frontend/image/services_banner.jpg')}}" class="w-100" />
    <div class="container">
        <div class="header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">OUR SERVICES</h3>
        </div>
    </div>
</section>

<section class="section section-masthead d-none" data-background-color="var(--color-light-3)"></section>
<!-- - section MASTHEAD -->
<!-- section ALBUMS SLIDER COVERS -->
<section class="section section-fullheight section-projects section-projects-slider bg-light-3 text-center overflow"
    data-arts-os-animation>
    <div class="grey-bg section-fullheight__inner section-fullheight__inner_mobile">
        <div class="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider">
            <!-- slider FOOTER -->
            <div class="container-fluid slider-fullscreen-projects__footer slider-fullscreen-projects__footer_content">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-3 d-none d-lg-block"></div>
                    <!-- slider CONTENT -->
                    <div class="col-lg-6">
                        <div class="swiper-container js-slider-fullscreen-projects__content">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide vases" data-category="albums"><a
                                        class="d-inline-block js-page-indicator-trigger js-album" href="#">
                                        <h2 class="text-dark peachy_flightoe_font h1 slider__heading block-counter js-split-text"
                                            data-split-text-type="lines, words, chars" data-split-text-set="chars">
                                            <span>VASES</span><!--<span class="block-counter__counter">1</span>-->
                                        </h2>
                                        <!-- album photos -->
                                        <div class="js-album__items d-none"><img src="#"
                                                data-album-src="{{ asset('/assets/frontend/image/dt_gallery_4.jpg')}}" width="1920" height="1920"
                                                data-title="" alt="" />
                                        </div>
                                        <!-- - album photos -->
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <!-- - slider CONTENT -->
                    <!-- slider INDICATOR -->
                    <div class="col-lg-3 text-center text-lg-right">
                        <div class="slider-categories js-slider__categories text-center text-lg-right mb-0">
                            <div class="slider-categories__category small-caps js-split-text split-text"
                                data-split-text-type="lines" data-category="albums"></div>
                            <div class="slider-categories__category small-caps js-split-text split-text"
                                data-split-text-type="lines" data-button="data-button">
                            </div>
                        </div>
                    </div>
                    <!-- - slider INDICATOR -->
                </div>
            </div>
            <!-- - slider FOOTER -->
            <!-- slider IMAGES -->
            <div class="slider-fullscreen-projects__images swiper-container js-slider-fullscreen-projects__images"
                data-speed="1200" data-slides-per-view="1" data-slides-per-view-tablet="1"
                data-slides-per-view-mobile="1" data-mousewheel-enabled="false" data-direction="horizontal"
                data-drag-mouse="false" data-drag-cursor="false"
                data-drag-class="slider-fullscreen-projects__images_scale-down" data-touch-ratio="3"
                data-autoplay-enabled="true" data-autoplay-delay="6000" data-counter-style="roman">
                <div class="swiper-wrapper">
                    <div class="swiper-slide overflow d-flex-centered">
                        <div
                            class="slider__images-slide-inner slider__images-slide-inner_circle border-radius-100 js-transition-img">
                            <div class="w-100 h-100" data-swiper-parallax-zoom="0%" data-swiper-parallax="0%">

                                <div class="slider__zoom-container w-100 h-100 overflow">
                                    <div class="slider__bg swiper-lazy lazy-bg js-transition-img__transformed-el"
                                        data-background="{{ asset('/assets/frontend/image/dt_gallery_5.jpg')}}"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider__circle"></div>
            </div>
        </div>
    </div>
</section>

<section class="gallery_details_section services_gallery our_work_bg border_4 border_3 mt_70 mb-5">
    <div class="animheadertext-2 anim-para-text container text-center w-75 mb-md-5">
        <p class="js-split-p-letter color_white">
            Complement your décor with a vase that can serve as a stand-alone highlight,
            with or without flowers. Made in various shapes, textures, and using a
            variety of techniques, the possibilities are endless.
        </p>
    </div>
    <div class="container pb-5 mb-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="slider-fullscreen-projects__images swiper-container services_swiper js-slider-fullscreen-projects__images 
                        overflow-hidden" data-speed="1200" data-slides-per-view="4" data-slides-per-view-tablet="1"
                    data-slides-per-view-mobile="1" data-mousewheel-enabled="false" data-direction="horizontal"
                    data-drag-mouse="true" data-drag-cursor="true"
                    data-drag-class="slider-fullscreen-projects__images_scale-down" data-touch-ratio="3"
                    data-autoplay-enabled="true" data-autoplay-delay="6000" data-counter-style="roman">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/red_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/red_wine.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/lemon_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/lemon_wine.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/glass_on_frame.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/glass_on_frame.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/blue_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/blue_wine.jpg')}}">
                            </a>
                        </div>

                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/red_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/red_wine.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/lemon_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/lemon_wine.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/glass_on_frame.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/glass_on_frame.jpg')}}">
                            </a>
                        </div>
                        <div class="swiper-slide overflow d-flex-centered">
                            <a href="{{ asset('/assets/frontend/image/blue_wine.jpg')}}" data-fancybox="images" data-caption="Image 1">
                                <img class="service-images" src="{{ asset('/assets/frontend/image/blue_wine.jpg')}}">
                            </a>
                        </div>
                    </div>
                </div>
                <!--<div class="anim-para-text animheadertext-2 container w-75">
                    <h3 class="js-split-words2 peachy_flightoe_font font50 text-start color_white mb-5">
                      OUR CREATIVE WORK</h3>
                    <p class="js-split-p-letter color_white mb-md-5">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s,
                      when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                      It has survived not only five centuries, but also the leap into electronic
                      typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with desktop
                      publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>-->
            </div>
        </div>


</section>


@endsection