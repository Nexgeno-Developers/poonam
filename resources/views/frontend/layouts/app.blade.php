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