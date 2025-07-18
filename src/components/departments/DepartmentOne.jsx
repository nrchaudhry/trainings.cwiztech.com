import React from "react";

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
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Departments
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Featured BETS Programs
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Discover top-tier education and training programs at British Education & Training Systems, <br />
            designed to enhance your skills and career prospects across the UK and beyond.
          </p>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="td_iconbox_1_wrap">
          {/* English Languages */}
          <div
            className="td_iconbox td_style_1 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_iconbox_icon td_accent_color td_mb_10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20V6H4V4Z" fill="#28A745"/>
                <path d="M4 10H20V12H4V10Z" fill="#28A745"/>
                <path d="M4 16H14V18H4V16Z" fill="#28A745"/>
                <path d="M17 14L21 18L17 22V14Z" fill="#28A745"/>
              </svg>
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36">
              English Languages
            </h3>
          </div>

          {/* Business Studies */}
         <div
            className="td_iconbox td_style_1 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_iconbox_icon td_accent_color td_mb_10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Stocks icon"
              >
                <path
                  d="M20 80H30V40H20V80ZM40 80H50V20H40V80ZM60 80H70V60H60V80ZM80 80H90V30H80V80Z"
                  fill="#890C25"
                />
              </svg>
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36">
              Business Studies
            </h3>
          </div>

          {/* Computer Science */}
          <div
            className="td_iconbox td_style_1 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_iconbox_icon td_accent_color td_mb_10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="12" rx="2" fill="#28A745"/>
                <path d="M8 20H16" stroke="#28A745" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16V20" stroke="#28A745" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36">
              Computer Science
            </h3>
          </div>

          {/* Scholarships and More */}
          <div
            className="td_iconbox td_style_1 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_iconbox_icon td_accent_color td_mb_10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Currency icon"
              >
                <path
                  d="M20 60H80V80H20V60ZM30 40H70V60H30V40ZM40 20H60V40H40V20Z"
                  fill="#890C25"
                />
              </svg>
            </div>
            <h3 className="td_iconbox_title mb-0 td_medium td_fs_36">
              Scholarships and More
            </h3>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
