<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function index() {
        return view('backend.pages.products.index');
    }

    public function products_banner(Request $request){

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
                'notification' => 'Products Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);

    }

    public function products_radio(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $description = $request->description;
        $Image = $request->image;


        // $old_data = DB::table('pages')->where('page_name', $request->page)->value('radio_comission');

        // if($old_data !== null && !empty($old_data) && count(json_decode($old_data)) != 0 ){
        //     $old_data = json_decode($old_data, true);
        //     $next = true;
        // }

        // // Storing new image
        // $newImage = [];
        // if($request->has('image')){
        //     foreach ($request->file('image') as $index => $file) {
        //         $ImagePath = $file->store('assets/project/', 'public');
        //         $newImage[$index] = $ImagePath;
        //     }
        // }

        // $Image = [];
        // foreach ($title as $key => $name) {
        //     if (isset($newImage[$key])) {
        //         $Image[$key] = $newImage[$key];
        //     } else {
        //         $old = "old_image$key";
        //         if($request->has($old)){

        //             if($next == true){
        //                 $Image[$key] = $old_data[$key]['image'] ?? null;
        //             } else {
        //                 $privous = $key + 1;
        //                 $Image[$key] = $old_data[$privous]['image'] ?? null;
        //             }
                    
        //         } else {
        //             $next = false;
        //             $privous = $key + 1;
        //             $Image[$key] = $old_data[$privous]['image'] ?? null;
        //         }
        //     }
        // }

        $radio_comission = [];

        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $radio_comission[$i] = [
                'title' => $title[$i],
                'image' => $Image[$i],
                'description' => $description[$i] 
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'radio_comission' => json_encode($radio_comission),
        ]);

        if($result){
            $response = [
                'status' => true,
                'notification' => 'Products Radio Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }

    public function products_oil(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $description = $request->description;
        $Image = $request->image;

        // $old_data = DB::table('pages')->where('page_name', $request->page)->value('oil_spill');

        // if($old_data !== null && !empty($old_data) && count(json_decode($old_data)) != 0 ){
        //     $old_data = json_decode($old_data, true);
        //     $next = true;
        // }

        // // Storing new image
        // $newImage = [];
        // if($request->has('image')){
        //     foreach ($request->file('image') as $index => $file) {
        //         $ImagePath = $file->store('assets/project/', 'public');
        //         $newImage[$index] = $ImagePath;
        //     }
        // }

        // $Image = [];
        // foreach ($title as $key => $name) {
        //     if (isset($newImage[$key])) {
        //         $Image[$key] = $newImage[$key];
        //     } else {
        //         $old = "old_image$key";
        //         if($request->has($old)){

        //             if($next == true){
        //                 $Image[$key] = $old_data[$key]['image'] ?? null;
        //             } else {
        //                 $privous = $key + 1;
        //                 $Image[$key] = $old_data[$privous]['image'] ?? null;
        //             }
                    
        //         } else {
        //             $next = false;
        //             $privous = $key + 1;
        //             $Image[$key] = $old_data[$privous]['image'] ?? null;
        //         }
                
        //     }
        // }

        $oil_spill = [];

        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $oil_spill[$i] = [
                'title' => $title[$i],
                'image' => $Image[$i],
                'description' => $description[$i] 
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'oil_spill' => json_encode($oil_spill),
        ]);

        if($result){
            $response = [
                'status' => true,
                'notification' => 'Products Oil and Spill Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }

    public function products_aids(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $description = $request->description;
        $Image = $request->image;

        // $old_data = DB::table('pages')->where('page_name', $request->page)->value('aids_navigation');

        // if($old_data !== null && !empty($old_data) && count(json_decode($old_data)) != 0 ){
        //     $old_data = json_decode($old_data, true);
        //     $next = true;
        // }

        // // Storing new image
        // $newImage = [];
        // if($request->has('image')){
        //     foreach ($request->file('image') as $index => $file) {
        //         $ImagePath = $file->store('assets/project/', 'public');
        //         $newImage[$index] = $ImagePath;
        //     }
        // }

        // $Image = [];
        // foreach ($title as $key => $name) {
        //     if (isset($newImage[$key])) {
        //         $Image[$key] = $newImage[$key];
        //     } else {
        //         $old = "old_image$key";
        //         if($request->has($old)){

        //             if($next == true){
        //                 $Image[$key] = $old_data[$key]['image'] ?? null;
        //             } else {
        //                 $privous = $key + 1;
        //                 $Image[$key] = $old_data[$privous]['image'] ?? null;
        //             }
                    
        //         } else {
        //             $next = false;
        //             $privous = $key + 1;
        //             $Image[$key] = $old_data[$privous]['image'] ?? null;
        //         }
        //     }
        // }

        $aids_navigation = [];

        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $aids_navigation[$i] = [
                'title' => $title[$i],
                'image' => $Image[$i],
                'description' => $description[$i] 
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'aids_navigation' => json_encode($aids_navigation),
        ]);

        if($result){
            $response = [
                'status' => true,
                'notification' => 'Products Aids to Navigation Save successfully!',
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
