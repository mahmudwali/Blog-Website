/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { postCategories } from "../APIRequest/APIRequest";
import { NavLink } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Layout = (props) => {
  const [Categories, SetCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postCategories();
      SetCategories(res);
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="navbar shadow bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Mobile View NavBar */}
              <li>
                <NavLink to={"/"}> হোম </NavLink>
              </li>

              {Categories.map((item, index) => {
                return (
                  <li key={index.toString()}>
                    <NavLink to={"/byCategory/" + item["id"]}>
                      {" "}
                      {item["name"]}{" "}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">বাংলায় কথা বলা</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Web View NavBar */}
            <li>
              <NavLink to={"/"}> হোম </NavLink>
            </li>
            {Categories.map((item, index) => {
              return (
                <li key={index.toString()}>
                  <NavLink to={"/byCategory/" + item["id"]}>
                    {" "}
                    {item["name"]}{" "}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="navbar-end"></div> */}
      </div>

      {props.children}

      {/*  Footer Area */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
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
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
        <div className="footer footer-center p-4 bg-base-200 text-base-content">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>

    </div>
  );
};

export default Layout;
