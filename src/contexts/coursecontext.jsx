import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCourse, getAllCourse } from '../services/academics/CourseService';


const CoursesContext = createContext();


export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error('useCourses must be used within a CoursesProvider');
  }
  return context;
};


export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);

  
  const CACHE_DURATION = 5 * 60 * 1000;

  const isCacheValid = () => {
    if (!lastFetched) return false;
    return Date.now() - lastFetched < CACHE_DURATION;
  };

  
  const fetchCourses = async (forceRefresh = false) => {
    if (!forceRefresh && courses.length > 0 && isCacheValid()) {
      return courses;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await getCourse();
      if (result) {
        setCourses(result);
        setLastFetched(Date.now());
        return result;
      } else {
        setCourses([]);
        return [];
      }
    } catch (err) {
      setError('Failed to fetch courses');
      console.error('Error fetching courses:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };


  const fetchAllCourses = async (forceRefresh = false) => {
    if (!forceRefresh && allCourses.length > 0 && isCacheValid()) {
      return allCourses;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await getAllCourse();
      if (result) {
        setAllCourses(result);
        setLastFetched(Date.now());
        return result;
      } else {
        setAllCourses([]);
        return [];
      }
    } catch (err) {
      setError('Failed to fetch all courses');
      console.error('Error fetching all courses:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

 
  const getCoursesByQualification = (qualificationID) => {
    return courses.filter(course => course.qualification_ID === qualificationID);
  };

  const getCourseById = (courseId) => {
    return courses.find(course => course.course_ID === courseId) || 
           allCourses.find(course => course.course_ID === courseId);
  };

  const groupCoursesByQualification = (coursesData = courses) => {
    return coursesData.reduce((acc, course) => {
      const id = course.qualification_ID;
      if (!acc[id]) {
        acc[id] = [];
      }
      acc[id].push(course);
      return acc;
    }, {});
  };

  
  const getQualifications = (coursesData = courses) => {
    const qualifications = {};
    coursesData.forEach(course => {
      if (course.qualification) {
        qualifications[course.qualification_ID] = course.qualification;
      }
    });
    return Object.values(qualifications);
  };

  
  const refreshCache = async () => {
    await Promise.all([
      fetchCourses(true),
      fetchAllCourses(true)
    ]);
  };

 
  const clearCache = () => {
    setCourses([]);
    setAllCourses([]);
    setLastFetched(null);
    setError(null);
  };

  
  useEffect(() => {
    fetchCourses();
  }, []);

  const value = {
   
    courses,
    allCourses,
    loading,
    error,
    lastFetched,
    
   
    fetchCourses,
    fetchAllCourses,
    getCoursesByQualification,
    getCourseById,
    groupCoursesByQualification,
    getQualifications,
    refreshCache,
    clearCache,
    
    
    isCacheValid
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
};