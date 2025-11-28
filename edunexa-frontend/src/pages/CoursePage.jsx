// // import React, { useEffect, useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { useNavigate } from 'react-router-dom'; // for redirect to login
// // import { getCourseById } from '../services/courseService';
// // import { enrollCourse } from '../services/enrollmentService'; // you need to create this
// // import '../styles/CoursePage.css';

// // const CoursePage = ({ courseId }) => {
// //   const [course, setCourse] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const user = useSelector(state => state.auth.user);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCourse = async () => {
// //       try {
// //         const data = await getCourseById(courseId);
// //         setCourse(data);
// //       } catch (err) {
// //         console.error(err);
// //         setError('Failed to load course.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchCourse();
// //   }, [courseId]);

// // const handleEnroll = async () => {
// //   if (!user) {
// //     navigate('/login'); // send to login if not logged in
// //     return;
// //   }
// //   try {
// //     await enrollCourse(user.id, courseId);
// //     alert('Enrolled successfully!');
// //   } catch (err) {
// //     console.error(err);
// //     alert('Enrollment failed.');
// //   }
// // };


// //   if (loading) return <p>Loading course...</p>;
// //   if (error) return <p style={{ color: 'red' }}>{error}</p>;

// //   return (
// //     <div className="course-page">
// //       <h1>{course.title}</h1>
// //       <p className="course-description">{course.description}</p>

// //       <button className="enroll-btn" onClick={handleEnroll}>
// //         Enroll Now
// //       </button>

// //       <h2>Course Contents</h2>
// //       <div className="contents-grid">
// //         {course.contents.map(content => (
// //           <div key={content.id} className="content-card">
// //             <h3>{content.title}</h3>
// //             <p>Type: {content.contentType}</p>
// //             <a href={content.url} target="_blank" rel="noopener noreferrer">
// //               <button>View Resource</button>
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoursePage;
// // src/pages/CoursePage.jsx
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getCourseById } from '../services/courseService';
// import { enrollCourse } from '../services/enrollmentService';
// import '../styles/CoursePage.css';

// const CoursePage = ({ courseId }) => {
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [enrolled, setEnrolled] = useState(false);

//   const user = useSelector(state => state.auth.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const data = await getCourseById(courseId);
//         setCourse(data);
//         if (user && data.enrolledUsers?.includes(user.id)) {
//           setEnrolled(true);
//         }
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load course.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourse();
//   }, [courseId, user]);

//   const handleEnroll = async () => {
//     if (!user) {
//       navigate('/login'); // redirect if not logged in
//       return;
//     }

//     try {
//       await enrollCourse(user.id, courseId);
//       alert('Enrolled successfully!');
//       setEnrolled(true);
//     } catch (err) {
//       console.error(err);
//       alert('Enrollment failed.');
//     }
//   };

//   if (loading) return <p>Loading course...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   return (
//     <div className="course-page">
//       <h1>{course.title}</h1>
//       <p className="course-description">{course.description}</p>

//       <button 
//         className="enroll-btn" 
//         onClick={handleEnroll} 
//         disabled={enrolled}
//       >
//         {enrolled ? 'Already Enrolled' : 'Enroll Now'}
//       </button>

//       <h2>Course Contents</h2>
//       <div className="contents-grid">
//         {course.contents?.map(content => (
//           <div key={content.id} className="content-card">
//             <h3>{content.title}</h3>
//             <p>Type: {content.contentType}</p>
//             <a href={content.url} target="_blank" rel="noopener noreferrer">
//               <button>View Resource</button>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoursePage;
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCourseById } from '../services/courseService';
import { enrollCourse } from '../services/enrollmentService';
import '../styles/CoursePage.css';

const CoursePage = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [enrolled, setEnrolled] = useState(false);

  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(courseId);
        setCourse(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load course.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login'); // redirect if not logged in
      return;
    }
    try {
      const res = await enrollCourse(user.id, courseId);
      console.log('Enrollment response:', res);
      setEnrolled(true);
      alert('Enrolled successfully!');
    } catch (err) {
      console.error(err);
      alert('Enrollment failed.');
    }
  };

  if (loading) return <p>Loading course...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p className="course-description">{course.description}</p>

      <button
        className="enroll-btn"
        onClick={handleEnroll}
        disabled={enrolled}
      >
        {enrolled ? 'Enrolled ✅' : 'Enroll Now'}
      </button>

      <h2>Course Contents</h2>
      <div className="contents-grid">
        {course.contents.map(content => (
          <div key={content.id} className="content-card">
            <h3>{content.title}</h3>
            <p>Type: {content.contentType}</p>
            <a href={content.url} target="_blank" rel="noopener noreferrer">
              <button>View Resource</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
