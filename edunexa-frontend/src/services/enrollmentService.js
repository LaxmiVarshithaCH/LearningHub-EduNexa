// import axios from 'axios';


// const API_URL = 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8081/enrollments';

// export const enrollCourse = async (userId, courseId) => {
//   const res = await axios.post(`${API_URL}/enroll?userId=${userId}&courseId=${courseId}`);
//   return res.data;
// };
// import axios from 'axios';
// const API_URL = 'http://edunexa-backend:8081/enrollments';

// export const enrollCourse = async (userId, courseId) => {
//   const res = await axios.post(`${API_URL}/enroll?userId=${userId}&courseId=${courseId}`);
//   return res.data;
// };
import axios from 'axios';
const API_URL = 'http://localhost:8081/enrollments';

export const enrollCourse = async (userId, courseId) => {
  const res = await axios.post(`${API_URL}/enroll?userId=${userId}&courseId=${courseId}`);
  return res.data;
};