import React, { useEffect, useState } from 'react';
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesOneItem } from "./CoursesOneItem";
import { useCoursesData } from "../../hooks/useCoursesData";

import courseThumb1 from "../../assets/img/home_1/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_1/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_1/course_thumb_3.jpg";
import courseThumb4 from "../../assets/img/home_1/course_thumb_4.jpg";
import courseThumb5 from "../../assets/img/home_1/course_thumb_5.jpg";
import courseThumb6 from "../../assets/img/home_1/course_thumb_6.jpg";
import { useCourses } from "../../contexts/coursecontext";

export const CoursesOne = () => {
  let [activeQualificationID, setActiveQualificationID] = useState(null);
  
  // Using custom hook instead  direct API calls
  const {
    courses,
    loading,
    error,
    groupedCourses,
    qualifications
  } = useCoursesData({
    autoLoad: true,
    sortBy: 'course_TITLE',
    sortOrder: 'asc'
  });

  // Set first qualification as active when data loads
  useEffect(() => {
    if (Object.keys(groupedCourses).length > 0 && !activeQualificationID) {
      const firstQualificationID = Object.keys(groupedCourses)[0];
      setActiveQualificationID(firstQualificationID);
    }
  }, [groupedCourses, activeQualificationID]);

  // Handle tab click (qualification selection)
  const handleQualificationClick = (qualificationID) => {
    setActiveQualificationID(qualificationID);
  };

  // Loading state
  if (loading) {
    return (
      <section className="td_gray_bg_3">
        <div className="td_height_112 td_height_lg_75" />
        <div className="container">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading courses...</span>
            </div>
            <p className="mt-3">Loading courses...</p>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="td_gray_bg_3">
        <div className="td_height_112 td_height_lg_75" />
        <div className="container">
          <div className="text-center">
            <div className="alert alert-danger" role="alert">
              <h4>Error Loading Courses</h4>
              <p>{error}</p>
              <button 
                className="btn btn-primary" 
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    );
  }

  // No courses state
  if (!courses || courses.length === 0) {
    return (
      <section className="td_gray_bg_3">
        <div className="td_height_112 td_height_lg_75" />
        <div className="container">
          <div className="text-center">
            <h3>No courses available at the moment</h3>
            <p>Please check back later.</p>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    );
  }

  return (
    <section className="td_gray_bg_3">
      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        {/* Header */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.15s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Popular Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Academic Courses</h2>
        </div>
        <div className="td_height_30 td_height_lg_30" />

        {/* Qualifications List (Tabs) */}
        <div className="td_tabs">
          <ul
            className="td_tab_links td_style_1 td_mp_0 td_fs_20 td_medium td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            {Object.entries(groupedCourses).map(([qualificationID, courseList]) => (
              <li
                key={qualificationID}
                className={activeQualificationID === qualificationID ? 'active' : ''}
              >
                <a
                  href={`#tab_${qualificationID}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleQualificationClick(qualificationID);
                  }}
                >
                  {courseList[0]?.qualification?.qualification_NAME || 'Unknown Qualification'}
                </a>
              </li>
            ))}
          </ul>

          <div className="td_height_50 td_height_lg_50" />

          {/* Qualification Content */}
          <div className="td_tab_body">
            {Object.entries(groupedCourses).map(([qualificationID, courseList]) => (
              <div
                key={qualificationID}
                className={`td_tab ${activeQualificationID === qualificationID ? 'active' : ''}`}
                id={`tab_${qualificationID}`}
              >
                <div className="row td_gap_y_24">
                  {courseList.map((course, idx) => (
                    <div
                      key={course.course_ID || idx}
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <CoursesOneItem {...course} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};


const coursesUndergrad = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Data Analytics",
    title: "Starting Reputed Education & Build your Skills",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Software Engeneer",
    title: "Master Technology & Elevate Your Career",
    description: "Unlock the power of technology to drive your career forward.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Bachelor Of Arts",
    title: "Boost Creativity & Expand Your Horizons",
    description:
      "Discover innovative techniques to enhance your creative thinking.",
    totalRatings: 12,
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    seats: 250,
    semesters: 12,
    subtitle: "Business Administrator",
    title: "Hone Leadership & Achieve Success",
    description:
      "Develop essential leadership skills to excel in any industry.",
    totalRatings: 30,
    delay: "0.2s",
  },
  {
    src: courseThumb5,
    seats: 80,
    semesters: 12,
    subtitle: "Fine of Arts",
    title: "Learn Coding & Advance Your Skills Up",
    description:
      "Gain in-demand coding expertise to stay ahead in the tech world.",
    totalRatings: 5,
    delay: "0.25s",
  },
  {
    src: courseThumb6,
    seats: 200,
    semesters: 12,
    subtitle: "Computer Science",
    title: "Explore Marketing & Build Your Brand",
    description:
      "Master marketing strategies to grow your personal or business brand.",
    totalRatings: 15,
    delay: "0.3s",
  },
];

const coursesGraduate = [
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Bachelor Of Arts",
    title: "Boost Creativity & Expand Your Horizons",
    description:
      "Discover innovative techniques to enhance your creative thinking.",
    totalRatings: 12,
    delay: "0.2s",
  },
  {
    src: courseThumb4,
    seats: 250,
    semesters: 12,
    subtitle: "Business Administrator",
    title: "Hone Leadership & Achieve Success",
    description:
      "Develop essential leadership skills to excel in any industry.",
    totalRatings: 30,
    delay: "0.25s",
  },
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Data Analytics",
    title: "Starting Reputed Education & Build your Skills",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    totalRatings: 5,
    delay: "0.3s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Software Engeneer",
    title: "Master Technology & Elevate Your Career",
    description: "Unlock the power of technology to drive your career forward.",
    totalRatings: 10,
    delay: "0.2s",
  },
  {
    src: courseThumb5,
    seats: 80,
    semesters: 12,
    subtitle: "Fine of Arts",
    title: "Learn Coding & Advance Your Skills Up",
    description:
      "Gain in-demand coding expertise to stay ahead in the tech world.",
    totalRatings: 5,
    delay: "0.25s",
  },
  {
    src: courseThumb6,
    seats: 200,
    semesters: 12,
    subtitle: "Computer Science",
    title: "Explore Marketing & Build Your Brand",
    description:
      "Master marketing strategies to grow your personal or business brand.",
    totalRatings: 15,
    delay: "0.3s",
  },
];

const coursesOnline = [
  {
    src: courseThumb4,
    seats: 250,
    semesters: 12,
    subtitle: "Business Administrator",
    title: "Hone Leadership & Achieve Success",
    description:
      "Develop essential leadership skills to excel in any industry.",
    totalRatings: 30,
    delay: "0.2s",
  },
  {
    src: courseThumb5,
    seats: 80,
    semesters: 12,
    subtitle: "Fine of Arts",
    title: "Learn Coding & Advance Your Skills Up",
    description:
      "Gain in-demand coding expertise to stay ahead in the tech world.",
    totalRatings: 5,
    delay: "0.25s",
  },
  {
    src: courseThumb6,
    seats: 200,
    semesters: 12,
    subtitle: "Computer Science",
    title: "Explore Marketing & Build Your Brand",
    description:
      "Master marketing strategies to grow your personal or business brand.",
    totalRatings: 15,
    delay: "0.3s",
  },
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Data Analytics",
    title: "Starting Reputed Education & Build your Skills",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Software Engeneer",
    title: "Master Technology & Elevate Your Career",
    description: "Unlock the power of technology to drive your career forward.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Bachelor Of Arts",
    title: "Boost Creativity & Expand Your Horizons",
    description:
      "Discover innovative techniques to enhance your creative thinking.",
    totalRatings: 12,
    delay: "0.3s",
  },
];

const coursesShort = [
  {
    src: courseThumb6,
    seats: 200,
    semesters: 12,
    subtitle: "Computer Science",
    title: "Explore Marketing & Build Your Brand",
    description:
      "Master marketing strategies to grow your personal or business brand.",
    totalRatings: 15,
    delay: "0.2s",
  },
  {
    src: courseThumb4,
    seats: 250,
    semesters: 12,
    subtitle: "Business Administrator",
    title: "Hone Leadership & Achieve Success",
    description:
      "Develop essential leadership skills to excel in any industry.",
    totalRatings: 30,
    delay: "0.25s",
  },
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Data Analytics",
    title: "Starting Reputed Education & Build your Skills",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    totalRatings: 5,
    delay: "0.3s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Software Engeneer",
    title: "Master Technology & Elevate Your Career",
    description: "Unlock the power of technology to drive your career forward.",
    totalRatings: 10,
    delay: "0.2s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Bachelor Of Arts",
    title: "Boost Creativity & Expand Your Horizons",
    description:
      "Discover innovative techniques to enhance your creative thinking.",
    totalRatings: 12,
    delay: "0.25s",
  },
  {
    src: courseThumb5,
    seats: 80,
    semesters: 12,
    subtitle: "Fine of Arts",
    title: "Learn Coding & Advance Your Skills Up",
    description:
      "Gain in-demand coding expertise to stay ahead in the tech world.",
    totalRatings: 5,
    delay: "0.3s",
  },
];
