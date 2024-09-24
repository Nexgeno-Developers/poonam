<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class NewsmediaController extends Controller
{
    public function index() {
        return view('backend.pages.newsandmedia.index');
    }

    public function newsandmedia_banner(Request $request){

       
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

        // Update the database with the new or existing banner path
        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'banner_section' => $bannerPath,
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'News Media Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'No Changes Made',
            ];
        }

        return response()->json($response);
    }
    
    public function newsandmedia_image(Request $request)
    {
        // Validate request inputs
        $validator = Validator::make($request->all(), [
            'newsandmedia_image.*' => 'nullable|file|max:80000|mimes:jpeg,png,jpg,webp',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        // Initialize images array
        $images = [];
    
        // Process new and old images
        $oldImages = $request->input('newsandmedia_old_image', []);
        $newImages = $request->file('newsandmedia_image', []);
    
        // Iterate over old images and keep them in the images array
        foreach ($oldImages as $index => $oldImagePath) {
            if (!empty($newImages[$index])) {
                // If a new image is uploaded for this index, store it
                $file = $newImages[$index];
                $imagePath = $file->store('assets/newsandmedia_images', 'public');
                $images[] = $imagePath;
            } else {
                // If no new image is uploaded, keep the old image
                $images[] = $oldImagePath;
            }
        }
    
        // Add any new images that were added after the last old image index
        foreach ($newImages as $index => $file) {
            if ($index >= count($oldImages)) {
                $imagePath = $file->store('assets/newsandmedia_images', 'public');
                $images[] = $imagePath;
            }
        }
    
        // Remove null values from the array
        $images = array_filter($images, function($value) { return !is_null($value); });
    
        // Update the images in the database
        $result = DB::table('pages')->updateOrInsert(
            ['page_name' => $request->page],
            ['image_section' => json_encode(array_values($images))]
        );
    
        $response = $result
            ? ['status' => true, 'notification' => 'News media images saved successfully!']
            : ['status' => false, 'notification' => 'No Changes Made'];
    
        return response()->json($response);
    }
        

    

    
//     public function newsandmedia_image(Request $request)
// {
//     // Validate request inputs
//     $validator = Validator::make($request->all(), [
//         'newsandmedia_image.*' => 'nullable|file|max:80000|mimes:jpeg,png,jpg',
//     ]);

//     if ($validator->fails()) {
//         return response()->json([
//             'status' => false,
//             'notification' => $validator->errors()->all()
//         ], 200);
//     }

//     // Retrieve existing images from the database
//     $existingImages = DB::table('pages')->where('page_name', 'newsandmedia')->value('image_section');
//     if ($existingImages !== null && !empty($existingImages)) {
//         $existingImages = json_decode($existingImages, true);
//     } else {
//         $existingImages = [];
//     }

//     // Initialize the images array with existing images
//     $images = $existingImages;

//     // Process new images
//     if ($request->has('newsandmedia_image')) {
//         foreach ($request->file('newsandmedia_image') as $index => $file) {
//             $imagePath = $file->store('assets/newsandmedia_images', 'public');

//             // Update or add the image
//             $images[$index]['image'] = $imagePath;
//         }
//     }

//     // Handle deletions: find which indices are removed and delete those images
//     foreach ($existingImages as $index => $image) {
//         if (!isset($images[$index])) {
//             if (isset($image['image'])) {
//                 Storage::disk('public')->delete($image['image']);
//             }
//         }
//     }

//     // Update the images in the database
//     $result = DB::table('pages')->updateOrInsert(
//         ['page_name' => $request->page],
//         ['image_section' => json_encode(array_values($images))]
//     );

//     if ($result) {
//         $response = [
//             'status' => true,
//             'notification' => 'News media images saved successfully!',
//         ];
//     } else {
//         $response = [
//             'status' => false,
//             'notification' => 'Something went wrong!',
//         ];
//     }

//     return response()->json($response);
// }



}
