import React from 'react'
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


function home() {
  const navigate = useNavigate();

  const navigateLogin = (e) => {
    navigate('/login');
  };

  const navigateregister = (e) => {
    navigate('/register');
  };

  const handlelogout = (e) => {
    try {
      localStorage.removeItem('token');
      toast('Logout successful!')
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout.');
    }
  };


  return (
    <div className='grid w-full max-w-sm items-center gap-1.5 mx-auto my-53 border-1 p-6 rounded-2xl'>
      <h1 className='text-3xl mb-2 relative left-3 font-semibold'>Authentication System</h1>
      <p className='relative left-2 mb-2'>This Authentication System is a simple and secure user authentication platform. It allows users to register, log in, and log out while securely managing user credentials.</p>
      <Button
        className="text-black cursor-pointer hover:bg-[#d2d2d2]"
        variant="outline"
        onClick={navigateLogin}
      >
        Login
      </Button>

      <Button
        className="text-black cursor-pointer hover:bg-[#d2d2d2]"
        variant="outline"
        onClick={navigateregister}
      >
        Register
      </Button>

      <Button
        className="text-black cursor-pointer hover:bg-[#d2d2d2]"
        variant="outline"
        onClick={handlelogout}
      >
        Logout
      </Button>

    </div>
  )
}

export default home