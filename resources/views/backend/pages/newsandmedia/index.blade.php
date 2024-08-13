@extends('backend.layouts.app')

@section('page.name', 'News And Media Page')

@section('page.content')

@php
    $details = DB::table('pages')->where('page_name', 'newsandmedia')->first();
    $banner = $details->banner_section;

/*    $banners = [];

    if ($details && $details->banner_section) {
        $decoded = json_decode($details->banner_section, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            $banners = $decoded;
        }
    }*/

    $image_section = json_decode($details->image_section);
@endphp

<div class="col-11 px-0">
    <div class="card widget-inline">
        <div class="card-body p-0">


            <!-----==================== newsandmedia banner ==========----------------------->

            <div class="card m-2">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="newsandmedia_banner_form" action="{{ url(route('newsandmedia.banner')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        <input type="hidden" name="page" value="newsandmedia">

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

                        <div class="col-sm-1 mt-4" style="float: right;">
                            <div class="form-group d-grid mb-0 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== newsandmedia banner ==========----------------------->


            <!-----==================== newsandmedia image section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Image section</b></h4>
                        <hr>
                    </div>

                    <form id="newsandmedia_image_form" action="{{ route('newsandmedia.image') }}" method="post"
                        enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="page" value="newsandmedia">
                        <input type="hidden" id="deleted_images" name="deleted_images">

                        <div id="image_fields">
                            @php $image_section = $image_section ?? []; @endphp
                            <!-- Ensure $image_section is initialized as an array -->
                            @foreach($image_section as $index => $image)
                                <div class="form-group" id="form-group-{{ $index }}">
                                    <div class="row align-items-center">
                                        <div class="col-md-10">
                                            <div class="row">
                                                <div class="col col-sm-6">
                                                    <label>Image <span class="red">*</span></label>
                                                    <input class="form-control" type="file" id="image-{{ $index }}"
                                                        name="newsandmedia_image[]">
                                                        @if(!empty($image))
                                                        <input class="form-control" type="hidden" id="image-{{ $index }}" value="{{ $image }}" name="newsandmedia_old_image[]">
                                                        <img width="100" src="{{ asset('storage/' .$image) }}"
                                                            alt="Image Preview" class="img-thumbnail mt-2">
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            @if($loop->first) <button type="button" class="btn btn-outline-success btn-sm add-btn">Add +</button> @else
                                            <button type="button" class="btn btn-outline-success btn-sm add-btn mb-2">Add +</button>
                                            <button type="button" class="btn btn-outline-danger btn-sm remove-btn">Remove</button>    
                                            <!-- <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;"
                                                    class="ri-add-circle-fill add-btn"></i>
                                                <i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;"
                                                    class="ri-delete-bin-5-fill remove-btn"></i> -->
                                            @endif
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            @endforeach

                            <!-- Initial form group when no images exist -->
                            @if(empty($image_section))
                                <div class="form-group" id="form-group-0">
                                    <div class="row">
                                        <div class="col-md-11">
                                            <div class="row">
                                                <div class="col col-sm-6">
                                                    <label>Image <span class="red">*</span></label>
                                                    <input class="form-control" type="file" id="image-0"
                                                        name="newsandmedia_image[]" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                        <button type="button" class="btn btn-outline-success btn-sm add-btn">Add +</button>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            @endif
                        </div>

                        <div class="col-sm-1" style="float: right;">
                            <div class="form-group d-grid mb-0 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>


                </div>
            </div>






        </div>
    </div>

    <!-----==================== career intro section ends  ==========----------------------->


</div>
</div>
<!-- end card-box-->
</div>
@endsection

@section('page.scripts')
<script>
$(document).ready(function () {
    let formFieldIndex = {{ count($image_section) ?? 1 }};
    let deletedImages = [];

    // Function to update IDs and names of form groups
    function updateFormGroupIds() {
        $('#image_fields .form-group').each(function (index) {
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
    $('#image_fields').on('click', '.add-btn', function () {
        let clonedFormGroup = $(this).closest('.form-group').clone();
        clonedFormGroup.attr('id', 'form-group-' + formFieldIndex);
        clonedFormGroup.find('img').remove();
        clonedFormGroup.find('input').each(function () {
            $(this).val('');
        });
        $('#image_fields').append(clonedFormGroup);
        formFieldIndex++;
        updateFormGroupIds();
    });

    // Event listener for removing form group
    $('#image_fields').on('click', '.remove-btn', function () {
        let formGroup = $(this).closest('.form-group');
        let imageInput = formGroup.find('img').attr('src');
        if (imageInput) {
            deletedImages.push(imageInput);
            $('#deleted_images').val(JSON.stringify(deletedImages));
        }
        if ($('#image_fields .form-group').length > 1) {
            formGroup.remove();
            updateFormGroupIds();
        } else {
            alert('At least one form group is required.');
        }
    });

    // Initial update to set up the form groups correctly
    updateFormGroupIds();
});


    // $(document).ready(function () {
    //     let formFieldIndex = {{ count($image_section) ?? 1 }};

    //     // Function to update IDs and names of form groups
    //     function updateFormGroupIds() {
    //         $('#image_fields .form-group').each(function (index) {
    //             $(this).attr('id', 'form-group-' + index);
    //             $(this).find('input[type="file"]').attr('id', 'image-' + index);
    //             if (index === 0) {
    //                 $(this).find('.add-btn').show();
    //                 $(this).find('.remove-btn').remove();
    //             } else {
    //                 $(this).find('.add-btn').show();
    //                 if (!$(this).find('.remove-btn').length) {
    //                     $(this).find('.add-btn').after('<i style="font-size: 25px; color: #b00; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-5-fill remove-btn"></i>');
    //                 }
    //             }
    //         });
    //     }

    //     // Event listener for adding new form group
    //     $('#image_fields').on('click', '.add-btn', function () {
    //         let clonedFormGroup = $(this).closest('.form-group').clone();
    //         clonedFormGroup.attr('id', 'form-group-' + formFieldIndex);
    //         clonedFormGroup.find('img').remove();
    //         clonedFormGroup.find('input').each(function () {
    //             $(this).val('');
    //         });
    //         $('#image_fields').append(clonedFormGroup);
    //         formFieldIndex++;
    //         updateFormGroupIds();
    //     });

    //     // Event listener for removing form group
    //     $('#image_fields').on('click', '.remove-btn', function () {
    //         if ($('#image_fields .form-group').length > 1) {
    //             $(this).closest('.form-group').remove();
    //             updateFormGroupIds();
    //         } else {
    //             alert('At least one form group is required.');
    //         }
    //     });

    //     // Initial update to set up the form groups correctly
    //     updateFormGroupIds();
    // });

    $(document).ready(function () {
        initValidate('#newsandmedia_image_form');
        initValidate('#newsandmedia_banner_form');

        initTrumbowyg('.trumbowyg');
    });

    $("#newsandmedia_image_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    $("#newsandmedia_banner_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        location.reload();
    }
</script>
@endsection