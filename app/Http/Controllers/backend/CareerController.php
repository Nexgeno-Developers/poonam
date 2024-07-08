<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CareerController extends Controller
{
    public function index() {
        return view('backend.pages.career.index');
    }

    public function career_banner(Request $request){

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
                'notification' => 'Career Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function career_intro(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'title2' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        if($request->has('image')){
            $file = $request->file('image');
            $ImagePath = $file->store('assets/banner/', 'public');
        } else {
            $ImagePath = $request->old_img;
        }
        $title =  $request->title;
        $title2 =  $request->title2;

        $intro = [
            'image' => $ImagePath,
            'title' => $title,
            'title2' => $title2
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'introduction' => $intro,
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Career Intro Save successfully!',
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
