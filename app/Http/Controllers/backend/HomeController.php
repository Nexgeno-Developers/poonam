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
    public function index()
    {
        return view('backend.pages.home.index');
    }

    public function home_banner(Request $request)
    {
        // Validate request inputs
        $validator = Validator::make($request->all(), [
            'banner_text.*' => 'required',
            'banner.*' => 'nullable|file|max:80000|mimes:jpeg,png,jpg',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Initialize banners array
        $banners = [];

        // Retrieve existing banners from the database
        $existingBanners = DB::table('pages')->where('page_name', 'home')->value('banner_section');
        if ($existingBanners !== null && !empty($existingBanners)) {
            $existingBanners = json_decode($existingBanners, true);
        } else {
            $existingBanners = [];
        }

        // Process banner texts and files
        foreach ($request->banner_text as $index => $text) {
            $fileUploaded = $request->hasFile('banner.' . $index);
            $existingImage = isset($existingBanners[$index]['image']) ? $existingBanners[$index]['image'] : null;

            // Skip the row if text is empty or if both new and existing images are not available
            if (empty($text) || (!$fileUploaded && empty($existingImage))) {
                continue;
            }

            $banner = [
                'text' => $text,
                'image' => $existingImage,
            ];

            // Check if a new file is uploaded for the current index
            if ($fileUploaded) {
                $file = $request->file('banner.' . $index);
                $bannerPath = $file->store('assets/banner/', 'public');
                $banner['image'] = $bannerPath;
            }

            $banners[] = $banner;
        }

        // Update the banners in the database
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


    public function home_intro(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'intro' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $title = $request->title;
        $subtitle = $request->subtitle;
        $intro = $request->intro;

        // Update the introduction in JSON format
        $result = DB::table('pages')
            ->where('page_name', $request->page)
            ->update([
                'introduction' => json_encode(['title' => $title, 'subtitle' => $subtitle, 'content' => $intro])
            ]);

        if ($result) {
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



    public function storeGallerySection1(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'gallery_title.*' => 'required',
            'gallery_description.*' => 'required',
            'gallery_image.*' => 'image|max:8000', // Adjust max file size as needed
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        $existingGallerySection1 = DB::table('pages')->where('page_name', $request->page)->value('gallery_section');
        $existingGallerySection1 = json_decode($existingGallerySection1, true) ?? [];
    
        $gallerySection1 = [];
        $galleryImages = $request->file('gallery_image');
    
        for ($i = 0; $i < count($request->gallery_title); $i++) {
            $imagePath = null;
    
            if (isset($galleryImages[$i])) {
                $imagePath = $galleryImages[$i]->store('gallery_images', 'public');
            } elseif (isset($existingGallerySection1[$i])) {
                $imagePath = $existingGallerySection1[$i]['image'];
            }
    
            $gallerySection1[] = [
                'title' => $request->gallery_title[$i],
                'url' => $request->gallery_url[$i],
                'description' => $request->gallery_description[$i],
                'image' => $imagePath,
            ];
        }
    
        $result = DB::table('pages')
            ->where('page_name', $request->page)
            ->update([
                'gallery_section' => json_encode($gallerySection1)
            ]);
    
        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Gallery Section 1 saved successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Something went wrong!',
            ];
        }
    
        return response()->json($response);
    }

    public function storeGallerySection2(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'gallery2_title.*' => 'required',
            'gallery2_url.*' => 'required',
            'gallery2_description.*' => 'required',
            'gallery2_image.*' => 'image|max:8000', // Adjust max file size as needed
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $existingGallerySection2 = DB::table('pages')->where('page_name', $request->page)->value('gallery_section2');
        $existingGallerySection2 = json_decode($existingGallerySection2, true) ?? [];

        $gallerySection2 = [];
        $galleryImages = $request->file('gallery2_image');

        for ($i = 0; $i < count($request->gallery2_title); $i++) {
            $imagePath = null;

            if (isset($galleryImages[$i])) {
                $imagePath = $galleryImages[$i]->store('gallery_images', 'public');
            } elseif (isset($existingGallerySection2[$i])) {
                $imagePath = $existingGallerySection2[$i]['image'];
            }

            $gallerySection2[] = [
                'title' => $request->gallery2_title[$i],
                'description' => $request->gallery2_description[$i],
                'image' => $imagePath,
                'url' => $request->gallery2_url[$i],
            ];
        }

        $result = DB::table('pages')
            ->where('page_name', $request->page)
            ->update([
                'gallery_section2' => json_encode($gallerySection2)
            ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Gallery Section 2 saved successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Something went wrong!',
            ];
        }

        return response()->json($response);
    }


}
