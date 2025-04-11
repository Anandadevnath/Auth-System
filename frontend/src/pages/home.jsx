import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


function home() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const navigateLogin = () => {
    navigate('/login');
  };

  const navigateregister = () => {
    navigate('/register');
  };

  const handlelogout = () => {
    try {
      localStorage.removeItem('userInfo');
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
      <p>
        {userInfo ? (
          <>
            <strong>Username:</strong> {userInfo.username} <br />
            <strong>Email:</strong> {userInfo.email}
          </>
        ) : (
          'No user is logged in.'
        )}
      </p>
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