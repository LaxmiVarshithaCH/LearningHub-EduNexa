// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { navigate } from '../redux/navSlice';
// import { getAllCourses } from '../services/courseService';
// import '../styles/Courses.css';

// const ExploreCourses = () => {
//   const dispatch = useDispatch();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         const data = await getAllCourses();
//         setCourses(data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load courses.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   if (loading) return <p>Loading courses...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   return (
//     <div className="courses-container">
//       <h2>Explore Our Courses</h2>
//       <div className="courses-grid">
//         {courses.map(course => (
//           <div key={course.id} className="course-card">
//             <img 
//               src={course.thumbnail || '/courses/default.jpeg'} 
//               alt={course.title} 
//               className="course-thumb"
//             />
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <button 
//               onClick={() => dispatch(navigate({ currentPage: 'course', courseId: course.id }))}
//             >
//               View Course
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreCourses;
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { navigate } from '../redux/navSlice';
// import { getAllCourses } from '../services/courseService';
// import '../styles/Courses.css';

// const ExploreCourses = () => {
//   const dispatch = useDispatch();
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const data = await getAllCourses();
//         setCourses(data); // ensure data is an array
//       } catch (err) {
//         console.error('Failed to load courses:', err);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div className="courses-container">
//       <h2>Explore Our Courses</h2>
//       <div className="courses-grid">
//         {courses?.map(course => (
//           <div key={course.id} className="course-card">
//             <img src={course.thumbnail || "/courses/default.jpeg"} alt={course.title} className="course-thumb"/>
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <button onClick={() => dispatch(navigate({ currentPage: "course", courseId: course.id }))}>
//               View Course
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreCourses;
// src/pages/ExploreCourses.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '../redux/navSlice';
import '../styles/Courses.css';

const dummyCourses = [
  { id: 1, title: 'React Basics', description: 'Learn React from scratch.', thumbnail: '/courses/react.jpeg' },
  { id: 2, title: 'Advanced JS', description: 'Deep dive into JavaScript.', thumbnail: '/courses/js.jpeg' },
  { id: 3, title: 'Python for AI', description: 'Get started with AI in Python.', thumbnail: '/courses/python.jpeg' },
  { id: 4, title: 'Data Structures', description: 'Master data structures for coding interviews.', thumbnail: '/courses/ds.png' },
  { id: 5, title: 'Algorithms', description: 'Learn algorithms with examples.', thumbnail: '/courses/algo.jpeg' },
  { id: 6, title: 'Machine Learning', description: 'Introduction to ML concepts.', thumbnail: '/courses/ml.png' },
  { id: 7, title: 'Deep Learning', description: 'Build neural networks using Python.', thumbnail: '/courses/dl.jpeg' },
  { id: 8, title: 'Web Development', description: 'Full-stack web development course.', thumbnail: '/courses/webdev.png' },
  { id: 9, title: 'Java Programming', description: 'Learn Java from scratch.', thumbnail: '/courses/java.png' },
  { id: 10, title: 'C++ Basics', description: 'Introduction to C++ programming.', thumbnail: '/courses/cplus.jpeg' },
  { id: 11, title: 'SQL & Databases', description: 'Learn SQL and relational databases.', thumbnail: '/courses/sql.png' },
  { id: 12, title: 'AI for Beginners', description: 'Introduction to Artificial Intelligence.', thumbnail: '/courses/ai.jpeg' },
];

const ExploreCourses = () => {
  const dispatch = useDispatch();

  return (
    <div className="courses-container">
      <h2>Explore Our Courses</h2>
      <div className="courses-grid">
        {dummyCourses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.title} className="course-thumb"/>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              onClick={() => dispatch(navigate({ currentPage: 'course', courseId: course.id }))}
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
