import { useState, useEffect } from 'react';
import { useCourses } from '../contexts/coursecontext';


export const useCoursesData = (options = {}) => {
  const {
    autoLoad = true,
    qualificationFilter = null,
    searchTerm = '',
    sortBy = 'course_TITLE',
    sortOrder = 'asc'
  } = options;

  const {
    courses,
    allCourses,
    loading,
    error,
    fetchCourses,
    fetchAllCourses,
    getCoursesByQualification,
    groupCoursesByQualification,
    getQualifications
  } = useCourses();

  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    let result = [...courses];

    
    if (qualificationFilter) {
      result = getCoursesByQualification(qualificationFilter);
    }

  
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(course => 
        course.course_TITLE?.toLowerCase().includes(term) ||
        course.course_SHORTTITLE?.toLowerCase().includes(term) ||
        course.qualification?.qualification_NAME?.toLowerCase().includes(term)
      );
    }

    
    result.sort((a, b) => {
      const aVal = a[sortBy] || '';
      const bVal = b[sortBy] || '';
      
      if (sortOrder === 'desc') {
        return bVal.localeCompare(aVal);
      }
      return aVal.localeCompare(bVal);
    });

    setFilteredCourses(result);
  }, [courses, qualificationFilter, searchTerm, sortBy, sortOrder, getCoursesByQualification]);

  
  useEffect(() => {
    if (autoLoad && courses.length === 0 && !loading) {
      fetchCourses();
    }
  }, [autoLoad, courses.length, loading, fetchCourses]);

  return {
   
    courses: filteredCourses,
    allCourses,
    rawCourses: courses,
    loading,
    error,
    
    
    groupedCourses: groupCoursesByQualification(filteredCourses),
    qualifications: getQualifications(courses),
    
 
    refetch: fetchCourses,
    refetchAll: fetchAllCourses,
    
  
    totalCourses: courses.length,
    filteredCount: filteredCourses.length
  };
};


export const useCourse = (courseId) => {
  const { courses, getCourseById, loading } = useCourses();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courseId && courses.length > 0) {
      const foundCourse = getCourseById(courseId);
      setCourse(foundCourse);
    }
  }, [courseId, courses, getCourseById]);

  return {
    course,
    loading,
    exists: !!course
  };
};


export const useQualificationCourses = (qualificationId) => {
  const { getCoursesByQualification, loading, error } = useCourses();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (qualificationId) {
      const qualificationCourses = getCoursesByQualification(qualificationId);
      setCourses(qualificationCourses);
    }
  }, [qualificationId, getCoursesByQualification]);

  return {
    courses,
    loading,
    error,
    count: courses.length
  };
};