// import axios from 'axios';

// const API_URL = 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8081/courses';

// export const getCourseById = async (id) => {
//   const res = await axios.get(`${API_URL}/${id}`);
//   console.log('Course data:', res.data); // <--- add this
//   return res.data;
// };
// import axios from 'axios';
// const API_URL = 'http://edunexa-backend:8081/courses';

// export const getCourseById = async (id) => {
//   const res = await axios.get(`${API_URL}/${id}`);
//   console.log('Course data:', res.data);
//   return res.data;
// };
import axios from 'axios';
const API_URL = 'http://localhost:8081/courses';

export const getCourseById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  console.log('Course data:', res.data);
  return res.data;
};