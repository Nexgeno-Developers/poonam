@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="inner_banner_section" style="background-image: url('@isset($projectDetails->banners){{ asset('storage/' . $projectDetails->banners) }}@endisset')">
    <div class="container">
        <div class="heading_inner">
            <h1 class="heading_inner_text">PROJECTS AND ACCREDITATIONS</h1>
        </div>
    </div>
</section>
<section id="completed_projects" class="pt-4 pb-4 projects_and_accreditations_section">
    <div class="container completed_projects">
        <div class="main_about_heading">
            <h4 class="mb-30">COMPLETED PROJECTS </h4>
        </div>
        <div class="row">
            @foreach ($projects as $project)
            <div class="col-md-4 completed_project_div">
                @if(isset($project['image']) && isset($project['title']))
                    <img class="" src="{{ asset('storage/' . $project['image']) }}" alt="{{ $project['title'] }}">
                    <p class="completed_project_label">{{ $project['title'] }}</p>
                @endif
                {{-- Uncomment this line if you want to display the date --}}
                <!-- <p class="completed_project_date">{{ \Carbon\Carbon::parse($project['date'])->format('M d, Y') }}</p> -->
                <!-- <p class="completed_project_content">
                    {!! html_entity_decode($project['description']) !!}
                </p> -->
            </div>
            @endforeach
        </div>

        <!--<div class="view_more_button_div">
		    <a class="view_more_button" href="#">
		        VIEW MORE
		    </a>
		</div>-->
    </div>
</section>


<div class="main_about_heading">
    <h4 class="mb-30">CERTIFICATES & AWARDS</h4>
</div>

<section id="certificates_n_awards" class="py-md-4 py-0 projects_and_accreditations_section d-md-block d-none">
    <div class="container certificates_n_awards">
        <div class="row">
            @foreach ($certificates as $certificate)
            <div class="col-md-3 certificates_div">
                <div>
                    <a href="
                    @isset($certificate['pdf']) {{ asset('storage/' . $certificate['pdf']) }} @endisset 
                    " target="_blank">
                        <img class="certificate_img" src="@isset($certificate['image']) {{ asset('storage/' . $certificate['image']) }}
                        @endisset
                        " alt="@isset($certificate['title']) {{ $certificate['title'] }} @endisset
                            ">
                        <p class="certificate_name">@isset($certificate['title']) {{ $certificate['title'] }} @endisset
                        </p>
                    </a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>

<section id="certificates_n_awards_carousel" class="d-block d-md-none">
    <div class="container certificates_n_awards">
        <div id="certificate_carousel" class="owl-carousel owl-theme">
            @foreach ($certificates as $certificate)
            <div class="certificates_div">
                <div>
                    <a href="
                    @isset($certificate['pdf']) {{ asset('storage/' . $certificate['pdf']) }} @endisset 
                    " target="_blank">
                        <img class="certificate_img" src="@isset($certificate['image']) {{ asset('storage/' . $certificate['image']) }}
                        @endisset
                        " alt="@isset($certificate['title']) {{ $certificate['title'] }} @endisset
                            ">
                        <p class="certificate_name">@isset($certificate['title']) {{ $certificate['title'] }} @endisset
                        </p>
                    </a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>


@endsection