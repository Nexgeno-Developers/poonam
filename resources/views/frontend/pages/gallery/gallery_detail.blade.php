@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')


<section class="gallery_details_banner inner_header">
    <img src="{{ asset('storage/' . $banner)}}" class="w-100" />
    <div class="container">
        <div class="header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">OUR WORKS</h3>
        </div>
    </div>
</section>

<section class="gallery_details_section main_section_gallery_detail our_work_bg border_4 border_3 mt_70">
    <div class="animheadertext-2 anim-para-text container text-center w-md-75 w-100 mb-md-5">
        <h3 class="js-split-words2 peachy_flightoe_font font50 text-center color_white mb-4">{{$title}}</h3>
        <p class="js-split-p-letter color_white">
            {{$short_description}}
        </p>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row justify-content-center">
                    @foreach ($image_description as $item)
                        <div class="col-md-4 py-4">
                            <div class="gallery_dt_inner">
                                <div class="gallery_dt_img the_gallery_img">
                                    <a href="{{ asset('storage/' . $item['image']) }}" data-fancybox="images"
                                        data-caption="{{ $item['text'] }}">
                                        <img src="{{ asset('storage/' . $item['image']) }}" alt="Gallery Image">
                                    </a>
                                    <div class="box homeboxanimate mt-4">
                                        <div class="box-content">
                                            <p class="homeboxanimate-para color_white">
                                                {{ $item['text'] }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach 
                </div>
            </div>
            <div class="col-md-12">
                <div class="row">
                    @foreach ($images as $index => $image)
                        <div class="col-md-4">
                            <div class="gallery_dt_inner">
                                <div class="gallery_dt_img the_gallery_img">
                                    <a href="{{ asset('storage/' . $image) }}" data-fancybox="images"
                                        data-caption="Image{{$index + 1}}">
                                        <img src="{{ asset('storage/' . $image) }}" alt="Gallery Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach

                    <div class="animheadertext-2 col-md-12">
                        <h3 class="js-split-words2 peachy_flightoe_font font50 text-center color_white mb-4 mt-5">VIDEOS
                        </h3>
                    </div>

                    <div class="slider-fullscreen-projects__images swiper-container gallery_swiper js-slider-fullscreen-projects__images
                        position-relative overflow-hidden" data-speed="1200" data-slides-per-view="4"
                        data-slides-per-view-tablet="1" data-slides-per-view-mobile="1" data-mousewheel-enabled="false"
                        data-direction="horizontal" data-drag-mouse="true" data-drag-cursor="true"
                        data-drag-class="slider-fullscreen-projects__images_scale-down" data-touch-ratio="3"
                        data-autoplay-enabled="true" data-autoplay-delay="6000" data-counter-style="roman">
                        <div class="swiper-wrapper">
                            @foreach($videos as $video)
                                <div class="swiper-slide overflow d-flex-centered">
                                    <iframe width="853" height="480" src="https://www.youtube.com/embed/{{$video}}"
                                        title="How To Add Page Transitions To NextJS 14 (including Exit Animations)"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            @endforeach


                            <div class="swiper-slide overflow d-flex-centered">
                                <img src="image/Video_1.jpg" />
                            </div>
                            <div class="swiper-slide overflow d-flex-centered">
                                <img src="image/Video_1.jpg" />
                            </div>
                            <div class="swiper-slide overflow d-flex-centered">
                                <img src="image/Video_1.jpg" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</section>


@endsection