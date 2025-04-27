"use client"

import { useState, useEffect, useRef } from "react"
import { X, LogOut, User, Settings, CreditCard, Heart, Clock, FileText, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ProfileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const ProfileSidebar = ({ isOpen, onClose }: ProfileSidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // For demo purposes

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-96 max-w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {isLoggedIn ? (
              <>
                {/* User info */}
                <div className="p-5 border-b">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-gray-800">John Doe</h3>
                      <p className="text-gray-600 text-sm">john.doe@example.com</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                          Premium Member
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex">
                    <Link to="/profile/edit" className="flex-1 mr-2">
                      <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                        Edit Profile
                      </button>
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="py-2 px-4 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      Logout
                    </button>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="p-5 border-b">
                  <h4 className="font-medium text-gray-500 uppercase text-xs tracking-wider mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <Link
                      to="/profile/appointments"
                      className="flex flex-col items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Clock className="h-6 w-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center font-medium">Appointments</span>
                    </Link>
                    <Link
                      to="/profile/reports"
                      className="flex flex-col items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <FileText className="h-6 w-6 text-green-600 mb-1" />
                      <span className="text-xs text-center font-medium">Reports</span>
                    </Link>
                    <Link
                      to="/profile/favorites"
                      className="flex flex-col items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Heart className="h-6 w-6 text-red-600 mb-1" />
                      <span className="text-xs text-center font-medium">Favorites</span>
                    </Link>
                  </div>
                </div>

                {/* Menu items */}
                <div className="p-5">
                  <h4 className="font-medium text-gray-500 uppercase text-xs tracking-wider mb-3">Account Settings</h4>
                  <nav className="space-y-1">
                    <Link
                      to="/profile/personal-info"
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-600 mr-3" />
                        <span className="font-medium text-gray-800">Personal Information</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>

                    <Link
                      to="/profile/payment-methods"
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-gray-600 mr-3" />
                        <span className="font-medium text-gray-800">Payment Methods</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>

                    <Link
                      to="/profile/settings"
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <Settings className="h-5 w-5 text-gray-600 mr-3" />
                        <span className="font-medium text-gray-800">Account Settings</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </nav>
                </div>

                {/* Health stats */}
                <div className="p-5 border-t">
                  <h4 className="font-medium text-gray-500 uppercase text-xs tracking-wider mb-3">Health Stats</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Last Checkup</span>
                      <span className="text-sm text-blue-600 font-medium">15 days ago</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Upcoming Tests</span>
                      <span className="text-sm text-blue-600 font-medium">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Health Score</span>
                      <div className="flex items-center">
                        <span className="text-sm text-green-600 font-medium mr-1">85/100</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Login form when not logged in
              <div className="p-5">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome Back</h3>
                  <p className="text-gray-600">Sign in to access your health profile</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    Sign In
                  </button>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">Don't have an account?</span>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 ml-1">
                      Sign up
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <p>© 2025 Health Platform</p>
                <p className="mt-1">Version 2.4.0</p>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Privacy Policy</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm0-3V7h2v8h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Terms of Service</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm2-3.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v.5h2v-.5zm-1-9.5c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSidebar