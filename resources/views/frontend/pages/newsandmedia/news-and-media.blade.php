@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="inner_header news_media_banner">
    @if (!empty($banner))    
    <img src="{{ asset('storage/'.$banner) }}" class="w-100" />
    @endif
    <div class="container">
        <div class="header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">NEWS & MEDIA</h3>
        </div>
    </div>
</section>

<section class="gallery_details_section news_media_img_seciton our_work_bg border_4 border_3 mt_70">
    <div class="container mb-md-5">        
        <p class="color_white"><a class="color_white text-decoration-none" href="{{ route('index') }}">Home</a> >
            News & Media
        </p>
        <div class="animheadertext-2 anim-para-text container text-center w-md-75 w-100 mb-md-5">
            <p class="js-split-p-letter color_white">
                {{--{{isset($short_description) ? $short_description : ''}}--}}
                From magazine features to runway shows, Poonam’s creations have been celebrated for their colour, 
                vibrancy, and versatility. Whether the pieces are exclusive one-of-a-kind showstoppers, 
                or high-volume gifts and presentations, the quality and uniqueness of the product shines through.
            </p>
        </div>
        <div class="row justify-content-center mb-md-4">
            <div class="col-md-12">
                <div class="row">
                    @if (!empty($image_section))
                    @foreach ($image_section as $index => $image)
                        <div class="{{ $index < 2 ? 'col-md-4 col-12' : 'col-md-4 col-12' }}">
                            <div class="gallery_dt_inner">
                                <div class="gallery_dt_img">
                                    <a href="{{ asset('storage/' . $image) }}" data-fancybox="images" data-caption="Image{{$index+1}}">
                                        <img src="{{ asset('storage/' . $image) }}" />
                                    </a>
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


<script>
    // Load Lenis script
    function loadLenis() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/assets/frontend/js/lenis.js';
        // script.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
        script.async = true;

        script.onload = function () {
            console.log("Lenis script loaded");
            if (document.readyState === "complete" || document.readyState === "interactive") {
                // Document is already ready, call initializeLenis directly
                initializeLenis();
            } else {
                // Wait for the document to be fully loaded
                document.addEventListener('DOMContentLoaded', initializeLenis);
            }
        };

        document.body.appendChild(script);
    }

    // Initialize Lenis
    function initializeLenis() {
        console.log("Initializing Lenis");
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const tl20 = gsap.timeline({
            scrollTrigger: {
                trigger: '.gallery_details_section',
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1
            }
        });

        tl20.fromTo('.gallery_dt_img', {
            y: 700
        }, {
            y: 0,
            stagger: 0.1,
            scrub: 1
        });
    }

    // Check if the unique element exists and then load Lenis
    if (document.getElementById('unique-element-id')) {
        loadLenis();
    }
</script>
@endsection