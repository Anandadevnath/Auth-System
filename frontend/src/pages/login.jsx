import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const navigateLogin = (e) => {
        navigate('/');
    };

    return (

        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-42">
            <h1 className='text-4xl font-semibold my-6'>Login User Account</h1>
            <h1>Username</h1>
            <Input
                type="text"
                placeholder="Username"
            />
            <h1>Email</h1>
            <Input
                type="email"
                placeholder="Email"
            />
            <h1>Password</h1>
            <Input
                type="password"
                placeholder="Password"
            />
            <Button
                className="text-black cursor-pointer hover:bg-[#d2d2d2] my-1.5"
                variant="outline"
                onClick={navigateLogin}
            >
                Login
            </Button>
        </div>

    );
}

export default Login;