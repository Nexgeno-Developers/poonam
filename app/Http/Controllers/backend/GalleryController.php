<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class GalleryController extends Controller
{

    public function index() {
        $gallery = DB::table('gallery')->orderBy('id', 'DESC')->get(['id','slug','page_name','title','status','created_at']);
        return view('backend.pages.gallery.index', compact('gallery'));
    }


    public function add() {
        return view('backend.pages.gallery.add');
    }  
    
    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'slug' => 'required|unique:gallery,slug',
            'page_name' => 'required',
            'banner' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'thum_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'title' => 'required',
            'image_description.*' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'images' => 'required',
            'gallery_videos' => 'required',
           
        ], [
            'banner.required' => 'The banner image is required.',
            'banner.image' => 'The banner must be an image.',
            'banner.mimes' => 'The banner must be a file of type: jpeg, png, jpg, webp.',
            'banner.max' => 'The banner may not be greater than 2 MB.',

            'thum_image.required' => 'The thum image image is required.',
            'thum_image.image' => 'The thum image must be an image.',
            'thum_image.mimes' => 'The thum image must be a file of type: jpeg, png, jpg, webp.',
            'thum_image.max' => 'The thum image may not be greater than 2 MB.',
            
            'images.required' => 'The image image is required.',
            'images.image' => 'The image must be an image.',
            'images.mimes' => 'The image must be a file of type: jpeg, png, jpg, webp.',
            'images.max' => 'The image may not be greater than 2 MB.',

            'slug.required' => 'The slug is required.',
            'slug.unique' => 'The slug must be unique.',
    
            'title.required' => 'The title is required.',
            
            'gallery_videos.required' => 'The Video is required.',

            'page_name.required' => 'The page name is required.',
    
            'image_description.*.required' => 'The gallery images are required.',
            'image_description.*.image' => 'Each gallery image must be an image.',
            'image_description.*.mimes' => 'Each gallery image must be a file of type: jpeg, png, jpg, webp.',
            'image_description.*.max' => 'Each gallery image may not be greater than 2 MB.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        $slug = customSlug($request->input('slug'));
    

        // Get the existing banner path from the database
        $existingBanner = DB::table('pages')->where('page_name', $request->page)->value('banner');
        // Check if a new banner is uploaded
        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $bannerPath = $file->store('assets/banner/', 'public');
        } else {
            $bannerPath = $existingBanner;
        }

        
        // Get the existing banner path from the database
        $existingthum_image = DB::table('pages')->where('page_name', $request->page)->value('thum_image');
        // Check if a new banner is uploaded
        if ($request->hasFile('thum_image')) {
            $file = $request->file('thum_image');
            $thum_imagePath = $file->store('assets/gallery/thum_images', 'public');
        } else {
            $thum_imagePath = $existingthum_image;
        }


        // Initialize image_description array
        $image_description = [];

        // Retrieve existing image_description from the database
        $existing_image_description = DB::table('pages')->where('page_name', $request->page)->value('image_description');
        if ($existing_image_description !== null && !empty($existing_image_description)) {
            $existing_image_description = json_decode($existing_image_description, true);
        } else {
            $existing_image_description = [];
        }

        // Process image_description texts and files
        foreach ($request->image_description_text as $index => $text) {
            $fileUploaded = $request->hasFile('image_description.' . $index);
            $existingImage = isset($existing_image_description[$index]['image']) ? $existing_image_description[$index]['image'] : null;

            // Skip the row if text is empty or if both new and existing images are not available
            if (empty($text) || (!$fileUploaded && empty($existingImage))) {
                continue;
            }

            $image_description_text_image = [
                'text' => $text,
                'image' => $existingImage,
            ];

            // Check if a new file is uploaded for the current index
            if ($fileUploaded) {
                $file = $request->file('image_description.' . $index);
                $image_descriptionPath = $file->store('assets/image_description/', 'public');
                $image_description_text_image['image'] = $image_descriptionPath;
            }

            $image_description[] = $image_description_text_image;
        }


        // Initialize images array
        $images = [];
            
        // Process new and old images
        $oldImages = $request->input('images', []);
        $newImages = $request->file('images', []);

        // Iterate over old images and keep them in the images array
        foreach ($oldImages as $index => $oldImagePath) {
            if (!empty($newImages[$index])) {
                // If a new image is uploaded for this index, store it
                $file = $newImages[$index];
                $imagePath = $file->store('assets/gallery/images', 'public');
                $images[] = $imagePath;
            } else {
                // If no new image is uploaded, keep the old image
                $images[] = $oldImagePath;
            }
        }

        // Add any new images that were added after the last old image index
        foreach ($newImages as $index => $file) {
            if ($index >= count($oldImages)) {
                $imagePath = $file->store('assets/gallery/images', 'public');
                $images[] = $imagePath;
            }
        }

        // Remove null values from the array
        $images = array_filter($images, function($value) { return !is_null($value); });


        // Initialize images array
        $videos = [];
            
        // Process new and old videos
        $oldVideos = $request->input('gallery_videos', []);
        $newVideos = $request->file('gallery_videos', []);

        // Iterate over old videos and keep them in the videos array
        foreach ($oldVideos as $index => $oldVideoPath) {
            if (!empty($newVideos[$index])) {
                // If a new image is uploaded for this index, store it
                $file = $newImages[$index];
                $videoPath = $file->store('assets/videos', 'public');
                $videos[] = $videoPath;
            } else {
                // If no new image is uploaded, keep the old image
                $videos[] = $oldVideoPath;
            }
        }

        // Add any new videos that were added after the last old image index
        foreach ($newVideos as $index => $file) {
            if ($index >= count($oldImages)) {
                $videoPath = $file->store('assets/videos', 'public');
                $videos[] = $videoPath;
            }
        }

        // Remove null values from the array
        $videos = array_filter($videos, function($value) { return !is_null($value); });

    
        DB::table('gallery')->insert([
            'slug' => $slug,
            'page_name' => $request->input('page_name'),
            'banner' => $bannerPath,
            'thum_image' => $thum_imagePath,
            'title' => $request->input('title'),
            'image_description' => json_encode($image_description), // Store as JSON
            'images' => json_encode(array_values($images)),
            'videos' => json_encode(array_values($videos)),
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
        
        $service = DB::table('gallery')->where('id', $id);
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
            'notification' => 'Gallery Deleted successfully!',
        ];

        return response()->json($response);
    } 
    
    
    public function update(Request $request) {

        $validator = Validator::make($request->all(), [
            'banner' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
            'service_image' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
            'slug' => 'required',
            'title' => 'required',
            'page_name' => 'required',
            'gallery_image.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            'banner.image' => 'The banner must be an image.',
            'banner.mimes' => 'The banner must be a file of type: jpeg, png, jpg, webp.',
            'banner.max' => 'The banner may not be greater than 2 MB.',
            
            'slug.required' => 'The slug is required.',
            'slug.unique' => 'The slug must be unique.',
    
            'title.required' => 'The title is required.',
    
            'page_name.required' => 'The page name is required.',
    
    
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
            $bannerPath = $request->file('banner')->store('assets/banner', 'public');
        } else {
            $bannerPath = $old_data->banner;
        }
        
        if ($request->hasFile('service_image')) {
            $service_imagePath = $request->file('service_image')->store('assets/service_image', 'public');
        } else {
            $service_imagePath = $old_data->service_image;
        }

        $galleryImages = [];

        $newImage = [];
        if($request->has('gallery_image')){
            foreach ($request->file('gallery_image') as $index => $file) {
                $ImagePath = $file->store('assets/gallery_image', 'public');
                $newImage[$index] = $ImagePath;
            }
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

        $result = DB::table('services')->where('id', $id)->update([
            'banner' => $bannerPath,
            'service_image' => $service_imagePath,
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
