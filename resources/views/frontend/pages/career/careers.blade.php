@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<style>
footer {
    background: #bdbec2 !important;
}
</style>

<section class="inner_banner_section"
    style="background-image: url('@isset($careerDetails->banners){{ asset('storage/' . $careerDetails->banners) }}@endisset')">
    <div class="container">
        <div class="heading_inner">
            <h1 class="heading_inner_text">CAREERS</h1>
        </div>
    </div>
</section>

<div class="wrapp">

    <div class="anim-text negative-mt js-main-screen-text">
        <div class="fw-container fw-container-floattext">
            <div class="career_below_font main_about_heading">
              @isset($introduction['title'])
                  <h4 class="pbtm0 js-split-words2">{{ $introduction['title'] }}</h4>
              @endisset
              @isset($introduction['title2'])
                  <h4 class="team_fonts1 pbtm0 js-split-words2"><span>{{ $introduction['title2'] }}</span></h4>
              @endisset
            </div>
            <!--<div class="main_about_heading spacing41">
                
            </div>-->
        </div>
    </div>


</div>

<div class="display_flex align_center section-fadeleft buisness_section_container_left">
    <div class="col-md-6">
        <div class="contactform fadeleft">
            <form action="">
                <input type="text" id="fname" name="fname" placeholder="FULL NAME">
                <input type="tel" id="lname" name="lname" placeholder="CONTACT NO.">
                <input type="email" id="mail" name="mail" placeholder="EMAIL ID">
                <input type="text" id="address" name="address" placeholder="ADDRESS">
                <input type="text" id="city" name="city" placeholder="CITY">
                <input type="text" id="state" name="state" placeholder="STATE">
                <label for="myfile" class="text_fotns">Upload your CV:</label>
                <input type="file" id="myfile" name="myfile" class="upfile">
                <button class="carrer_button">Submit</button>
            </form>
        </div>
    </div>
    <div class="col-md-6 buisness_section_img_left">
        <img class="width100" src="@isset($introduction['image']){{ asset('storage/' . $introduction['image']) }}@endisset">
    </div>
</div>

<div class="anim-text__title main_about_heading">
    <h4 class="js-split-words2 fontsize42">BUILD YOUR POWERFUL CAREER</h4>
</div>


@endsection