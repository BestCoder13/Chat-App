import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore=create((set)=>({
    authUser: null,
    isSigningUp :  false,
    isLoggingIng: false,
    isUpdateProfile: false,
    isCheckingAuth: true,
    checkAuth: async()=>{
        try {
            const res=await axiosInstance.get("/auth/check");

            set({authUser: res.data})
        } catch (error) {
            console.log("Error in checkauth");
            set({authUser: null})
        }finally{
            set({isCheckingAuth: false});
        }
    },
    signup:async (data)=>{

    },
    login: async (data)=>{

    }
}))