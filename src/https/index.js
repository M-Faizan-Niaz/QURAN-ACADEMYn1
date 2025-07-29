import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // ✅ Correct backend port
  withCredentials: true, // 🔐 for sending JWT cookie
});

// Auth APIs
export const login = (data) => api.post("/users/login", data);
export const signup = (data) => api.post("/users/signup", data);

// Course Enrollment Example (expandable)
export const enrollInCourse = (courseId) =>
  api.post(`/courses/enroll/${courseId}`);

// Global response error handler (optional toast/snackbar)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    // e.g., toast(error.response?.data?.message || "Something went wrong");
    return Promise.reject(error);
  }
);

export default api;
