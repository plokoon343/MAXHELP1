import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { FaUser, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Onboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const LOADING_TIME = 1500; // Loading duration in milliseconds

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_TIME);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
        <Loader />
      </div>
    );
  }

  return (
    <div className="onboarding min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="left w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12 space-y-8 animate-fade-in-left">
        <Typography
          as="h2"
          variant="h3"
          className="text-white font-bold mb-4 text-center"
        >
          Welcome to MaxHelp
        </Typography>
        <Typography className="text-gray-400 text-center text-lg">
          Please select your login option to proceed.
        </Typography>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full max-w-md">
          {/* Admin Option */}
          <div
            className="flex flex-col items-center space-y-3 p-6 bg-gray-800 rounded-lg shadow-lg w-full hover:-translate-y-2 hover:bg-gray-700 transition-transform duration-300 ease-in-out"
            onClick={() => handleRedirect("/admin-login")}
            aria-label="Admin Login Option"
          >
            <FaUser className="text-gray-200 text-4xl" />
            <Typography
              variant="h6"
              className="text-gray-200 font-semibold text-center"
            >
              Admin
            </Typography>
            <Typography className="text-gray-400 text-sm text-center">
              Manage settings and users.
            </Typography>
          </div>

          {/* Employee Option */}
          <div
            className="flex flex-col items-center space-y-3 p-6 bg-gray-800 rounded-lg shadow-lg w-full hover:-translate-y-2 hover:bg-gray-700 transition-transform duration-300 ease-in-out"
            onClick={() => handleRedirect("/login")}
            aria-label="Employee Login Option"
          >
            <FaUserTie className="text-gray-200 text-4xl" />
            <Typography
              variant="h6"
              className="text-gray-200 font-semibold text-center"
            >
              Employee
            </Typography>
            <Typography className="text-gray-400 text-sm text-center">
              Access tools and resources to manage your work.
            </Typography>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center py-12 bg-gradient-to-br from-gray-800 to-gray-700 text-gray-200 animate-fade-in-right">
        <Typography
          as="h2"
          variant="h2"
          className="font-extrabold text-center px-6"
        >
          Empowering your organization with seamless access and tools.
        </Typography>
      </div>
    </div>
  );
};

export default Onboarding;
