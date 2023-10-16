import React from "react";


import { Link } from "react-router-dom";


export default function Sidebar(){
    return <>
    <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link to="/" className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* </hr> */}

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Interface</div>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Components</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <Link to='/Buttons' className="collapse-item" href="buttons.html">
                  Buttons
                </Link>
                <Link to='/Cards' className="collapse-item" href="cards.html">
                  Cards
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-fw fa-wrench"></i>
              <span>Utilities</span>
            </a>
            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <Link to='/Colors' className="collapse-item" href="utilities-color.html">
                  Colors
                </Link>
                <Link to='/Borders' className="collapse-item" href="utilities-border.html">
                  Borders
                </Link>
                <Link to='/Animations' className="collapse-item" href="utilities-animation.html">
                  Animations
                </Link>
                <Link to='/Others' className="collapse-item" href="utilities-other.html">
                  Other
                </Link>
              </div>
            </div>
          </li>
          {/* </hr> */}

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Addons</div>
          




          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
              
            >


              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
           </a>
           
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link to='/Login' className="collapse-item" href="login.html">
                  Login
                </Link>
                <Link to='/Register' className="collapse-item" href="register.html">
                  Register
                </Link>
                <Link to='/Forgot' className="collapse-item" href="forgot-password.html">
                  Forgot Password
                </Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <Link to='/Page' className="collapse-item" href="404.html">
                  404 Page
                </Link>
                <Link to='/Blankpage' className="collapse-item" href="blank.html">
                  Blank Page
                </Link> 
              </div>
            </div>
          </li> 

          <li className="nav-item">
            <Link to ='/Charts' className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Tables" className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </Link>
          </li>
          {/* </hr> */}

          <hr className="sidebar-divider d-none d-md-block" />

          <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


          <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              src="img/undraw_rocket.svg"
              alt="..."
            />
            <p className="text-center mb-2">
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <a
              className="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </a>
          </div>
          {/* </hr> */}
        </ul>
        <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

   
    

    
    </>
}