import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, Search } from "lucide-react"
import {Link} from "react-router-dom"

interface HealthParameter {
  name: string
}

interface HealthPackage {
  id: string
  title: string
  reportTime: number
  parameters: number
  parametersList: HealthParameter[]
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
  description?: string
}

const HealthPackagesGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const packagesPerPage = 8

  const healthPackages: HealthPackage[] = [
    {
      id: "1",
      title: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      reportTime: 15,
      parameters: 92,
      parametersList: [
        { name: "Heart" },
        { name: "Diabetes (HbA1c)" },
        { name: "Lipid" },
        { name: "Liver" },
        { name: "Kidney" },
        { name: "Infection" },
      ],
      originalPrice: 7014,
      discountedPrice: 1599,
      discountPercentage: 78,
    },
    {
      id: "2",
      title: "Fit India Full Body Checkup with Free HbA1c",
      reportTime: 15,
      parameters: 89,
      parametersList: [
        { name: "Diabetes (HbA1c)" },
        { name: "Lipid" },
        { name: "Liver" },
        { name: "Kidney" },
        { name: "Infection" },
        { name: "Thyroid" },
      ],
      originalPrice: 5233,
      discountedPrice: 1099,
      discountPercentage: 78,
    },
    {
      id: "3",
      title: "Annual Health Checkup-Advance with Free HsCRP",
      reportTime: 15,
      parameters: 92,
      parametersList: [],
      description: "The Annual Health checkup Advance package covers 91 parameters of tests.",
      originalPrice: 7920,
      discountedPrice: 1599,
      discountPercentage: 79,
    },
    {
      id: "4",
      title: "Advanced Full Body Checkup with Free HsCRP",
      reportTime: 15,
      parameters: 98,
      parametersList: [{ name: "CBC" }, { name: "ESR" }, { name: "Iron Studies" }],
      originalPrice: 8260,
      discountedPrice: 2199,
      discountPercentage: 74,
    },
    {
      id: "5",
      title: "Comprehensive Wellness Package",
      reportTime: 24,
      parameters: 105,
      parametersList: [
        { name: "Complete Blood Count" },
        { name: "Liver Function" },
        { name: "Kidney Function" },
        { name: "Cardiac Risk" },
        { name: "Vitamin Panel" },
      ],
      originalPrice: 9500,
      discountedPrice: 2499,
      discountPercentage: 76,
    },
    {
      id: "6",
      title: "Women's Health Checkup",
      reportTime: 24,
      parameters: 85,
      parametersList: [{ name: "Thyroid Profile" }, { name: "Vitamin D" }, { name: "Calcium" }, { name: "Iron" }],
      originalPrice: 8500,
      discountedPrice: 1999,
      discountPercentage: 76,
    },
    {
      id: "7",
      title: "Diabetes Care Package",
      reportTime: 12,
      parameters: 45,
      parametersList: [
        { name: "HbA1c" },
        { name: "Glucose Fasting" },
        { name: "Kidney Function" },
        { name: "Lipid Profile" },
      ],
      originalPrice: 4500,
      discountedPrice: 1299,
      discountPercentage: 71,
    },
    {
      id: "8",
      title: "Heart Health Checkup",
      reportTime: 18,
      parameters: 55,
      parametersList: [
        { name: "Lipid Profile" },
        { name: "ECG" },
        { name: "Cardiac Markers" },
        { name: "Blood Pressure" },
      ],
      originalPrice: 6800,
      discountedPrice: 1799,
      discountPercentage: 74,
    },
    {
      id: "9",
      title: "Senior Citizen Complete Health Package",
      reportTime: 24,
      parameters: 110,
      parametersList: [
        { name: "Bone Health" },
        { name: "Cardiac Profile" },
        { name: "Diabetes Screening" },
        { name: "Vitamin Panel" },
      ],
      originalPrice: 10500,
      discountedPrice: 2799,
      discountPercentage: 73,
    },
    {
      id: "10",
      title: "Basic Health Checkup",
      reportTime: 12,
      parameters: 40,
      parametersList: [{ name: "CBC" }, { name: "Liver Function" }, { name: "Kidney Function" }, { name: "Glucose" }],
      originalPrice: 3500,
      discountedPrice: 999,
      discountPercentage: 71,
    },
    {
      id: "11",
      title: "Thyroid Profile Complete",
      reportTime: 12,
      parameters: 25,
      parametersList: [{ name: "T3" }, { name: "T4" }, { name: "TSH" }, { name: "Antibodies" }],
      originalPrice: 2800,
      discountedPrice: 899,
      discountPercentage: 68,
    },
    {
      id: "12",
      title: "Vitamin Deficiency Panel",
      reportTime: 24,
      parameters: 15,
      parametersList: [{ name: "Vitamin D" }, { name: "Vitamin B12" }, { name: "Folate" }, { name: "Iron" }],
      originalPrice: 4200,
      discountedPrice: 1299,
      discountPercentage: 69,
    },
  ]

  // Filter packages based on search term
  const filteredPackages = healthPackages.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.parametersList.some((param) => param.name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage)
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/" className="flex items-center text-blue-700 hover:text-blue-800 mr-4">
          <ChevronLeft size={24} />
          <span className="font-medium"></span>
        </Link>
        <h1 className="text-2xl font-bold text-blue-700">All Health Packages</h1>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-blue-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search health packages by name or parameters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid of packages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {currentPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md border border-blue-100 flex flex-col transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1 h-[360px]"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-blue-50">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-blue-800 pr-8">{pkg.title}</h3>
                  <button className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-3 flex text-sm text-gray-600 space-x-4">
                  <div>
                    Reports in <span className="font-semibold text-blue-700">{pkg.reportTime} hours</span>
                  </div>
                  <div className="border-l border-blue-100 pl-4">
                    Parameters <span className="font-semibold text-blue-700">{pkg.parameters}</span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 flex-1">
                {pkg.parametersList && pkg.parametersList.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {pkg.parametersList.map((param, index) => (
                      <span key={index} className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700">
                        {param.name}
                      </span>
                    ))}
                  </div>
                ) : pkg.description ? (
                  <div className="text-sm text-gray-700">{pkg.description}</div>
                ) : (
                  <div className="text-sm text-gray-500 italic">Complete health package with comprehensive testing</div>
                )}
              </div>

              <div className="p-4 mt-auto border-t border-blue-50 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-blue-800">₹{pkg.discountedPrice}</span>
                    <span className="ml-2 text-sm line-through text-gray-500">₹{pkg.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="text-green-600 font-semibold">{pkg.discountPercentage}% off</span> for a limited
                    period
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors duration-300 font-medium">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {currentPackages.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">No health packages found matching your search.</p>
          <button onClick={() => setSearchTerm("")} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
            Clear search
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredPackages.length > packagesPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`mx-1 px-3 py-2 rounded-md ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:bg-blue-50"
              }`}
            >
              Previous
            </button>

            <div className="flex">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`mx-1 px-4 py-2 rounded-md ${
                    currentPage === number ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`mx-1 px-3 py-2 rounded-md ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:bg-blue-50"
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default HealthPackagesGrid
