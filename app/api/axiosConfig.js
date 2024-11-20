// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Function to refresh the token
// const refreshToken = async () => {
//   try {
//     const refreshToken = await AsyncStorage.getItem('refreshToken');
//     const response = await axios.post(
//       'http://192.168.10.42:8001/api/v1/users/refresh-token',
//       { refreshToken }
//     );
//     await AsyncStorage.setItem('accessToken', response.data.accessToken);
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     // Handle token refresh failure (e.g., redirect to login)
//   }
// };

// // Set up Axios interceptors
// axios.interceptors.request.use(
//   async (config) => {
//     let token = await AsyncStorage.getItem('accessToken');
//     config.headers['Authorization'] = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // If unauthorized, attempt to refresh the token
//       await refreshToken();
//       // Retry the original request with the new access token
//       const token = await AsyncStorage.getItem('accessToken');
//       error.config.headers['Authorization'] = `Bearer ${token}`;
//       return axios(error.config);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axios; // Export the configured axios instance
