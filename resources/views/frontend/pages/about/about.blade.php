@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

@if (!empty($banner))
<section class="about_us_banner inner_header border_1">
    <img src="{{ asset('storage/'.$banner) }}" class="w-100" />
    <div class="container">
        <div class="heading_inner header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">ABOUT US</h3>
        </div>
    </div>
</section>
@endif

@if (!empty($journey_section))
<section class="parallax-container3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about_content pe-md-4 pe-0 anim-para-text animheadertext-2">
                    <h3 class="js-split-words2 peachy_flightoe_font font50">{{ isset($journey_section->journey_text) ? $journey_section->journey_text : '' }}</h3>
                    <div class="text-justify js-split-p-letter">
                        {!! isset($journey_section->journey_description) ? $journey_section->journey_description : '' !!}
                    </div>

                </div>
            </div>
            <div class="col-md-6">
                <div class="image-wrapper-profile">
                    <div class="overlay"></div>
                    @if (!empty($journey_section->journey_image))                    
                        <img class="parallax-layer3 profile_img img w-100" src="{{ asset('storage/'.$journey_section->journey_image) }}" data-speed="-3" alt="Profile Image" />
                    @endif
                </div>
            </div>
            <div class="col-md-12">
                <div class="about_signature">
                    <img class="w-100" src="{{ asset('/assets/frontend/image/signature.png')}}" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="animheadertext-2 about_between">
                    <h4 class="js-split-words2 trajanPro_regular"><b>{{ isset($journey_section->journey_heading) ? $journey_section->journey_heading : ''}}</b> </h4>
                </div>
            </div>
        </div>
    </div>
</section>
@endif

@if (!empty($about_section))
<section class="border_bottom1"></section>

<section id="about_us" class="mt120 parallax-container2">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about_img">
                    @if (!empty($about_section->about_image))
                        <img src="{{ asset('storage/'.$about_section->about_image) }}" class="parallax-layer2 w-100 float-end" alt="Parallax Image" data-speed="-2">
                    @endif
                </div>
            </div>

            <div class="col-md-6">
                <div class="about_content pt-md-5 pt-1">
                    <div class="anim-para-text">
                        <div class="text-justify js-split-p-letter">
                            {!! isset($about_section->about_description) ? $about_section->about_description : '' !!}                       
                        </div>
                    </div>
                    <div class="animheadertext-2">
                        <h4 class="js-split-words2 font30 trajanPro_regular"><b>{{ isset($about_section->about_heading) ? $about_section->about_heading : '' }}</b></h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
@endif


@if (!empty($vision_section))

<section class="about_middle_section bg_darkgray border_2 border_3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="anim-para-text about_content pt-5">

                    <div class="text-white js-split-p-letter">                    
                        {!! isset($vision_section->vision_description) ? $vision_section->vision_description : '' !!}
                    </div>

                    <div class="animheadertext-2">
                        <h4 class="js-split-words2 color_white font30  pe-md-5 peachy_flightoe_font ">{{ isset($vision_section->vision_heading) ? $vision_section->vision_heading : '' }}</h4>
                    </div>

                </div>
            </div>
            <div class="col-md-5">
                @if (!empty($vision_section->vision_image))
                <div class="about_img_vission position-relative parallax-container"
                    onmousemove="parallaxEffect(event)" onmouseleave="resetTilt()">
                    <img class="parallax-image" src="{{ asset('storage/'.$vision_section->vision_image) }}" />
                    <h4 class="amsterdam_font vission_title">Vision</h4>
                </div>
                @endif
            </div>

        </div>
    </div>
</section>

@endif

@if(!empty($design_section)) 
@php
$designHeading = $design_section->design_heading;
$designImage = isset($design_section->design_image) ? asset('storage/'.$design_section->design_image) : null ;
$designTextParts = explode('|', $designHeading, 3);

$designfirstText = $designTextParts[0] ?? '';
$designsecondText = $designTextParts[1] ?? '';
$designthirdText = isset($designTextParts[2]) ? str_replace('|', ' ', $designTextParts[2]) : '';
//$designthirdText = $designTextParts[2] ?? '';

@endphp

<section class="design_den">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="about_circle">
                    <img src="{{ isset($designImage) ? $designImage : '' }}" />
                    <h4 class="peachy_flightoe_font design_heading">
                        <div class="first_text">{{ isset($designfirstText) ? $designfirstText : '' }}<span class="color_white">{{ isset($designsecondText) ? $designsecondText : '' }}</span></div>
                        <span class="second_text color_white float_right">{{ isset($designthirdText) ? $designthirdText : '' }}</span>
                    </h4>

                </div>
            </div>
            <div class="col-md-5">
                <div class="anim-para-text about_content pt-5">                    
                        <div class="text-justify js-split-p-letter">                            
                            {!! isset($design_section->design_description) ? $design_section->design_description : '' !!}
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endif
@endsection