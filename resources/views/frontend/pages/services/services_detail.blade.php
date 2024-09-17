@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')


<section class="vases_banner inner_header border_1">
    <img src="{{ asset('storage/' . $banner)}}" class="w-100" />
    <div class="container">
        <div class="header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">OUR SERVICES</h3>
        </div>
    </div>
</section>

<section class="section section-masthead d-none" data-background-color="var(--color-light-3)"></section>
<!-- - section MASTHEAD -->
<!-- section ALBUMS SLIDER COVERS -->
<section class="services_inner_page section section-fullheight section-projects section-projects-slider bg-light-3 text-center overflow"
    data-arts-os-animation>
    <div class="grey-bg section-fullheight__inner section-fullheight__inner_mobile">
        <div class="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider d-flex justify-content-center">
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
                                        data-background="{{ asset('storage/' . $service_image)}}"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider__circle"></div>
        </div>
        <!-- slider IMAGES -->            
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
                                    @if(!empty($title))
                                        <h2 class="text-dark peachy_flightoe_font h1 slider__heading block-counter js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">
                                        <span>{{$title}}</span><!--<span class="block-counter__counter">1</span>-->
                                        </h2>
                                    @endif
                                    @if(!empty($service_image))
                                        <!-- album photos -->
                                        <div class="js-album__items d-none"><img src="#" data-album-src="{{ asset('storage/' . $service_image)}}" width="1920" height="1920" data-title="" alt="" /></div>
                                        <!-- - album photos -->
                                    @endif
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
                <!-- slider INDICATOR -->
                <div class="col-lg-3 text-center text-lg-right">
                    <div class="slider-categories js-slider__categories text-center text-lg-right mb-0">
                        @if(!empty($short_description))
                            <div class="animheadertext-2 anim-para-text container text-center mb-md-5">
                                <p class="js-split-p-letter color_white">
                                    {{$short_description}}
                                </p>
                            </div>
                        @endif
                    </div>
                </div>
                <!-- - slider INDICATOR -->
            </div>
        </div>
        <!-- - slider FOOTER -->
        <div class="short_description animheadertext-2 anim-para-text container text-center w-100 w-md-75 mb-md-5">
            <p class="js-split-p-letter color_white">
                {{$short_description2}}
            </p>
        </div>
        </div>
    </div>
</section>


<section class="gallery_details_section services_gallery our_work_bg border_4 border_3 mt_70 mb-md-5 mb-2">
    @if(!empty($short_description))
    <div class="animheadertext-2 anim-para-text container text-center w-100 w-md-75 mb-md-5">
        <p class="js-split-p-letter color_white">
            {{$short_description}}
        </p>
    </div>
    @endif
    @if(!empty($gallery_image))
    <div class="container pb-md-5 pb-0 mb-3">
        <div class="row justify-content-center">                
            <div class="col-md-12">       
                <div class="slider-fullscreen-projects__images swiper-container services_swiper js-slider-fullscreen-projects__images 
                overflow-hidden" data-speed="1200" data-slides-per-view="4" data-slides-per-view-tablet="1"
                    data-slides-per-view-mobile="1.1" data-mousewheel-enabled="false" data-direction="horizontal"
                    data-drag-mouse="true" data-drag-cursor="true"
                    data-drag-class="slider-fullscreen-projects__images_scale-down" data-touch-ratio="3"
                    data-autoplay-enabled="true" data-autoplay-delay="6000" data-counter-style="roman">
                    <div class="swiper-wrapper">
                        @foreach ($gallery_image as $index => $image)
                            <div class="swiper-slide overflow d-flex-centered">
                                @if(!empty($image))
                                <a href="{{ asset('storage/' . $image)}}" data-fancybox="images"
                                    data-caption="Image {{$index + 1}}">
                                    <img class="service-images" src="{{ asset('storage/' . $image)}}">
                                </a>
                                @endif
                            </div>
                        @endforeach                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endif
</section>


@endsection