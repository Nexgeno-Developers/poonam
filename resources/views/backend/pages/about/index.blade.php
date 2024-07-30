@extends('backend.layouts.app')

@section('page.name', 'About Page')

@section('page.content')
@php
    $details = DB::table('pages')->where('page_name', 'about')->first();
    $banner = $details->banner_section;

    $journey_section = json_decode($details->journey_section);
    $about_section = json_decode($details->about_section);
    $vision_section = json_decode($details->vision_section);
    $design_section = json_decode($details->design_section);

@endphp

<div class="col-12">
    <div class="widget-inline">
        <div class="p-0">

            <!-----==================== about banner ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_banner_form" action="{{ url(route('about.banner')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf


                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col col-sm-6">
                                        <label>Banner <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" type="file" name="banner" @if(empty($banner))
                                            required @endif>
                                    </div>
                                    <div class="col col-sm-6">
                                        @if(!empty($banner))
                                        <img width="500" src="{{ asset('storage/' . $banner) }}" alt="Banner Image"
                                            class="img-thumbnail mt-2">
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== about banner ==========----------------------->


            <!-----==================== about intro ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Journey Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_journey_form" action="{{ url(route('about.journey')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="about">
                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col col-sm-5">
                                        <label>Journey Text <span class="red">*</span></label>
                                        <input class="form-control" name="journey_text"
                                            value="{{ isset($journey_section->journey_text) ? $journey_section->journey_text : '' }}"
                                            placeholder="Enter Journey Text..." required>
                                    </div>

                                    <div class="col col-sm-5">
                                        <label>Journey Image <span class="red">*</span> <span class="font-size11">(Max
                                                file size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" type="file" name="journey_image"
                                            @if(empty($journey_section->journey_image)) required @endif>
                                    </div>

                                    @if(!empty($journey_section->journey_image))
                                    <div class="col col-sm-2">
                                        <img width="100" src="{{ asset('storage/' . $journey_section->journey_image) }}"
                                            alt="Journey Image" class="img-thumbnail mt-2">
                                        </div>
                                    @endif

                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Journey description <span class="red">*</span></label>
                                            <textarea class="trumbowyg form-control" name="journey_description" rows="5"
                                                required>
                                                        @if(!empty($journey_section->journey_description))
                                                            {{ $journey_section->journey_description }}
                                                        @endif
                                                    </textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Journey Heading <span class="red">*</span></label>
                                            <input class="form-control" name="journey_heading"
                                                value="{{ isset($journey_section->journey_heading) ? $journey_section->journey_heading : '' }}"
                                                placeholder="Enter Journey Heading..." required>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== about banner ends==========----------------------->

            <!-----==================== about mid Section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>About Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_middle_form" action="{{ url(route('about.midsection')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>About Heading <span class="red">*</span></label>
                                            <input class="form-control" name="about_heading"
                                                value="{{ isset($about_section->about_heading) ? $about_section->about_heading : '' }}"
                                                placeholder="Enter about Heading..." required>
                                        </div>
                                    </div>
                                    <div class="col col-sm-4">
                                        <label>About Image <span class="red">*</span> <span class="font-size11">(Max
                                                file size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" type="file" name="about_image"
                                            @if(empty($about_section->about_image)) required @endif>
                                    </div>
                                    @if(!empty($about_section->about_image))
                                    <div class="col col-sm-2">
                                        <img width="100" src="{{ asset('storage/' . $about_section->about_image) }}"
                                            alt="about Image" class="img-thumbnail mt-2">
                                        </div>
                                    @endif

                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>About description <span class="red">*</span></label>
                                            <textarea class="trumbowyg form-control" name="about_description" rows="5" required>
                                                @if(!empty($about_section->about_description))
                                                    {{ $about_section->about_description }}
                                                @endif
                                            </textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <!-----==================== about mid Section ends ==========----------------------->

            <!-----==================== about Vision section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Vision Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_vision_form" action="{{ url(route('about.vision')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Vision Heading <span class="red">*</span></label>
                                            <input class="form-control" name="vision_heading"
                                                value="{{ isset($vision_section->vision_heading) ? $vision_section->vision_heading : '' }}"
                                                placeholder="Enter Vision Heading..." required>
                                        </div>
                                    </div>
                                    <div class="col col-sm-4">
                                        <label>Vision Image <span class="red">*</span> <span class="font-size11">(Max
                                                file size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" type="file" name="vision_image"
                                            @if(empty($vision_section->vision_image)) required @endif>
                                    </div>
                                    @if(!empty($vision_section->vision_image))
                                    <div class="col col-sm-2">
                                        <img width="100" src="{{ asset('storage/' . $vision_section->vision_image) }}"
                                            alt="vision Image" class="img-thumbnail mt-2">
                                        </div>
                                    @endif

                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Vision description <span class="red">*</span></label>
                                            <textarea class="trumbowyg form-control" name="vision_description" rows="5" required>
                                                @if(!empty($vision_section->vision_description))
                                                    {{ $vision_section->vision_description }}
                                                @endif
                                            </textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>

        <!-----==================== About Vision Ends ==========----------------------->


        <!-----==================== About Mission & Vision Section ==========----------------------->

        <div class="card m-3">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 class="header-title"><b>Design Section</b></h4>
                    <hr>
                </div>

                <form id="about_design_form" action="{{ url(route('about.design')) }}" method="post"
                    enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Design Heading <span class="red">*</span></label>
                                            <input class="form-control" name="design_heading"
                                                value="{{ isset($design_section->design_heading) ? $design_section->design_heading : '' }}"
                                                placeholder="Enter Heading like : THE|DESIGN|DEN " required>
                                        </div>
                                    </div>
                                    <div class="col col-sm-4">
                                        <label>Design Image <span class="red">*</span> <span class="font-size11">(Max
                                                file size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" type="file" name="design_image"
                                            @if(empty($design_section->design_image)) required @endif>
                                    </div>
                                    @if(!empty($design_section->design_image))
                                    <div class="col col-sm-2">
                                        <img width="100" src="{{ asset('storage/' . $design_section->design_image) }}"
                                            alt="design Image" class="img-thumbnail mt-2">
                                        </div>
                                    @endif

                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Design Description <span class="red">*</span></label>
                                            <textarea class="trumbowyg form-control" name="design_description" rows="5" required>
                                                @if(!empty($design_section->design_description))
                                                    {{ $design_section->design_description }}
                                                @endif
                                            </textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>


                </form>

            </div>
        </div>

        

        <!-----==================== about Design Ends ==========----------------------->

    </div>
</div>
<!-- end card-box-->
</div>
@endsection

@section('page.scripts')
<script>
$(document).ready(function () {
    initValidate('#about_design_form');
    initValidate('#about_vision_form');
    initValidate('#about_middle_form');
    initValidate('#about_journey_form');
    initValidate('#about_banner_form');

    initTrumbowyg('.trumbowyg');
});

    $("#about_design_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#about_vision_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#about_middle_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#about_journey_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#about_banner_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        location.reload();
    }

</script>
@endsection