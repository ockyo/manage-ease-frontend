import React from 'react';
import userService from '../services/userService';
import LoginForm from '../components/LoginForm';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        console.log(data);
        try {
            const response = await userService.login(data);
            console.log(response);
            navigate("/home");
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="text-center mt-48" >
            <LoginForm onSubmit={handleSubmit} />
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Don't have an account?{" "}
                    {/* <Link to="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                        Register here
                    </Link> */}
                </p>
            </div>
        </div>
    );
}

export default LoginPage;