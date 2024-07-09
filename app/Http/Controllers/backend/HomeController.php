<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index() {
        return view('backend.pages.home.index');
    }

    public function home_banner(Request $request)
    {
        // Validate request inputs
        $validator = Validator::make($request->all(), [
            'banner_text.*' => 'required',
            'banner.*' => 'required|file|max:80000|mimes:jpeg,png,jpg',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Store new banner files
        $newBanners = [];
        foreach ($request->file('banner') as $index => $file) {
            $bannerPath = $file->store('assets/banner/', 'public');
            $newBanners[] = [
                'text' => $request->banner_text[$index],
                'image' => $bannerPath,
            ];
        }

        // Retrieve existing banners from the database
        $existingBanners = DB::table('pages')->where('page_name', 'home')->value('banner_section');

        if ($existingBanners !== null && !empty($existingBanners)) {
            $existingBanners = json_decode($existingBanners, true);

            // Merge new banners into existing banners
            foreach ($newBanners as $banner) {
                $existingBanners[] = $banner;
            }

            $banners = $existingBanners;
        } else {
            $banners = $newBanners;
        }

        // Update or insert banners into the database
        $result = DB::table('pages')->updateOrInsert(
            ['page_name' => $request->page],
            ['banner_section' => json_encode($banners)]
        );

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Home Banners saved successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Something went wrong!',
            ];
        }

        return response()->json($response);
    }

    public function home_intro(Request $request){

        $validator = Validator::make($request->all(), [
            'intro' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }   

        $intro = $request->intro;

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'introduction' => $intro,
        ]);

        if($result){
            $response = [
                'status' => true,
                'notification' => 'Home Intro Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }

    public function home_marque(Request $request){

        $validator = Validator::make($request->all(), [
            'marque' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
        
        $marque = $request->marque;

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'marque' => json_encode($marque),
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Home Marque Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }

    public function home_business(Request $request){

        $validator = Validator::make($request->all(), [
            'icon' => 'required',
            'icon_name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // // Storing new icons
        // $newIcons = [];
        // if($request->has('icon')){
        //     foreach ($request->file('icon') as $index => $file) {
        //         $iconsPath = $file->store('assets/icons/', 'public');
        //         $newIcons[$index] = $iconsPath;
        //     }
        // }


        // $icon_name = $request->icon_name;
        // $icon = [];

        // // Assigning new or old icons
        // foreach ($icon_name as $key => $name) {
        //     if (isset($newIcons[$key])) {
        //         $icon[$key] = $newIcons[$key];
        //     } else {
        //         $old = "old_icon$key";
        //         $icon[$key] = $request->$old ?? null;
        //     }
        // }

        $icon_name = $request->icon_name;
        $icon = $request->icon;

        $business = [];

        // Creating the business array
        for ($i = 0; $i < count($icon_name); $i++) {
            $business[$i] = [
                'icon' => $icon[$i],
                'name' => $icon_name[$i]
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'business' => json_encode($business),
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Home Business Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);

    }

    public function home_counter(Request $request){

        $validator = Validator::make($request->all(), [
            'number' => 'required',
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $number = $request->number;
        $name = $request->name;

        $counter = [];

        for ($i = 0; $i < count($name); $i++) {
            $counter[$i] = [
                'number' => $number[$i],
                'name' => $name[$i]
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'counters' => json_encode($counter),
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Home Counters Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);

    }

    public function home_project(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'date' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $date = $request->date;
        $description = $request->description;

        // Storing new image
        $newImage = [];
        if($request->has('image')){
            foreach ($request->file('image') as $index => $file) {
                $ImagePath = $file->store('assets/project/', 'public');
                $newImage[$index] = $ImagePath;
            }
        }

        $Image = [];
        foreach ($title as $key => $name) {
            if (isset($newImage[$key])) {
                $Image[$key] = $newImage[$key];
            } else {
                $old = "old_image$key";
                $Image[$key] = $request->$old ?? null;
            }
        }

        $project = [];

        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $project[$i] = [
                'title' => $title[$i],
                'date' => $date[$i],
                'image' => $Image[$i],
                'description' => $description[$i] 
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'projects' => json_encode($project),
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Home Project Save successfully!',
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
