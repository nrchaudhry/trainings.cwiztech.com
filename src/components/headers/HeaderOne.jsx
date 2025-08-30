import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import Logo from "../../assets/img/logopng.png"; // Adjust the path as necessary

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding "  to="/">
                  <img src={Logo} alt="Logo" /> 
                </Link>
                <div className="td_header_social_btns">
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                        <li>
                          <Link to="/">Home</Link>
                          {/*<ul>
                            <li>
                              <Link to="/">University</Link>
                            </li>
                             <li>
                              <Link to="/home-v2">Online Educations</Link>
                            </li>
                            <li>
                              <Link to="/home-v3">Education</Link>
                            </li>
                            <li>
                              <Link to="/home-v4">Kindergarten</Link>
                            </li>
                            <li>
                              <Link to="/home-v5">Modern Language</Link>
                            </li>
                            <li>
                              <Link to="/home-v6">Al-Quran Learning</Link>
                            </li>
                            <li>
                              <Link to="/home-v7">Motivation Speaker</Link>
                            </li>
                            <li>
                              <Link to="/home-v8">Kitchen Coach</Link>
                            </li> 
                          </ul>*/}
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/products">Courses</Link>
                          <ul>
                            <li>
                              <Link to="/courses-grid-view">
                                English Langauge <br />
                                (IELTS / PTE / HND Level 5)
                              </Link>
                            </li>
                            <li>
                              <Link to="/courses-list-view">
                                Business Studies
                              </Link>
                            </li>
                            <li>
                              <Link to="/courses-grid-with-sidebar">
                                Computer Sciences 
                              </Link>
                            </li>
                            <li>
                              <Link to="/course-details">More</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                      </ul>

                       <Link className="td_site_branding" to="/">
                      <img 
                        src={Logo} 
                        alt="Logo" 
                        style={{ borderRadius: "6px", width: "130px", height: "auto" }} 
                      />
                    </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                            <li>
                              <Link to="/event">Events</Link>
                            </li>
                        {/* <li className="menu-item-has-children td_mega_menu">
                          <Link to="#">Pages</Link>
                          <ul className="td_mega_wrapper">
                            <li className="menu-item-has-children">
                              <h4>Inner Pages</h4>
                              <ul>
                                <li>
                                  <Link to="/event">Upcoming Event</Link>
                                </li>
                                <li>
                                  <Link to="/event-details">Event Details</Link>
                                </li>
                                <li>
                                  <Link to="/team-members">Team Members</Link>
                                </li>
                                <li>
                                  <Link to="/team-member-details">
                                    Team Details
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Inner Pages</h4>
                              <ul>
                                <li>
                                  <Link to="/students-registrations">
                                    Students Registrations
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor-registrations">
                                    Instructor Registrations
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/signup">Signup</Link>
                                </li>
                                <li>
                                  <Link to="/signin">Signin</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Shop Pages</h4>
                              <ul>
                                <li>
                                  <Link to="/faqs">Faqs</Link>
                                </li>
                                <li>
                                  <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                  <Link to="/checkout">Checkout</Link>
                                </li>
                                <li>
                                  <Link to="/error">Error</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <Link to="/blog">Blogs</Link>
                          {/* <ul>
                            <li>
                              <Link to="/blog">Blogs</Link>
                            </li>
                            <li>
                              <Link to="/blog-with-sidebar">
                                Blog With Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div>

                <div className="position-relative">
                  <HeaderSearch />
                </div>

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
