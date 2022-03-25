import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()
    const loggingOut = () => {
        alert("You sure, want to logout?")
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate("/")
    }
  return (
    <div className='w-100 navbar_container'>
       <div>
          <h3 className='text-dark'> Posts</h3>
       </div>
       <div>
           <button className='btn btn-danger' onClick={loggingOut}>Logout</button>
       </div>
    </div>
  )
}

export default Navbar