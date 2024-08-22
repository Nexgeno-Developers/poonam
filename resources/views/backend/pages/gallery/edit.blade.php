<form id="edit_gallery_form" action="{{url(route('gallery.update'))}}" method="post" enctype="multipart/form-data">
    @csrf

    <div class="row">
        <input type="hidden" name="id" value="{{ $gallery->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Page Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="page_name" value="{{ $gallery->page_name }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug (URL) <span class="red">*</span></label>
                <input type="text" class="form-control" name="slug" value="{{ $gallery->slug }}" required>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="form-group mb-3">
                <label>Banner Image</label>
                <input class="form-control" type="file" id="banner" name="banner" accept=".jpg,.jpeg,.png,.webp">
            </div>
        </div>

        @if (!empty($gallery->banner))
        <div class="form-group mb-3 mx-2 col-md-2">
            <div style="width: 100px;">
                <img src="{{ asset('storage/' . $gallery->banner) }}" class="img-thumbnail">
            </div> 
        </div>
        @endif

        <div class="col-sm-8">
            <div class="form-group mb-3">
                <label>Thumbnail Image <span class="red">*</span></label>
                <input class="form-control" type="file" id="thum_image" name="thum_image" accept=".jpg,.jpeg,.png,.webp" @if (empty($gallery->thum_image)) required @endif>
            </div>
        </div>

        @if (!empty($gallery->thum_image))
        <div class="form-group mb-3 mx-2 col-md-2">
            <div style="width: 100px;">
                <img src="{{ asset('storage/' . $gallery->thum_image) }}" class="img-thumbnail">
            </div> 
        </div>
        @endif

        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="title" value="{{ $gallery->title }}">
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description</label>
                <input type="text" class="form-control" name="short_description" value="{{ $gallery->short_description }}">
            </div>
        </div>

    {{--------------------------------------  other contain -----------------------------------------------------------}} 
    <br>
    <hr>
    <br>
    {{--------------------------------------  Image Description -----------------------------------------------------------}} 

        <div class="col-sm-12">

            <div class="form-group mb-3">
                <div id="replace_key_add_more" style=""> @php $d = 0;
                if(!empty($image_description)) { foreach ($image_description as $row) { @endphp
                    <div class="replace_key">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-11">

                                    <div class="row">

                                        <div class="col-sm-12 form-group mb-3">
                                            <label>Title</label>
                                            <input type="text" class="form-control" name="image_description_text[]" value="{{ $row->text }}" >
                                        </div>

                                        <div class="col-sm-9">
                                            <div class="form-group mb-3 ">
                                                <label>Image</label>
                                                <input class="form-control" type="file" id="image_description" name="image_description[]" accept=".jpg,.jpeg,.png,.webp">
                                            </div>
                                        </div>

                                        <div class="form-group mb-3 mx-2 col-md-2">
                                                <div style="width: 100px;">
                                                    <img src="{{ asset('storage/' . $row->image) }}" class="img-thumbnail">
                                                </div> 
                                                <input type="hidden" name="old_image_description{{ $d }}" value="{{ $row->image }}">  
                                        </div>

                                        <input type="hidden" name="number_img_description[]" value="1">

                                    </div>

                                </div>
                                <div class="col-md-1">
                                @if($d == 0) 
                                 <button type="button" class="btn btn-outline-success btn-sm" id="add_replace_key">Add +</button>
                                 <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_replace_key($(this));">Remove</button>
                                @else 
                                 <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_replace_key($(this));">Remove</button></div>
                                @endif 
                            </div>
                        </div>
                        </br>
                    </div> @php $d++; } @endphp @php } else { @endphp
                        <div class="form-group">
                        <div class="row">
                        <div class="col-md-11">
                            <div class="row">

                                <div class="col-sm-12 form-group mb-3">
                                    <label>Title</label>
                                    <input type="text" class="form-control" name="image_description_text[]" value="">
                                </div>

                                <div class="col-sm-9">
                                    <div class="form-group mb-3 ">
                                        <label>Image</label>
                                        <input class="form-control" type="file" id="image_description" name="image_description[]" accept=".jpg,.jpeg,.png,.webp">
                                    </div>
                                </div>

                                <input type="hidden" name="number_img_description[]" value="1">

                            </div>
                        </div>
                        <div class="col-md-1">
                            <button type="button" class="btn btn-outline-success btn-sm" id="add_replace_key">Add +</button>
                            {{--<button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_replace_key($(this));">Remove</button>
                        --}}</div>
                        </div>
                        </br>
                    </div> @php } @endphp </div>
            </div>


        </div>
    
    {{--------------------------------------  Image Description -----------------------------------------------------------}} 
    <br>
    <hr>
    <br>
    {{-------------------------------------- Image -----------------------------------------------------------}}    

        <div class="col-sm-12">

            <div class="form-group mb-3">
                <div id="images_key_add_more" style=""> @php $e = 0;
                if(!empty($images)) { foreach ($images as $index => $row) { @endphp
                    <div class="images_key">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-11">

                                    <div class="row">

                                        <div class="col-sm-9">
                                            <div class="form-group mb-3 ">
                                                <label>Image</label>
                                                <input class="form-control" type="file" id="images" name="images[]" accept=".jpg,.jpeg,.png,.webp">
                                            </div>
                                        </div>

                                        <div class="form-group mb-3 mx-2 col-md-2">
                                                <div style="width: 100px;">
                                                    <img src="{{ asset('storage/' . $row) }}" class="img-thumbnail">
                                                </div> 
                                                <input type="hidden" name="old_image{{ $e }}" value="{{ $row }}">  
                                        </div>

                                        <input type="hidden" name="number_img[]" value="{{$index}}">

                                    </div>

                                </div>
                                <div class="col-md-1">
                                @if($e == 0) 
                                    <button type="button" class="btn btn-outline-success btn-sm" id="add_images_key">Add +</button> 
                                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_images_key($(this));">Remove</button>
                                @else    
                                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_images_key($(this));">Remove</button> 
                                @endif    
                                </div>
                            </div>
                        </div>
                        </br>
                    </div> @php $e++; } @endphp @php } else { @endphp
                        <div class="form-group">
                        <div class="row">
                        <div class="col-md-11">
                            <div class="row">

                            <div class="col-sm-9">
                                <div class="form-group mb-3 ">
                                    <label>Image</label>
                                    <input class="form-control" type="file" id="images" name="images[]" accept=".jpg,.jpeg,.png,.webp">
                                </div>
                            </div>

                            <input type="hidden" name="number_img[]" value="1">

                            </div>
                        </div>
                        <div class="col-md-1">
                            <button type="button" class="btn btn-outline-success btn-sm" id="add_images_key">Add +</button>
                            {{--<button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_images_key($(this));">Remove</button>
                        --}}</div>
                        </div>
                        </br>
                    </div> @php } @endphp </div>
            </div>


        </div>

    {{-------------------------------------- Image -----------------------------------------------------------}} 
    <br>
    <hr>
    <br>
    {{---------------------------------------video------------------------------------------------------------}}

    <div class="col-sm-12">

        <div class="form-group mb-3">
            <div id="video_key_add_more" style=""> @php $e = 0;
            if(!empty($videos)) { foreach ($videos as $row) { @endphp
                <div class="video_key">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-11">

                                <div class="row">

                                    <div class="col-sm-9">
                                        <div class="form-group mb-3 ">
                                            <label>Videos</label>
                                            <input class="form-control" type="text" id="gallery_videos" value="{{$row}}" name="gallery_videos[]" />
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ $row }}" frameborder="0" allowfullscreen></iframe>
                                    </div>
{{--
                                    <div class="form-group mb-3 mt-3 mx-2 col-md-2">
                                            <div style="width: 100px;">
                                                <video width="320" height="240" controls>
                                                    <source src="{{ asset('storage/' . $row) }}" type="video/mp4">
                                                </video>
                                            </div> 
                                            <input type="hidden" name="old_video{{ $e }}" value="{{ $row }}">  
                                    </div>

                                    <input type="hidden" name="number_video[]" value="1">
--}}

                                </div>

                            </div>
                            <div class="col-md-1"> 
                            @if($e == 0) 
                                <button type="button" class="btn btn-outline-success btn-sm" id="add_video_key">Add +</button> 
                                <button type="button" class="btn btn-outline-danger btn-sm remove-btn" onclick="remove_video_key($(this));">Remove</button>
                            @else    
                                <button type="button" class="btn btn-outline-danger btn-sm remove-btn" onclick="remove_video_key($(this));">Remove</button> 
                            @endif    
                            </div>
                        </div>
                    </div>
                    </br>
                </div> @php $e++; } @endphp @php } else { @endphp
                    <div class="form-group">
                    <div class="row">
                    <div class="col-md-11">
                        <div class="row">

                        <div class="col-sm-9">
                            <div class="form-group mb-3 ">
                                <label>Videos</label>
                                <input class="form-control" type="text" id="gallery_videos" name="gallery_videos[]">
                            </div>
                        </div>

                        <input type="hidden" name="number_video[]" value="1">

                        </div>
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-outline-success btn-sm" id="add_video_key">Add +</button>
                        {{--<button type="button" class="btn btn-outline-danger btn-sm remove-btn" onclick="remove_video_key($(this));">Remove</button> 
                    --}}</div>
                    </div>
                    </br>
                </div> @php } @endphp </div>
        </div>


    </div>

    {{---------------------------------------video------------------------------------------------------------}}

        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_gallery_form');
});



/*--------------------- duplicate forms inputs ------------------*/

function remove_replace_key(_this) {
    _this.closest(".replace_key").remove();
}

$("#add_replace_key").on("click", function() {
    var new_replace_key = `
                <div class="replace_key form-group">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">

                                
                                <div class="col-sm-12 form-group mb-3">
                                    <label>Title</label>
                                    <input type="text" class="form-control" name="image_description_text[]" value="">
                                </div>

                                <div class="col-sm-9">
                                    <div class="form-group mb-3 ">
                                        <label>Image</label>
                                        <input class="form-control" type="file" id="image_description" name="image_description[]" accept=".jpg,.jpeg,.png,.webp">
                                    </div>
                                </div>
                                <input type="hidden" name="number_img_description[]" value="1">
                            </div>
                        </div>
                        <div class="col-md-1"><button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_replace_key($(this));">Remove</button></div>
                    </div>
                    </br>
                </div>
            `;

    $("#replace_key_add_more").append(new_replace_key);

});


    function remove_images_key(_this) {
        _this.closest(".images_key").remove();
    }

    $("#add_images_key").on("click", function() {
        var new_images_key = `
                    <div class="images_key form-group">
                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">

                                    
                                    <div class="col-sm-9">
                                        <div class="form-group mb-3 ">
                                            <label>Image</label>
                                            <input class="form-control" type="file" id="images" name="images[]" accept=".jpg,.jpeg,.png,.webp">
                                        </div>
                                    </div>

                                    <input type="hidden" name="number_img[]" value="1">

                                </div>
                            </div>
                            <div class="col-md-1"><button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_images_key($(this));">Remove</button></div>
                        </div>
                        </br>
                    </div>
                `;

        $("#images_key_add_more").append(new_images_key);

    });

    function remove_video_key(_this) {
        _this.closest(".video_key").remove();
    }

    $("#add_video_key").on("click", function() {
        var new_video_key = `
                    <div class="video_key form-group">
                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">

                                    
                                    <div class="col-sm-9">
                                        <div class="form-group mb-3 ">
                                            <label>Videos</label>
                                            <input class="form-control" type="text" id="gallery_videos" name="gallery_videos[]">
                                        </div>
                                    </div>

                                    <input type="hidden" name="number_video[]" value="1">

                                </div>
                            </div>
                            <div class="col-md-1"><button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_video_key($(this));">Remove</button></div>
                        </div>
                        </br>
                    </div>
                `;

        $("#video_key_add_more").append(new_video_key);

    });

/*--------------------- duplicate forms inputs ------------------*/

$("#edit_gallery_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>