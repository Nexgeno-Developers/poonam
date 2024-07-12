<form id="add_gallery_form" action="{{url(route('gallery.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Page Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="page_name" value="" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug (URL) <span class="red">*</span></label>
                <input type="text" class="form-control" name="slug" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Banner Image <span class="red">*</span> <span class="font-size11">(Max file size 1MB -
                        190*64)</span></label>
                <input class="form-control" type="file" id="banner" name="banner" accept=".jpg,.jpeg,.png,.webp"
                    required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Thumbnail Image <span class="red">*</span> <span class="font-size11">(Max file size 1MB -
                        190*64)</span></label>
                <input class="form-control" type="file" id="thum_image" name="thum_image" accept=".jpg,.jpeg,.png,.webp"
                    required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="title" value="" required>
            </div>
        </div>

        <div class="row gallery-image-row">
            <div class="col-md-9">
                <div class="form-group row mb-3 ">
                    <div class="col-6 form-group mb-3">
                        <label>Title <span class="red">*</span></label>
                        <input type="text" class="form-control" name="image_description_text[]" value="" required>
                    </div>
                    <div class="col-6 form-group mb-3">
                        <label>Image <span class="red">*</span> <span class="font-size11">(Max file size 1MB -
                                190*64)</span></label>
                        <input class="form-control" type="file" id="image_description[]" name="image_description"
                            accept=".jpg,.jpeg,.png,.webp">
                    </div>

                </div>
            </div>
            <div class="add-row-col-3-div col-md-3 d-flex gap-3 mb-2">
                <button type="button" class="btn btn-success add-row my-2">Add More +</button>
            </div>
        </div>

        <div class="row gallery-image-row2">
            <div class="col-sm-8">
                <div class="form-group mb-3">
                    <label>Images <span class="red">*</span> <span class="font-size11">(Max file size 1MB -
                            190*64)</span></label>
                    <input class="form-control" type="file" id="images[]" name="images[]"
                        accept=".jpg,.jpeg,.png,.webp">
                </div>
            </div>
            <div class="add-row-col-3-div col-md-3 d-flex gap-3 mb-2">
                <button type="button" class="btn btn-success add-row2 my-2">Add More +</button>
            </div>
        </div>

        <div class="row gallery-video-row">

            <div class="col-md-9">
                <div class="form-group mb-3 ">
                    <label>Videos <span class="red">*</span> <span class="font-size11">(Max file size 1MB -
                            190*64)</span></label>
                    <input class="form-control" type="file" id="gallery_videos" name="gallery_videos[]" required>
                </div>
            </div>
            <div class="add-row-col-3-div col-md-3 d-flex gap-3 mb-2">
                <button type="button" class="btn btn-success add-row3 my-2">Add More +</button>
            </div>

        </div>

        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
        </div>
    </div>
</form>

<script>


    $(document).ready(function () {
        initValidate('#add_gallery_form');
    });

    $(document).ready(function () {
        // Add row functionality
        $(document).on('click', '.add-row', function () {
            var newRow = $('.gallery-image-row').first().clone();
            newRow.find('input').val('');
            newRow.find('.add-row-col-3-div').remove();
            newRow.find('.add-row').remove();
            newRow.append('<div class="col-md-3 d-flex gap-3 mb-2"><button type="button" class="btn btn-success add-row my-2">Add More +</button><button type="button" class="btn btn-danger remove-row my-2">Remove</button></div>');
            $('.gallery-image-row').last().after(newRow);
        });

        // Remove row functionality
        $(document).on('click', '.remove-row', function () {
            if ($('.gallery-image-row').length > 1) {
                $(this).closest('.gallery-image-row').remove(); // Remove the closest row
            } else {
                alert('At least one row is required.'); // Alert if only one row is left
            }
        });

    });

    $(document).ready(function () {
        // Add row functionality
        $(document).on('click', '.add-row2', function () {
            var newRow = $('.gallery-image-row2').first().clone();
            newRow.find('input').val('');
            newRow.find('.add-row-col-3-div').remove();
            newRow.find('.add-row2').remove();
            newRow.append('<div class="col-md-3 d-flex gap-3 mb-2"><button type="button" class="btn btn-success add-row2 my-2">Add More +</button><button type="button" class="btn btn-danger remove-row2 my-2">Remove</button></div>');
            $('.gallery-image-row2').last().after(newRow);
        });

        // Remove row functionality
        $(document).on('click', '.remove-row2', function () {
            if ($('.gallery-image-row2').length > 1) {
                $(this).closest('.gallery-image-row2').remove(); // Remove the closest row
            } else {
                alert('At least one row is required.'); // Alert if only one row is left
            }
        });

    });

    $(document).ready(function () {
        // Add row functionality
        $(document).on('click', '.add-row3', function () {
            var newRow = $('.gallery-video-row').first().clone();
            newRow.find('input').val('');
            newRow.find('.add-row-col-3-div').remove();
            newRow.find('.add-row3').remove();
            newRow.append('<div class="col-md-3 d-flex gap-3 mb-2"><button type="button" class="btn btn-success add-row3 my-2">Add More +</button><button type="button" class="btn btn-danger remove-row3 my-2">Remove</button></div>');
            $('.gallery-video-row').last().after(newRow);
        });

        // Remove row functionality
        $(document).on('click', '.remove-row3', function () {
            if ($('.gallery-video-row').length > 1) {
                $(this).closest('.gallery-video-row').remove(); // Remove the closest row
            } else {
                alert('At least one row is required.'); // Alert if only one row is left
            }
        });

    });

    /*--------------------- duplicate forms inputs ------------------*/

    $("#add_gallery_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        location.reload();
    }
</script>