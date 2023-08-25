import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Protected = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem('token'); 
        const isAuthenticated = !!token;

        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                // Token has expired, show toast and redirect
                localStorage.removeItem('token');
                navigate('/');
            }
        } catch (error) {
            // Error occurred while decoding token, show toast and redirect
            navigate('/login');
        }
    }, [navigate]);

    return children;
};

export default Protected;