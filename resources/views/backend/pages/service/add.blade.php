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
                <label>Banner Image</label>
                <input class="form-control" type="file" id="banner" name="banner" accept=".jpg,.jpeg,.png,.webp" >
            </div>
        </div>
        <div class="col-sm-8">
            <div class="form-group mb-3">
                <label>Service Image <span class="red">*</span></label>
                <input class="form-control" type="file" id="service_image" name="service_image" accept=".jpg,.jpeg,.png,.webp" required>
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
                <label>Short Description 1</label>
                <textarea  class="form-control" rows="5" name="short_description"></textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description 2</label>
                <textarea  class="form-control" rows="5" name="short_description2"></textarea>
            </div>
        </div>

        <div class="row gallery-image-row">
            
            <div class="col-md-9">
                <div class="form-group mb-3 ">
                    <label>Gallery Image</label>
                    <input class="form-control" type="file" id="gallery_image" name="gallery_image[]" accept=".jpg,.jpeg,.png,.webp" >
                </div>
            </div>
            <div class="add-row-col-3-div col-md-3 d-flex gap-3 mb-2">
                <button type="button" class="btn btn-outline-success add-row my-2">Add More +</button>
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
        newRow.find('.add-row-col-3-div').remove(); 
        newRow.find('.add-row').remove(); 
        // <button type="button" class="btn btn-outline-success add-row my-2">Add More +</button>
        newRow.append('<div class="col-md-3 d-flex gap-3 mb-2"><button type="button" class="btn btn-outline-danger remove-row my-2">Remove</button></div>');
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