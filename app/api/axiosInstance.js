// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { router } from "expo-router";

// const API = axios.create({
//   baseURL: "http://192.168.10.42:8001",
//   withCredentials: true,
// });

// //request interceptor
// API.interceptors.request.use(async (config) => {
//   const accessToken = await AsyncStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// //response interceptor

// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry &&
//       error.response.data.message === "Unauthorized request"
//     ) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = await AsyncStorage.getItem("refreshToken");
//         if (!refreshToken) throw new Error("Refresh token not available")
//           const { data } = await axios.post(
//             "http://192.168.10.42:8001/api/v1/users/refresh-token",
//             { refreshToken }
//           );

//           await AsyncStorage.setItem("accessToken", data.accessToken);
//           // await AsyncStorage.setItem("refreshToken", data.refreshToken);

//           originalRequest.headers[
//             "Authorization"
//           ] = `Bearer ${data.accessToken}`;
//           return API(originalRequest);
        
//       } catch (error) {

//         console.log("Token refresh failed, logging out:", error.message);
//         await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
//         router.push("/sign-in");


//         // await AsyncStorage.clear();
//         throw error;
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;
