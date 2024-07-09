@extends('backend.layouts.app')

@section('page.name', 'Home Page')

@section('page.content')

@php
    $details = DB::table('pages')->where('page_name', 'home')->first();
    $banners = [];

    if ($details && $details->banner_section) {
        $decoded = json_decode($details->banner_section, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            $banners = $decoded;
        }
    }
@endphp


<div class="col-12">
    <div class="card widget-inline">
        <div class="card-body p-0">

            <!-----==================== home banner ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_banner_form" action="{{ url(route('home.banner')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="page" value="home">

                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <div id="home_banner_key_add_more">
                                    @if(!empty($banners))
                                    @foreach($banners as $index => $banner)
                                    <div class="form-group" id="form-group-{{ $index }}">
                                        <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
                                                    <div class="col col-sm-6">
                                                        <label>Banner Text <span class="red">*</span></label>
                                                        <input class="form-control" name="banner_text[]"
                                                            value="{{ $banner['text'] ?? '' }}"
                                                            placeholder="Enter Icon Name here..." required>
                                                    </div>
                                                    <div class="col col-sm-4">
                                                        <label>Banner <span class="red">*</span> <span
                                                                class="font-size11">(Max file size 80kb -
                                                                1125*196)</span></label>
                                                        <input class="form-control" type="file" id="image-{{ $index }}"
                                                            name="banner[]" @if(empty($banner['image'])) required
                                                            @endif>                                                       
                                                    </div>
                                                    <div class="col col-sm-2">
                                                        @if(!empty($banner['image']))
                                                        <img width="100" src="{{ asset('storage/' . $banner['image']) }}"
                                                            alt="Banner Image" class="img-thumbnail mt-2">
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1">
                                                @if($loop->first)
                                                <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i>
                                                @else
                                                <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i>
                                                <i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;"
                                                    class="ri-delete-bin-5-fill remove-btn"></i>
                                                @endif
                                            </div>
                                        </div>
                                        </br>
                                    </div>
                                    @endforeach
                                    @else
                                    <div class="form-group" id="form-group-0">
                                        <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
                                                    <div class="col col-sm-6">
                                                        <label>Banner Text <span class="red">*</span></label>
                                                        <input class="form-control" name="banner_text[]"
                                                            placeholder="Enter Icon Name here..." required>
                                                    </div>
                                                    <div class="col col-sm-6">
                                                        <label>Banner <span class="red">*</span> <span
                                                                class="font-size11">(Max file size 80kb -
                                                                1125*196)</span></label>
                                                        <input class="form-control" type="file" id="image-0"
                                                            name="banner[]" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1">
                                                <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i>
                                            </div>
                                        </div>
                                        </br>
                                    </div>
                                    @endif
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

            <!-----==================== home banner ==========----------------------->


            <!-----==================== home intro ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Intro Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_intro_form" action="{{ url(route('home.intro')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="home">
                        <label for="intro">Intro Description<span class="red">*</span></label>
                        <textarea class="trumbowyg form-control" name="intro" rows="5"
                            required>{{ $details->introduction }}</textarea>

                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== home banner ==========----------------------->

            <!-----==================== home Marque ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Marque Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_marque_form" action="{{ url(route('home.marque')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                        $marque = json_decode($details->marque);
                        @endphp

                        <input type="hidden" name="page" value="home">

                        <div class="form-group mb-3">
                            <input type="text" placeholder="Enter Text" class="form-control" name="marque[]"
                                value="{{ isset($marque[0]) ? $marque[0] : '' }}" required>
                        </div>

                        <div class="form-group mb-3">
                            <input type="text" placeholder="Enter Text" class="form-control" name="marque[]"
                                value="{{ isset($marque[1]) ? $marque[1] : '' }}" required>
                        </div>

                        <div class="form-group mb-3">
                            <input type="text" placeholder="Enter Text" class="form-control" name="marque[]"
                                value="{{ isset($marque[2]) ? $marque[2] : '' }}" required>
                        </div>


                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== home Marque ==========----------------------->

            <!-----==================== home Business ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Business Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_business_form" action="{{ url(route('home.business')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                        $Business = json_decode($details->business);
                        @endphp

                        <input type="hidden" name="page" value="home">

                        <div class="col-sm-12">

                            <div class="form-group mb-3">
                                <div id="home_banner_key_add_more" style=""> @php $i = 1;
                                    if(!empty($Business)) { foreach ($Business as $row) { @endphp
                                    <div class="replace_key">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-11">

                                                    <div class="row">
                                                        <div class="col col-sm-6">

                                                            <input class="form-control" name="icon_name[]"
                                                                placeholder="Enter Icon Name here..."
                                                                value="{{ $row->name }}" required>

                                                        </div>
                                                        <div class="d-flex col col-sm-6">
                                                            {{--
                                                            // <input class="form-control" style="margin-bottom: 5px;"
                                                                // type="file" id="image" name="icon[]" @if
                                                                (empty($row->icon)) required @endif>

                                                            // <div style="width: 100px;">
                                                                // <img src="{{ asset('storage/' . $row->icon) }}"
                                                                    class="img-thumbnail">
                                                                // </div>


                                                            // <input type="hidden" name="old_icon{{ $i - 1 }}"
                                                                value="{{ $row->icon }}"> --}}
                                                            <textarea class="form-control"
                                                                placeholder="Enter SVG Code Here" name="icon[]" rows="5"
                                                                required>{{ $row->icon }}</textarea>

                                                            <div style="width: 100px;">
                                                                {!! $row->icon !!}
                                                            </div>

                                                        </div>



                                                    </div>

                                                </div>
                                                <div class="col-md-1"> @if($i == 1) <i
                                                        style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                        class="ri-add-circle-fill" id="add_replace_key"></i> @else <i
                                                        style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;"
                                                        class="ri-delete-bin-2-fill"
                                                        onclick="remove_replace_key($(this));"></i> @endif </div>
                                            </div>
                                        </div>
                                        </br>
                                    </div> @php $i++; } @endphp @php } else { @endphp
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">

                                                    {{--
                                                    // <div class="col col-sm-6">
                                                        // <input class="form-control" style="margin-bottom: 5px;" //
                                                            type="file" id="image" name="icon[]" required>
                                                        // </div>
                                                    --}}
                                                    <div class="col col-sm-6">
                                                        <input class="form-control" name="icon_name[]"
                                                            placeholder="Enter Icon Name here..." required>
                                                    </div>
                                                    <div class="col col-sm-6">
                                                        <textarea class="form-control" placeholder="Enter SVG Code"
                                                            name="icon[]" rows="5" required></textarea>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="col-md-1"><i
                                                    style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill" id="add_replace_key"></i></div>
                                        </div>
                                        </br>
                                    </div> @php } @endphp
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

            <!-----==================== home Business ==========----------------------->


            <!-----==================== home Counter ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Counter Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_counter_form" action="{{ url(route('home.counter')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                        $Counter = json_decode($details->counters);
                        @endphp

                        <input type="hidden" name="page" value="home">

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Number" class="form-control"
                                    name="number[]" value="{{ isset($Counter[0]) ? $Counter[0]->number : '' }}"
                                    required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Text" class="form-control" name="name[]"
                                    value="{{ isset($Counter[0]) ? $Counter[0]->name : '' }}" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Number" class="form-control"
                                    name="number[]" value="{{ isset($Counter[1]) ? $Counter[1]->number : '' }}"
                                    required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Text" class="form-control" name="name[]"
                                    value="{{ isset($Counter[1]) ? $Counter[1]->name : '' }}" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Number" class="form-control"
                                    name="number[]" value="{{ isset($Counter[2]) ? $Counter[2]->number : '' }}"
                                    required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Text" class="form-control" name="name[]"
                                    value="{{ isset($Counter[2]) ? $Counter[2]->name : '' }}" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Number" class="form-control"
                                    name="number[]" value="{{ isset($Counter[3]) ? $Counter[3]->number : '' }}"
                                    required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-5">
                                <input type="text" placeholder="Enter Counter Text" class="form-control" name="name[]"
                                    value="{{ isset($Counter[3]) ? $Counter[3]->name : '' }}" required>
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

            <!-----==================== home Marque ==========----------------------->

            <!-----==================== home project ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Project Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_project_form" action="{{ url(route('home.project')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                        $project = json_decode($details->projects);
                        $j = 0;
                        @endphp

                        <input type="hidden" name="page" value="home">

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[0]) ? $project[0]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select Date" class="form-control" name="date[]"
                                    value="{{ isset($project[0]) ? $project[0]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select file" class="form-control" name="image[]"
                                    value="" @if(!isset($project[0]->image)) required @endif>
                            </div>
                            @if (isset($project[0]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[0]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[0]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <label for="description">Description<span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                        {{ isset($project[0]) ? $project[0]->description : '' }}
                                    </textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[1]) ? $project[1]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select Date" class="form-control" name="date[]"
                                    value="{{ isset($project[1]) ? $project[1]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select file" class="form-control" name="image[]"
                                    value="" @if(!isset($project[1]->image)) required @endif>
                            </div>
                            @if (isset($project[1]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[1]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[1]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <label for="description">Description<span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" placeholder="Enter Description"
                                    name="description[]" rows="5" required>
                                        {{ isset($project[1]) ? $project[1]->description : '' }}
                                    </textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[2]) ? $project[2]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select date" class="form-control" name="date[]"
                                    value="{{ isset($project[2]) ? $project[2]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select Image file" class="form-control" name="image[]"
                                    value="" @if(!isset($project[2]->image)) required @endif>
                            </div>
                            @if (isset($project[2]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[2]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[2]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <label for="description">Description<span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" placeholder="Enter Description"
                                    name="description[]" rows="5" required>
                                        {{ isset($project[2]) ? $project[2]->description : '' }}
                                    </textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[3]) ? $project[3]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select Date" class="form-control" name="date[]"
                                    value="{{ isset($project[3]) ? $project[3]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select image file" class="form-control" name="image[]"
                                    value="" @if(!isset($project[3]->image)) required @endif>
                            </div>
                            @if (isset($project[3]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[3]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[3]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <label for="description">Description<span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" placeholder="Enter Description"
                                    name="description[]" rows="5" required>
                                        {{ isset($project[3]) ? $project[3]->description : '' }}
                                    </textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[4]) ? $project[4]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select date" class="form-control" name="date[]"
                                    value="{{ isset($project[4]) ? $project[4]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select image file" class="form-control" name="image[]"
                                    value="" @if(!isset($project[4]->image)) required @endif>
                            </div>
                            @if (isset($project[4]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[4]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[4]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <label for="description">Description<span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                        {{ isset($project[4]) ? $project[4]->description : '' }}
                                    </textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="text" placeholder="Enter Title Text" class="form-control" name="title[]"
                                    value="{{ isset($project[5]) ? $project[5]->title : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="date" placeholder="Select date" class="form-control" name="date[]"
                                    value="{{ isset($project[5]) ? $project[5]->date : '' }}" required>
                            </div>
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <input type="file" placeholder="Select image" class="form-control" name="image[]"
                                    value="" @if(!isset($project[5]->image)) required @endif>
                            </div>
                            @if (isset($project[5]->image))
                            <div class="form-group mb-3 mx-2 col-md-3">
                                <div style="width: 100px;">
                                    <img src="{{ asset('storage/' . $project[5]->image) }}" class="img-thumbnail">
                                </div>
                                <input type="hidden" name="old_image{{ $j++ }}" value="{{ $project[5]->image }}">
                            </div>
                            @endif
                            <div class="form-group mb-3 mx-2 col-md-12">
                                <textarea class="trumbowyg form-control" placeholder="Enter Description"
                                    name="description[]" rows="5" required>
                                        {{ isset($project[5]) ? $project[5]->description : '' }}
                                    </textarea>
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

            <!-----==================== home project ==========----------------------->

        </div>
    </div>
    <!-- end card-box-->
</div>
@endsection

@section('page.scripts')
<script>
    $(document).ready(function () {
        let formFieldIndex = 1;

        // Function to update IDs and names of form groups
        function updateFormGroupIds() {
            $('#home_banner_key_add_more .form-group').each(function (index) {
                $(this).attr('id', 'form-group-' + index);
                $(this).find('input[type="file"]').attr('id', 'image-' + index);
                if (index === 0) {
                    $(this).find('.add-btn').show();
                    $(this).find('.remove-btn').remove();
                } else {
                    $(this).find('.add-btn').show();
                    if (!$(this).find('.remove-btn').length) {
                        $(this).find('.add-btn').after('<i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-5-fill remove-btn"></i>');
                    }
                }
            });
        }

        // Event listener for adding new form group
        $('#home_banner_key_add_more').on('click', '.add-btn', function () {
            let clonedFormGroup = $(this).closest('.form-group').clone();
            clonedFormGroup.attr('id', 'form-group-' + formFieldIndex);
            clonedFormGroup.find('img').remove();
            clonedFormGroup.find('input').each(function () {
                $(this).val('');
            });
            $('#home_banner_key_add_more').append(clonedFormGroup);
            formFieldIndex++;
            updateFormGroupIds();
        });

        // Event listener for removing form group
        $('#home_banner_key_add_more').on('click', '.remove-btn', function () {
            if ($('#home_banner_key_add_more .form-group').length > 1) {
                $(this).closest('.form-group').remove();
                updateFormGroupIds();
            } else {
                alert('At least one form group is required.');
            }
        });

        // Initial update to set up the first form group correctly
        updateFormGroupIds();
    });


    $(document).ready(function () {
        initValidate('#home_project_form');
        initValidate('#home_counter_form');
        initValidate('#home_business_form');
        initValidate('#home_marque_form');
        initValidate('#home_intro_form');
        initValidate('#home_banner_form');

        initTrumbowyg('.trumbowyg');
    });

    $("#home_project_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#home_counter_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#home_business_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#home_marque_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#home_intro_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#home_banner_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        location.reload();
    }

    function remove_replace_key(_this) {
        _this.closest(".replace_key").remove();
    }

    $("#add_replace_key").on("click", function () {

        var new_replace_key = `
        <div class="replace_key form-group">
            <div class="row">
                <div class="col-md-11">
                    <div class="row">
    
                        <div class="col col-sm-6">
                            <input class="form-control" name="icon_name[]" placeholder="Enter Icon Name here..." required> 
                        </div>
                        <div class="col col-sm-6">
                        <!--<input class="form-control" style="margin-bottom: 5px;" type="file" id="image" name="icon[]" required>-->
                            <textarea class="form-control" placeholder="Enter SVG Code Here" style="margin-bottom: 5px;" name="icon[]" rows="5" required></textarea>
                        </div>
    
    
                    </div>
                </div>
                <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i></div>
            </div>
            </br>
        </div>
    `;

        $("#home_banner_key_add_more").append(new_replace_key);
    });
</script>

@endsection