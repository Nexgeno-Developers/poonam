<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{

    public function index() {
        $service = DB::table('services')->orderBy('id', 'DESC')->get(['id','slug','page_name','title','status','created_at']);
        return view('backend.pages.service.index', compact('service'));
    }


    public function add() {
        return view('backend.pages.service.add');
    }  
    
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'banner' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'slug' => 'required|unique:services,slug',
            'title' => 'required',
            'page_name' => 'required',
            'short_description' => 'required',
            'gallery_image.*' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            'banner.required' => 'The banner image is required.',
            'banner.image' => 'The banner must be an image.',
            'banner.mimes' => 'The banner must be a file of type: jpeg, png, jpg, webp.',
            'banner.max' => 'The banner may not be greater than 2 MB.',
            
            'slug.required' => 'The slug is required.',
            'slug.unique' => 'The slug must be unique.',
    
            'title.required' => 'The title is required.',
    
            'page_name.required' => 'The page name is required.',
    
            'short_description.required' => 'The short description is required.',
    
            'gallery_image.*.required' => 'The gallery images are required.',
            'gallery_image.*.image' => 'Each gallery image must be an image.',
            'gallery_image.*.mimes' => 'Each gallery image must be a file of type: jpeg, png, jpg, webp.',
            'gallery_image.*.max' => 'Each gallery image may not be greater than 2 MB.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        $slug = customSlug($request->input('slug'));
    
        // Upload banner image
        $bannerPath = $request->file('banner')->store('assets/image/banner', 'public');
    
        // Storing gallery images
        $galleryImages = [];
        if ($request->has('gallery_image')) {
            foreach ($request->file('gallery_image') as $file) {
                $galleryImages[] = $file->store('assets/image/gallery_image', 'public');
            }
        }
    
        DB::table('services')->insert([
            'banner' => $bannerPath,
            'slug' => $slug,
            'page_name' => $request->input('page_name'),
            'title' => $request->input('title'),
            'short_description' => $request->input('short_description'),
            'gallery_image' => json_encode($galleryImages), // Store as JSON
        ]);
    
        $response = [
            'status' => true,
            'notification' => 'Service added successfully!',
        ];
    
        return response()->json($response);
    }

    public function edit($id) {
        $service = DB::table('services')->where('id',$id)->get()->first();
        $galleryImages_data = json_decode($service->gallery_image);
        return view('backend.pages.service.edit', compact('service','galleryImages_data'));
    }  
    
    public function delete($id) {
        
        $service = DB::table('services')->where('id', $id);
        if (!$service) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $service->delete();

        $response = [
            'status' => true,
            'notification' => 'Service Deleted successfully!',
        ];

        return response()->json($response);
    } 
    
    
    public function update(Request $request) {

        $validator = Validator::make($request->all(), [
            'banner' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
            'slug' => 'required',
            'title' => 'required',
            'page_name' => 'required',
            'short_description' => 'required',
            'gallery_image.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            'banner.image' => 'The banner must be an image.',
            'banner.mimes' => 'The banner must be a file of type: jpeg, png, jpg, webp.',
            'banner.max' => 'The banner may not be greater than 2 MB.',
            
            'slug.required' => 'The slug is required.',
            'slug.unique' => 'The slug must be unique.',
    
            'title.required' => 'The title is required.',
    
            'page_name.required' => 'The page name is required.',
    
            'short_description.required' => 'The short description is required.',
    
            'gallery_image.*.image' => 'Each gallery image must be an image.',
            'gallery_image.*.mimes' => 'Each gallery image must be a file of type: jpeg, png, jpg, webp.',
            'gallery_image.*.max' => 'Each gallery image may not be greater than 2 MB.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $id = $request->input('id');
        $old_data = DB::table('services')->where('id', $id)->get()->first();

        $slug = customSlug($request->input('slug'));

        if($old_data !== null && !empty($old_data)){
            $old_data_galleryImages = json_decode($old_data->gallery_image, true);
            $next = true;
        }
    
        if ($request->hasFile('banner')) {
            $bannerPath = $request->file('banner')->store('assets/image/banner', 'public');
        } else {
            $bannerPath = $old_data->banner;
        }

        if($request->has('gallery_image')){

            $galleryImages = [];

            $newImage = [];
            foreach ($request->file('gallery_image') as $index => $file) {
                $ImagePath = $file->store('assets/image/gallery_image', 'public');
                $newImage[$index] = $ImagePath;
            }

            $number_img = $request->input('number_img');
            foreach ($number_img as $key => $row) {

                if (isset($newImage[$key])) {
                    $galleryImages[$key] = $newImage[$key];
                } else {

                    $old = "old_image$key";
                    if($request->has($old)){
    
                        if($next == true){
                            $galleryImages[$key] = $old_data_galleryImages[$key] ?? null;
                        } else {
                            $privous = $key + 1;
                            $galleryImages[$key] = $old_data_galleryImages[$privous] ?? null;
                        }
                        
                    } else {
                        $next = false;
                        $privous = $key + 1;
                        $galleryImages[$key] = $old_data_galleryImages[$privous] ?? null;
                    }
                }


            }

        } else {
            $galleryImages = $old_data->gallery_image;
        }
    
        $result = DB::table('services')->where('id', $id)->update([
            'banner' => $bannerPath,
            'slug' => $slug,
            'page_name' => $request->input('page_name'),
            'title' => $request->input('title'),
            'short_description' => $request->input('short_description'),
            'gallery_image' => json_encode($galleryImages), 
        ]);
        
        if($result){
            $response = [
                'status' => true,
                'notification' => 'Service Update successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }




/* ------------------------------------------------------------------------------------------------ */


   


    
    // public function status($id, $status) { 
    //     $award = Award::find($id);
    //     $award->status = $status;
    //     $award->save();
    
    //     return redirect(route('award.index'))->with('success', 'Status Change successfully!');
    // }  
    





}
