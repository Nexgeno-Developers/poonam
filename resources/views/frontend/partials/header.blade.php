 <!--<!--   <div>
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
  </div>-->

 <div class="scroll-container" data-scroll-container="" data-scroll-section-id="section0" data-scroll-section-inview=""
     style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3038, 0, 1);opacity: 1;pointer-events: all;">

     <header id="header" class="header --start-position">
         <div class="header__top">
             <div class="col-md-6 header_left d-flex justify-content-end">
                 <div class="header__logo">
                     <a href="{{ url('/') }}" class="logo --pc">
                         <img decoding="async" class="style-svg" src="/assets/images/Logo1.png" alt="logo">
                     </a>
                 </div>
             </div>

             <div class="col-md-6 header_right d-flex justify-content-end align-items-center">
                 <div class="whatsap_logo">
                     <a target="_blank"
                         href="https://api.whatsapp.com/send?phone=+919920222233&text=Hi,%20I%20am%20contacting%20you%20through%20your%20website%20from%20desktop%20view%20https://attariclasses.in/"
                         class="logo --pc">
                         <img decoding="async" class="style-svg" src="/assets/images/whatsapp_icon.png" alt="logo">
                     </a>
                 </div>
                 <div class="login_logo">
                     <a href="tel:+919920222233" class="logo --pc">
                         <img decoding="async" class="style-svg" src="/assets/images/login_logo.png" alt="logo">
                     </a>
                 </div>
                 <div class="header__burger">
                     <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                         <g>
                             <line x1="0" y1="17" x2="48" y2="17" stroke-width="7"
                                 stroke-linecap="round" stroke-linejoin="round" />
                             <line x1="0" y1="31" x2="48" y2="31" stroke-width="7"
                                 stroke-linecap="round" stroke-linejoin="round" />
                         </g>
                         <g>
                             <line x1="0" y1="24" x2="48" y2="24" stroke-width="7"
                                 stroke-linecap="round" />
                             <line x1="0" y1="24" x2="48" y2="24" stroke-width="7"
                                 stroke-linecap="round" />
                         </g>
                     </svg>
                 </div>
             </div>
         </div>

         <nav class="header__menu">
             <div class="header__menu-wrap">
                 <ul id="menu-glavnoe-menyu" class="menu">
                     <li id="menu-item-35"
                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item">
                         <a href="{{ url('/') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">HOME PAGE</div>
                         </a>
                     </li>
                     <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('about-us') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">ABOUT US</div>
                         </a>
                     </li>
                     <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('our-business') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">OUR BUSINESS</div>
                         </a>
                     </li>
                     <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('products') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">PRODUCTS</div>
                         </a>
                     </li>
                     <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('projects') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">PROJECTS AND
                                 ACCREDITATIONS</div>
                         </a>
                     </li>
                     <li id="menu-item-606" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="#">
                             <div class="js-animated-text js-animated-text-menu translation-block">BROCHURE</div>
                         </a>
                     </li>
                     <li id="menu-item-606" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('career') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">CAREER</div>
                         </a>
                     </li>
                     <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page">
                         <a href="{{ route('contact') }}">
                             <div class="js-animated-text js-animated-text-menu translation-block">CONTACT US</div>
                         </a>
                     </li>
                 </ul>
             </div>
         </nav>
     </header>
