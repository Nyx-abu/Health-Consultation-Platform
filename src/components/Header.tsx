"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ProfileSidebar from "./Hero/Profile"

const EnhancedHospitalHeader = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false)
  const location = useLocation()
  const [cartCount, setCartCount] = useState(3) // Example cart count for display
  const navigate = useNavigate();

  const isBookingsPage = location.pathname === "/booking-reports"
  const isHomePage = location.pathname === "/" || location.pathname === ""

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle profile sidebar
  const toggleProfileSidebar = () => {
    setProfileSidebarOpen(!profileSidebarOpen)
  }

  return (
    <div className="w-full font-sans relative z-50">
      {/* Profile Sidebar */}
      <ProfileSidebar isOpen={profileSidebarOpen} onClose={() => setProfileSidebarOpen(false)} />

      {/* Notification Banner with improved animation */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-2 sm:px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative flex items-center justify-center text-xs sm:text-sm">
          <span className="font-medium">🔥 Special Offer: 30% off today!</span>
          <button className="ml-2 sm:ml-4 bg-white text-blue-600 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors duration-200 transform hover:scale-105 shadow-md">
            CLAIM
          </button>
        </div>
      </div>

      {/* Top Navigation Bar with improved gradient and shadow */}
      <div
        className={`flex items-center justify-between px-3 sm:px-8 md:px-12 py-3 sm:py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-gradient-to-r from-white to-gray-50 shadow-sm"}`}
      >
        {/* Mobile menu button - moved to left side on mobile */}
        <button
          className="md:hidden flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${mobileMenuOpen ? "hidden" : "block"} h-5 w-5`}
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${mobileMenuOpen ? "block" : "hidden"} h-5 w-5`}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Enhanced Logo with improved animation - simplified for mobile */}
        <div
          className="flex items-center group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <div
              className={`absolute -inset-1 bg-red-600/10 rounded-full blur-sm opacity-0 ${isHovered ? "opacity-100" : ""} transition-opacity duration-300`}
            ></div>
          </div>
          <Link to="/">
            <div className="ml-2 sm:ml-3">
              <span className="text-sm sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-red-600 to-gray-700">
                Health Platform
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Center info badges with improved styling - hidden on mobile */}
        <div className="hidden lg:flex space-x-6">
          <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mr-2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-xs font-medium text-gray-700">NABL Accredited</span>
          </div>

          <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500 mr-2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-xs font-medium text-gray-700">Trusted by 10M+</span>
          </div>

          <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500 mr-2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs font-medium text-gray-700">4.9/5 Rating</span>
          </div>
        </div>

        {/* Right Side Navigation Items */}
        <div className="flex items-center space-x-2 sm:space-x-10">
          {/* Cart Button with improved counter display */}
          <Link to="/cart">
            <div className="flex items-center group cursor-pointer relative">
              <div className="relative mr-3">
                {/* Improved cart count indicator */}
                <div className="absolute -top-3 -right-2 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center shadow-lg shadow-red-500/20">
                  <span className="text-white text-xs font-bold">{cartCount}</span>
                  {/* Pulsating effect for notifications */}
                  <span className="absolute inset-0 rounded-full bg-red-400 opacity-40 animate-ping"></span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 transform group-hover:scale-110"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-red-500/0 group-hover:bg-red-500/10 blur-md transition-all duration-300"></div>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200 hidden sm:inline">
                Cart
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300"></div>
            </div>
          </Link>

          {/* Profile Button with enhanced hover effect - Updated to toggle profile sidebar */}
          <div className="flex items-center group cursor-pointer relative" onClick={toggleProfileSidebar}>
            <div className="p-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 shadow-sm overflow-hidden">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 relative z-10"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="absolute inset-0 bg-blue-300 blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
            <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200 hidden sm:inline">
              Profile
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - only visible when mobileMenuOpen is true */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "fixed inset-0 z-50 bg-black bg-opacity-50" : "hidden"}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 4L4 8L12 12L20 8L12 4Z"
                    stroke="#B91C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(220, 38, 38, 0.1)"
                  />
                  <path
                    d="M4 16L12 20L20 16"
                    stroke="#B91C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(220, 38, 38, 0.05)"
                  />
                  <path d="M4 12L12 16L20 12" stroke="#B38,38,0.05)" />
                  <path
                    d="M4 12L12 16L20 12"
                    stroke="#B91C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(220, 38, 38, 0.05)"
                  />
                </svg>
                <span className="ml-2 font-bold text-gray-900">Health Platform</span>
              </div>
              <button
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="flex-1 overflow-y-auto py-2">
              {/* Main navigation links */}
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main Navigation
              </div>

              <Link to="/" className="no-underline" onClick={() => setMobileMenuOpen(false)}>
                <div
                  className={`flex items-center px-4 py-3 ${isHomePage ? "bg-pink-50 border-l-4 border-pink-500" : "hover:bg-gray-50"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isHomePage ? "text-pink-500 mr-3" : "text-gray-700 mr-3"}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div>
                    <div className={`font-medium ${isHomePage ? "text-pink-600" : "text-gray-900"}`}>Book a Test</div>
                    <div className="text-xs text-gray-500">Schedule your health test</div>
                  </div>
                </div>
              </Link>

              <Link to="/booking-reports" className="no-underline" onClick={() => setMobileMenuOpen(false)}>
                <div
                  className={`flex items-center px-4 py-3 ${isBookingsPage ? "bg-pink-50 border-l-4 border-pink-500" : "hover:bg-gray-50"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isBookingsPage ? "text-pink-500 mr-3" : "text-gray-700 mr-3"}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <div>
                    <div className={`font-medium ${isBookingsPage ? "text-pink-600" : "text-gray-900"}`}>
                      Bookings & Reports
                    </div>
                    <div className="text-xs text-gray-500">View your test reports</div>
                  </div>
                </div>
              </Link>

              {/* Services section */}
              <div className="px-4 py-2 mt-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Our Services
              </div>

              <div className="px-4 py-3 hover:bg-gray-50 flex items-center"
              onClick={()=> navigate('/all')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500 mr-3"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900"
                  >Health Packages</div>
                  <div className="text-xs text-gray-500">Comprehensive health checkups</div>
                </div>
              </div>

              <div className="px-4 py-3 hover:bg-gray-50 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500 mr-3"
                >
                  <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                  <path d="M3.6 9h16.8a1.2 1.2 0 0 0 1.2-1.2V3.6a1.2 1.2 0 0 0-1.2-1.2H3.6a1.2 1.2 0 0 0-1.2 1.2v4.2a1.2 1.2 0 0 0 1.2 1.2Z" />
                  <path d="M3.6 21h6.8a1.2 1.2 0 0 0 1.2-1.2v-4.2a1.2 1.2 0 0 0-1.2-1.2H3.6a1.2 1.2 0 0 0-1.2 1.2v4.2a1.2 1.2 0 0 0 1.2 1.2Z" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Find a Test</div>
                  <div className="text-xs text-gray-500">Search for specific tests</div>
                </div>
              </div>

              <div className="px-4 py-3 hover:bg-gray-50 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 mr-3"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Top Doctors</div>
                  <div className="text-xs text-gray-500">Consult with specialists</div>
                </div>
              </div>

              <div className="px-4 py-3 hover:bg-gray-50 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500 mr-3"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
                <div onClick={()=> navigate('/lablocations')}>
                  <div className="font-medium text-gray-900">Centers</div>
                  <div className="text-xs text-gray-500">Find a center near you</div>
                </div>
              </div>

              <div className="px-4 py-3 hover:bg-gray-50 flex items-center"
              onClick={()=> navigate('/about')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 mr-3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">About Us</div>
                  <div className="text-xs text-gray-500">Learn more about our services</div>
                </div>
              </div>
            </div>

            {/* Mobile menu footer */}
            <div className="border-t p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">898 898 8787</div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                      24/7 Support
                    </div>
                  </div>
                </div>
                <button className="px-3 py-1 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - hidden on mobile */}
      <div
        className={`hidden md:flex items-center justify-between px-12 py-5 backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md" : "bg-gradient-to-r from-gray-50/95 to-gray-100/95 shadow-md"}`}
      >
        {/* Left: Menu with enhanced hover effect */}
        <div className="flex items-center cursor-pointer group ml-10" onClick={() => setMenuOpen(!menuOpen)}>
          <div
            className={`p-2 rounded-full bg-white group-hover:bg-gray-100 transition-all duration-300 shadow-sm ${menuOpen ? "rotate-90" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${menuOpen ? "transform rotate-90" : ""}`}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
          <span className="ml-3 font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
            Menu
          </span>
          {menuOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-md rounded-md shadow-lg p-4 w-56 z-50 border border-gray-100 animate-fadeIn">
              <div className="space-y-2">
                <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={()=> navigate('/all')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500 mr-2"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                  Health Packages
                </div>
                <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer text-gray-700 font-medium transition-colors duration-200 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500 mr-2"
                  >
                    <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                    <path d="M3.6 9h16.8a1.2 1.2 0 0 0 1.2-1.2V3.6a1.2 1.2 0 0 0-1.2-1.2H3.6a1.2 1.2 0 0 0-1.2 1.2v4.2a1.2 1.2 0 0 0 1.2 1.2Z" />
                    <path d="M3.6 21h6.8a1.2 1.2 0 0 0 1.2-1.2v-4.2a1.2 1.2 0 0 0-1.2-1.2H3.6a1.2 1.2 0 0 0-1.2 1.2v4.2a1.2 1.2 0 0 0 1.2 1.2Z" />
                  </svg>
                  Find a Test
                </div>
                <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={()=> navigate('/contact')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Contact Us
                </div>
                <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={()=> navigate('/lablocations') }>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500 mr-2"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                  Centers
                </div>
                <div className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={()=> navigate('/about')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  About Us
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center: Main Navigation menu items with refined hover and active states */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <div className="flex space-x-28">
            {/* Book a Test */}
            <Link to="/" className="no-underline">
              <div className="group flex flex-col items-center relative">
                <div className="flex items-center pb-1">
                  <div
                    className={`p-1.5 rounded-md ${isHomePage ? "bg-pink-100" : "bg-transparent group-hover:bg-gray-100"} transition-colors duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={isHomePage ? "text-pink-500" : "text-gray-700 group-hover:text-gray-900"}
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span
                    className={`ml-2 font-medium ${isHomePage ? "text-pink-600 font-semibold" : "text-gray-700 group-hover:text-gray-900"}`}
                  >
                    Book a Test
                  </span>
                  {isHomePage && (
                    <span className="flex h-2 w-2 relative ml-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                  )}
                </div>
                <div
                  className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isHomePage ? "bg-gradient-to-r from-pink-400 to-pink-600 w-full" : "bg-gray-400"}`}
                ></div>
              </div>
            </Link>

            {/* Bookings & Reports */}
            <Link to="/booking-reports" className="no-underline">
              <div className="group flex flex-col items-center relative">
                <div className="flex items-center pb-1">
                  <div
                    className={`p-1.5 rounded-md ${isBookingsPage ? "bg-pink-100" : "bg-transparent group-hover:bg-gray-100"} transition-colors duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={isBookingsPage ? "text-pink-500" : "text-gray-700 group-hover:text-gray-900"}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <span
                    className={`ml-2 font-medium ${isBookingsPage ? "text-pink-500 font-semibold" : "text-gray-700 group-hover:text-gray-900"}`}
                  >
                    Bookings & Reports
                  </span>
                  {isBookingsPage && (
                    <span className="flex h-2 w-2 relative ml-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                  )}
                </div>
                <div
                  className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isBookingsPage ? "bg-gradient-to-r from-pink-400 to-pink-600 w-full" : "bg-gray-400"}`}
                ></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right: Phone Number with enhanced styling and animation */}
        <div className="flex items-center cursor-pointer group relative overflow-hidden">
          <div className="relative p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white relative z-10"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            {/* Enhanced ripple effect */}
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-full opacity-30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></span>

            {/* Active indicator with pulse */}
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
          </div>
          <div className="ml-3 font-medium">
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors duration-200 flex items-center">
              898 898 8787
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 text-green-500 transform group-hover:rotate-12 transition-transform duration-300"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div className="text-xs text-gray-500 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedHospitalHeader