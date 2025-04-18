import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, MessageSquare, User, Lock, EyeOff, Eye, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"

const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Fullname is required");
    if (!formData.email.trim()) return toast.error("Email is Required");
    if (!formData.password.trim()) return toast.error("Password is Required");
    if (formData.password.length < 6) return toast.error("Password should be at least 6 digits");
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success == true) {
      signup(formData);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center ">
          <div className="bg-indigo-600 p-3 rounded-xl mb-4">
            <MessageSquare className="size-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold mt-3">Create Account</h1>
          <p className="text-gray-400">Get started with your free account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 size-5 text-gray-400" />
              <input
                type="text"
                className="w-full p-2 pl-10 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Rajneesh"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-5 text-gray-400" />
              <input
                type="email"
                className="w-full p-2 pl-10 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="abc@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 size-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 pl-10 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg flex items-center justify-center font-medium disabled:bg-gray-600"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 className="size-5 animate-spin mr-2" />
                Creating...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-400">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sign;
