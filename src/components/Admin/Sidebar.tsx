import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  LogOut,
  X,
  ChevronDown,
  ChevronRight,
  Ticket,
  Calendar,
  UserCheck,
  Users,
  CreditCard,
  Settings,
  UserPlus,
  Bell,
  Search,
  HelpCircle,
  BarChart3,
  Sparkles,
  Menu,
} from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentPath?: string
}

export default function Sidebar({ sidebarOpen, setSidebarOpen, currentPath }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState(3)
  
  const activePath = currentPath || location.pathname

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [sidebarOpen])

  useEffect(() => {
    const section = managementSections.find((section) => 
      activePath && activePath.startsWith(section.mainPath)
    )
    if (section) {
      setOpenSection(section.title)
    }
  }, [activePath])

  const managementSections = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} className="text-blue-600" />,
      mainPath: "/admin/dashboard",
      subLinks: [],
    },
    {
      title: "Coupon Management",
      icon: <Ticket size={20} className="text-blue-600" />,
      mainPath: "/admin/coupon",
      subLinks: [
        {
          title: "Create Coupon",
          icon: <Sparkles size={18} className="text-blue-600" />,
          path: "/admin/coupon/create",
        },
        {
          title: "Active Coupons",
          icon: <Ticket size={18} className="text-blue-600" />,
          path: "/admin/coupon/active",
        },
        {
          title: "Expired Coupons",
          icon: <Ticket size={18} className="text-blue-600" />,
          path: "/admin/coupon/expired",
        },
        {
          title: "Coupon Analytics",
          icon: <BarChart3 size={18} className="text-blue-600" />,
          path: "/admin/coupon/analytics",
        },
      ],
    },
    // Rest of the sections unchanged
    {
      title: "Booking Management",
      icon: <Calendar size={20} className="text-blue-600" />,
      mainPath: "/admin/booking",
      subLinks: [
        {
          title: "New Bookings",
          icon: <Calendar size={18} className="text-blue-600" />,
          path: "/admin/booking/new",
        },
        {
          title: "Active Bookings",
          icon: <Calendar size={18} className="text-blue-600" />,
          path: "/admin/booking/active",
        },
        {
          title: "Completed Bookings",
          icon: <Calendar size={18} className="text-blue-600" />,
          path: "/admin/booking/completed",
        },
        {
          title: "Cancelled Bookings",
          icon: <Calendar size={18} className="text-blue-600" />,
          path: "/admin/booking/cancelled",
        },
      ],
    },
    {
      title: "Service Provider Assignment",
      icon: <UserCheck size={20} className="text-blue-600" />,
      mainPath: "/admin/assignment",
      subLinks: [
        {
          title: "Assign Provider",
          icon: <UserCheck size={18} className="text-blue-600" />,
          path: "/admin/assignment/assign",
        },
        {
          title: "Assignment History",
          icon: <UserCheck size={18} className="text-blue-600" />,
          path: "/admin/assignment/history",
        },
        {
          title: "Performance Metrics",
          icon: <BarChart3 size={18} className="text-blue-600" />,
          path: "/admin/assignment/metrics",
        },
      ],
    },
    {
      title: "Service Provider Management",
      icon: <Users size={20} className="text-blue-600" />,
      mainPath: "/admin/providers",
      subLinks: [
        {
          title: "Add Provider",
          icon: <UserPlus size={18} className="text-blue-600" />,
          path: "/admin/providers/add",
        },
        {
          title: "View Providers",
          icon: <Users size={18} className="text-blue-600" />,
          path: "/admin/providers/view",
        },
        {
          title: "Provider Performance",
          icon: <BarChart3 size={18} className="text-blue-600" />,
          path: "/admin/providers/performance",
        },
        {
          title: "Provider Verification",
          icon: <UserCheck size={18} className="text-blue-600" />,
          path: "/admin/providers/verification",
        },
      ],
    },
    {
      title: "Payment Management",
      icon: <CreditCard size={20} className="text-blue-600" />,
      mainPath: "/admin/payment",
      subLinks: [
        {
          title: "Transactions",
          icon: <CreditCard size={18} className="text-blue-600" />,
          path: "/admin/payment/transactions",
        },
        {
          title: "Refunds",
          icon: <CreditCard size={18} className="text-blue-600" />,
          path: "/admin/payment/refunds",
        },
        {
          title: "Payment Reports",
          icon: <BarChart3 size={18} className="text-blue-600" />,
          path: "/admin/payment/reports",
        },
        {
          title: "Payment Settings",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/payment/settings",
        },
      ],
    },
    {
      title: "Site Management",
      icon: <Settings size={20} className="text-blue-600" />,
      mainPath: "/admin/site",
      subLinks: [
        {
          title: "General Settings",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/site/general",
        },
        {
          title: "User Management",
          icon: <Users size={18} className="text-blue-600" />,
          path: "/admin/site/users",
        },
        {
          title: "Content Management",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/site/content",
        },
      ],
    },
    {
      title: "Report Management",
      icon: <Settings size={20} className="text-blue-600" />,
      mainPath: "/admin/report",
      subLinks: [
        {
          title: "Reports",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/report/report",
        },
      ],
    },
    {
      title: "Tests Management",
      icon: <Settings size={20} className="text-blue-600" />,
      mainPath: "/admin/test",
      subLinks: [
        {
          title: "List Tests",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/test/test",
        },
        {
          title: "List Packages",
          icon: <Settings size={18} className="text-blue-600" />,
          path: "/admin/test/packages",
        },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  const filteredSections = searchQuery
    ? managementSections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.subLinks.some((link) => link.title.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : managementSections

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
          w-[280px] shadow-xl z-50 border-r border-gray-100`}
      >
        <div className="flex items-center justify-between p-6 h-16 border-b border-gray-100 pt-14">
          <Link to="/admin/dashboard" className="flex items-center">
            <div className="h-9 w-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-lg font-bold text-blue-600">Admin Portal</span>
              <span className="text-xs text-gray-500">Premium Dashboard</span>
            </div>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 border-b border-gray-100 pt-6 pb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <nav className="mt-2 px-4 pb-36 lg:pb-36 overflow-y-auto h-[calc(100vh-180px)] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div className="space-y-1">
            {filteredSections.map((section) => (
              <div key={section.title} className="mb-2">
                {section.subLinks.length === 0 ? (
                  <Link
                    to={section.mainPath}
                    className={`flex items-center w-full p-2.5 lg:p-3 rounded-lg transition-colors mb-1.5 lg:mb-2 ${
                      activePath === section.mainPath
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {section.icon}
                    <span className="ml-3 font-medium">{section.title}</span>
                  </Link>
                ) : (
                  <>
                    <div
                      onClick={() => toggleSection(section.title)}
                      className={`flex items-center w-full p-2.5 lg:p-3 rounded-lg transition-colors cursor-pointer ${
                        activePath && activePath.startsWith(section.mainPath)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {section.icon}
                      <span className="ml-3 font-medium grow">{section.title}</span>
                      {openSection === section.title ? (
                        <ChevronDown size={18} className="text-gray-400" />
                      ) : (
                        <ChevronRight size={18} className="text-gray-400" />
                      )}
                    </div>

                    {openSection === section.title && (
                      <div className="pl-6 mt-1 space-y-1">
                        {section.subLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                              activePath === link.path
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {link.icon}
                            <span className="ml-3 font-medium text-sm">{link.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="fixed bottom-0 left-0 w-[280px] bg-white border-t border-gray-100">
          <div className="p-4">
            <div className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="flex-shrink-0 relative">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
              <div className="ml-3 min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@example.com</p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("token")
                  navigate("/admin")
                  setSidebarOpen(false)
                }}
                className="ml-2 flex-shrink-0 p-1.5 rounded-md text-red-500 hover:bg-red-50"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}