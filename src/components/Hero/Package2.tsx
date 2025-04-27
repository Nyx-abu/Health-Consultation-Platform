import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HealthParameter {
  name: string;
}

interface HealthPackage {
  id: string;
  title: string;
  reportTime: number;
  parameters: number;
  parametersList: HealthParameter[];
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  description?: string;
}

const HealthPackagesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const healthPackages: HealthPackage[] = [
    {
      id: '1',
      title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
      reportTime: 15,
      parameters: 92,
      parametersList: [
        { name: 'Heart' },
        { name: 'Diabetes (HbA1c)' },
        { name: 'Lipid' },
        { name: 'Liver' },
        { name: 'Kidney' },
        { name: 'Infection' },
        { name: 'Thyroid' }
      ],
      originalPrice: 7014,
      discountedPrice: 1599,
      discountPercentage: 78
    },
    {
      id: '2',
      title: 'Fit India Full Body Checkup with Free HbA1c',
      reportTime: 15,
      parameters: 89,
      parametersList: [
        { name: 'Diabetes (HbA1c)' },
        { name: 'Lipid' },
        { name: 'Liver' },
        { name: 'Kidney' },
        { name: 'Infection' },
        { name: 'Thyroid' }
      ],
      originalPrice: 5233,
      discountedPrice: 1099,
      discountPercentage: 78
    },
    {
      id: '3',
      title: 'Annual Health Checkup-Advance with Free HsCRP',
      reportTime: 15,
      parameters: 92,
      parametersList: [],
      description: 'The Annual Health checkup Advance package covers 91 parameters of tests.',
      originalPrice: 7920,
      discountedPrice: 1599,
      discountPercentage: 79
    },
    {
      id: '4',
      title: 'Advanced Full Body Checkup with Free HsCRP',
      reportTime: 15,
      parameters: 98,
      parametersList: [
        { name: 'CBC' },
        { name: 'ESR' },
        { name: 'Iron Studies' }
      ],
      originalPrice: 8260,
      discountedPrice: 2199,
      discountPercentage: 74
    },
    {
      id: '5',
      title: 'Comprehensive Wellness Package',
      reportTime: 24,
      parameters: 105,
      parametersList: [
        { name: 'Complete Blood Count' },
        { name: 'Liver Function' },
        { name: 'Kidney Function' },
        { name: 'Cardiac Risk' },
        { name: 'Vitamin Panel' }
      ],
      originalPrice: 9500,
      discountedPrice: 2499,
      discountPercentage: 76
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Width of a card plus margin
      const newPosition = direction === 'left' 
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = carouselRef.current 
    ? scrollPosition < carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10 
    : true;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-700">Top Health Packages</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')} 
            className={`rounded-full p-2 ${canScrollLeft ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'} transition-all duration-300`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={24} className={canScrollLeft ? 'text-blue-700' : 'text-gray-400'} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className={`rounded-full p-2 ${canScrollRight ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'} transition-all duration-300`}
            disabled={!canScrollRight}
          >
            <ChevronRight size={24} className={canScrollRight ? 'text-blue-700' : 'text-gray-400'} />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef} 
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {healthPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="min-w-[320px] max-w-[320px] h-[360px] bg-white rounded-lg shadow-md border border-blue-100 flex flex-col transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-blue-50">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-blue-800 pr-8">{pkg.title}</h3>
                    <button className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mt-3 flex text-sm text-gray-600 space-x-4">
                    <div>Reports in <span className="font-semibold text-blue-700">{pkg.reportTime} hours</span></div>
                    <div className="border-l border-blue-100 pl-4">Parameters <span className="font-semibold text-blue-700">{pkg.parameters}</span></div>
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
                    <div className="text-sm text-gray-700">
                      {pkg.description}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 italic">
                      Complete health package with comprehensive testing
                    </div>
                  )}
                </div>
                
                <div className="p-4 mt-auto border-t border-blue-50 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-blue-800">₹{pkg.discountedPrice}</span>
                      <span className="ml-2 text-sm line-through text-gray-500">₹{pkg.originalPrice}</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="text-green-600 font-semibold">{pkg.discountPercentage}% off</span> for a limited period
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
        
        {/* Gradient fade effects on sides for smooth scroll indication */}
        <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none ${canScrollLeft ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none ${canScrollRight ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
      </div>
      
      {/* Scroll progress indicator */}
      <div className="mt-4 h-1 bg-blue-100 rounded-full w-full">
        <div 
          className="h-1 bg-blue-600 rounded-full transition-all duration-300"
          style={{ 
            width: carouselRef.current 
              ? `${(scrollPosition / (carouselRef.current.scrollWidth - carouselRef.current.clientWidth)) * 100}%` 
              : '0%' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default HealthPackagesCarousel;

// CSS for hiding scrollbar
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);