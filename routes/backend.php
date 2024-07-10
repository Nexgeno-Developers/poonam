<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthenticateController;
use App\Http\Controllers\backend\DashboardController;

use App\Http\Controllers\backend\AuthorController;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\HomeController;
use App\Http\Controllers\backend\AboutController;
use App\Http\Controllers\backend\ProjectController;
use App\Http\Controllers\backend\CareerController;
use App\Http\Controllers\backend\ContactController;
use App\Http\Controllers\backend\BusinessController;
use App\Http\Controllers\backend\ProductsController;

use App\Http\Controllers\backend\ServiceController;

use App\Http\Controllers\backend\TrumbowygController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//authentication
Route::get('/', function () { return redirect(route('backend.login')); });
Route::get('/login', [AuthenticateController::class, 'index'])->name('backend.login');
Route::post('/login', [AuthenticateController::class, 'login'])->name('backend.login');
Route::get('/logout', [AuthenticateController::class, 'logout'])->name('backend.logout');

//dashborad
Route::get('/dashboard', [DashboardController::class, 'index'])->name('backend.dashboard');

Route::group(['prefix' => 'trumbowyg'], function () {
    Route::post('/upload', [TrumbowygController::class, 'upload'])->name('trumbowyg.upload');
});

//---------------------- pages -------------------------------------

Route::get('/home-page', [HomeController::class, 'index'])->name('backend.home.page');

Route::get('/about-page', [AboutController::class, 'index'])->name('backend.about.page');

Route::get('/project-page', [ProjectController::class, 'index'])->name('backend.project.page');

Route::get('/career-page', [CareerController::class, 'index'])->name('backend.career.page');

Route::get('/contact-page', [ContactController::class, 'index'])->name('backend.contact.page');

Route::get('/business-page', [BusinessController::class, 'index'])->name('backend.business.page');

Route::get('/products-page', [ProductsController::class, 'index'])->name('backend.products.page');

//---------------------- pages -------------------------------------

Route::post('/update-home-banner', [HomeController::class, 'home_banner'])->name('home.banner');
Route::post('/update-home-intro', [HomeController::class, 'home_intro'])->name('home.intro');
Route::post('/update-home-marque', [HomeController::class, 'home_marque'])->name('home.marque');
Route::post('/update-home-business', [HomeController::class, 'home_business'])->name('home.business');
Route::post('/update-home-counter', [HomeController::class, 'home_counter'])->name('home.counter');
Route::post('/update-home-project', [HomeController::class, 'home_project'])->name('home.project');

Route::post('/update-about-banner', [AboutController::class, 'about_banner'])->name('about.banner');
Route::post('/update-about-intro', [AboutController::class, 'about_intro'])->name('about.intro');
Route::post('/update-about-steps', [AboutController::class, 'about_steps'])->name('about.steps');
Route::post('/update-about-teamwork', [AboutController::class, 'about_teamwork'])->name('about.teamwork');
Route::post('/update-about-mnv-section', [AboutController::class, 'about_mnv_section'])->name('about.mnv_section');
Route::post('/update-about-our-values', [AboutController::class, 'about_our_values'])->name('about.our_values');

Route::post('/update-project-banner', [ProjectController::class, 'project_banner'])->name('project.banner');
Route::post('/update-project-complete', [ProjectController::class, 'project_complete'])->name('project.complete');
Route::post('/update-project-certificate', [ProjectController::class, 'project_certificate'])->name('project.certificate');

Route::post('/update-career-banner', [CareerController::class, 'career_banner'])->name('career.banner');
Route::post('/update-career-intro', [CareerController::class, 'career_intro'])->name('career.intro');

Route::post('/update-contact-banner', [ContactController::class, 'contact_banner'])->name('contact.banner');
Route::post('/update-contact-all-contacts', [ContactController::class, 'contact_all_contacts'])->name('contact.all_contacts');

Route::post('/update-business-banner', [BusinessController::class, 'business_banner'])->name('business.banner');
Route::post('/update-business-list', [BusinessController::class, 'business_steps'])->name('business.businesslist');

Route::post('/update-products-banner', [ProductsController::class, 'products_banner'])->name('products.banner');
Route::post('/update-products-radio-n-comm', [ProductsController::class, 'products_radio'])->name('products.radio-n-comm');
Route::post('/update-products-oil-n-spill', [ProductsController::class, 'products_oil'])->name('products.oil-n-spill');
Route::post('/update-products-aids-to-nav', [ProductsController::class, 'products_aids'])->name('products.aids-to-nav');

//Service
Route::group(['prefix' => 'service'], function () {
    Route::get('/index', [ServiceController::class, 'index'])->name('backend.service.index');
    Route::get('/add', [ServiceController::class, 'add'])->name('service.add');
    Route::get('/edit/{id}', [ServiceController::class, 'edit'])->name('service.edit');
    Route::post('/create', [ServiceController::class, 'create'])->name('service.create');
    Route::post('/update', [ServiceController::class, 'update'])->name('service.update');
    Route::post('/delete/{id}', [ServiceController::class, 'delete'])->name('service.delete');
    // Route::get('/status/{id}/{status}', [ServiceController::class, 'status'])->name('service.status');
});


//User
Route::group(['prefix' => 'profile'], function () {
    Route::get('/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
    Route::get('/reset/{id}', [UserController::class, 'password'])->name('user.password');
    Route::post('/update', [UserController::class, 'update'])->name('user.update');
    Route::post('/reset', [UserController::class, 'reset'])->name('user.reset');    
});

//clear cache
Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('view:clear');

    // Redirect back to the previous page
    return back()->with('status', 'Cache cleared successfully!');
})->name('clear-cache');


// //setting
// Route::group(['prefix' => 'setting'], function () {
//     Route::get('/index', [BusinessSettingController::class, 'index'])->name('setting.index');
    
//     Route::get('/privacy-policy', [BusinessSettingController::class, 'privacy_policy'])->name('setting.privacy');
//     Route::get('/terms', [BusinessSettingController::class, 'terms'])->name('setting.terms');
//     Route::get('/refund-policy', [BusinessSettingController::class, 'refund_policy'])->name('setting.refund_policy');

//     Route::post('/update', [BusinessSettingController::class, 'update'])->name('setting.update');
// });

// //Contact Page setting
// Route::group(['prefix' => 'contact/page'], function () {
//     Route::get('/index', [ContactSettingController::class, 'index'])->name('contactpage.index');
//     Route::post('/update', [ContactSettingController::class, 'update'])->name('contactpage.update');
// });


// //Author
// Route::group(['prefix' => 'author'], function () {
//     Route::get('/index', [AuthorController::class, 'index'])->name('author.index');
//     Route::get('/add', [AuthorController::class, 'add'])->name('author.add');
//     Route::get('/edit/{id}', [AuthorController::class, 'edit'])->name('author.edit');
//     Route::post('/create', [AuthorController::class, 'create'])->name('author.create');
//     Route::post('/update', [AuthorController::class, 'update'])->name('author.update');
//     Route::post('/delete/{id}', [AuthorController::class, 'delete'])->name('author.delete');
//     //Route::get('/status/{id}/{status}', [AuthorController::class, 'status'])->name('author.status');
// });

