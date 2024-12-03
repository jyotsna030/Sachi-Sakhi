import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '../ui/button'; // Assuming you have a Button component
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook

  // Define handleAbout function that navigates to About-Page
  const handleAbout = () => {
    navigate('/About'); // This will navigate to About-Page when invoked
  };

  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5 w-full">
        <img src="/Logo.svg" alt="Logo" />
        <div className="ml-auto flex space-x-3">
          <Link to= {"/Alert"}>
          <Button className="bg-red-600">DO READ BEFORE STARTING</Button>
          </Link>
        </div>
        <div>
          {/* Button that triggers handleAbout when clicked */}
          <Button
            onClick={handleAbout} // Calling handleAbout when button is clicked
            className="bg-white text-[#c21e56] font-bold text-[1rem] hover:bg-white"
          >
            About Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
