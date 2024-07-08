@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')
@isset($banners)
<section class="banner_main_section">
    <div class="container">
        <div class="banner_icons">
            @isset($banners[0])
            <div class="banner_icons1 position_absolute">
                <img src="{{ asset('storage/' .$banners[0]) }}" alt="Banner 1" />
            </div>
            @endisset

            @isset($banners[1])
            <div class="banner_icons2 position_absolute">
                <img src="{{ asset('storage/' .$banners[1]) }}" alt="Banner 2" />
            </div>
            @endisset

            @isset($banners[2])
            <div class="banner_icons3 position_absolute">
                <img src="{{ asset('storage/' .$banners[2]) }}" alt="Banner 3" />
            </div>
            @endisset

            @isset($banners[3])
            <div class="banner_icons4 position_absolute">
                <img src="{{ asset('storage/' .$banners[3]) }}" alt="Banner 4" />
            </div>
            @endisset

            @isset($banners[4])
            <div class="banner_icons5 position_absolute">
                <img src="{{ asset('storage/' .$banners[4]) }}" alt="Banner 5" />
            </div>
            @endisset

            @isset($banners[5])
            <div class="banner_icons6 position_absolute">
                <img src="{{ asset('storage/' .$banners[5]) }}" alt="Banner 6" />
            </div>
            @endisset
        </div>
    </div>
    <div class="heading-1">
        <h1>END TO END <span>SOLUTIONS</span></h1>
    </div>
</section>
@endisset
<div class="wrapp">
    <div class="anim-text negative-mt js-main-screen-text">
        <div class="fw-container fw-container-floattext">
            <div class="anim-text__title">INTRODUCTION</div>
            <div class="anim-text__desc js-animated-text translation-block text_fotns">{{ $homeDetails->introduction }}
            </div>
            <div class="view_more_button_div">
                <a class="view_more_button" href="{{ route('about-us') }}">
                    VIEW MORE
                </a>
            </div>
        </div>
    </div>
    @isset($marques)
    <section class="marquee">
        @isset($marques[0])
        <marquee behavior="alternate" direction="left" scrollamount="6">{{ $marques[0] }}</marquee>
        @endisset

        @isset($marques[1])
        <marquee behavior="alternate" direction="right" scrollamount="3">{{ $marques[1] }}</marquee>
        @endisset

        @isset($marques[2])
        <marquee behavior="alternate" direction="left" scrollamount="6">{{ $marques[2] }}</marquee>
        @endisset
    </section>
    @endisset
    <!-- <section id="section-65d5cb403227d"
            class=" fw-main-row-custom fw-main-row-top auto  tf-sh-bbab0552158703666369e6bfa378d615 negative-mt"><div class="fw-container-fluid"><div class="fw-row"><div id="column-e07bb40afd778d30f1b63d347621d6e3"
                  class="fw-col-sm-12 tf-sh-e07bb40afd778d30f1b63d347621d6e3  fw-col-no-padding"><div class="fw-main-row-overlay"></div><div class="fw-col-inner"><div class="animated-skew-texts --dark-style"><div class="animated-skew-texts__container"><div class="animated-skew-texts__row-wrap --row-1"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">Ships repair</span><span class="animated-skew-texts__text">PORTS</span><span class="animated-skew-texts__text">VESSEL OWNERS</span><span class="animated-skew-texts__text">SHIP YARDS</span></div></div><div class="animated-skew-texts__row-wrap --row-2"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">LOGISTICS</span><span class="animated-skew-texts__text">HEAVY LIFT</span><span class="animated-skew-texts__text">INSURANCE</span><span class="animated-skew-texts__text">OIL AND GAS</span></div></div><div class="animated-skew-texts__row-wrap --row-3"><div class="animated-skew-texts__row"><span class="animated-skew-texts__text">BANKS</span><span class="animated-skew-texts__text">SHIP RECYCLING</span><span class="animated-skew-texts__text">SUBSEA</span><span class="animated-skew-texts__text">SALVAGE</span></div></div></div></div></div></div></div></div></section> -->
    <section id="section-65d5cb4035911"
        class=" fw-ourbusiness fw-main-row-custom auto  tf-sh-a748fbe2fbb6ef2cd135e81de70cf48b ">
        <div class="fw-container-fluid">
            <div class="fw-row">
                <div id="column-1bd17aff4ac2df4b0e021d62b8f5f6cd"
                    class="fw-col-sm-12 tf-sh-1bd17aff4ac2df4b0e021d62b8f5f6cd  fw-col-no-padding">
                    <div class="fw-main-row-overlay"></div>
                    <div class="fw-col-inner">
                        <div id="scale-title" class="scale-title">
                            <div class="scale-title__title-wrap">
                                <div class="scale-title__title js-split-letters translation-block">OUR BUSINESS</div>
                            </div>
                        </div>
                        @isset($businessData)
                        <div class="buisnes_section">
                            <div class="container">
                                <div class="row justify-content-center">
                                @isset($businessData[0])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[0]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/Ports.png"> -->
                                            </div>
                                            <p>{!! $businessData[0]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[1])
                                <div class="col-md-3 col-6">
                                    <div class="buisness_box">
                                        <div class="buis_img hvr-bounce-in1">
                                            {!! $businessData[1]['icon'] !!}
                                            <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/VESSEL-OWNERS.png"> -->
                                        </div>
                                        <p>{!! $businessData[1]['name'] !!}</p>
                                    </div>
                                </div>
                                @endisset
                                @isset($businessData[2])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[2]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/SHIP-YARDS.png"> -->
                                            </div>
                                            <p>{!! $businessData[2]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[3])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[3]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/LOGISTICS-HEAVY-LIFT.png"> -->
                                            </div>
                                            <p>{!! $businessData[3]['name'] !!}</p>
                                        </div>
                                    </div>
                                @endisset
                                @isset($businessData[4])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[4]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/OIL-AND-GAS.png"> -->
                                            </div>
                                            <p>{!! $businessData[4]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[5])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[5]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/BANKS.png"> -->
                                            </div>
                                            <p>{!! $businessData[5]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[6])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[6]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/SHIP-RECYCLING.png"> -->
                                            </div>
                                            <p>{!! $businessData[6]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[7])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[7]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/SUBSEA.png"> -->
                                            </div>
                                            <p>{!! $businessData[7]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[8])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[8]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/INSURANCE.png"> -->
                                            </div>
                                            <p>{!! $businessData[8]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                    @isset($businessData[9])
                                    <div class="col-md-3 col-6">
                                        <div class="buisness_box">
                                            <div class="buis_img hvr-bounce-in1">
                                                {!! $businessData[9]['icon'] !!}
                                                <!-- <img src="http://adonia.webtesting.pw/wp-content/uploads/2024/03/SALVAGE.png"> -->
                                            </div>
                                            <p>{!! $businessData[9]['name'] !!}</p>
                                        </div>
                                    </div>
                                    @endisset
                                </div>
                            </div>
                        </div>
                        @endisset
                        <section class="platform">
                            <div class="news__title">
                                <div class="news__title-item">THE BUSINESS'S STATISTICAL ANALYSIS </div>
                                <!-- <div class="news__title-item">SERVICES</div> -->
                                <!-- <div class="news__title-item">THE</div> -->
                            </div>
                            <div class="display_flex">
                                <div class="col-md-6 col-12 p-0">
                                    <img class="counter_img " src="/assets/images/a_platform.webp" alt="shipimage">
                                </div>
                                <div class="col-md-6 col-12 p-0">
                                    @isset($counter)
                                    <div class="news ">
                                        <div class="news__main">
                                            <div class="fw-container">
                                                <!--<div class="news__row-line"></div>-->
                                                <div class="news__reports">
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[0]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[0]['name'] }}</div>
                                                    </a>

                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[1]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[1]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[2]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[2]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                    <a href="#" class="news__row">
                                                        <div class="news__date">{{ $counter[3]['number'] }}</div>
                                                        <div class="news__text">{{ $counter[3]['name'] }}</div>
                                                    </a>
                                                    <div class="news__row-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endisset
                                </div>
                            </div>
                        </section>
                        @if(isset($project))
                        <section class="work">
                            <div class="work__left">
                                <div class="work__text">
                                    @foreach ($project as $index => $projects)
                                    <div class="work__info">
                                        <div class="work__left-bl">
                                            <!-- <span class="work__num">{{ $index + 1 }}</span> -->
                                            <h2 class="title">{{ $projects['title'] }}<span
                                                    class="stroke">PROJECTS</span></h2>
                                            <!-- <p class="text_fotns mb-0 pb-0">
                                                {{ \Carbon\Carbon::parse($projects['date'])->format('M d, Y') }}</p> -->

                                            <!-- @php
                                            echo html_entity_decode($projects['description']);
                                            @endphp -->

                                            <a href="{{ route('projects') }}" class="work__link">Read More</a>
                                        </div>
                                    </div>
                                    @endforeach

                                </div>
                            </div>
                            <div class="work__right">
                                <div class="work__right-bl">
                                    <div class="work__photo">
                                        @foreach ($project as $index => $projecta)
                                        @if (isset($projecta['image']))
                                        <div class="work__photo-item">
                                            <img src="{{ asset('storage/' . $projecta['image']) }}" alt="">
                                        </div>
                                        @endif
                                        @endforeach
                                    </div>

                                </div>
                            </div>
                        </section>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
    @if(isset($project))
    <section class="work_carousel">
        <div class="work__text">
            <div id="work_carousel" class="owl-carousel owl-theme">
                @foreach($project as $index => $projects)
                <div class="work__info">
                    <div class="work__left-bl">
                        <!--<span class="work__num">{{ sprintf('%02d', $index + 1) }}</span>-->
                        <img src="{{ asset('storage/' . $projects['image']) }}" alt="{{ $projects['title'] }}">
                        <h2 class="title">{{ $projects['title'] }}
                            <!-- <span class="stroke">PROJECTS</span> -->
                        </h2>
                        <!--<p class="text_fotns mb-0 pb-0">{{ date('M.d, Y', strtotime($projects['date'])) }}</p>-->
                        @php
                            echo html_entity_decode($projects['description']);
                        @endphp
                        <a href="{{ route('projects') }}" class="work__link">Read More</a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>
    @endif


    @endsection