@extends('frontend.layouts.app')

@section('page.title', '')

@section('page.description', '')

@section('page.type', 'website')

@section('page.content')

<section class="gallery_banner inner_header border_1">
  <img src="image/gallery_banner.jpg" class="w-100" />
  <div class="container">
    <div class="header_title">
      <h3 class="heading_inner_text peachy_flightoe_font font50">OUR WORKS</h3>
    </div>
  </div>
</section>
<section class="introduction_part pddleftright pt-md-3">
  <div class="container">
    <div class="animheadertext-2 anim-para-text introduction_box text-center pb-xxl-5">
      <h5 class="js-split-words2 pb-2 trajanPro_regular font30">LET'S COLLABORATION To CURATE AND CREATE ANYTHING
        TO WHICH YOUR HEART AND SOUL CAN RELATE</h5>
      <p class="js-split-p-letter">
        From sprawling art installations spanning entire walls to tables and home interior accessories 
        that echo your tastes, Poonam Shah Art can customize size, texture, colour, and materials to 
        provide you personalized pieces that elevate your space.
      </p>
    </div>
  </div>
</section>
<section class="gallery_box_section our_work_bg border_2 border_3">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="row">

          <div class="col-md-6">
            <div class="gallery_box_inner" id="gallery1">
              <div class="gallery_img">
                <img src="image/gallery_box_img1.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">HOME INTERIORS</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner" id="gallery2">
              <div class="gallery_img">
                <img src="image/gallery_box_img2.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">CANVAS ART</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img3.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">WARDROBE PANELS</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img4.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">VANITY MIRROR</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img5.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">FOR THE LITTLE ONES</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img6.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">THE VOGUE</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img7.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">SCULPTURES</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img8.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">RASIN BAR</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          
           <div class="col-md-6">
            <div class="gallery_box_inner">
              <div class="gallery_img">
                <img src="image/gallery_box_img8.png" />
              </div>
              <div class="gallery_content">
                <h5 class="peachy_flightoe_font">From Pour to Productivity</h5>
                <a href="gallery-details.php"> View Gallery <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
<style>
    .gallery_box_inner{
        overflow:hidden;
    }
</style>
<?php include 'footer.php'; ?>
<script>
    /*
     gsap.fromTo("#gallery1 .gallery_img img", { scaleX: 0 }, {
       scaleX: 1,
       duration: 1,
       ease: "power2.inOut",
       scrollTrigger: {
         trigger: "#gallery1",
         start: "top 80%",
         end: "bottom 20%",
         toggleActions: "play none none reverse"
       }
     });

       gsap.fromTo("#gallery1 .gallery_content", 
         {
           opacity: 0,
           x:-200,
           y:-200
         }, 
         {
           opacity: 1,
           x:0,
           y:0,
           duration: 0.5,
           delay: 0.5,
           scrollTrigger: {
             trigger: "#gallery1",
             start: "top 70%",
             end: "bottom 20%",
             toggleActions: "play none none reverse"
           }
         });


     gsap.fromTo("#gallery2 .gallery_img img", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }, {
       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
       duration: 1,
       ease: "power2.inOut",
       scrollTrigger: {
         trigger: "#gallery2",
         start: "top 80%",
         end: "bottom 20%",
         toggleActions: "play none none reverse"
       }
     });
       gsap.fromTo("#gallery2 .gallery_content", 
         {
           opacity: 0,
           x:200,
           y:200
         }, 
         {
           opacity: 1,
           x:0,
           y:0,
           duration: 0.8,
           delay: 0.6,
           scrollTrigger: {
             trigger: "#gallery1",
             start: "top 70%",
             end: "bottom 20%",
             toggleActions: "play none none reverse"
           }
         });
         */
</script>

@endsection