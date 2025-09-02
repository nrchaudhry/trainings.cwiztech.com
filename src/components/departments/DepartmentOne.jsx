import React from "react";
import { Code, Layout, Brain, Award } from "lucide-react";

export const DepartmentOne = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase text-black td_accent_color">
            Our Programs
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Featured CWIZTECH Programs
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            At CWIZTECH, we provide cutting-edge IT training programs designed to boost your skills, 
            enhance your career, and keep you ahead in today’s digital world.
          </p>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="td_iconbox_1_wrap">
          {/* Software Development */}
          <div
            className=" text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className=" td_mb_10">
              <Code size={100} color="#1c6c39" aria-label="Software Development icon" />
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36 text-black">
              Software <br />Development
            </h3>
          </div>

          {/* UI/UX Design */}
          <div
            className=" text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className=" td_mb_10">
              <Layout size={100} color="#1c6c39" aria-label="UI/UX Design icon" />
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36 text-black">
              UI/UX <br />Design
            </h3>
          </div>

          {/* AI/ML Engineering */}
          <div
            className=" text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className=" td_mb_10">
              <Brain size={100} color="#1c6c39" aria-label="AI/ML Engineering icon" />
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36 text-black">
              AI/ML <br />Engineering
            </h3>
          </div>

          {/* IT Certifications */}
          <div
            className="text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className=" td_mb_10">
              <Award size={100} color="#1c6c39" aria-label="IT Certifications icon" />
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36 text-black">
              IT <br />Certifications
            </h3>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};