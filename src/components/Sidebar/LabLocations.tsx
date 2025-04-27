"use client"

import { useState } from "react"
import { Search, MapPin, Phone, Navigation, ChevronLeft, Building, MapPinned } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Lab {
  id: number
  name: string
  city: string
  area: string
  address: string
  sampleCollection: boolean
  labVisit: boolean
}

export default function LabLocations() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("")

  const labs: Lab[] = [
    {
      id: 1,
      name: "Labs 1",
      city: "Agra",
      area: "",
      address:
        "Shop no DC 6, Third Floor, Near Doctor Shivani Chaturvedi Clinic, Shanti Madhuban Plaza, Delhi Gate, Agra-282002, Uttar Pradesh.",
      sampleCollection: true,
      labVisit: true,
    },
    {
      id: 2,
      name: "Labs 2",
      city: "Pune",
      area: "",
      address:
        "Office No. 1, Aswani Chambers s. No.205/1, 203/1, Plot No 45/B Corresponding City S.No 199 Viman Nagar Pune - 411014",
      sampleCollection: true,
      labVisit: true,
    },
    {
      id: 3,
      name: "Labs 3",
      city: "North Kolkata",
      area: "Bidhanagar",
      address: "No CG 223, 1st & 2nd Floor, beside RBL Bank, Sector II, Bidhannagar, Kolkata, West Bengal 700091",
      sampleCollection: true,
      labVisit: true,
    },
    {
      id: 4,
      name: "Labs 4",
      city: "Agartala",
      area: "",
      address:
        "c/o Medicaids Pathological Lab & X-Ray Clinic, 6, IGM Hospital Lane, (East Side of IGM Hospital), Rabindra Palli, Agartala - 799001",
      sampleCollection: true,
      labVisit: true,
    },
    {
      id: 5,
      name: "Labs 5",
      city: "Central Chennai",
      area: "",
      address: "Plot No. 402, Paneer Nagar, Mogappair Village, Ambattur, TK, Chennai - 600037",
      sampleCollection: true,
      labVisit: true,
    },
    {
      id: 6,
      name: "Labs 6",
      city: "Gwalior",
      area: "",
      address: "City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh 474002",
      sampleCollection: true,
      labVisit: true,
    },
  ]

  const filteredLabs = labs.filter(
    (lab) =>
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with back button */}
        <div className="flex items-center mb-6 sm:mb-8">
          <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <ChevronLeft size={20} className="mr-2" onClick={()=> navigate('/')} />
            <span className="text-lg sm:text-xl font-semibold">Lab Locations</span>
          </button>
        </div>

        {/* Search and Near Me section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by lab name, city or area..."
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm sm:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center sm:w-40 py-3 sm:py-3.5 px-4 bg-white rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50 transition shadow-sm">
            <MapPin size={18} className="mr-2 text-blue-500" />
            <span className="font-medium text-sm sm:text-base">Near Me</span>
          </button>
        </div>

        {/* Labs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-100 transform hover:-translate-y-1"
            >
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">{lab.name}</h3>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {lab.sampleCollection && (
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></div>
                      <span>Sample Collection</span>
                    </div>
                  )}

                  {lab.labVisit && (
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></div>
                      <span>Lab Visit</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start mb-3 sm:mb-4 gap-2 sm:gap-3">
                  <MapPinned size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{lab.address}</p>
                </div>

                <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 gap-2 sm:gap-3">
                  <Building size={16} className="text-blue-500 flex-shrink-0" />
                  <span className="font-medium">
                    {lab.city}
                    {lab.area && `, ${lab.area}`}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row gap-3 mt-auto">
                  <a
                    href={`tel:${lab.id}`}
                    className="flex items-center justify-center text-blue-600 py-2 sm:py-2.5 px-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
                  >
                    <Phone size={16} className="mr-2" />
                    <span className="font-medium">Call Now</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <button className="flex items-center justify-center py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-800 font-medium text-xs sm:text-sm">
                      <Navigation size={14} className="mr-1 sm:mr-2" />
                      <span>Directions</span>
                    </button>
                    <button className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium text-xs sm:text-sm">
                      Book Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message when no labs match search */}
        {filteredLabs.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-sm my-6 sm:my-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 mb-3 sm:mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">No results found</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">No lab locations found matching "{searchQuery}"</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base"
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
