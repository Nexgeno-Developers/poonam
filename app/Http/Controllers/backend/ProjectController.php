<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function index() {
        return view('backend.pages.project.index');
    }

    public function project_banner(Request $request){

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
                'notification' => 'Project Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);

    }

    public function project_complete(Request $request){

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

        $old_data = DB::table('pages')->where('page_name', $request->page)->value('projects');

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
                'notification' => 'Complete Project Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
        
    }

    public function project_certificate(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;

        $old_data = DB::table('pages')->where('page_name', $request->page)->value('certificate');

        if($old_data !== null && !empty($old_data) && count(json_decode($old_data)) != 0 ){
            $old_data = json_decode($old_data, true);
            $next = true;
            $next2 = true;
        }

        // Storing new image
        $newImage = [];
        if($request->has('image')){
            foreach ($request->file('image') as $index => $file) {
                $ImagePath = $file->store('assets/certificate/', 'public');
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

        // Storing new image
        $newPDF = [];
        if($request->has('pdf')){
            foreach ($request->file('pdf') as $index => $file) {
                $PdfPath = $file->store('assets/certificate/', 'public');
                $newPDF[$index] = $PdfPath;
            }
        }

        $PDF = [];
        foreach ($title as $key => $name) {
            if (isset($newPDF[$key])) {
                $PDF[$key] = $newPDF[$key];
            } else {
                // $old_pdf = "old_pdf$key";
                // $PDF[$key] = $request->$old_pdf ?? null;

                $old_pdf = "old_pdf$key";
                if($request->has($old_pdf)){

                    if($next2 == true){
                        $PDF[$key] = $old_data[$key]['pdf'] ?? null;
                    } else {
                        $privous = $key + 1;
                        $PDF[$key] = $old_data[$privous]['pdf'] ?? null;
                    }
                    
                } else {
                    $next2 = false;
                    $privous = $key + 1;
                    $PDF[$key] = $old_data[$privous]['pdf'] ?? null;
                }

            }
        }

        $certificate = [];
        // Creating the business array
        for ($i = 0; $i < count($title); $i++) {
            $certificate[$i] = [
                'title' => $title[$i],
                'pdf' => $PDF[$i],
                'image' => $Image[$i]
            ];
        }

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'certificate' => json_encode($certificate),
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Project Certificate Save successfully!',
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
