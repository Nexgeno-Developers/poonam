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

    $gallery_section1 = json_decode($details->gallery_section);
    $gallery_section2 = json_decode($details->gallery_section2);

@endphp


<div class="col-12">
    <div class="widget-inline">
        <div class="p-0">

            <!-----==================== home banner ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="home_banner_form" action="{{ url(route('home.banner')) }}" method="post" enctype="multipart/form-data">
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
                                                        <input class="form-control" name="banner_text[]" value="{{ $banner['text'] ?? '' }}" placeholder="Enter Banner text like DESTINED|TO|DESIGN|Art " required>
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
                                                        <img width="100"
                                                            src="{{ asset('storage/' . $banner['image']) }}"
                                                            alt="Banner Image" class="img-thumbnail mt-2">
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1">
                                                @if($loop->first)
                                                <button type="button" class="btn btn-outline-success btn-sm add-btn">Add</button>
                                                <!-- <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i> -->
                                                @else
                                                <button type="button" class="btn btn-outline-success btn-sm add-btn">Add</button>
                                                <button type="button" class="btn btn-outline-danger btn-sm remove-btn">Remove</button>
                                                <!-- <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i>
                                                <i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;"
                                                    class="ri-delete-bin-5-fill remove-btn"></i> -->
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
                                                            placeholder="Enter Banner text like DESTINED|TO|DESIGN|Art " required>
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
                        <div class="row mb-3">
                            <div class="col col-sm-6">
                                <label for="intro">Intro Title<span class="red">*</span></label>
                                <input type="text" class="form-control" name="title" placeholder="title"
                                    value="{{ isset($details->introduction) ? json_decode($details->introduction)->title : '' }}"
                                    required>
                            </div>
                            <div class="col col-sm-6">
                                <label for="intro">Intro Sub Title<span class="red">*</span></label>
                                <input type="text" class="form-control" name="subtitle" placeholder="sub title"
                                    value="{{ isset($details->introduction) ? json_decode($details->introduction)->subtitle : '' }}"
                                    required>
                            </div>
                        </div>
                        <input type="hidden" name="page" value="home">

                        <label for="intro">Intro Description<span class="red">*</span></label>
                        <textarea class="trumbowyg form-control" name="intro" rows="5"
                            required>{{ isset($details->introduction) ? json_decode($details->introduction)->content : '' }}</textarea>

                        <div class="col-sm-1 mt-2" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== home intro ==========----------------------->

            <!-----==================== home gallery ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Gallery Section 1</b></h4>
                        <hr>
                    </div>

                    <form id="gallery_section1" action="{{ url(route('home.gallery_section1')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="page" value="home">

                        
                            @if (empty($gallery_section1))
                            @for ($i = 0; $i < 7; $i++)
                                <div class="row mb-3">                            
                                    <div class="col col-sm-4">
                                        <label for="gallery_title{{$i+1}}">Gallery Title {{$i+1}} <span
                                                class="red">*</span></label>
                                        <input type="text" class="form-control" name="gallery_title[]"
                                            placeholder="Gallery Title {{$i+1}}" required>
                                    </div>
                                    <div class="col col-sm-4">
                                        <label for="gallery_description{{$i+1}}">Gallery Description {{$i+1}} <span
                                                class="red">*</span></label>
                                        <textarea class="form-control" name="gallery_description[]" rows="3"
                                            placeholder="Gallery Description {{$i+1}}" required></textarea>
                                    </div>
                                    <div class="col col-sm-4">
                                        @if ($i < 4) <label for="gallery_image{{$i+1}}">Gallery Image {{$i+1}} <span
                                                class="red">*</span></label>
                                            <input type="file" class="form-control" id="gallery_image{{$i+1}}"
                                                name="gallery_image[]" required>
                                            @endif
                                    </div>
                                </div>
                            @endfor
                        @else
                        @foreach ($gallery_section1 as $key => $section)
                        <div class="row mb-3"> 
                            <div class="col col-sm-6">
                                <label for="gallery_title{{$key + 1}}">Gallery Title {{$key + 1}} <span
                                        class="red">*</span></label>
                                <input type="text" class="form-control" name="gallery_title[]"
                                    placeholder="Gallery Title {{$key + 1}}" value="{{ $section->title }}" required>
                            </div>
                            <div class="col col-sm-6">
                                <label for="gallery_description{{$key + 1}}">Gallery Description {{$key + 1}} <span
                                        class="red">*</span></label>
                                <textarea class="form-control" name="gallery_description[]" rows="3"
                                    placeholder="Gallery Description {{$key + 1}}"
                                    required>{{ $section->description }}</textarea>
                            </div>
                        </div>
                        @endforeach
                        @foreach ($gallery_section1 as $key => $section)
                        <div class="row mb-3">
                            <div class="col col-sm-6">
                                @if ($key < 4) <label for="gallery_image{{$key + 1}}">Gallery Image {{$key + 1}} <span
                                        class="red">*</span></label>
                                    <input type="file" class="form-control" id="gallery_image{{$key + 1}}"
                                        name="gallery_image[]" @if(empty($section->image)) required @endif>
                                    @endif
                            </div>
                            <div class="col col-sm-6">
                                @if(!empty($section->image))
                                <img width="100" src="{{ asset('storage/' . $section->image) }}" alt="Banner Image"
                                    class="img-thumbnail mt-2">
                                @endif
                            </div>
                        </div>
                        @endforeach
                        @endif
                
                <div class="col-sm-1 mt-2" style="float: right;">
                    <div class="form-group d-grid mb-3 text-end">
                        <button type="submit" class="btn btn-block btn-primary">Save</button>
                    </div>
                </div>
                </div>
                </form>

            </div>
        </div>



        <div class="card m-3">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 class="header-title"><b>Gallery Section 2</b></h4>
                    <hr>
                </div>

                <form id="gallery_section2" action="{{ url(route('home.gallery_section2')) }}" method="post"
                    enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="page" value="home">

                    @if (empty($gallery_section2))
                    @for ($i = 1; $i <= 2; $i++) <div class="row mb-3">
                        <div class="col col-sm-6">
                            <label for="gallery2_title_{{$i}}">Gallery Title {{$i}} <span class="red">*</span></label>
                            <input type="text" class="form-control" name="gallery2_title[]"
                                placeholder="Gallery Title {{$i}}" required>
                        </div>
                        <div class="col col-sm-6">
                            <label for="gallery2_description_{{$i}}">Gallery Description {{$i}} <span
                                    class="red">*</span></label>
                            <textarea class="form-control" name="gallery2_description[]" rows="3"
                                placeholder="Gallery Description {{$i}}" required></textarea>
                        </div>
                        <div class="col col-sm-6">
                            <label for="gallery2_image_{{$i}}">Gallery Image {{$i}} <span class="red">*</span></label>
                            <input type="file" class="form-control" name="gallery2_image[]" required>
                        </div>
            </div>
            @endfor
            @else
            @foreach ($gallery_section2 as $key => $section)
            <div class="row mb-3">
                <div class="col col-sm-6">
                    <label for="gallery2_title_{{$key + 1}}">Gallery Title {{$key + 1}} <span
                            class="red">*</span></label>
                    <input type="text" class="form-control" name="gallery2_title[]"
                        placeholder="Gallery Title {{$key + 1}}" value="{{ $section->title }}" required>
                </div>
                <div class="col col-sm-6">
                    <label for="gallery2_description_{{$key + 1}}">Gallery Description {{$key + 1}} <span
                            class="red">*</span></label>
                    <textarea class="form-control" name="gallery2_description[]" rows="3"
                        placeholder="Gallery Description {{$key + 1}}" required>{{ $section->description }}</textarea>
                </div>
                <div class="col col-sm-6">
                    <label for="gallery2_image_{{$key + 1}}">Gallery Image {{$key + 1}} <span
                            class="red">*</span></label>
                    <input type="file" class="form-control" name="gallery2_image[]" @if(empty($section->image)) required
                    @endif>

                </div>
                <div class="col col-sm-6">
                    @if(!empty($section->image))
                    <img width="100" src="{{ asset('storage/' . $section->image) }}" alt="Banner Image"
                        class="img-thumbnail mt-2">
                    @endif
                </div>

            </div>
            @endforeach
            @endif

            <div class="col-sm-1 mt-2" style="float: right;">
                <div class="form-group d-grid mb-3 text-end">
                    <button type="submit" class="btn btn-block btn-primary">Save</button>
                </div>
            </div>
            </form>

        </div>
    </div>


    <!-----==================== home gallery ==========----------------------->


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
                        $(this).find('.add-btn').after('<button type="button" class="btn btn-outline-danger btn-sm remove-btn">Remove</button>');
                        // $(this).find('.add-btn').after('<i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-5-fill remove-btn"></i>');
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
        initValidate('#gallery_section1');
        initValidate('#gallery_section2');
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

    $("#gallery_section1").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#gallery_section2").submit(function (e) {
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