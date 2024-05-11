import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { sendToast } from "src/config/configToast";

export const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null;
    }

    const getUser = () => {
        const userString = localStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    }

    const getRole = () => {
        const roleString = localStorage.getItem('role');
        return roleString ? JSON.parse(roleString) : null;
    }


    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [role, setRole] = useState(getRole()); ``

    const saveToken = (user, token, role) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', JSON.stringify(role));
        // localStorage.setItem('role', JSON.stringify('admin'));
        // localStorage.setItem('role', JSON.stringify('ROLE_MANAGER'));
        // localStorage.setItem('role', JSON.stringify('ROLE_STAFF'));

        setToken(token);
        setUser(user);
        setRole(role);

        console.log('role', role);
        console.log('token', token);
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
        sendToast('Logout successful!');
    }

    const http = axios.create({
        baseURL: "http://localhost:4000/api",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    });

    http.interceptors.request.use(
        config => {
            const token = getToken();
            if (token) {
                // config.headers.Authorization = `Bearer ${token}`;
                config.headers["x-access-token"] = token;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );


    const login = async (email, password) => {
        try {
            const response = await http.post('/auth/signin', { email, password });
            const { token, data } = response.data;
            const { roles } = data;
            saveToken(email, token, roles);
            navigate('/dashboard');
            sendToast('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error.message);
            sendToastError('Failed to login.');
        }
    }


    return {
        setToken: saveToken,
        token,
        user,
        role,
        getToken,
        login,
        logout,
        http,
    }
}

