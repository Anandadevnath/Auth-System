import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api.js';
import { toast } from 'sonner';

function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (!email || !password || !username) {
                toast('Please fill all the area')
                return;
            }

            const res = await loginUser({ email, password, username });

            if (!res.data.username) {
                toast('Username is incorrect!');
                return;
            }

            if (!res.data.email) {
                toast('Email does not match the username!');
                return;
            }

            if (!res.data.token) {
                throw new Error('Token is missing in the response');
            }

            const userinfo = {
                username: res.data.username,
                email: res.data.email,
                token: res.data.token,
            }

            localStorage.setItem('token', JSON.stringify(userinfo));
            toast('Login successful!')
            navigate('/');
        } catch (error) {
            console.log('Login error:', error.response?.data || error.message);
            toast(error.response?.data?.message || 'Login failed! Please check your credentials.');
        }
    };

    return (

        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-42">
            <h1 className='text-4xl font-semibold my-6'>Login User Account</h1>
            <h1>Username</h1>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h1>Email</h1>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h1>Password</h1>
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                className="text-black cursor-pointer hover:bg-[#d2d2d2] my-1.5"
                variant="outline"
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>

    );
}

export default login;