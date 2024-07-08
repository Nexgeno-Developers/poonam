@extends('backend.layouts.app')

@section('page.name', 'About Page')

@section('page.content')
    <div class="col-12">
        <div class="widget-inline">
            <div class="p-0">

                @php
                    $details = DB::table('pages')->where('page_name', 'about')->first();
                @endphp

                <!-----==================== about banner ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Banner Section</b></h4>
                            <hr>
                        </div>

                        <form id="about_banner_form" action="{{ url(route('about.banner')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $banner = $details->banners;
                            @endphp

                            <input type="hidden" name="page" value="about">

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

                <!-----==================== about banner ==========----------------------->


                <!-----==================== about intro ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Intro Section</b></h4>
                            <hr>
                        </div>

                        <form id="about_intro_form" action="{{ url(route('about.intro')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $intro = json_decode($details->introduction);
                            @endphp

                            <input type="hidden" name="page" value="about">

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>Intro description <span class="red">*</span></label>
                                        <textarea class="trumbowyg form-control" name="intro" rows="5" required>{{ isset($intro->intro) ? $intro->intro : '' }}</textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group mb-3">
                                        <label>partner description <span class="red">*</span></label>
                                        <textarea class="trumbowyg form-control" name="partner" rows="5" required>{{ isset($intro->partner) ? $intro->partner : '' }}</textarea>
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

                <!-----==================== about banner ends==========----------------------->

                <!-----==================== about Steps Section ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Steps Section</b></h4>
                            <hr>
                        </div>

                        <form id="about_marque_form" action="{{ url(route('about.steps')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $Steps = json_decode($details->steps);
                                $j = 0;
                                $m = 0;
                            @endphp

                            <input type="hidden" name="page" value="about">

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 1 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[0]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[0]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[0]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[0]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 1 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[0]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[0]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[0]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[0]->mobile_image }}">
                                    </div>
                                @endif


                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 1 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[0]) ? $Steps[0]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 1 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[0]) ? $Steps[0]->description : '' }}
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 2 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[1]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[1]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[1]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[1]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 2 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[1]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[1]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[1]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[1]->mobile_image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 2 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[1]) ? $Steps[1]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 2 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[1]) ? $Steps[1]->description : '' }}
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 3 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[2]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[2]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[2]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[2]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 3 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[2]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[2]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[2]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[2]->mobile_image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 3 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[2]) ? $Steps[2]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 3 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[2]) ? $Steps[2]->description : '' }}
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 4 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[3]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[3]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[3]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[3]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 4 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[3]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[3]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[3]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[3]->mobile_image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 4 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[3]) ? $Steps[3]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 4 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[3]) ? $Steps[3]->description : '' }}
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 5 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[4]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[4]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[4]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[4]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 5 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[4]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[4]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[4]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[4]->mobile_image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 5 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[4]) ? $Steps[4]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 5 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[4]) ? $Steps[4]->description : '' }}
                                        </textarea>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon 6 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image[]"
                                            @if (!isset($Steps[5]->image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[5]->image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[5]->image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image{{ $j++ }}"
                                            value="{{ $Steps[5]->image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Icon Mobile 6 <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="image_mobile[]"
                                            @if (!isset($Steps[5]->mobile_image)) required @endif>
                                    </div>
                                </div>
                                @if (isset($Steps[5]->mobile_image))
                                    <div class="form-group mb-3 mx-2 col-sm-2">
                                        <div style="width: 100px;">
                                            <img src="{{ asset('storage/' . $Steps[5]->mobile_image) }}" class="img-thumbnail">
                                        </div>
                                        <input type="hidden" name="old_image_mobile{{ $m++ }}"
                                            value="{{ $Steps[5]->mobile_image }}">
                                    </div>
                                @endif

                                <div class="col-sm-4">
                                    <div class="form-group mb-3">
                                        <label>Title 6 <span class="red">*</span> </label>
                                        <input class="form-control" type="text" name="title[]"
                                            value="{{ isset($Steps[5]) ? $Steps[5]->title : '' }}">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Description 6 <span class="red">*</span> </label>
                                        <textarea class="trumbowyg form-control" name="description[]" rows="5" required>
                                            {{ isset($Steps[5]) ? $Steps[5]->description : '' }}
                                        </textarea>
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

                <!-----==================== about Steps Section ends ==========----------------------->

                <!-----==================== about Team work section ==========----------------------->

                <div class="card m-3">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Team Work Section</b></h4>
                            <hr>
                        </div>

                        <form id="about_teamwork_form" action="{{ url(route('about.teamwork')) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf

                            @php
                                $teamwork = json_decode($details->teams);
                                $team_img = $details->team_img;
                                if(!empty($teamwork)){
                                    $Expert = $teamwork->expert;
                                    $Designers = $teamwork->designers;
                                } else {
                                    $Expert = '';
                                    $Designers = '';
                                }

                            @endphp

                            <input type="hidden" name="page" value="about">

                            <div class="col-sm-12">

                                <div class="form-group mb-3">
                                    <label for="Expert">Expert <span class="red">*</span></label>
                                    <div id="replace_key_add_more" style=""> @php $i = 1;
                                    if(!empty($Expert)) { foreach ($Expert as $row) { @endphp
                                        <div class="replace_key">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-11">
    
                                                        <div class="row">
    
                                                            <div class="col col-sm-12">
                                                                <input required class="form-control" name="expert[]"
                                                                    placeholder="Enter Expert Name here..." value="{{ $row }}">
                                                            </div>
    
                                                        </div>
    
                                                    </div>
                                                    <div class="col-md-1"> @if($i == 1) <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key"></i> @else <i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i> @endif </div>
                                                </div>
                                            </div>
                                            </br>
                                        </div> @php $i++; } @endphp @php } else { @endphp
                                            <div class="form-group">
                                            <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
    
                                                    <div class="col col-sm-12">
                                                        <input required class="form-control" name="expert[]"
                                                            placeholder="Enter Expert Name here...">
                                                    </div>
    
                                                </div>
                                            </div>
                                            <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key"></i></div>
                                            </div>
                                            </br>
                                        </div> @php } @endphp </div>
                                </div>
    
    
                            </div>


                            <div class="col-sm-12">

                                <div class="form-group mb-3">
                                    <label for="Expert">Designers <span class="red">*</span></label>
                                    <div id="replace_key_add_more2" style=""> @php $d = 1;
                                    if(!empty($Designers)) { foreach ($Designers as $row) { @endphp
                                        <div class="replace_key">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-11">
    
                                                        <div class="row">
    
                                                            <div class="col col-sm-12">
                                                                <input required class="form-control" name="designers[]"
                                                                    placeholder="Enter Designers Name here..." value="{{ $row }}">
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
    
                                                    <div class="col col-sm-12">
                                                        <input class="form-control" required name="designers[]"
                                                            placeholder="Enter Designers Name here...">
                                                    </div>
    
                                                </div>
                                            </div>
                                            <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_replace_key2"></i></div>
                                            </div>
                                            </br>
                                        </div> @php } @endphp </div>
                                </div>
    
    
                            </div>

                                <div class="form-group mb-3">
                                    <div class="col-sm-9">
                                        <div class="form-group mb-3">
                                            <label>Team Work Image <span class="red">*</span> <span
                                                    class="font-size11">(Max
                                                    file
                                                    size 80kb - 1125*196)</span></label>
                                            <input class="form-control" type="file" id="img"
                                                name="img" @if(empty($team_img)) required @endif>

                                            <div class="col-sm-3 mt-2">
                                                @if (!empty($team_img))
                                                    <div style="width: 300px;">
                                                        <img src="{{ asset('storage/' . $team_img) }}" class="img-thumbnail">
                                                    </div>
                                                    <input type="hidden" name="old_img" value="{{ $team_img }}">
                                                @endif
                                            </div>

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
            </div>

            <!-----==================== About Team Work Ends ==========----------------------->


            <!-----==================== About Mission & Vision Section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Mission & Vision Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_mnv_section_form" action="{{ url(route('about.mnv_section')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $mission = json_decode($details->mission_vision);
                            if(isset($mission->img)){
                                $mission_img = $mission->img;
                            } else {
                                $mission_img = '';
                            }
                            
                        @endphp

                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="form-group mb-3">
                                <label>Mission & Vision Description <span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" name="mission" rows="5" required>
                                    {{ isset($mission->mission) ? $mission->mission : '' }}
                                </textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label>Mission & Vision Image <span class="red">*</span> <span class="font-size11">(Max
                                        file
                                        size 80kb - 1125*196)</span></label>
                                <input class="form-control" type="file" id="image" name="image" @if(empty($mission_img)) required @endif>
                            </div>

                            <div class="col-sm-3 mt-2">
                                @if (!empty($mission_img))
                                    <div style="width: 300px;">
                                        <img src="{{ asset('storage/' . $mission_img) }}" class="img-thumbnail">
                                    </div>
                                    <input type="hidden" name="old_img" value="{{ $mission_img }}">
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

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Our Values Section</b></h4>
                        <hr>
                    </div>

                    <form id="about_our_values_form" action="{{ url(route('about.our_values')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $Values= json_decode($details->our_values);
                            if(isset($Values->img)){
                                $Values_img = $Values->img;
                            } else {
                                $Values_img = '';
                            }
                        @endphp

                        <input type="hidden" name="page" value="about">

                        <div class="row">
                            <div class="form-group mb-3">
                                <label>Description 1 <span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" name="values" rows="5" required>
                                    {{ isset($Values->values) ? $Values->values : '' }}
                                </textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label>Description 2 <span class="red">*</span></label>
                                <textarea class="trumbowyg form-control" name="values2" rows="5" required>
                                    {{ isset($Values->values2) ? $Values->values2 : '' }}
                                </textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label>Our Values Image <span class="red">*</span> <span class="font-size11">(Max file
                                        size 80kb - 1125*196)</span></label>
                                <input class="form-control" type="file" id="our_values_Image"
                                    name="image" @if(empty($Values_img)) required @endif>
                            </div>

                            <div class="col-sm-3 mt-2">
                                @if (!empty($Values_img))
                                    <div style="width: 300px;">
                                        <img src="{{ asset('storage/' . $Values_img) }}" class="img-thumbnail">
                                    </div>
                                    <input type="hidden" name="old_img" value="{{ $Values_img }}">
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

            <!-----==================== about Mission & Vision Ends ==========----------------------->

        </div>
    </div>
    <!-- end card-box-->
    </div>
@endsection

@section('page.scripts')
    <script>
        $(document).ready(function() {
            initValidate('#about_our_values_form');
            initValidate('#about_mnv_section_form');
            initValidate('#about_teamwork_form');
            initValidate('#about_marque_form');
            initValidate('#about_intro_form');
            initValidate('#about_banner_form');

            initTrumbowyg('.trumbowyg');
        });

        $("#about_our_values_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#about_mnv_section_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#about_teamwork_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#about_marque_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#about_intro_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        $("#about_banner_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });

        var responseHandler = function(response) {
            location.reload();
        }

        function remove_replace_key(_this) {
            _this.closest(".replace_key").remove();
        }

        $("#add_replace_key").on("click", function() {

            var new_replace_key = `
                <div class="replace_key form-group">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col col-sm-12">
                                    <input class="form-control" name="expert[]"
                                        placeholder="Enter Experts Name here..." required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i></div>
                    </div>
                    </br>
                </div>
            `;

            $("#replace_key_add_more").append(new_replace_key);

        });
        $("#add_replace_key2").on("click", function() {

            var new_replace_key2 = `
                <div class="replace_key form-group">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col col-sm-12">
                                    <input class="form-control" name="designers[]" placeholder="Enter Designers Name here..." required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_replace_key($(this));"></i></div>
                    </div>
                    </br>
                </div>
            `;

            $("#replace_key_add_more2").append(new_replace_key2);

        });
    </script>
@endsection
