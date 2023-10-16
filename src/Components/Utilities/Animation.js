import Sidebar from '../Pages/Sidebar'
import Topbar from '../Pages/Topbar'


export default function Animations(){
    return <><div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div className='container-fluid'></div>
    <div class="container-fluid">

   
    <h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
            href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
        below were created to extend this theme past the default utility classes built into Bootstrap's
        framework.</p>

   
    <div class="row">

       
        <div class="col-lg-6">

            <div class="card position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <code>.animated--grow-in</code>
                    </div>
                    <div class="small mb-1">Navbar Dropdown Example:</div>
                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-right animated--grow-in"
                                    aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <p class="mb-0 small">Note: This utility animates the CSS transform property,
                        meaning it will override any existing transforms on an element being animated!
                        In this theme, the grow in animation is only being used on dropdowns within the
                        navbar.</p>
                </div>
            </div>

        </div>

        
        <div class="col-lg-6">

            <div class="card position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <code>.animated--fade-in</code>
                    </div>
                    <div class="small mb-1">Navbar Dropdown Example:</div>
                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-right animated--fade-in"
                                    aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="small mb-1">Dropdown Button Example:</div>
                    <div class="dropdown mb-4">
                        <button class="btn btn-primary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Dropdown
                        </button>
                        <div class="dropdown-menu animated--fade-in"
                            aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <p class="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                        it will override any existing opacity on an element being animated!</p>
                </div>
            </div>

        </div>

    </div>
    <div>
    

    </div>
</div>
<footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>

            </footer>
            <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

  
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</>
}