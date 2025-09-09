import React from "react";
import { BlogOneItem } from "./BlogOneItem";

import post1 from "../../assets/img/home_1/AI.jpg";
import post2 from "../../assets/img/home_1/PC.jpg";
import post3 from "../../assets/img/home_1/robo.jpg";

export const BlogOne = () => {
  const blogPosts = [
   {
  src: post1,
  date: "Aug 23, 2025",
  author: "CWIZTECH Team",
  title: "AI & Data Analysis: Transforming the Modern Era",
  description:
    "Explore how AI-powered data analysis is reshaping industries and creating smarter decision-making systems.",
  delay: "0.2s",
},
{
  src: post2,
  date: "Jun 20, 2025",
  author: "CWIZTECH Team",
  title: "Mastering Software Development with CWIZTECH",
  description:
    "A complete guide to building modern applications, covering full-stack development and real-world projects.",
  delay: "0.3s",
},
{
  src: post3,
  date: "Jan 18, 2025",
  author: "CWIZTECH Team",
  title: "High-Tech Skills for the Future Workforce",
  description:
    "Discover the essential technologies and training needed to thrive in today’s rapidly evolving digital world.",
  delay: "0.4s",
},

  ];

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color text-black">
            BLOG & ARTICLES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Take A Look At The Latest <br />
            Articles
          </h2>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30 ">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-lg-4 wow fadeInUp text-black"
              data-wow-duration="1s"
              data-wow-delay={post.delay}
              
            >
              <BlogOneItem {...post} />
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
