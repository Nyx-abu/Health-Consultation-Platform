'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom icons instead of lucide-react
const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 2 2 4-4" />
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
    <path d="M16.5 9.4 7.55 4.24" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <line x1="12" x2="12" y1="22" y2="12" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

// Custom button component
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const CustomButton = ({ children, onClick, className = '', variant = 'primary' }: ButtonProps) => {
  const baseStyles = "relative flex items-center justify-center gap-3 font-medium transition-all duration-300 rounded-xl overflow-hidden";
  const primaryStyles = "bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-sky-200/20 py-4 px-8 text-lg";
const secondaryStyles = "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 py-3 px-8";
  
  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {/* Shine effect overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
      <div className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </div>
    </button>
  );
};

// Custom notification system
interface NotificationProps {
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification = ({ title, message, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-1 bg-gradient-to-r from-sky-500 to-indigo-500 w-full" />
          <div className="p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-slate-800">{title}</h3>
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            </div>
            <p className="text-slate-500 text-sm mt-1">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface EmptyCartProps {
  onExplore: () => void;
  onViewSuggestions?: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function PremiumEmptyCart({
  onExplore,
  onViewSuggestions = () => {},
  title = "Your Cart is empty",
  subtitle = "We've curated some exceptional items just for you",
  buttonText = "Explore Tests"
}: EmptyCartProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  
  useEffect(() => {
    // Trigger particles after initial animation
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Particles for premium effect
  const particles = Array.from({ length: 15 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-500"
      initial={{ 
        x: 0, 
        y: 0, 
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        x: Math.random() * 160 - 80, 
        y: Math.random() * 160 - 80,
        opacity: [0, 1, 0],
        scale: [0, Math.random() * 0.8 + 0.5, 0]
      }}
      transition={{ 
        duration: Math.random() * 2 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut"
      }}
      style={{
        left: '50%',
        top: '50%',
      }}
    />
  ));
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto sm:py-10 md:py-20 px-6">
      <div className="relative w-full flex flex-col items-center">
        {/* Premium background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white rounded-3xl blur-3xl opacity-70" />
        
        <motion.div 
          className="relative z-10 w-full max-w-md mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-slate-100 p-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="relative mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onAnimationComplete={() => setAnimationComplete(true)}
          >
            {/* Animated background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-48 h-48 rounded-full bg-gradient-to-r from-sky-50 to-indigo-50"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </div>
            
            {/* Glowing ring */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0, 0.7, 0],
                scale: [0.9, 1.1, 1.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            >
              <div className="w-44 h-44 rounded-full border-2 border-sky-200/50 blur-sm" />
            </motion.div>
            
            {/* Premium particles */}
            {showParticles && particles}
            
            {/* Cart icon container */}
            <motion.div 
              className="relative z-10 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-white to-slate-50 shadow-lg flex items-center justify-center overflow-hidden border border-slate-100"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sky-50/30 to-indigo-50/30" />
              
              {/* Animated cart icon */}
              <motion.div
                animate={isHovered ? { y: [-2, 2, -2] } : { y: 0 }}
                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                className="text-sky-700"
              >
                <ShoppingCartIcon />
              </motion.div>
              
              {/* Sparkle effect on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute top-1/4 right-1/4 text-amber-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SparklesIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900">{title}</h2>
            <p className="mt-3 text-slate-500 text-lg">{subtitle}</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4"
          >
            <CustomButton 
              onClick={onExplore}
              variant="primary"
              className="group"
            >
              <span>{buttonText}</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
              >
                <ArrowRightIcon />
              </motion.div>
            </CustomButton>
            
            
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
