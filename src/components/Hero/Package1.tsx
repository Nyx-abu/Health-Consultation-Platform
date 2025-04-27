"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { User, Thermometer, Heart, Activity, Sun, Torus, Shield, Microscope } from "lucide-react"

interface HealthPackage {
  id: string
  name: string
  icon: React.ReactNode
  gradient: string
  iconColor: string
  shadowColor: string
  description?: string
}

const HealthCheckupPackages: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const componentRef = useRef<HTMLDivElement>(null)
  const [activePackage, setActivePackage] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState<string | null>(null)

  const healthPackages: HealthPackage[] = [
    {
      id: "full-body",
      name: "Full Body",
      icon: <User strokeWidth={1.5} />,
      gradient: "from-blue-50 via-blue-100 to-blue-50",
      iconColor: "text-blue-600",
      shadowColor: "rgba(59, 130, 246, 0.3)",
      description: "Complete health assessment",
    },
    {
      id: "fever",
      name: "Fever",
      icon: <Thermometer strokeWidth={1.5} />,
      gradient: "from-red-50 via-red-100 to-red-50",
      iconColor: "text-red-500",
      shadowColor: "rgba(239, 68, 68, 0.3)",
      description: "Infection screening",
    },
    {
      id: "heart",
      name: "Heart",
      icon: <Heart strokeWidth={1.5} />,
      gradient: "from-pink-50 via-pink-100 to-pink-50",
      iconColor: "text-pink-500",
      shadowColor: "rgba(236, 72, 153, 0.3)",
      description: "Cardiac health check",
    },
    {
      id: "diabetes",
      name: "Diabetes",
      icon: <Activity strokeWidth={1.5} />,
      gradient: "from-purple-50 via-purple-100 to-purple-50",
      iconColor: "text-purple-600",
      shadowColor: "rgba(147, 51, 234, 0.3)",
      description: "Blood sugar monitoring",
    },
    {
      id: "vitamin",
      name: "Vitamin",
      icon: <Sun strokeWidth={1.5} />,
      gradient: "from-amber-50 via-amber-100 to-amber-50",
      iconColor: "text-amber-500",
      shadowColor: "rgba(245, 158, 11, 0.3)",
      description: "Nutritional assessment",
    },
    {
      id: "thyroid",
      name: "Thyroid",
      icon: <Torus strokeWidth={1.5} />,
      gradient: "from-teal-50 via-teal-100 to-teal-50",
      iconColor: "text-teal-600",
      shadowColor: "rgba(13, 148, 136, 0.3)",
      description: "Hormone level check",
    },
    {
      id: "immunity",
      name: "Immunity",
      icon: <Shield strokeWidth={1.5} />,
      gradient: "from-emerald-50 via-emerald-100 to-emerald-50",
      iconColor: "text-emerald-600",
      shadowColor: "rgba(16, 185, 129, 0.3)",
      description: "Immune system analysis",
    },
    {
      id: "advanced-lab",
      name: "Advanced Lab",
      icon: <Microscope strokeWidth={1.5} />,
      gradient: "from-indigo-50 via-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600",
      shadowColor: "rgba(99, 102, 241, 0.3)",
      description: "Comprehensive lab tests",
    },
  ]

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
      setActivePackage(null)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl" ref={componentRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2 md:mb-0">
            Doctors Curated Health Checkup Packages
          </h2>
          <p className="text-gray-500 text-sm md:text-base">Swipe to explore all packages</p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 md:gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseLeave={() => setIsHovering(null)}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <div
  ref={scrollContainerRef}
  className="flex gap-5 md:gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch"
  }}
  onMouseLeave={() => setIsHovering(null)}
>
  {/* Add a style element for the webkit scrollbar */}
  <style>
    {`
      [ref="scrollContainerRef"]::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
  </div>
            {healthPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 snap-start"
                onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                onMouseEnter={() => setIsHovering(pkg.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl bg-gradient-to-br ${pkg.gradient} 
                    p-5 w-40 sm:w-44 h-36 sm:h-40
                    flex flex-col items-center justify-center 
                    transition-all duration-500 ease-out
                  `}
                  style={{
                    boxShadow:
                      activePackage === pkg.id
                        ? `0 10px 25px -5px ${pkg.shadowColor}, 0 8px 10px -6px ${pkg.shadowColor}`
                        : isHovering === pkg.id
                          ? `0 10px 15px -3px ${pkg.shadowColor}, 0 4px 6px -4px ${pkg.shadowColor}`
                          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    transform:
                      activePackage === pkg.id
                        ? "translateY(-8px)"
                        : isHovering === pkg.id
                          ? "translateY(-6px)"
                          : "translateY(0)",
                  }}
                >
                  <div
                    className={`
                      relative z-10 rounded-full p-4 mb-3
                      flex items-center justify-center 
                      bg-white/90 backdrop-blur-sm
                      ${pkg.iconColor}
                      transition-all duration-500 ease-out
                    `}
                    style={{
                      boxShadow:
                        activePackage === pkg.id || isHovering === pkg.id
                          ? `0 4px 12px ${pkg.shadowColor}`
                          : "0 2px 5px rgba(0, 0, 0, 0.05)",
                      transform:
                        activePackage === pkg.id
                          ? "scale(1.15)"
                          : isHovering === pkg.id
                            ? "scale(1.1) rotate(5deg)"
                            : "scale(1) rotate(0)",
                    }}
                  >
                    <div className="w-7 h-7">{pkg.icon}</div>
                  </div>

                  <p
                    className={`
                      relative z-10 font-semibold text-center text-gray-800 mb-1 
                      transition-all duration-300
                      ${activePackage === pkg.id ? pkg.iconColor : ""}
                    `}
                    style={{
                      transform: activePackage === pkg.id || isHovering === pkg.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    {pkg.name}
                  </p>

                  <div
                    className={`
                      text-xs text-center text-gray-600 max-w-[90%] 
                      transition-all duration-500 ease-out
                    `}
                    style={{
                      opacity: activePackage === pkg.id || isHovering === pkg.id ? 1 : 0,
                      maxHeight: activePackage === pkg.id || isHovering === pkg.id ? "40px" : "0",
                      overflow: "hidden",
                      transform:
                        activePackage === pkg.id || isHovering === pkg.id ? "translateY(0)" : "translateY(10px)",
                    }}
                  >
                    {pkg.description}
                  </div>

                  {/* Animated glow effect on active */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-opacity duration-700 ease-in-out pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${pkg.shadowColor} 0%, transparent 70%)`,
                      opacity: activePackage === pkg.id ? 0.6 : 0,
                    }}
                  />

                  {/* Animated bottom indicator */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ease-out"
                    style={{
                      background: `linear-gradient(to right, transparent, ${pkg.shadowColor.replace("0.3", "0.7")}, transparent)`,
                      opacity: activePackage === pkg.id ? 1 : 0,
                      transform: activePackage === pkg.id ? "scaleX(0.8)" : "scaleX(0)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {healthPackages.map((pkg, index) => (
              <button
                key={`indicator-${pkg.id}`}
                className="focus:outline-none transition-all duration-300 ease-out"
                onClick={() => {
                  setActivePackage(pkg.id)
                  scrollContainerRef.current?.scrollTo({
                    left: index * 180,
                    behavior: "smooth",
                  })
                }}
              >
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: activePackage === pkg.id ? "24px" : "8px",
                    background: activePackage === pkg.id ? pkg.shadowColor.replace("0.3", "1") : "rgba(0, 0, 0, 0.1)",
                    transform: activePackage === pkg.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthCheckupPackages