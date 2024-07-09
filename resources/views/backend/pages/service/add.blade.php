<form id="add_service_form" action="{{url(route('service.create'))}}" method="post" enctype="multipart/form-data">
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
                <label>Banner Image <span class="red">*</span> <span class="font-size11">(Max file size 1MB - 190*64)</span></label>
                <input class="form-control" type="file" id="banner" name="banner" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="title" value="" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description<span class="red">*</span></label>
                <textarea  class="form-control" rows="5" name="short_description" required></textarea>
            </div>
        </div>

        <div class="col-sm-12 gallery-image-row">
            <div class="form-group mb-3 ">
                <label>Gallery Image <span class="red">*</span> <span class="font-size11">(Max file size 1MB - 190*64)</span></label>
                <input class="form-control" type="file" id="gallery_image" name="gallery_image[]" required>
            </div>
            <div class="col-md-12">
                <button type="button" class="btn btn-success add-row my-2">Add More +</button>
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


$(document).ready(function() {
    initValidate('#add_service_form');
});


$(document).ready(function () {
    // Add row functionality
    $(document).on('click', '.add-row', function () {
        var newRow = $('.gallery-image-row').first().clone();
        newRow.find('input').val('');
        newRow.find('.add-row').remove(); 
        newRow.append('<div class="col-md-12 d-flex gap-3 mb-2"><button type="button" class="btn btn-success add-row my-2">Add More +</button><button type="button" class="btn btn-danger remove-row my-2">Remove</button></div>');
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

/*--------------------- duplicate forms inputs ------------------*/

$("#add_service_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>