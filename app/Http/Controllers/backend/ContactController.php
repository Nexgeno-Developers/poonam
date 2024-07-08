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
            'Banner' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $file = $request->file('Banner');
        $bannerPath = $file->store('assets/banner/', 'public');

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'banners' => $bannerPath,
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Contact Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function contact_all_contacts(Request $request){

        $validator = Validator::make($request->all(), [
            'address_1' => 'required',
            'address_2' => 'required',
            'url' => 'required',
            'email' => 'required',
            'phone_1' => 'required',
            'phone_2' => 'required',
            'fb_url' => 'required',
            'linkedin_url' => 'required',
            'twitter_url' => 'required',
            'inst_url' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $contacts = [
            'address_1' => $request->address_1,
            'address_2' => $request->address_2,
            'url' => $request->url,
            'email' => $request->email,
            'phone_1' => $request->phone_1,
            'phone_2' => $request->phone_2,
            'fb_url' => $request->fb_url,
            'linkedin_url' => $request->linkedin_url,
            'twitter_url' => $request->twitter_url,
            'inst_url' => $request->inst_url
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'contacts' => json_encode($contacts),
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Contacts Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }


}
