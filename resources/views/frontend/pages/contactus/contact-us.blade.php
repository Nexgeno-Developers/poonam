@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="inner_banner_section" style="background-image: url('@isset($contactDetails->banners){{ asset('storage/' . $contactDetails->banners) }}@endisset')">
    <div class="container">
        <div class="heading_inner">
            <h1 class="heading_inner_text">Contact Us</h1>
        </div>
    </div>
</section>

<div class="anim-text negative-mt js-main-screen-text pt-md-5 pt-4">
    <div class="container">
        <div class="anim-text__desc js-animated-text translation-block font-28 padd200">We're Social, so if you'd like to talk about your project, get in touch</div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="text-center font-28 mb-22 main_about_heading">
            <h3 class="js-split-words2">poonam OFFSHORE CONSULTANTS PVT. LTD.</h3>
        </div>
        <div class="rightlinks">
            <ul>
                @isset($contacts['phone_1'])
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+{{ $contacts['phone_1'] }}"> +{{ $contacts['phone_1'] }}</a> @isset($contacts['phone_2']) 
                        / <a href="tel:+{{ $contacts['phone_2'] }}"> +{{ $contacts['phone_2'] }}</a>
                        @endisset
                    </li>
                @endisset
                @isset($contacts['email'])
                    <li>
                        <i class="fa-solid fa-map-marker-alt"></i>
                        <a href="mailto:{{ $contacts['email'] }}">{{ $contacts['email'] }}</a>
                    </li>
                @endisset
                @isset($contacts['url'])
                    <li>
                        <i class="fa-solid fa-globe"></i>
                        <a href="{{ $contacts['url'] }}">{{ $contacts['url'] }}</a>
                    </li>
                @endisset
            </ul>
        </div>
        <div class="contact_address col-md-6">
            <div class="footerleft">
                <div>
                    <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                @isset($contacts['address_1'])
                    {!! $contacts['address_1'] !!} 
                @endisset 
            </div>
            <div class="footerleft">
                <div>
                    <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                @isset($contacts['address_2'])
                    {!! $contacts['address_2'] !!} 
                @endisset 
            </div>
        </div>
    </div>
</div>
<div id="contact_us_form" class="display_flex formpage align_center section-fadeleft buisness_section_container_left">
    <div class="col-md-6">
        <div class="contactform fadeleft">
            <form action="">
                <input type="text" id="fname" name="fname" placeholder="Full Name">
                <input type="tel" id="lname" name="lname" placeholder="Contact No.">
                <input type="email" id="mail" name="mail" placeholder="Email Id">
                <textarea type="text" id="message" name="message" placeholder="Message" rows="4"></textarea>
                <button class="custom_button">Submit</button>
            </form>
        </div>
    </div>
    <div class="col-md-6">
        <div class="reveal">
            <div class="image-wrap">
                <img class="height100" src="/assets/images/contact_Image.jpg">
            </div>
        </div>
    </div>
</div>


<script>
document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
    };

    // IMAGE ANIMATION

    let revealCallback = (entries) => {
        entries.forEach((entry) => {
            let container = entry.target;

            if (entry.isIntersecting) {
                console.log(container);
                container.classList.add("animating");
                return;
            }

            if (entry.boundingClientRect.top > 0) {
                container.classList.remove("animating");
            }
        });
    };

    let revealObserver = new IntersectionObserver(revealCallback, options);

    document.querySelectorAll(".reveal").forEach((reveal) => {
        revealObserver.observe(reveal);
    });

});
</script>
@endsection