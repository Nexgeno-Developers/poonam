
            <!-- ========== Left Sidebar Start ========== -->
            <div class="leftside-menu menuitem-active">

                <!-- Brand Logo Light -->
                <a href="#" class="logo logo-light">
                    <span class="logo-lg">
                        <img src="/assets/image/footer_logo.png" alt="logo">
                    </span>
                    <span class="logo-sm">
                        <img src="/assets/images/logo-sm.png" alt="small logo">
                    </span>
                </a>

                <!-- Brand Logo Dark -->
                <a href="#" class="logo logo-dark">
                    <span class="logo-lg">
                        <img src="/assets/images/logo-dark.png" alt="dark logo">
                    </span>
                    <span class="logo-sm">
                        <img src="/assets/images/logo-dark-sm.png" alt="small logo">
                    </span>
                </a>

                <!-- Sidebar Hover Menu Toggle Button -->
                <div class="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Show Full Sidebar" data-bs-original-title="Show Full Sidebar">
                    <i class="ri-checkbox-blank-circle-line align-middle"></i>
                </div>

                <!-- Full Sidebar Menu Close Button -->
                <div class="button-close-fullsidebar">
                    <i class="ri-close-fill align-middle"></i>
                </div>

                <!-- Sidebar -left -->
                <div class="h-100 show" id="leftside-menu-container" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
                    <!-- Leftbar User -->
                    <div class="leftbar-user">
                        <a href="#" target="_blank">
                            <img src="/assets/image/footer_logo.png" alt="user-image" height="42" class="rounded-circle shadow-sm">
                            <span class="leftbar-user-name mt-2">{{ auth()->user()->name }}</span>
                        </a>
                    </div>

                    <!--- Sidemenu -->
                    <ul class="side-nav">

                        <li class="side-nav-title ms-1">Navigation</li>

                        {{-- <li class="side-nav-item"> <!--menuitem-active-->
                            <a href="{{ route('backend.dashboard') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <span> Dashboards </span>
                            </a>
                        </li> --}}




                        <li class="side-nav-item">
                            <a href="{{ route('backend.home.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Home Page </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="{{ route('backend.about.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> About Page </span>
                            </a>
                        </li>


                        <li class="side-nav-item">
                            <a href="{{ route('backend.service.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Service Page </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="{{ route('backend.gallery.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Gallery Page </span>
                            </a>
                        </li>


                        <li class="side-nav-item">
                            <a href="{{ route('backend.newsandmedia.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> News And Media Page </span>
                            </a>
                        </li>


                        <li class="side-nav-item">
                            <a href="{{ route('backend.contact.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Contact Page </span>
                            </a>
                        </li>

 {{--
                        <li class="side-nav-item">
                            <a href="{{ route('backend.business.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Business Page </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="{{ route('backend.products.page') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-bar-chart-2-line"></i> 
                                <span> Products Page </span>
                            </a>
                        </li>

                       

                        <li class="side-nav-item">
                            <a href="{{ route('practicearea.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-suitcase-line"></i> 
                                <span> Practice Area </span>
                            </a>
                        </li>

                        --}}

                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('mediacoverage.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-clapperboard-line"></i> 
                                <span> Media Coverage </span>
                            </a>
                        </li> --}}

                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('publication.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-quill-pen-line"></i> 
                                <span> Publication </span>
                            </a>
                        </li> --}}
                        
                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('faq.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-questionnaire-line"></i> 
                                <span> FAQs </span>
                            </a>
                        </li> --}}

                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('testimonial.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-discuss-line"></i>                                
                                <span> Testimonials </span>
                            </a>
                        </li>
                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('team.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-group-2-line"></i>                                
                                <span> Teams </span>
                            </a>
                        </li> --}}

                        {{--
                        <li class="side-nav-item">
                            <a href="{{ route('award.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-award-fill"></i>                                
                                <span> Awards </span>
                            </a>
                        </li> --}}

                        {{--
                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="{{ url('#sidebarEcommerce') }}" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                <i class="ri-article-line"></i>
                                <span> Posts </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEcommerce">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="{{ route('blogs.index') }}">All Posts</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('blogcategory.index') }}">Category</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('blogcomment.index') }}">Comment</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('author.index') }}">Author</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="{{ url('#sidebarEmail') }}" aria-expanded="false" aria-controls="sidebarEmail" class="side-nav-link">
                                <i class="ri-article-line"></i>
                                <span> Page </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEmail">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="{{ route('contactpage.index') }}">Contact Page</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('setting.privacy') }}">Privacy Policy Page</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('setting.terms') }}">Terms & Conditions Page</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('setting.refund_policy') }}">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        

                        <li class="side-nav-item">
                            <a href="{{ route('setting.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-settings-2-line"></i>                                
                                <span> Setting </span>
                            </a>
                        </li>

                        --}}
                    </ul>
                    <!--- End Sidemenu -->

                    <div class="clearfix"></div>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 2064px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 240px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
            </div>
            <!-- ========== Left Sidebar End ========== -->