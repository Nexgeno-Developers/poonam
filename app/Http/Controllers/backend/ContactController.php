<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{
    public function index() {
        return view('backend.pages.contact.index');
    }

    public function contact_banner(Request $request){

        $validator = Validator::make($request->all(), [
            'banner' => 'nullable|image|mimes:webp,jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
        // Get the existing banner path from the database
        $existingBanner = DB::table('pages')->where('page_name', $request->page)->value('banner_section');

        // Check if a new banner is uploaded
        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $bannerPath = $file->store('assets/banner/', 'public');
        } else {
            $bannerPath = $existingBanner;
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'banner_section' => $bannerPath,
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Contact Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'No Changes Made',
            ];
        }

        return response()->json($response);
    }

    public function contact_all_contacts(Request $request) {
        $validator = Validator::make($request->all(), [
            'address_1' => 'required',
            'wa_url' => 'required',
            'email' => 'required',
            'phone_1' => 'required',
            'fb_url' => 'required',
            'linkedin_url' => 'required',
            'twitter_url' => 'required',
            'inst_url' => 'required',
            'map_url' => 'required',
            'center_image' => 'nullable|file|max:80000|mimes:jpeg,png,webp,jpg',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        // Get the existing contact section from the database
        $existingBanner = DB::table('pages')->where('page_name', $request->page)->first();
        
        if (!$existingBanner) {
            return response()->json([
                'status' => false,
                'notification' => 'Page not found!'
            ], 404);
        }
    
        $contact_sec_img = json_decode($existingBanner->contact_section);
        $image = $contact_sec_img->center_image ?? null;
    
        // Check if a new center image is uploaded
        if ($request->hasFile('center_image')) {
            $file = $request->file('center_image');
            $bannerPath = $file->store('assets/contact/', 'public');
        } else {
            $bannerPath = $image;
        }
    
        $contacts = [
            'address_1' => $request->address_1,
            'email' => $request->email,
            'wa_url' => $request->wa_url,
            'phone_1' => $request->phone_1,
            'fb_url' => $request->fb_url,
            'center_image' => $bannerPath,
            'linkedin_url' => $request->linkedin_url,
            'twitter_url' => $request->twitter_url,
            'inst_url' => $request->inst_url,
            'map_url' => $request->map_url
        ];
    
        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'contact_section' => json_encode($contacts),
        ]);
    
        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Contacts saved successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                // 'notification' => 'Something went wrong!',
                'notification' => 'No Changes Made',
            ];
        }
    
        return response()->json($response);
    }
    


}
