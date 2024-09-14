@extends('backend.layouts.app')

@section('page.name', 'Contact Page')

@section('page.content')
<div class="col-11 px-0">
    <div class="card widget-inline">
        <div class="card-body p-0">

            @php
                $details = DB::table('pages')->where('page_name', 'contact')->first();
            @endphp

            <!-----==================== contact banner ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Banner Section</b></h4>
                        <hr>
                    </div>

                    <form id="contact_banner_form" action="{{ url(route('contact.banner')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $banner = $details->banner_section;
                        @endphp

                        <input type="hidden" name="page" value="contact">

                        <div class="row">
                            <div class="col-sm-9">
                                <div class="form-group mb-3">
                                    <label>Banner <span class="red">*</span> <span class="font-size11">(Max file
                                            size 80kb - 1125*196)</span></label>
                                    <input class="form-control" type="file" id="image" name="banner" @if(empty($banner))
                                    required @endif>
                                </div>
                            </div>
                            <div class="col-sm-3 mt-2">
                                @if (!empty($banner))
                                    <div style="width: 200px;">
                                        <img src="{{ asset('storage/' . $banner) }}" class="img-thumbnail">
                                    </div>
                                @endif
                            </div>
                        </div>

                        <div class="col-sm-1 mt-4" style="float: right;">
                            <div class="form-group d-grid mb-1 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <!-----==================== contact banner ==========----------------------->


            <!-----==================== contact section ==========----------------------->

            <div class="card m-3">
                <div class="card-body">
                    <div class="col-md-12">
                        <h4 class="header-title"><b>Contact section</b></h4>
                        <hr>
                    </div>

                    <form id="contact_intro_form" action="{{ url(route('contact.all_contacts')) }}" method="post"
                        enctype="multipart/form-data">
                        @csrf

                        @php
                            $Contacts = json_decode($details->contact_section);
                        @endphp
                        
                        <input type="hidden" name="page" value="contact">
                        

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Address 1<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Whatsapp URL" name="address_1"
                                        value="{{ isset($Contacts->address_1) ? $Contacts->address_1 : '' }}" required>                            
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Email<span class="red">*</span></label>
                                    <input type="email" class="form-control" placeholder="Insert Email" name="email"
                                        value="{{ isset($Contacts->email) ? $Contacts->email : '' }}" required>
                                </div>
                            </div> 
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Phone 1<span class="red">*</span><span class="font-size11">(Don't include +91)</span></label>
                                    <input type="number" class="form-control" placeholder="Insert Phone no. (Don't include +91)" name="phone_1"
                                        value="{{ isset($Contacts->phone_1) ? $Contacts->phone_1 : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Whatsapp URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Whatsapp URL" name="wa_url"
                                        value="{{ isset($Contacts->wa_url) ? $Contacts->wa_url : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Facebook URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Facebook URL" name="fb_url"
                                        value="{{ isset($Contacts->fb_url) ? $Contacts->fb_url : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>LinkedIn URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert LinkedIn URL" name="linkedin_url"
                                        value="{{ isset($Contacts->linkedin_url) ? $Contacts->linkedin_url : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>YouTube URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert YouTube URL" name="twitter_url"
                                        value="{{ isset($Contacts->twitter_url) ? $Contacts->twitter_url : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Instagram URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Instagram URL" name="inst_url"
                                        value="{{ isset($Contacts->inst_url) ? $Contacts->inst_url : '' }}" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Map URL<span class="red">*</span></label>
                                    <input type="text" class="form-control" placeholder="Insert Map URL" name="map_url"
                                        value="{{ isset($Contacts->map_url) ? $Contacts->map_url : '' }}" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-9">
                                    <div class="form-group mb-3">
                                        <label>Center Image <span class="red">*</span> <span class="font-size11">(Max file
                                                size 80kb - 1125*196)</span></label>
                                        <input class="form-control" type="file" id="image" name="center_image" @if(empty($banner))
                                        required @endif>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    @if (!empty($Contacts->center_image))
                                        <div style="width: 150px;">
                                            <img src="{{ asset('storage/' . $Contacts->center_image) }}" class="img-thumbnail">
                                        </div>
                                    @endif
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-1 mt-4" style="float: right;">
                            <div class="form-group d-grid mb-0 text-end">
                                <button type="submit" class="btn btn-block btn-primary">Save</button>
                            </div>
                        </div>

                </div>
            </div>




            </form>

        </div>
    </div>

    <!-----==================== contact intro section ends  ==========----------------------->


</div>
</div>
<!-- end card-box-->
</div>
@endsection

@section('page.scripts')
<script>
$(document).ready(function() {
    initValidate('#contact_intro_form');
    initValidate('#contact_banner_form');

    initTrumbowyg('.trumbowyg');
});

$("#contact_intro_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

$("#contact_banner_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>
@endsection