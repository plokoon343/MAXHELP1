import React from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import { loginAdmin } from "../../api/api";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await loginAdmin({
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.access_token); // Save JWT token
      localStorage.setItem("username", formData.username); // Save username
      localStorage.setItem("role", "admin"); // Save role as admin

      toast.success("Login Successful!");

      // Redirect after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Login Failed: Invalid credentials");
    }
  };

  const fields = [
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Enter your username",
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          Admin Login
          <span className="block text-gray-100 font-light text-[1rem]">
            Welcome, Please enter your Login details.
          </span>
        </h2>
        <FormComponent
          fields={fields}
          onSubmit={handleLogin}
          submitButtonText="Login"
          fieldContainerClass="space-y-4"
          submitButtonClass="w-full bg-gray-700 text-gray-100 py-3 rounded-md hover:bg-gray-600 transition-all"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
