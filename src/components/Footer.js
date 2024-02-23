import React from "react";
import { NavLink } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-black text-white">
        <div className="row justify-content-evenly footer-container pt-5">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 col1">
            <p className="col1 p-0">
              Design amazing digital experiences that create more happiness in
              the world.
            </p>
          </div>
          <div className="col-lg-1 col-md-3 col-sm-3 col-6 col2 leading-relaxed">
            <h6 className="text-uppercase mt-2 mb-3 font-weight-bold footer-head font-semibold text-gray-300">
              Products
            </h6>
            <p>
              <NavLink className="text-white">Overview</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Features</NavLink>
            </p>
            <p>
              <NavLink className="text-white">
                Solutions
                <span className="bg-gray-200 mx-1 px-2 text-black rounded-xl">
                  New
                </span>
              </NavLink>
            </p>
            <p>
              <NavLink className="text-white">Tutorials</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Pricing</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Releases</NavLink>
            </p>
          </div>
          <div className="col-lg-1 col-md-3 col-sm-3 col-6 col3 leading-relaxed">
          <h6 className="text-uppercase mt-2 mb-3 font-weight-bold footer-head font-semibold text-gray-300">
              Company
            </h6>
            <p>
              <NavLink className="text-white">About Us</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Careers</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Press</NavLink>
            </p>
            <p>
              <NavLink className="text-white">News</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Media Kit</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Contact</NavLink>
            </p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-3 col-6 col4 leading-relaxed">
          <h6 className="text-uppercase mt-2 mb-3 font-weight-bold footer-head font-semibold text-gray-300">
              Resources
            </h6>
            <p>
              <NavLink className="text-white">Blog</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Newsletter</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Events</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Help centre</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Tutorials</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Support</NavLink>
            </p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-3 col-6 col5 leading-relaxed">
          <h6 className="text-uppercase mt-2 mb-3 font-weight-bold footer-head font-semibold text-gray-300">
              Social
            </h6>
            <p>
              <NavLink className="text-white">Instagram</NavLink>
            </p>
            <p>
              <NavLink className="text-white">LinkedIn</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Facebook</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Youtube</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Twitter</NavLink>
            </p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-3 col-6 col6 leading-relaxed">
          <h6 className="text-uppercase mt-2 mb-3 font-weight-bold footer-head font-semibold text-gray-300">
              Legal
            </h6>
            <p>
              <NavLink className="text-white">Terms</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Privacy</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Cookies</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Licenses</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Settings</NavLink>
            </p>
            <p>
              <NavLink className="text-white">Contact</NavLink>
            </p>
          </div>
          <div className="row d-flex align-items-center justify-evenly bottom-footer p-3 mt-5 bg-gray-800 text-gray-100">
            <div className="col-12 col-md-7 text-center text-md-start mb-3 mb-md-0">
              <div className="p-3 mx-5 bottom-footer-text">
                @2024 Qloron All Rights Reserved
              </div>
            </div>
            <div className="col-12 col-md-5 text-center text-md-end ">
              <i className="fa-brands fa-instagram fa-2x mx-2 cursor-pointer hover:text-gray-300"></i>
              <i className="fa-brands fa-linkedin fa-2x mx-2 cursor-pointer hover:text-gray-300"></i>
              <i className="fa-brands fa-facebook fa-2x mx-2 cursor-pointer hover:text-gray-300"></i>
              <i className="fa-brands fa-twitter fa-2x mx-2 cursor-pointer hover:text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
