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
        <h3 class="js-split-words2 peachy_flightoe_font font50 text-center color_white mb-4">{{ isset($title) ? $title : ''}}</h3>
        <p class="js-split-p-letter color_white">
            {{isset($short_description) ? $short_description : ''}}
        </p>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            @if (!empty($image_description))
            <div class="col-md-12">
                <div class="row justify-content-start">
                    @foreach ($image_description as $item)
                    
                        <div class="col-md-4 py-4">
                            <div class="gallery_dt_inner">
                                <div class="gallery_dt_img the_gallery_img">
                                    @if (!is_null($item['image']))
                                    <a href="{{ asset('storage/' . $item['image']) }}" data-fancybox="images"
                                        data-caption="{{ $item['text'] }}">
                                        <img src="{{ asset('storage/' . $item['image']) }}" alt="Gallery Image">
                                    </a>
                                    @endif
                                    @if (!is_null($item['text']))
                                    <div class="box homeboxanimate mt-4">
                                        <div class="box-content">
                                            <p class="homeboxanimate-para color_white">
                                                {{ $item['text'] }}
                                            </p>
                                        </div>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    @endforeach 
                </div>
            </div>
            @endif
            
            <div class="col-md-12">
                @if (!empty($images))
                <div class="row">
                    <div class="masonry_gallery">
                    @foreach ($images as $index => $image)
                        <div class="masonry_gallery_div gallery_dt_img the_gallery_img"><a href="{{ asset('storage/' . $image) }}" data-fancybox="images" data-caption="Image{{$index + 1}}"><img src="{{ asset('storage/' . $image) }}" /></a></div>
                    @endforeach
                </div>
                @endif
                @if(!empty($videos))
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
                                    
                                <img src="https://img.youtube.com/vi/{{ $video }}/hqdefault.jpg" alt="Thumbnail" />

                                        <!-- <img src="{{ asset('assets/frontend/image/Video_1.jpg')}}" /> -->
                                        <button type="button" class="btn gallery_yt_video" data-youtube-url="https://www.youtube.com/embed/{{$video}}" >
                                            <i class="fa-regular fa-circle-play"></i>
                                        </button>
                                </div>
                            @endforeach
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                @endif

                </div>
            </div>
            
            
        </div>
    </div>
</section>



@endsection

@section('page.scripts')
<script>
  $(document).ready(function(){
    $('.gallery_yt_video').click(function(){
      var url = $(this).attr('data-youtube-url');
      $('#videoIframe').attr('src', url);
      $('#videoModal').modal('show');
    });

    $('.close').click(function(){
      $('#videoModal').modal('hide');
    });

    $('#videoModal').on('hide.bs.modal', function () {
      $('#videoIframe').attr('src', '');
    });
  });
</script>
@endsection

