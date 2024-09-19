 
<!-- PAGE PRELOADER -->
      <!-- <div class="preloader text-center bg-dark-2" id="js-preloader" data-arts-theme-text="light">
        <div class="preloader__content"> -->
          <!-- header -->
          <!-- <div class="preloader__header mt-auto">
            <div class="preloader__heading h2">
                <img class="logo__img-primary" src="{{ asset('assets/frontend/image/Logo.svg')}}" alt="Poonam shah logo" height="150"></div>
          </div> -->
          <!-- - header -->
          <!-- counter -->
          <!-- <div class="preloader__counter h5"><span
              class="preloader__counter-number preloader__counter-current">0</span><span
              class="preloader__counter-divider">&nbsp;&nbsp;/&nbsp;&nbsp;</span><span
              class="preloader__counter-number preloader__counter-total">100</span></div> -->
          <!-- - counter -->
          <!-- circle holder -->
          <!-- <div class="preloader__circle"></div> -->
          <!-- - circle holder -->
        <!-- </div>
      </div> -->
      <!-- - PAGE PRELOADER -->
      <!-- Loading Spinner -->
      <svg class="spinner d-lg-none" id="js-spinner" width="65px" height="65px" viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg">
        <circle class="spinner__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30">
        </circle>
      </svg>
      <!-- - Loading Spinner -->
      <!-- Transition Curtain-->
      <!-- TRANSITION CURTAINS -->
      <!-- page curtain AJAX transition -->
      <div class="curtain transition-curtain" id="js-page-transition-curtain">
        <div class="curtain__wrapper-svg">
          <svg class="curtain-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Default Rectangle -->
            <path class="curtain-svg__normal"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z">
            </path>
            <!-- - Default Rectangle -->
            <!-- Curve Top -->
            <path class="curtain-svg__curve curtain-svg__curve_top-desktop"
              d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_top-mobile"
              d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z">
            </path>
            <!-- - Curve Top -->
            <!-- Curve Bottom -->
            <path class="curtain-svg__curve curtain-svg__curve_bottom-desktop"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_bottom-mobile"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z">
            </path>
            <!-- - Curve Bottom -->
          </svg>
        </div>
      </div>
      <!-- - page curtain AJAX transition -->
      <!-- header curtain show/hide -->
      <div class="header-curtain curtain" id="js-header-curtain">
        <div class="curtain__wrapper-svg">
          <svg class="curtain-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Default Rectangle -->
            <path class="curtain-svg__normal"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z">
            </path>
            <!-- - Default Rectangle -->
            <!-- Curve Top -->
            <path class="curtain-svg__curve curtain-svg__curve_top-desktop"
              d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_top-mobile"
              d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z">
            </path>
            <!-- - Curve Top -->
            <!-- Curve Bottom -->
            <path class="curtain-svg__curve curtain-svg__curve_bottom-desktop"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_bottom-mobile"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z">
            </path>
            <!-- - Curve Bottom -->
          </svg>
        </div>
      </div>
      <!-- - header curtain show/hide -->
      <!-- header curtain AJAX transition -->
      <div class="header-curtain header-curtain_transition curtain" id="js-header-curtain-transition">
        <div class="curtain__wrapper-svg">
          <svg class="curtain-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Default Rectangle -->
            <path class="curtain-svg__normal"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z">
            </path>
            <!-- - Default Rectangle -->
            <!-- Curve Top -->
            <path class="curtain-svg__curve curtain-svg__curve_top-desktop"
              d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_top-mobile"
              d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z">
            </path>
            <!-- - Curve Top -->
            <!-- Curve Bottom -->
            <path class="curtain-svg__curve curtain-svg__curve_bottom-desktop"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z">
            </path>
            <path class="curtain-svg__curve curtain-svg__curve_bottom-mobile"
              d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z">
            </path>
            <!-- - Curve Bottom -->
          </svg>
        </div>
      </div>
      <!-- - header curtain AJAX transition -->
      <!-- - TRANSITION CURTAINS -->
      <!-- Cursor Follower-->
      <div class="cursor" id="js-cursor">
        <div class="cursor__wrapper">
          <!-- circles -->
          <div class="cursor__follower">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle id="inner" cx="25" cy="25" r="24" style="opacity: 0.6;"></circle>
              <circle id="outer" cx="25" cy="25" r="24"
                style="stroke-dashoffset: 252.327; stroke-dasharray: 0px, 999999px;"></circle>
            </svg>
          </div>
          <!-- - circles -->
          <!-- arrows -->
          <div class="cursor__arrows">
            <div class="cursor__arrow cursor__arrow_up material-icons">keyboard_arrow_up</div>
            <div class="cursor__arrow cursor__arrow_down material-icons">keyboard_arrow_down</div>
            <div class="cursor__arrow cursor__arrow_left material-icons">keyboard_arrow_left</div>
            <div class="cursor__arrow cursor__arrow_right material-icons">keyboard_arrow_right</div>
          </div>
          <!-- - arrows -->
          <!-- label holder -->
          <div class="cursor__label"></div>
          <!-- - label holder -->
          <!-- icon holder -->
          <div class="cursor__icon material-icons"></div>
          <!-- - icon holder -->
        </div>
      </div>
      <!-- - Cursor Follower-->

      <!-- PAGE HEADER -->

      <header class="header header_menu-right header_fixed container-fluid js-header-sticky bg-transparent" id="page-header" data-arts-theme-text="light" data-arts-header-sticky-theme="bg-dark-2" data-arts-header-logo="secondary" data-arts-header-sticky-logo="secondary" data-arts-header-overlay-theme="dark" data-arts-header-overlay-background="#000">
        <!-- top bar -->
        <div class="header__container header__controls">
          <div class="row justify-content-between align-items-center">
            <!-- logo -->
            <div class="col-auto header__col header__col-left">
                <a class="logo" href="{{ route('index') }}">
                <div class="logo__wrapper-img">
                  <!-- primary logo version (for light backgrounds)-->
                  <img class="logo__img-primary" src="{{ asset('/assets/frontend/image/Logo.svg')}}" alt="Logo" height="90">
                  <!-- secondary logo version (for dark backgrounds)-->
                  <img class="logo__img-secondary" src="{{ asset('/assets/frontend/image/Logo.svg')}}" alt="Logo" height="90">
                </div>
                </a>
            </div>
            <!-- - logo -->
            <!-- burger icon -->
            <div class="col-auto header__col">
              <div class="header__burger" id="js-burger" data-arts-cursor="data-arts-cursor" data-arts-cursor-scale="1.7" data-arts-cursor-magnetic="data-arts-cursor-magnetic" data-arts-cursor-hide-native="true">
                <div class="header__burger-line"></div>
                <div class="header__burger-line"></div>
                <div class="header__burger-line"></div>
              </div>
            </div>
            <!-- - burger icon -->
            <!-- "back" button for submenu nav -->
            <div class="header__overlay-menu-back" id="js-submenu-back">
              <div class="arrow arrow-left js-arrow arrow_mini" data-arts-cursor="data-arts-cursor" data-arts-cursor-hide-native="true" data-arts-cursor-scale="0" data-arts-cursor-magnetic="data-arts-cursor-magnetic">
                <svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <circle class="circle" cx="30" cy="30" r="29" fill="none"></circle>
                </svg>
                <div class="arrow__pointer arrow-left__pointer"></div>
                <div class="arrow__triangle"></div>
              </div>
            </div>
            <!-- - "back" button for submenu nav -->
          </div>
        </div>
        <!-- - top bar -->

        
    <div class="whatsappdesktop">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=9819052489&text=Hi%2C+I+am+contacting+you+through+your+website+from+poonamshahart.com">
            <i aria-hidden="true" class="fab fa-whatsapp"></i>
        </a>
    </div>
    
        
        <!-- fullscreen overlay container -->
        <div class="header__wrapper-overlay-menu container-fluid container-fluid_paddings">
            <!-- fullscreen menu -->
            <div class="header__wrapper-menu">
                <ul class="menu-overlay js-menu-overlay">
                    <li menuname="Home-menu">
                        <a class="h3"  href="{{ route('index') }}" data-pjax-link="overlayMenu">
                              <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">Home</div>
                        </a>
                    </li>
                    <li menuname="About-menu">
                        <a class="h3" href="{{ route('about-us') }}" data-pjax-link="overlayMenu">
                              <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">About Us</div>
                        </a>
                    </li>
                    <!--<li menuname="Services-menu" ><a  class="h2" href="services.php" data-pjax-link="overlayMenu">-->
                    <!--    <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">Services</div></a>-->
                    <!--</li>-->

                    @php
                      $services = DB::table('services')->where('status', 1)->get();
                      
                    @endphp
                    @if($services->isNotEmpty())
                    <li menuname="Services-menu" class="menu-item-has-children">
                        
                        <a class="h2 hover-right-arrow" href="#" data-pjax-link="overlayMenu">
                          <div class="d-flex gap-3">
                              <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">Services</div>
                              <img src="{{ asset('/assets/frontend/image/right-arrow-cursor.svg')}}" alt="about" class="about-menu">
                          </div>
                        </a>
                        <ul class="sub-menu">
                          @foreach($services as $row)
                          <li>
                            <a class="h3" href="{{ url(route('service.detail', ['slug' => $row->slug] )) }}" data-pjax-link="overlayMenu">
                              <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">{{$row->title}}</div>
                            </a>
                          </li>
                          @endforeach                            
                        </ul>

                    </li>
                    @endif
                    <li menuname="Gallery-menu" >
                      <a  class="h2" href="{{ route('gallery') }}" data-pjax-link="overlayMenu">
                        <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">Gallery</div>
                      </a>
                    </li>
                    <li menuname="NewsMedia-menu" >
                      <a  class="h2" href="{{ route('news-media') }}" data-pjax-link="overlayMenu">
                        <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">News & Media</div>
                      </a>
                    </li>
                    <li menuname="Contactus-menu">
                      <a  class="h2" href="{{ route('contact') }}" data-pjax-link="overlayMenu">
                        <div class="menu-overlay__item-wrapper split-text js-split-text" data-split-text-type="lines">Contact us</div>
                      </a>
                    </li>

                </ul>
                <!--<div class="hover-element"></div>-->
              </div>
            <div class="link-img d-none d-md-block">
                <img class="active" loading="lazy" id="Home-menu" src="{{ asset('/assets/frontend/image/menu/home.png')}}" alt="home">
                <img loading="lazy" id="About-menu" src="{{ asset('/assets/frontend/image/menu/about.png')}}" alt="about">
                <img loading="lazy" id="Services-menu" src="{{ asset('/assets/frontend/image/menu/service-1.png')}}" alt="service-1">
                <img loading="lazy" id="Gallery-menu" src="{{ asset('/assets/frontend/image/menu/gallery.png')}}" alt="gallery">
                <img loading="lazy" id="NewsMedia-menu" src="{{ asset('/assets/frontend/image/menu/newsandmedia.png')}}" alt="newsandmedia">
                <img loading="lazy" id="Contactus-menu" src="{{ asset('/assets/frontend/image/menu/contact.png')}}" alt="contact">
            </div>
        </div>
        <!-- - fullscreen overlay container -->
      </header>
      <style>
          .header__wrapper-overlay-menu .link-img{
              opacity:0;
          }
      </style>
      

{{--
<div>
  <?php
  // Check if the current script is index.php
  if (basename($_SERVER['SCRIPT_NAME']) === 'index.php') {
      // If it's the home page, display the content
  ?>
      <div class="loading-page">
          <div class="loader__logo">
            <img decoding="async" class="style-svg" src="/assets/images/logo.png" alt="logo">
          </div>
          <div class="container-fluid">
              <div class="text-wrapper">
                <p class="rotating3d-text">PORTS SHIPYARDS</p>
                <p class="rotating3d-text">OIL & GAS HEAVY LIFT</p>
                <p class="rotating3d-text">SALVAGE SUBSEA</p>
                <p class="rotating3d-text">P&I / H&M / MWS / TPI</p>
                <p class="rotating3d-text">OFFSHORE DESIGN ENGINEERING</p>
                <p class="rotating3d-text">SHIP RECYCLING PMC</p>
              </div>
          </div>
      </div>
  <?php
  }
  ?>
  </div>
--}}