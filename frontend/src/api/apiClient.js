import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                console.warn("Session expired. Redirecting to login...");

                localStorage.removeItem("token");

                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);


apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (config.method != 'get' && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
