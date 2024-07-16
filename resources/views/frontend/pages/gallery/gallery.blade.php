@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="gallery_banner inner_header border_1">
  <img src="{{ asset('/assets/frontend/image/gallery_banner.jpg')}}" class="w-100" />
  <div class="container">
    <div class="header_title">
      <h3 class="heading_inner_text peachy_flightoe_font font50">OUR WORKS</h3>
    </div>
  </div>
</section>
<section class="introduction_part pddleftright pt-md-3">
  <div class="container">
    <div class="animheadertext-2 anim-para-text introduction_box text-center pb-xxl-5">
      <h5 class="js-split-words2 pb-2 trajanPro_regular font30">LET'S COLLABORATION To CURATE AND CREATE ANYTHING
        TO WHICH YOUR HEART AND SOUL CAN RELATE</h5>
      <p class="js-split-p-letter">
        From sprawling art installations spanning entire walls to tables and home interior accessories
        that echo your tastes, Poonam Shah Art can customize size, texture, colour, and materials to
        provide you personalized pieces that elevate your space.
      </p>
    </div>
  </div>
</section>
<section class="gallery_box_section our_work_bg border_2 border_3">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="row">
          @if (!empty($gallery))
          @foreach ($gallery as $item)
            <div class="col-md-6">
            <div class="gallery_box_inner" id="gallery{{ $item->id }}">
              <div class="gallery_img">
              <img src="{{ asset('storage/' . $item->thum_image) }}" alt="{{ $item->title }}" />
              </div>
              <div class="gallery_content">
              <h5 class="peachy_flightoe_font">{{ $item->title }}</h5>
              <a href="{{ url('gallery/' . $item->slug) }}">View Gallery <i
                class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            </div>
          @endforeach
          @endif
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  .gallery_box_inner {
    overflow: hidden;
  }
</style>

@endsection