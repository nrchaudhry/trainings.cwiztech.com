import React from "react";

import videoBg from "../../assets/img/home_1/video_bg.jpg";
import { VideoPlayer } from "./VideoPlayer";

export const VideoOne = () => {
  return (
    <section>
      <div
        className="td_video_block td_style_1 td_accent_bg td_bg_filed td_center text-center"
        style={{ backgroundImage: `url(${videoBg})` }}
      >
        <div className="container">
          <VideoPlayer
            trigger={
              <a
                href="#vid2"
                className="td_player_btn_wrap_2 td_video_open wow zoomIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="td_player_btn td_center">
                  <span></span>
                </span>
              </a>
            }
          />

          <div className="td_height_70 td_height_lg_50" />
          <h2
          className="td_fs_48 td_white_color mb-0 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          style={{ backgroundColor: '#555', padding: '30px', borderRadius: '50px', width: '300px', border: '4px solid #fff' }} // Dark background with padding for visibility
          >
          Explore <span style={{ color: "#28A745" }}>BETS</span> Campuses <br />
          Through a <span style={{ color: "#28A745" }}>Video</span> Tour
          </h2>
        </div>
      </div>
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.25s"
      >
        <div className="td_contact_box td_style_1 td_accent_bg td_radius_10">
          <div className="td_contact_box_left">
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Get In Touch:
            </p>
            <h3 className="td_fs_36 mb-0 td_white_color">
              <a href="mailto:info@bets.edu.uk">info@bets.edu.uk</a>
            </h3>
          </div>
          <div className="td_contact_box_or td_fs_24 td_medium td_white_bg td_white_bg td_center rounded-circle td_accent_color">
            or
          </div>
          <div className="td_contact_box_right">
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Get In Touch:
            </p>
            <h3 className="td_fs_36 mb-0 td_white_color">
              <a href="tel:+924235883281">+92 42 3588 3281</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};