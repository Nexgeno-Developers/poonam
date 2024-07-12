<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\IndexController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

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

// Home START
Route::get('/', [IndexController::class, 'index'])->name('index');


Route::get('/about-us', [IndexController::class, 'about_Us'])->name('about-us');
Route::get('/contactus', [IndexController::class, 'contact_Us'])->name('contact');
Route::get('/services', [IndexController::class, 'services'])->name('services');
Route::get('/gallery', [IndexController::class, 'gallery'])->name('gallery');
Route::get('/news-media', [IndexController::class, 'news_media'])->name('news-media');
Route::get('/our-business', [IndexController::class, 'our_Business'])->name('our-business');
Route::get('/products', [IndexController::class, 'products'])->name('products');
Route::get('/projects', [IndexController::class, 'projects'])->name('projects');

$slug = DB::table('services')->pluck('slug')->toArray();
Route::get('/service/{slug}', [IndexController::class, 'service_detail'])
    ->where('slug', implode('|', $slug ))
    ->name('service.detail');

Route::get('/404', [IndexController::class, 'not_found'])->name('error_page');
Route::get('/thank-you', [IndexController::class, 'thank_you'])->name('thank_you');
Route::get('/cookie-policy', [IndexController::class, 'cookie_policy'])->name('cookie-policy');
Route::post('/contact-save', [IndexController::class, 'contact_save'])->name('contact.create');
Route::post('/comment-save', [IndexController::class, 'comment_save'])->name('comment.create');

// Home END
Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('view:clear');
    //$exitCode = Artisan::call('route:cache');
    //$exitCode = Artisan::call('key:generate');
});

Route::get('/key-generate', function () {
    Artisan::call('key:generate', ['--show' => true]);
    return 'Application key generated successfully!';
});

Route::get('/create-storage-link', function () {
    $exitCode = Artisan::call('storage:link');
    
    if ($exitCode === 0) {
        return 'Storage link created successfully.';
    } else {
        return 'Error creating storage link.';
    }
});

Route::get('/send-test-email', function () {
    Mail::raw('Test email content', function ($message) {
        $message->to('khanfaisal.makent@gmail.com')
                ->subject('Test Email');
    });

    return 'Test email sent!';
});