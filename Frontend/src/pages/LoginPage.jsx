import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { MessageSquare, User, Lock, EyeOff, Eye, Loader2} from 'lucide-react';
import {Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  }


  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center'>
      <div className="w-full max-w-md p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <div className='flex items-center justify-center flex-col '>
          <div className='flex items-center justify-center bg-indigo-600 size-12 rounded-xl mb-2'>
            <MessageSquare className='size-6 text-white' />
          </div>
          <h1 className='text-2xl font-bold mt-2 '>Welcome Back</h1>
          <p className='text-md  text-gray-400 '>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6 mt-6'>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 '>
                <User className='size-5' />
              </div>
              <input type="text"
                className='pl-10 w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='abc@gmail.com'
                value={formData.email} 
                onChange={(e)=>{
                  setFormData({...formData, email:e.target.value})
                }}
                />        
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Password</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 '>
                <Lock className='size-5' />
              </div>
              <input type={showPassword?"text" : "password"}
                className='pl-10 w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder="••••••••"
                value={formData.password} 
                onChange={(e)=>{
                  setFormData({...formData, password:e.target.value})
                }}
                />  
              <button
              type='button'
              className='absolute right-0 pr-3 top-3 text-gray-400 hover:text-white'
              onClick={()=>{setShowPassword(!showPassword)}}>
                {showPassword? (<EyeOff className='size-5'/>):
                (<Eye className='size-5'/>)}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg flex items-center justify-center font-medium disabled:bg-gray-600"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-400">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>

  )
}

export default LoginPage