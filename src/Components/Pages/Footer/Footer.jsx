import React from "react";
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className="font-semibold" >
      <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <img src={logo} alt="" />
            <p>
              FoodLand Ltd.
              <br />
              Providing reliable since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Product</span>
            <a className="link link-hover">Food Menu</a>
            <a className="link link-hover">Blog post</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
