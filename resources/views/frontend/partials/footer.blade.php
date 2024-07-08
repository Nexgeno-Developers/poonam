@php
    $details = DB::table('pages')->where('page_name', 'contact')->first();
    $contacts = json_decode($details->contacts, true);
@endphp

<footer>
    <div class="container">
        <div class="row">
            <div class="menu_list">
                <ul>
                    <li>
                        <a href="{{ route('index') }}">Home</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('about-us') }}">About Us</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('our-business') }}">Our Business</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('products') }}">Products</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('projects') }}">Projects and Accreditations</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('career') }}">Career</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('index') }}">Brochure</a>
                    </li>
                    <li> | </li>
                    <li>
                        <a href="{{ route('contact') }}">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="footer_lft address_n_social">
                <div class="footerleft">
                    <div>
                        <i class="fa-solid fa-map-marker-alt"></i>
                    </div>
                    @isset($contacts['address_1'])
                        {!! $contacts['address_1'] !!} 
                    @endisset 
                </div>
                <div class="menu_list scoail_media">
                    <ul>
                        <li>
                            <a href="{{ $contacts['fb_url'] ?? ''}}">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{ $contacts['twitter_url'] ?? ''}}">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{ $contacts['inst_url'] ?? ''}}">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{ $contacts['linkedin_url'] ?? ''}}">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer_lft num_n_email">
                <div class="footerleft contact_number">
                    <h4>
                    <a href="tel:+{{ $contacts['phone_1'] }}"> <i class="fa-solid fa-phone"></i>+{{ $contacts['phone_1'] }}
                    </a>                        
                    </h4> |
                    <h4>
                        <a href="tel:+{{ $contacts['phone_2'] ?? '' }}">
                            </i>+{{ $contacts['phone_2'] ?? '' }} </a>
                    </h4>
                </div>
                <div class="footerright">
                    <h4>
                        <a href="mailto:{{ $contacts['email'] ?? '' }}">
                            <i class="fa-regular fa-envelope"></i> {{ $contacts['email'] ?? '' }} </a>
                    </h4>
                </div>
            </div>
            <div class="footer_right copyrights">
                <div class="footerleft">
                    <p>Copyright@2024, Adonia Offshore Consultants Pvt.Ltd. </p>
                </div>
                <div class="footerright">
                    <p>All Right Reserved. Designed By <a href="https://www.creaadesigns.com/"> Creaa Designs </a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
</footer>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="/assets/frontend/js/libs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.39/dist/lenis.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
    integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- Include Owl Carousel JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>


<script>
    window.onscroll = function() {
        myFunction()
    };

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
</script>
<script>
    $(document).ready(function() {
        $("#pole_carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    $(document).ready(function() {
        $("#certificate_carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1.2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    $(document).ready(function() {
        $("#work_carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });
    });
</script>
