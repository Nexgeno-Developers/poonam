@extends('backend.layouts.app')

@section('page.name', 'Career Page')

@section('page.content')
<div class="col-12">
    <div class="card widget-inline">
        <div class="card-body p-0">

            @php
                $details = DB::table('pages')->where('page_name', 'career')->first();
            @endphp

            <!-----==================== career banner ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="career_banner_form" action="{{ url(route('career.banner')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $banner = $details->banners;
                        @endphp

                        <input type="hidden" name="page" value="career">

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

            <!-----==================== career banner ==========----------------------->


            <!-----==================== career intro section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Introduction section</b></h4>
                        <hr>
                    </div>

                    <form id="career_intro_form" action="{{ url(route('career.intro')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $intro = json_decode($details->introduction);

                            if(!empty($intro)){
                                $img = $intro->image;
                                $title = $intro->title;
                                $title2 = $intro->title2 ?? '';
                            } else {
                                $img = '';
                                $title = '';
                                $title2 = '';
                            }

                        @endphp

                        <input type="hidden" name="page" value="career">

                        <div class="row">
                            <div class="col-sm-5">
                                <div class="form-group mb-3">
                                    <label>Intro Image <span class="red">*</span> <span class="font-size11">(Max file
                                            size 80kb - 1125*196)</span></label>
                                    <input class="form-control" type="file" id="image" name="image" @if(empty($img)) required @endif>
                                </div>
                            </div>

                            <div class="col-sm-2">
                                @if (!empty($img))
                                    <div style="width: 150px;">
                                        <img src="{{ asset('storage/' . $img) }}" class="img-thumbnail">
                                    </div>
                                    <input type="hidden" value="{{ $img }}" name="old_img">
                                @endif
                            </div>

                            <div class="col-sm-5">
                                <div class="form-group mb-3">
                                    <label>Insert Heading<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Heading" name="title"
                                        value="{{ $title }}" required>
                                </div>
                            </div>

                            <div class="col-sm-5">
                                <div class="form-group mb-3">
                                    <label>Insert Heading 2<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Heading" name="title2"
                                        value="{{ $title2 }}" required>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-1" style="float: right;">
                            <div class="form-group d-grid mb-3 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                </div>
            </div>




            </form>

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
$(document).ready(function() {
    initValidate('#career_intro_form');
    initValidate('#career_banner_form');

    initTrumbowyg('.trumbowyg');
});

$("#career_intro_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

$("#career_banner_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>
@endsection