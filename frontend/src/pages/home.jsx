import React from 'react'
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


function home() {
  const navigate = useNavigate();

  const navigateLogin = (e) => {
    navigate('/login');
  };

  const navigateregister = (e) => {
    navigate('/register');
  };

  const navigateLogout = (e) => {
    navigate('/login');
  };

  return (
    <div className='grid w-full max-w-sm items-center gap-1.5 mx-auto my-74'>

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
        onClick={navigateLogout}
      >
        Logout
      </Button>

    </div>
  )
}

export default home