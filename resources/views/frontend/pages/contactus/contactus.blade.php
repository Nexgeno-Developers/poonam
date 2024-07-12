@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')


<section class="contact_us_banner inner_header">
    @if ($banner)
        <img src="{{ asset('storage/' . $banner) }}" class="w-100">
    @endif
    <div class="container">
        <div class="header_title">
            <h4 class="heading_inner_text peachy_flightoe_font font50 mt-2">CONTACT US</h4>
        </div>
    </div>
</section>
<section class="gallery_details_section our_work_bg border_4 border_3 mt_70 contact_us_page">
    <div class="container-fluid d-flex justify-content-center gap-md-0 gap-5 flex-md-row flex-column px-md-0">
        <div class="col-md-4 col-12 contact_form">
            <div class="gsap-fade-up d-flex flex-column alignt-item-center justify-content-center px-md-5 px-xl-4"
                style="position:relative; z-index:99; padding-right:30px !important">
                <div>
                    <h3 class="trajanPro_regular contact_form_color_white">GET IN TOUCH</h3>

                    @if (!empty($contactS->address_1))
                        <a href="" class="contact_form_color_white"><i class="fa fa-map"></i> {{ $contactS->address_1 }}
                        </a> <br>
                    @endif
                    @if (!empty($contactS->phone_1))
                        <a href="tel:+{{ $contactS->phone_1 }}" class="contact_form_color_white"><i class="fa fa-phone"></i>
                            +{{ $contactS->phone_1 }}</a> <br>
                    @endif
                    @if (!empty($contactS->email))
                        <a href="mailto:{{ $contactS->email }}" class="contact_form_color_white"><i
                                class="fa fa-envelope"></i> {{ $contactS->email }}</a> <br>
                    @endif
                    @if (!empty($contactS->inst_url))
                        <a href="{{ $contactS->inst_url ?? ''}}" class="contact_form_color_white"><i
                                class="fa fa-instagram"></i> poonam.shah.art </a> <br>

                    @endif

                </div>
                <h3 class="amsterdam_font color_white mt-3">Contact Us</h3>
            </div>
            <div class="gsap-fade-slide-left background_grey">
                <form action="#" method="post">
                    <input type="text" id="name" placeholder="Name" name="name" required>
                    <input type="email" id="email" placeholder="Email" name="email" required>
                    <input type="text" id="subject" placeholder="Subject" name="subject" required>
                    <textarea class="mb-4" id="message" placeholder="Message" name="message" rows="2"
                        required></textarea>
                    <div class="homeboxanimate-btn-bracket the-button">
                        <button type="submit" class="homeboxanimate-btn-text color_white">Submit</button>
                    </div>
                </form>
            </div>
        </div>


        <div class="col-md-4 col-12 figure-member figure-member_has-social ">
            <div class="figure-member__avatar gallery_dt_img">
                @if (!empty($contactS->center_image))
                    <img src="{{ asset('storage/' . $contactS->center_image) }}">
                @endif
            </div>
        </div>

        <div class="col-md-4 col-12">
            <div class="">
                @if (!empty($contactS->map_url))
                    <iframe class="gsap-fade-slide-right" src="{{$contactS->map_url}}" width="100%" height=""
                        style="border:0; height:88vh;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                @endif
            </div>
        </div>

    </div>
</section>
@endsection