import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const authService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    register: async (name, email, password) => {
        try {
            const response = await axios.post(`${API_URL}/register`, {
                name,
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
};

export default authService; 