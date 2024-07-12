<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class AboutController extends Controller
{
    public function index()
    {
        return view('backend.pages.about.index');
    }

    public function about_banner(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'banner' => 'nullable|image',
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
                'notification' => 'About Banners Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function about_journey(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'journey_heading' => 'required',
            'journey_text' => 'required',
            'journey_description' => 'required',
            'journey_image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Get the existing journey section from the database
        $existingJourneySection = DB::table('pages')->where('page_name', $request->page)->value('journey_section');
        $existingJourney = json_decode($existingJourneySection, true);

        // Check if a new journey image is uploaded
        if ($request->hasFile('journey_image')) {
            $file = $request->file('journey_image');
            $journeyPath = $file->store('assets/about/', 'public');
        } else {
            $journeyPath = $existingJourney['journey_image'] ?? null; // Retain existing image if available
        }

        $journey = [
            'journey_text' => $request->journey_text,
            'journey_description' => $request->journey_description,
            'journey_image' => $journeyPath,
            'journey_heading' => $request->journey_heading,
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'journey_section' => json_encode($journey),
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Journey Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function about_midsection(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'about_heading' => 'required',
            'about_description' => 'required',
            'about_image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Get the existing about section from the database
        $existingaboutSection = DB::table('pages')->where('page_name', $request->page)->value('about_section');
        $existingabout = json_decode($existingaboutSection, true);

        // Check if a new about image is uploaded
        if ($request->hasFile('about_image')) {
            $file = $request->file('about_image');
            $aboutPath = $file->store('assets/about/', 'public');
        } else {
            $aboutPath = $existingabout['about_image'] ?? null; // Retain existing image if available
        }

        $about = [
            'about_description' => $request->about_description,
            'about_image' => $aboutPath,
            'about_heading' => $request->about_heading,
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'about_section' => json_encode($about),
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'About Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function about_vision(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'vision_heading' => 'required',
            'vision_description' => 'required',
            'vision_image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Get the existing vision section from the database
        $existingvisionSection = DB::table('pages')->where('page_name', $request->page)->value('vision_section');
        $existingvision = json_decode($existingvisionSection, true);

        // Check if a new vision image is uploaded
        if ($request->hasFile('vision_image')) {
            $file = $request->file('vision_image');
            $visionPath = $file->store('assets/about/', 'public');
        } else {
            $visionPath = $existingvision['vision_image'] ?? null; // Retain existing image if available
        }

        $vision = [
            'vision_description' => $request->vision_description,
            'vision_image' => $visionPath,
            'vision_heading' => $request->vision_heading,
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'vision_section' => json_encode($vision),
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'vision Save successfully!',
            ];
        } else {
            $response = [
                'status' => false,
                'notification' => 'Somthing Went Wrong!',
            ];
        }

        return response()->json($response);
    }

    public function about_design(Request $request)
    {

        
        $validator = Validator::make($request->all(), [
            'design_heading' => 'required',
            'design_description' => 'required',
            'design_image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        // Get the existing design section from the database
        $existingdesignSection = DB::table('pages')->where('page_name', $request->page)->value('design_section');
        $existingdesign = json_decode($existingdesignSection, true);

        // Check if a new design image is uploaded
        if ($request->hasFile('design_image')) {
            $file = $request->file('design_image');
            $designPath = $file->store('assets/about/', 'public');
        } else {
            $designPath = $existingdesign['design_image'] ?? null; // Retain existing image if available
        }

        $design = [
            'design_description' => $request->design_description,
            'design_image' => $designPath,
            'design_heading' => $request->design_heading,
        ];

        $result = DB::table('pages')->where('page_name', $request->page)->update([
            'design_section' => json_encode($design),
        ]);

        if ($result) {
            $response = [
                'status' => true,
                'notification' => 'Design Save successfully!',
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
