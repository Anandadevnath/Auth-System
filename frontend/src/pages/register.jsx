import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleregister = (e) => {
    navigate('/login');
  };

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-42">
        <h1 className='text-4xl font-semibold my-6'>Register User Account</h1>
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
        <h1>ConfirmPassword</h1>
        <Input
          type="password"
          placeholder="ConfirmPassword"
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