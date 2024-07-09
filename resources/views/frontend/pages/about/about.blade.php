@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="about_us_banner inner_header border_1">
    <img src="{{ asset('/assets/frontend/image/about-banner.jpg') }}" class="w-100" />
    <div class="container">
        <div class="heading_inner header_title">
            <h3 class="heading_inner_text peachy_flightoe_font font50">ABOUT US</h3>
        </div>
    </div>
</section>

<section class="parallax-container3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about_content pe-md-4 pe-0 anim-para-text animheadertext-2">

                    <h3 class="js-split-words2 peachy_flightoe_font font50">MY JOURNEY</h3>
                    <p class="text-justify js-split-p-letter">
                        Being born to a mother who was a gifted mural artist meant discovering
                        first toys and first tales in radiant colours and looming canvases.
                        From this early art immersion and living amidst creativity, to now pouring
                        those same colours and love for art onto my canvases with precision and passion,
                        my art journey thus far has been one of transitions, challenges, immersive learning, and growth.
                    </p>
                    <p class="text-justify js-split-p-letter">
                        Today, creating resin art pieces that effortlessly compliment their surroundings,
                        be it sprawling lobbies, personal office spaces or urban homes, brings me joy and
                        fulfillment as an artist and creator. From wardrobe panels to wall art,
                        my creations are known for their embellished real crystals and stones,
                        which lend a compelling energy and aura to the spaces they adorn.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="image-wrapper-profile">
                    <div class="overlay"></div>
                    <img class="parallax-layer3 profile_img img w-100" src="{{ asset('/assets/frontend/image/profile_image.png') }}" data-speed="-3"
                        alt="Profile Image" />
                </div>
            </div>

            <div class="col-md-12">
                <div class="about_signature">
                    <img class="w-100" src="{{ asset('/assets/frontend/image/signature.png') }}" />
                </div>
            </div>


            <div class="col-md-12">
                <div class="animheadertext-2 about_between">
                    <h4 class="js-split-words2 trajanPro_regular"><b>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,</b> </h4>
                </div>
            </div>


        </div>
    </div>
</section>

<section class="border_bottom1"></section>

<section id="about_us" class="mt120 parallax-container2">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about_img">
                    <img src="{{ asset('/assets/frontend/image/profile_image2.png') }}" class="parallax-layer2 w-100 float-end" alt="Parallax Image"
                        data-speed="-2">
                </div>
            </div>

            <div class="col-md-6">
                <div class="about_content pt-5">

                    <div class="anim-para-text">
                        <p class="js-split-p-letter text-justify">
                            My life’s design hadn’t always included this immersion in art.
                            In fact, as a commerce graduate from NMIMS Narsee Monjee College
                            of Commerce & Economics, who further pursed a CA degree from ICAI,
                            followed by a Masters in Finance from Aston Business school, Birmingham UK,
                            my surroundings were more numbers and theory than sculptures and mediums.
                            But my life changed drastically after marriage, when I moved from a
                            bustling corporate office at Deloitte to settling in
                            “the city of brotherly love,” Philadelphia.
                        </p>

                        <p class="js-split-p-letter text-justify">
                            The artisanal streets of Philadelphia allowed me to break free
                            from the often colourless and tame world of finance and enter
                            the fluid world of resin art. Colours teased me again,
                            and the streets stirred my desire to sketch, paint, and create.
                            A few resin art workshops in Philadelphia introduced me
                            to the world of solid, sturdy, glittering, glossy canvases
                            that mesmerized me and drove my instincts to create.
                            I saw craft marrying art, science with soul (and lots of sass),
                            maths and magic…and I couldn’t resist.
                        </p>

                        <p class="js-split-p-letter text-justify">
                            After a long hiatus abroad, coming back to Mumbai changed everything.
                            The pandemic, with its overbearing sense of monotony and uncertainty,
                            convinced me that I had to pursue art fiercely.
                            This realization led to relentless experimenting with resin art kits,
                            tools, and essentials, and this experimenting and pushing the
                            limits of this medium continues to this day.
                            From uploading pieces online, to bagging my first order,
                            to working on larger-than-life installations, art has been
                            an exciting and empowering journey.
                        </p>
                    </div>

                    <div class="animheadertext-2">
                        <h4 class="js-split-words2 font30 trajanPro_regular"><b> Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's
                                standard dummy</b></h4>
                    </div>


                </div>
            </div>

        </div>
    </div>
</section>

<section class="about_middle_section bg_darkgray border_2 border_3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="anim-para-text about_content pt-5">

                    <div class="anim-para-text">
                        <p class="js-split-p-letter color_white text-justify pe-5">
                            Every resin art piece is potentially a resin art product.
                            From cutting boards to cutting edge furniture, resin can be what you want it to be.
                            The artist in me loves to curate and create resin art commodities that
                            compliment my clients’ priorities and purposes. With every project,
                            I challenge myself to raise the resin bar by transforming the regular
                            and routine with the glitz, gloss, and glamour of resin.
                        </p>
                    </div>

                    <div class="animheadertext-2">
                        <h4 class="js-split-words2 color_white font30  pe-5 peachy_flightoe_font ">
                            An incredibly fluid and highly versatile medium of art like
                            resin cannot be confined to a canvas. It has both the power
                            and the potential to pose as something that adds meaning
                            and impact to our surrounds.
                        </h4>
                    </div>

                </div>
            </div>

            <div class="col-md-5">
                <div class="about_img_vission position-relative parallax-container" onmousemove="parallaxEffect(event)"
                    onmouseleave="resetTilt()">
                    <img class="parallax-image" src="{{ asset('/assets/frontend/image/about_vertical_img.png') }}" />
                    <h4 class="amsterdam_font vission_title">Vission</h4>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="design_den">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="about_circle">
                    <img src="{{ asset('/assets/frontend/image/border_about_img.png') }}" />
                    <h4 class="peachy_flightoe_font design_heading">
                        <div class="first_text">THE <span class="color_white">DESIGN</span></div>
                        <span class="second_text color_white float_right">DEN</span>
                    </h4>

                </div>
            </div>

            <div class="col-md-5">
                <div class="about_content pt-5">

                    <div class="anim-para-text">
                        <p class="js-split-p-letter text-justify ps-4 js-split-words">
                            My second home, my design den, is a spacious art studio-cum-work
                            station that is fortunately located in Mumbai’s Mecca of
                            lifestyle accessories, the sprawling Laxmi Industrial Estate,
                            an iconic locality known for its artisanal stories and loved
                            by photographers, designers, shoppers, and artists.
                        </p>
                    </div>

                    <div class="anim-para-text">
                        <p class="js-split-p-letter text-justify ps-4 js-split-words">
                            My design den serves many purposes—it’s a sacred space to display my
                            abstract and highly experimental resin art pieces and products,
                            a space where I can entertain clients to understand their visions
                            for unique and personalized products, a space where I can connect
                            with corporates, architects, designers and industrialists for exclusive
                            and bulk orders, a space where my team and I can meet tight deadlines
                            for deliveries with ease and efficiency, a space where I can hold resin
                            art workshops to mentor art aspirants from across the world, and most
                            of all, a space where ideas can breathe, colours can pour and most
                            essentially, resin can soar.
                        </p>
                    </div>


                </div>
            </div>



        </div>
    </div>
</section>

@endsection