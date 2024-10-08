<form id="edit_service_form" action="{{url(route('service.update'))}}" method="post" enctype="multipart/form-data">
    @csrf

    <div class="row">
        <input type="hidden" name="id" value="{{ $service->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Page Name<span class="red">*</span></label>
                <input type="text" class="form-control" name="page_name" value="{{ $service->page_name }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug (URL)<span class="red">*</span></label>
                <input type="text" class="form-control" name="slug" value="{{ $service->slug }}" required>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="form-group mb-3">
                <label>Banner Image</label>
                <input class="form-control" type="file" id="banner" name="banner" accept=".jpg,.jpeg,.png,.webp">
            </div>
        </div>
        @if (!empty($service->banner))        
        <div class="form-group mb-3 mx-2 col-md-2">
            <div style="width: 100px;">
                <img src="{{ asset('storage/' . $service->banner) }}" class="img-thumbnail">
            </div> 
        </div>
        @endif
        
        <div class="col-sm-8">
            <div class="form-group mb-3">
                <label>Service Image</label>
                <input class="form-control" type="file" id="service_image" name="service_image" accept=".jpg,.jpeg,.png,.webp" @if (empty($service->service_image)) required @endif>
            </div>
        </div>

        @if (!empty($service->service_image))
        <div class="form-group mb-3 mx-2 col-md-2">
            <div style="width: 100px;">
                <img src="{{ asset('storage/' . $service->service_image) }}" class="img-thumbnail">
            </div> 
        </div>
        @endif

        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title</label>
                <input type="text" class="form-control" name="title" value="{{ $service->title }}" >
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description 1</label>
                <textarea  class="form-control" rows="5" name="short_description">{{ $service->short_description }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description 2</label>
                <textarea  class="form-control" rows="5" name="short_description2">{{ isset($service->short_description2) ? $service->short_description2 : '' }}
                </textarea>
            </div>
        </div>

        <div class="col-sm-12">
            <div class="form-group mb-3">
                <div id="replace_key_add_more" style=""> 
                <div class="row">
                    <div class="col-12">
                        <button type="button" class="w-auto float-end btn btn-outline-success btn-sm" id="add_replace_key">Add +</button> 
                    </div>
                </div>
                        
                @php $d = 0;
                if(!empty($galleryImages_data)) { foreach ($galleryImages_data as $row) { @endphp
                    <div class="replace_key">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-11">

                                    <div class="row">
                                        <div class="col-sm-9">
                                            <div class="form-group mb-3 ">
                                                <label>Gallery Image</label>
                                                <input class="form-control" type="file" id="gallery_image" name="gallery_image[]" accept=".jpg,.jpeg,.png,.webp">
                                            </div>
                                        </div>

                                        <div class="form-group mb-3 mx-2 col-md-2">
                                                <div style="width: 100px;">
                                                    <img src="{{ asset('storage/' . $row) }}" class="img-thumbnail">
                                                </div> 
                                                <input type="hidden" name="old_image{{ $d }}" value="{{ $row }}">  
                                        </div>

                                        <input type="hidden" name="number_img[]" value="1">

                                    </div>

                                </div>
                                <div class="col-md-1">                                    
                                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_replace_key($(this));">Remove</button> 
                                </div>
                            </div>
                        </div>
                        </br>
                    </div> @php $d++; } @endphp @php } else { @endphp
                        <div class="form-group">
                        <div class="row">
                        <div class="col-md-11">
                            <div class="row">

                                <div class="col-sm-12 gallery-image-row-empty">
                                    <div class="form-group mb-3 ">
                                        <label>Gallery Image</label>
                                        <input class="form-control" type="file" id="gallery_image" name="gallery_image[]" accept=".jpg,.jpeg,.png,.webp" >
                                    </div>
                                    <input type="hidden" name="number_img[]" value="1">
                                </div>

                            </div>
                        </div>
                        {{--<div class="col-md-1">
                            <button type="button" class="btn btn-outline-success btn-sm add-btn" id="add_replace_key">Add +</button>
                        </div>--}}
                        </div>
                        </br>
                    </div> @php } @endphp </div>
            </div>


        </div>



        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_service_form');
});

function remove_replace_key(_this) {
    _this.closest(".replace_key").remove();
}

/*--------------------- duplicate forms inputs ------------------*/

$("#add_replace_key").on("click", function() {
    var new_replace_key = `
                <div class="replace_key form-group">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">

                                
                                <div class="col-sm-12 gallery-image-row-empty">
                                    <div class="form-group mb-3 ">
                                        <label>Gallery Image</label>
                                        <input class="form-control" type="file" id="gallery_image" name="gallery_image[]" accept=".jpg,.jpeg,.png,.webp" >
                                    </div>
                                    <input type="hidden" name="number_img[]" value="1">
                                </div>

                            </div>
                        </div>
                        <div class="col-md-1"><button type="button" class="btn btn-outline-danger btn-sm remove-btn" onclick="remove_replace_key($(this));">Remove</button></div>
                    </div>
                    </br>
                </div>
            `;

    $("#replace_key_add_more").append(new_replace_key);

});

/*--------------------- duplicate forms inputs ------------------*/

$("#edit_service_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>