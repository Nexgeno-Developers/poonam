<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;


use Illuminate\Support\Facades\Mail;


class IndexController extends Controller
{
    public function index() {
        
        $homeDetails = DB::table('pages')->where('page_name', 'home')->first();
        $banners = json_decode($homeDetails->banner_section, true);
        $introduction = json_decode($homeDetails->introduction);
        $gallery_section1 = json_decode($homeDetails->gallery_section);
        $gallery_section2 = json_decode($homeDetails->gallery_section2);
        
        return view('frontend.pages.home.index', compact('homeDetails','introduction', 'banners', 'gallery_section1', 'gallery_section2'));
    }
    public function about_Us() {
        
        $aboutDetails = DB::table('pages')->where('page_name', 'about')->first();

        $banner = $aboutDetails->banner_section;
        $journey_section = json_decode($aboutDetails->journey_section);
        $about_section = json_decode($aboutDetails->about_section);
        $vision_section = json_decode($aboutDetails->vision_section);
        $design_section = json_decode($aboutDetails->design_section);
        
        return view('frontend.pages.about.about', compact('aboutDetails','journey_section', 'banner', 'about_section', 'vision_section', 'design_section'));
    }
    
//--------------=============================== Pages ================================------------------------------

    public function contact_Us(){
        $contactDetails = DB::table('pages')->where('page_name', 'contact')->first();

        $banner = $contactDetails->banner_section;
        $contactS = json_decode($contactDetails->contact_section);

        return view('frontend.pages.contactus.contactus', compact('contactDetails','banner','contactS'));
    }

    public function services(){

        return view('frontend.pages.services.services');
    }
    public function news_media() {
        
        $news_mediaDetails = DB::table('pages')->where('page_name', 'newsandmedia')->first();
        $banner = $news_mediaDetails->banner_section;
        $image_section = json_decode($news_mediaDetails->image_section);
        
        return view('frontend.pages.newsandmedia.news-and-media', compact('news_mediaDetails','image_section', 'banner'));
    }

    public function gallery(){

        return view('frontend.pages.gallery.gallery');
    }
    public function projects() {

        $projectDetails = DB::table('pages')->where('page_name', 'project')->first();
    
        $projects = json_decode($projectDetails->projects, true);

        $certificates = json_decode($projectDetails->certificate, true);
        // Pass the data to the view
        return view('frontend.pages.projects.projects-and-accreditations', compact('projectDetails', 'projects', 'certificates'));
    }
    
    public function products(){
        $productsDetails = DB::table('pages')->where('page_name', 'products')->first();
        $radio = json_decode($productsDetails->radio_comission, true);
        $oilnspill = json_decode($productsDetails->oil_spill, true);
        $aids_navigation = json_decode($productsDetails->aids_navigation, true);
        
        return view('frontend.pages.products.products', compact('productsDetails', 'radio', 'oilnspill', 'aids_navigation'));
    }

    public function our_Business(){

        $businessDetails = DB::table('pages')->where('page_name', 'business')->first();
        $businessSteps = json_decode($businessDetails->steps, true);

        return view('frontend.pages.ourbusiness.our-business', compact('businessDetails','businessSteps'));
    }

    public function career(){

        $careerDetails = DB::table('pages')->where('page_name', 'career')->first();
        $introduction = json_decode($careerDetails->introduction, true);
        return view('frontend.pages.career.careers', compact('careerDetails','introduction'));
    }


    
    public function service_detail($slug){
        // var_dump($slug);
        $service_detail = DB::table('services')->where('slug', $slug)->where('status', 1)->get()->first();
        $page_name = $service_detail->page_name;
        $banner = $service_detail->banner;
        $service_image = $service_detail->service_image;
        $title = $service_detail->title;
        $short_description = $service_detail->short_description;

        $gallery_image = json_decode($service_detail->gallery_image, true);

        return view('frontend.pages.services.services_detail', compact('service_detail','service_image','gallery_image','slug','page_name','banner','title','short_description'));
    }

//--------------=============================== Pages ================================------------------------------



//--------------=============================== other ================================------------------------------

public function not_found(){

    return view('frontend.pages.404.index');
}
public function thank_you(){

    return view('frontend.pages.thankyou.index');
}

public function cookie_policy(){

    return view('frontend.pages.cookiePolicy.index');
}

//--------------=============================== other ================================------------------------------



}