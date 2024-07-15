<!DOCTYPE html>
<html lang="en">

<head>

    <!----------Meta Information---------->
    @include('frontend.partials.meta')

    <!-----------Stylesheets------------>
    @include('frontend.partials.css')

</head>

<body class="scroll-container">
<div id="unique-element-id"></div>
    <div data-barba="wrapper">
    <!---========Header======----->

        @include('frontend.partials.header')

    <!---========end Header======----->
      
      <!-- - PAGE HEADER -->
      <div class="scroll-content js-smooth-scroll smooth-scroll" id="page-wrapper" data-scrollbar="true" data-barba="container">
          <style>
              .home_section_container{
                  overflow:hidden;
              }
          </style>
        <main class="page-wrapper__content">

            <!---======== page content ====-------->

            @yield('page.content')

            <!---======== page content ===== -------->

        </main>
            <!-----------------------Footer Start---------->
            @include('frontend.partials.footer')
            <!--Footer Ends-->

      </div>
      <!-- - PAGE MAIN -->
    </div>

    <!--javascript-->
    @include('frontend.partials.js')
    @yield('page.scripts')
    @yield('component.scripts')

</body>

</html>


<div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <iframe id="videoIframe" width="100%" height="480" src="" title="Introduction to Resin Art by Poonam Bukalsaria Shah | GoodHomes Craft Studio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </div>
</div>