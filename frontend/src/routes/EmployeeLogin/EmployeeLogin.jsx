
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import { loginEmployee } from "../../api/api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleLogin = async (formData) => {
    try {
      const response = await loginEmployee({
        email: formData.email,
        password: formData.password,
      });

      const username = formData.email.split('@')[0];

      localStorage.setItem("token", response.data.access_token); // Save JWT token
      localStorage.setItem("username", username); // Save employee email
      localStorage.setItem("role", "employee"); // Save role as employee

      toast.success("Login Successful!");

      // Wait for 2 seconds before redirecting to the dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Login Failed: Invalid credentials");
    }
  };

  const fields = [
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <div className="flex flex-col justify-center items-center px-8 py-12 sm:mt-12 bg-white md:w-1/2 md:mx-auto shadow-2xl">
        <FormComponent
          title=<h2 className="text-[2.5rem] font-semibold text-black">
          Employee Login
          <span className="block text-black font-light text-[1rem]">
            Welcome, Please enter your Login details.
          </span>
        </h2>
          fields={fields}
          onSubmit={handleLogin}
          submitButtonText="Login"
        />
      </div>
    </div>
  );
};

export default EmployeeLogin;
