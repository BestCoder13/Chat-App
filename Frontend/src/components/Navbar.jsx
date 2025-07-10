import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-all"
        >
          <div className="size-12 rounded-xl bg-indigo-600 shadow-lg flex items-center justify-center">
            <MessageSquare className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
           Chitzy
          </h1>
        </Link>

        {/* Navigation & Buttons */}
        <div className="flex items-center gap-6">
          <Link
            to="/settings"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white bg-gray-800 hover:bg-indigo-600 transition-all shadow-md"
          >
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white bg-gray-800 hover:bg-indigo-600 transition-all shadow-md"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Profile</span>
              </Link>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:text-white bg-gray-800 hover:bg-red-600 transition-all shadow-md"
                onClick={logout}
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
