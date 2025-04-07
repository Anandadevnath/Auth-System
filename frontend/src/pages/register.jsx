import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api.js'
import { toast } from 'sonner';


function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleregister = async (e) => {
    if (password !== confirmPassword) {
      toast('Passwords do not match!')
    }

    try {
      const response = await registerUser({ username, email, password });
      console.log('User register:', response.data);
      toast('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.messege);
      toast('Registration failed!')
    }
  };

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-42">
        <h1 className='text-4xl font-semibold my-6'>Register User Account</h1>
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
        <h1>ConfirmPassword</h1>
        <Input
          type="password"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          className="text-black cursor-pointer hover:bg-[#d2d2d2] my-1.5"
          variant="outline"
          onClick={handleregister}
        >
          Register
        </Button>
      </div>
    </>
  );
}

export default Login;