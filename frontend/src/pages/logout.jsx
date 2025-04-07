import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

function logout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      toast('Logout successful!')
      navigate('/')
    } catch (error) {
      console.log('Logout error:');
      toast('Logout failed!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">
        You have been logged out successfully!
      </h1>
      <Button
        className=" text-black px-6 py-2 rounded transition duration-300"
        variant="outline"
        onClick={handleLogout}
      >
        Back to Home
      </Button>
    </div>
  )
}

export default logout