<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class BusinessController extends Controller
{
    public function index() {
        return view('backend.pages.business.index');
    }

    public function business_banner(Request $request){

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
                'notification' => 'Business Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);

    }

    public function business_steps(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'text1' => 'required',
            'text2' => 'required',
            'text3' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $text1 = $request->text1;
        $text2 = $request->text2;
        $text3 = $request->text3;
        $description = $request->description;

        $old_data = DB::table('pages')->where('page_name', $request->page)->value('steps');

        if($old_data !== null && !empty($old_data) && count(json_decode($old_data)) != 0 ){
            $old_data = json_decode($old_data, true);
            $next = true;
        }

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
                // $old = "old_image$key";
                // $Image[$key] = $request->$old ?? null;

                $old = "old_image$key";
                if($request->has($old)){

                    if($next == true){
                        $Image[$key] = $old_data[$key]['image'] ?? null;
                    } else {
                        $privous = $key + 1;
                        $Image[$key] = $old_data[$privous]['image'] ?? null;
                    }
                    
                } else {
                    $next = false;
                    $privous = $key + 1;
                    $Image[$key] = $old_data[$privous]['image'] ?? null;
                }
            }
        }

        $Steps = [];

        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $Steps[$i] = [
                'title' => $title[$i],
                'text1' => $text1[$i],
                'text2' => $text2[$i],
                'text3' => $text3[$i],
                'image' => $Image[$i],
                'description' => $description[$i] 
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'steps' => json_encode($Steps),
        ]);

        if($result){
            $response = [
                'status' => true,
                'notification' => 'Business List Save successfully!',
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
