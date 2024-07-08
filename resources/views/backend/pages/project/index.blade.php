@extends('backend.layouts.app')

@section('page.name', 'Project Page')

@section('page.content')
    <div class="col-12">
        <div class="card widget-inline">
            <div class="card-body p-0">

                @php
                    $details = DB::table('pages')->where('page_name', 'project')->first();
                @endphp

                <!-----==================== project banner ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Banner Section</b></h4>
                            <hr>
                        </div>

                        <form id="project_banner_form" action="{{ url(route('project.banner')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $banner = $details->banners;
                            @endphp

                            <input type="hidden" name="page" value="project">

                            <div class="row">
                                <div class="col-sm-9">
                                    <div class="form-group mb-3">
                                        <label>Banner <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="Banner" required>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    @if (!empty($banner))
                                        <div style="width: 300px;">
                                            <img src="{{ asset('storage/' . $banner) }}" class="img-thumbnail">
                                        </div>
                                    @endif
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

                <!-----==================== project banner ==========----------------------->


                <!-----==================== project Completed project section ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Complete project section</b></h4>
                            <hr>
                        </div>

                        <form id="project_intro_form" action="{{ url(route('project.complete')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $project = json_decode($details->projects);
                                $j = 0;
                            @endphp

                            <input type="hidden" name="page" value="project">

                            <div class="col-sm-12">

                                <div class="form-group mb-3">
                                    <div id="replace_key_add_more" style=""> @php $d = 1;
                                    if(!empty($project)) { foreach ($project as $row) { @endphp
                                        <div class="replace_key">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-11">
    
                                                        <div class="row">
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Insert Image:</label>
                                                                <input type="file" class="form-control"
                                                                    placeholder="Insert Image" name="image[]" value=""
                                                                    @if(empty($row->image)) required @endif>
                                                            </div>
    
                                                            @if (!empty($row->image))
                                                                <div class="form-group mb-3 mx-2 col-md-2">
                                                                        <div style="width: 100px;">
                                                                            <img src="{{ asset('storage/' . $row->image) }}" class="img-thumbnail">
                                                                        </div> 
                                                                        <input type="hidden" name="old_image{{ $j++ }}" value="{{ $row->image }}">   
                                                                </div>
                                                            @endif
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Insert Title:</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Insert Title" name="title[]" value="{{ $row->title }}"
                                                                    required>
                                                            </div>
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Select Date:</label>
                                                                <input type="date" class="form-control" placeholder="Insert Date"
                                                                    name="date[]" value="{{ $row->date }}" required>
                                                            </div>
    
                                                            <div class="form-group mb-3 mx-2 col-md-12">
                                                                <label>Insert Description:</label>
                                                                <textarea class="trumbowyg form-control" placeholder="Insert Description" name="description[]" rows="5" required>
                                                                    {{ $row->description }}
                                                                </textarea>
                                                            </div>
    
                                                        </div>
    
                                                    </div>
                                                    <div class="col-md-1"> @if($d == 1) <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key"></i> @else <i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i> @endif </div>
                                                </div>
                                            </div>
                                            </br>
                                        </div> @php $d++; } @endphp @php } else { @endphp
                                            <div class="form-group">
                                            <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
    
                                                        <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Insert Image:</label>
                                                            <input type="file" class="form-control"
                                                                placeholder="Insert Image" name="image[]" value=""
                                                                required>
                                                        </div>
                                                        <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Insert Title:</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Insert Title" name="title[]" value=""
                                                                required>
                                                        </div>
                                                        <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Select Date:</label>
                                                            <input type="date" class="form-control" placeholder="Insert Date"
                                                                name="date[]" value="" required>
                                                        </div>
                                                        <div class="form-group mb-3 mx-2 col-md-12">
                                                            <label>Insert Description:</label>
                                                            <textarea class="trumbowyg form-control" placeholder="Insert Description" name="description[]" rows="5" required></textarea>
                                                        </div>
    
                                                </div>
                                            </div>
                                            <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key"></i></div>
                                            </div>
                                            </br>
                                        </div> @php } @endphp </div>
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

                <!-----==================== project banner ==========----------------------->

                <!-----==================== project Certificate ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Certificate Section</b></h4>
                            <hr>
                        </div>

                        <form id="project_certificate_form" action="{{ url(route('project.certificate')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $certificate = json_decode($details->certificate);
                                $f = 0;
                                $p = 0;
                            @endphp

                            <input type="hidden" name="page" value="project">

                            <div class="col-sm-12">

                                <div class="form-group mb-3">
                                    <label for="Expert">Expert <span class="red">*</span></label>
                                    <div id="replace_key_add_more2" style=""> @php $d = 1;
                                    if(!empty($certificate)) { foreach ($certificate as $row) { @endphp
                                        <div class="replace_key">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-11">
    
                                                        <div class="row">
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Insert Image:</label>
                                                                <input type="file" class="form-control"
                                                                    placeholder="Insert Image" name="image[]" value=""
                                                                    @if(empty($row->image)) required @endif>
                                                            </div>
    
                                                            @if (!empty($row->image))
                                                                <div class="form-group mb-3 mx-2 col-md-2">
                                                                        <div style="width: 100px;">
                                                                            <img src="{{ asset('storage/' . $row->image) }}" class="img-thumbnail">
                                                                        </div> 
                                                                        <input type="hidden" name="old_image{{ $f++ }}" value="{{ $row->image }}">   
                                                                </div>
                                                            @endif
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Insert Title:</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Insert Title" name="title[]" value="{{ $row->title }}"
                                                                    required>
                                                            </div>
    
                                                            <div class="form-group mb-3 mx-2 col-md-3">
                                                                <label>Select a Pdf:</label>
                                                                <input type="file" class="form-control"
                                                                    placeholder="Insert pdf" name="pdf[]" accept=".pdf"
                                                                    @if(empty($row->pdf)) required @endif />

                                                                    @if (!empty($row->pdf))
                                                                        <div class="form-group mb-3 mx-2 col-md-2 mt-2">
                                                                                <div style="width: 100px;">
                                                                                    <a href="{{ asset('storage/' . $row->pdf) }}" target="_blank">View PDF</a>
                                                                                </div> 
                                                                                <input type="hidden" name="old_pdf{{ $p++ }}" value="{{ $row->pdf }}">   
                                                                        </div>
                                                                    @endif
                                                            </div>
    
    
                                                        </div>
    
                                                    </div>
                                                    <div class="col-md-1"> @if($d == 1) <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key2"></i> @else <i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i> @endif </div>
                                                </div>
                                            </div>
                                            </br>
                                        </div> @php $d++; } @endphp @php } else { @endphp
                                            <div class="form-group">
                                            <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
    
                                                    <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Insert Image:</label>
                                                            <input type="file" class="form-control"
                                                                placeholder="Insert image" name="image[]" value=""
                                                                required>
                                                        </div>
                                                        <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Insert Title:</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Insert Title" name="title[]" value=""
                                                                required>
                                                        </div>
                                                        <div class="form-group mb-3 mx-2 col-md-3">
                                                            <label>Select a Pdf:</label>
                                                            <input type="file" class="form-control"
                                                                placeholder="Insert pdf" name="pdf[]" accept=".pdf"
                                                                required />
                                                        </div>
    
                                                </div>
                                            </div>
                                            <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key2"></i></div>
                                            </div>
                                            </br>
                                        </div> @php } @endphp </div>
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
        </div>
        <!-- end card-box-->
    </div>
@endsection

@section('page.scripts')
    <script>
        $(document).ready(function() {
            initValidate('#project_certificate_form');
            initValidate('#project_intro_form');
            initValidate('#project_banner_form');

            initTrumbowyg('.trumbowyg');
        });

        $("#project_certificate_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#project_intro_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#project_banner_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        var responseHandler = function(response) {
            location.reload();
        }

        function remove_replace_key(_this) {
            _this.closest(".replace_key").remove();
        }

        var textareaIdCounter = 0;
        $("#add_replace_key").on("click", function() {
            textareaIdCounter++;

            var new_replace_key = `
        <div class="replace_key form-group">
            <div class="row">
                <div class="col-md-11">
                    <div class="row">
                        <div class="form-group mb-3 mx-2 col-md-3">
                            <label>Insert Image:</label>
                            <input type="file" class="form-control" placeholder="Insert Image" name="image[]" value="" required>
                        </div>
                        <div class="form-group mb-3 mx-2 col-md-3">
                            <label>Insert Title:</label>
                            <input type="text" class="form-control" placeholder="Insert Title" name="title[]" value="" required>
                        </div>
                        <div class="form-group mb-3 mx-2 col-md-3">
                            <label>Insert Date:</label>
                            <input type="date" class="form-control" placeholder="Insert Date" name="date[]" value="" required>
                        </div>
                        <div class="form-group mb-3 mx-2 col-md-12">
                            <label>Insert Description:</label>
                            <textarea id="trumbowyg_${textareaIdCounter}" class="trumbowyg form-control" placeholder="Insert Description" name="description[]" rows="5" required></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i></div>
            </div>
            </br>
        </div>
    `;

            $("#replace_key_add_more").append(new_replace_key);
            initTrumbowyg(`#trumbowyg_${textareaIdCounter}`);
        });


        $("#add_replace_key2").on("click", function() {

            var new_replace_key = `
                <div class="replace_key form-group">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="form-group mb-3 mx-2 col-md-3">
                                    <label>Insert Image:</label>
                                    <input type="file" placeholder="Insert Image" class="form-control" name="image[]" value=""
                                        required>
                                </div>
                                <div class="form-group mb-3 mx-2 col-md-3">
                                    <label>Insert Title:</label>
                                    <input type="text" placeholder="Insert Title" class="form-control" name="title[]" value=""
                                        required>
                                </div>
                                <div class="form-group mb-3 mx-2 col-md-3">
                                    <label>Select a Pdf:</label>
                                    <input type="file" class="form-control" placeholder="Insert pdf" name="pdf[]"
                                        accept=".pdf" required />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i></div>
                    </div>
                    </br>
                </div>
            `;

            $("#replace_key_add_more2").append(new_replace_key);
        });
    </script>

@endsection
