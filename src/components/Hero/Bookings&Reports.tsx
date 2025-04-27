"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, Calendar, BarChart3, Search, Plus, Filter } from "lucide-react"
import { Link } from "react-router-dom"

type TabType = "bookings" | "reports"

const EmptyState = ({ type }: { type: TabType }) => (
  <div className="flex flex-col items-center justify-center h-72 text-gray-400 px-4">
    <div className="bg-gray-100 rounded-full p-5 mb-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
      {type === "bookings" ? (
        <Calendar className="h-9 w-9 text-gray-500" />
      ) : (
        <BarChart3 className="h-9 w-9 text-gray-500" />
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-700">No {type === "bookings" ? "Bookings" : "Reports"} Found</h3>
    <p className="mt-3 text-sm max-w-xs text-center text-gray-500">
      {type === "bookings"
        ? "You have no upcoming or past bookings. Create your first booking to get started."
        : "No reports have been generated yet. Create a new report to analyze your data."}
    </p>
    <button className="mt-7 inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105">
      <Plus className="h-4 w-4 mr-2" />
      Create New {type === "bookings" ? "Booking" : "Report"}
    </button>
  </div>
)

const BookingAndReportsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("bookings")

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 sm:p-6">
        <div className="flex items-center">
            <Link to='/'>
          <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          </Link>
          <h1 className="ml-3 text-xl font-semibold text-gray-800">Booking & Reports</h1>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        {/* Desktop Layout - Single line */}
        <div className="hidden md:flex md:items-center md:justify-center space-x-3">
          {/* Tabs */}
          <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === "bookings"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === "reports"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              Reports
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 transition-all duration-200 hover:border-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="inline-flex items-center px-4 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Mobile Layout - Stacked with spacing (unchanged) */}
        <div className="md:hidden flex flex-col space-y-5">
          {/* Tabs */}
          <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg self-stretch">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === "bookings"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === "reports"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              Reports
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-200"
              />
              <div className="absolute left-3 top-2.5 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="inline-flex items-center px-3 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 bg-gray-50">
        {activeTab === "bookings" ? <EmptyState type="bookings" /> : <EmptyState type="reports" />}
      </div>
    </div>
  )
}

export default BookingAndReportsComponent

