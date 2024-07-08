@extends('backend.layouts.app')

@section('page.name', 'Our Business Page')

@section('page.content')
    <div class="col-12">
        <div class="card widget-inline">
            <div class="card-body p-0">

                @php
                    $details = DB::table('pages')->where('page_name', 'business')->first();
                @endphp

                <!-----==================== business banner ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Banner Section</b></h4>
                            <hr>
                        </div>

                        <form id="business_banner_form" action="{{ url(route('business.banner')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $banner = $details->banners;
                            @endphp

                            <input type="hidden" name="page" value="business">

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
                                        <div style="width: 150px;">
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

                <!-----==================== business banner Ends ==========----------------------->


                <!-----==================== Main section (business list) ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Main section (business list)</b></h4>
                            <hr>
                        </div>

                        <form id="business_main_list_form" action="{{ url(route('business.businesslist')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $list = json_decode($details->steps);
                                $j = 0;
                            @endphp

                            <input type="hidden" name="page" value="business">

                            <div class="col-sm-12">

                                <div class="form-group mb-3">
                                    <div id="replace_key_add_more" style=""> @php $d = 1;
                                    if(!empty($list)) { foreach ($list as $row) { @endphp
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

                                                            <div class="col col-sm-6">
                                                                <div class="form-group mb-3">
                                                                    <label>Text 1 <span class="red">*</span> </label>
                                                                    <input required class="form-control" name="text1[]"
                                                                        placeholder="Enter Text 1 here" value="{{ $row->text1 }}">
                                                                </div>
                                                            </div>
                                                            <div class="col col-sm-6">
                                                                <div class="form-group mb-3">
                                                                    <label>Text 2 <span class="red">*</span> </label>
                                                                    <input required class="form-control" name="text2[]"
                                                                        placeholder="Enter Text 2 here" value="{{ $row->text2 }}">
                                                                </div>
                                                            </div>
                                                            <div class="col col-sm-6">
                                                                <div class="form-group mb-3">
                                                                    <label>Text 3 <span class="red">*</span> </label>
                                                                    <input required class="form-control" name="text3[]"
                                                                        placeholder="Enter Text 3 here" value="{{ $row->text3 }}">
                                                                </div>
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

                                                        <div class="col col-sm-6">
                                                            <div class="form-group mb-3">
                                                                <label>Text 1 <span class="red">*</span> </label>
                                                                <input required class="form-control" name="text1[]"
                                                                    placeholder="Enter Text 1 here" value="">
                                                            </div>
                                                        </div>
                                                        <div class="col col-sm-6">
                                                            <div class="form-group mb-3">
                                                                <label>Text 2 <span class="red">*</span> </label>
                                                                <input required class="form-control" name="text2[]"
                                                                    placeholder="Enter Text 2 here" value="">
                                                            </div>
                                                        </div>
                                                        <div class="col col-sm-6">
                                                            <div class="form-group mb-3">
                                                                <label>Text 3 <span class="red">*</span> </label>
                                                                <input required class="form-control" name="text3[]"
                                                                    placeholder="Enter Text 3 here" value="">
                                                            </div>
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

                <!-----==================== business Team Work Ends ==========----------------------->


            </div>
        </div>
        <!-- end card-box-->
    </div>
@endsection

@section('page.scripts')
    <script>
        $(document).ready(function() {
            initValidate('#business_main_list_form');
            initValidate('#business_banner_form');

            initTrumbowyg('.trumbowyg');
        });

        $("#business_main_list_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#business_banner_form").submit(function(e) {
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

                                <div class="col col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Image <span class="red">*</span> <span
                                                class="font-size11">(Max file size 80kb -
                                                1125*196)</span></label>
                                        <input class="form-control" required type="file" id="image"
                                            name="image[]">
                                    </div>
                                </div>
                                <div class="col col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Title <span class="red">*</span> </label>
                                        <input required class="form-control" name="title[]"
                                            placeholder="Enter Title here">
                                    </div>
                                </div>
                                <div class="col col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Text 1 <span class="red">*</span> </label>
                                        <input required class="form-control" name="text1[]"
                                            placeholder="Enter Text 1 here" value="">
                                    </div>
                                </div>
                                <div class="col col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Text 2 <span class="red">*</span> </label>
                                        <input required class="form-control" name="text2[]"
                                            placeholder="Enter Text 2 here" value="">
                                    </div>
                                </div>
                                <div class="col col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Text 3 <span class="red">*</span> </label>
                                        <input required class="form-control" name="text3[]"
                                            placeholder="Enter Text 3 here" value="">
                                    </div>
                                </div>
                                <div class="col col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Insert Description <span class="red">*</span></label>
                                        <textarea id="trumbowyg_${textareaIdCounter}" placeholder="Enter Description here" class="trumbowyg form-control" name="description[]" rows="5"
                                            required></textarea>
                                    </div>
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
    </script>

@endsection
