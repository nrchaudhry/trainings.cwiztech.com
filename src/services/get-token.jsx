import axios from "axios";
export const baseDomain = "http://api.cwiztech.com:8079/apigateway";
export const baseUrlProduct = "http://api.cwiztech.com:8079/apigateway";

let token = '';

const fetchToken = async () => {
    try {
        const response = await axios.post(
            'http://api.cwiztech.com:8080/oauth/token',
            null,
            {
                params: {
                    username: 'nauman',
                    password: 'ALLAH@786!',
                    grant_type: 'password'
                },
                auth: {
                    username: 'UserManagment',
                    password: 'secret'
                }
            }
        );
        token = response.data.access_token;
    } catch (error) {
        console.error("Error fetching token:", error);
    }
};

export const initializeAxios = async () => {
    await fetchToken();
    axiosInstance.defaults.headers.common['Accept'] = 'application/json';
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axiosInstance.defaults.headers.common['ApplicationCode'] = 'Test';
};

export const baseUrl = `${baseDomain}`;

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
    async config => {
        if (!token) {
            await fetchToken();
        }
        config.headers['Accept'] = 'application/json';
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['ApplicationCode'] = 'SQLEditor';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join("&");
};
