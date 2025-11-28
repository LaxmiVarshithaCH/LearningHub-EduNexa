

// import axios from 'axios';

// export const apiClient = axios.create({
//   baseURL: 'http://edunexa-backend:8081/auth', // use container hostname
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8081/auth', // use container hostname
  headers: {
    'Content-Type': 'application/json',
  },
});
