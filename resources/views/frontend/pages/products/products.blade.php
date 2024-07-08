@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

@php
//var_dump($oilnspill)
@endphp

<style>
footer {
    background: #bdbec2 !important;
}

ul.modal_popup_list ol li {
    list-style: disc !important;
}

#project_popup1 .modal_popup_list li ol li:last-child {
    border: none;
}
</style>

<section class="inner_banner_section"
    style="background-image: url('@isset($productsDetails->banners){{ asset('storage/' . $productsDetails->banners) }}@endisset')">
    <div class="container">
        <div class="heading_inner">
            <h1 class="heading_inner_text">PRODUCTS</h1>
        </div>
    </div>
</section>
<section class="team_sections pt-4 pb-4 product_section">
    <div class="container">
        <div class="main_about_heading">
            <h4 class="mb-30">RADIO & COMMUNICATION EQUIPMENTS <h4>
        </div>

        <div class="box_centers">
            @foreach($radio as $index => $radios)
            <div class="aboutports_left">
                <a onclick="popupOpen('#radiocontent{{ $index + 1 }}')">
                    <div class="buisness_box products-icon1">
                        <div class="buis_img">
                            @isset($radios['image'])
                            {!! $radios['image'] !!}
                            @endisset
                        </div>
                        @isset($radios['title'])
                        <p class="text_fotns">{{ $radios['title'] }}</p>
                        @endisset
                    </div>
                </a>
            </div>
            <div class="d-none" id="radiocontent{{ $index + 1 }}">
                <span class="1">
                    @isset($radios['description'])
                    {!! $radios['description'] !!}
                    @endisset
                </span>
                <span class="2">
                    @isset($radios['title'])
                    {!! $radios['title'] !!}
                    @endisset
                </span>
            </div>
            @endforeach
        </div>    

    </div>
</section>

<section class="team_sections pt-4 pb-4 gray_bgg product_section product_section1">
    <div class="container">
        <div class="main_about_heading">
            <h4 class="mb-30">OIL SPILL EQUIPMENT AND TRAINING <h4>
        </div>
        <div class="box_centers">
            @foreach($oilnspill as $index => $oilnspills)
            <div class="aboutports_left">
                <a onclick="popupOpen('#oilcontent{{ $index + 1 }}')">
                    <div class="buisness_box products-icon1">
                        <div class="buis_img">
                            @isset($oilnspills['image'])
                            {!! $oilnspills['image'] !!}
                            @endisset
                        </div>
                        @isset($oilnspills['title'])
                        <p class="text_fotns">{{ $oilnspills['title'] }}</p>
                        @endisset
                    </div>
                </a>
            </div>
            <div class="d-none" id="oilcontent{{ $index + 1 }}">
                <span class="1">
                    @isset($oilnspills['description'])
                    {!! $oilnspills['description'] !!}
                    @endisset
                </span>
                <span class="2">
                    @isset($oilnspills['title'])
                    {!! $oilnspills['title'] !!}
                    @endisset
                </span>
            </div>
            @endforeach
        </div>

    </div>
</section>
<section class="team_sections pt-4 pb-4 product_section">
    <div class="container">
        <div class="main_about_heading">
            <h4 class="mb-30">AIDS TO NAVIGATION <h4>
        </div>
        <div class="box_centers">
            @foreach($aids_navigation as $index => $aids_nav)
            <div class="aboutports_left">
                <a onclick="popupOpen('#aids_navigation{{ $index + 1 }}')">
                    <div class="buisness_box products-icon1">
                        <div class="buis_img">
                            @isset($aids_nav['image'])
                            {!! $aids_nav['image'] !!}
                            @endisset
                        </div>
                        @isset($aids_nav['title'])
                        <p class="text_fotns">{{ $aids_nav['title'] }}</p>
                        @endisset
                    </div>
                </a>
            </div>
            <div class="d-none" id="aids_navigation{{ $index + 1 }}">
                <span class="1">
                    @isset($aids_nav['description'])
                    {!! $aids_nav['description'] !!}
                    @endisset
                </span>
                <span class="2">
                    @isset($aids_nav['title'])
                    {!! $aids_nav['title'] !!}
                    @endisset
                </span>
            </div>
            @endforeach
        </div>

    </div>
    <script>
        function popupOpen(data) {
            // Extract title and description from the data parameter
            var title = $(data).find('.2').html().trim();
            var description = $(data).find('.1').html().trim();

            // Set title and description in the modal
            $('#popupModalourbuisnessLabel').html(title); // Set the title in the modal header
            $('#popupModalourbuisnessBody').html(description); // Set the description in the modal body

            // Show the modal
            $('#popupModalourbuisness').modal('show');
        }
        </script>
    @endsection