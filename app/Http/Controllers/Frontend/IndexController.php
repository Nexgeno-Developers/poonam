<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
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


    public function contact_Save(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:500',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validated->errors()->all()
            ], 200);
        }

        $data = [
            'sender' => ['name' => env('MAIL_FROM_NAME'), 'email' => env('MAIL_FROM_ADDRESS')],
            'to' => [['email' => 'umair.makent@gmail.com', 'name' => env('MAIL_FROM_NAME')]],
            'subject' => 'New Contact Form Submission',
            'htmlContent' => "
                <h2>Contact Form Submission</h2>
                <p><b>Name:</b> {$request->name}</p>
                <p><b>Email:</b> {$request->email}</p>
                <p><b>Subject:</b> {$request->subject}</p>
                <p><b>Message:</b> {$request->message}</p>
            ",
        ];

        $apiKey = env('BREVO_API_KEY');

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'api-key' => $apiKey,
        ])->post('https://api.brevo.com/v3/smtp/email', $data);

        if ($response->successful()) {
            return response()->json([
                'status' => true,
                'notification' => 'Thank you for contacting Poonam Shah! Your query has been received and our concern team will reach out to you within 24hr.',
            ]);
        } else {
            return response()->json([
                'status' => false,
                'notification' => 'Error submitting form. Please try again later.',
            ]);
        }
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
        // var_dump($slug);
        $gallery = DB::table('gallery')->where('status', 1)->get();

        return view('frontend.pages.gallery.gallery', compact('gallery'));
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
        $short_description2 = $service_detail->short_description2;

        $gallery_image = json_decode($service_detail->gallery_image, true);

        return view('frontend.pages.services.services_detail', compact('service_detail','service_image','gallery_image','slug','page_name','banner','title','short_description','short_description2'));
    }
    
    public function gallery_detail($slug){
        // var_dump($slug);
        $gallery_detail = DB::table('gallery')->where('slug', $slug)->where('status', 1)->get()->first();
        $page_name = $gallery_detail->page_name;
        $banner = $gallery_detail->banner;
        $thum_image = $gallery_detail->thum_image;
        $title = $gallery_detail->title;
        $short_description = $gallery_detail->short_description;
        $image_description = json_decode($gallery_detail->image_description, true);
        $images = json_decode($gallery_detail->images, true);
        $videos = json_decode($gallery_detail->videos, true);

        return view('frontend.pages.gallery.gallery_detail', compact('gallery_detail','page_name','banner','slug','thum_image','title','short_description','image_description','images','videos'));
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