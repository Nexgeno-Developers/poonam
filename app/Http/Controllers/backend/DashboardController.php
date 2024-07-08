<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class DashboardController extends Controller
{
    public function index(){
        $practiceAreaCount = '';
        $postCount = '';
        $teamCount = '';
        $contactCount = '';
        return view('backend.pages.dashboard.index', compact('practiceAreaCount', 'postCount', 'teamCount', 'contactCount'));
    }
}
