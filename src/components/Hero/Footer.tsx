import {Link} from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Clock, Shield, Award, CheckCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      {/* Top Banner */}
      <div className="bg-blue-800 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Clock className="h-5 w-5 mr-2" />
            <span className="text-sm">24/7 Customer Support</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-5 w-5 mr-2" />
            <span className="text-sm">HIPAA Compliant & Secure</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            <span className="text-sm">Trusted by 1M+ Patients</span>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="border-b border-blue-800">
        <div className="container mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Stay Updated with Health Tips</h3>
              <p className="text-blue-200 text-sm md:text-base max-w-md">
                Subscribe to our newsletter for the latest health insights, service updates, and exclusive offers.
              </p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-md bg-blue-800/50 border border-blue-700 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                />
                <button className="px-4 py-2 bg-white text-blue-900 rounded-md hover:bg-blue-100 transition-colors font-medium flex items-center justify-center whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-blue-300 mt-2">
                By subscribing, you agree to our <Link to="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">My Health Platform</h2>
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-200 mb-6">
              Empowering individuals with accessible, personalized healthcare solutions for a healthier tomorrow.
            </p>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://twitter.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="https://instagram.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://linkedin.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="https://youtube.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Find a Doctor", href: "/doctors" },
                { name: "Book Appointment", href: "/appointments" },
                { name: "Health Blog", href: "/blog" },
                { name: "Patient Portal", href: "/portal" },
                { name: "Careers", href: "/careers" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Preventive Health Checkups", href: "/services/preventive" },
                { name: "Diagnostic Tests", href: "/services/diagnostics" },
                { name: "Telemedicine", href: "/services/telemedicine" },
                { name: "Chronic Disease Management", href: "/services/chronic-care" },
                { name: "Mental Health Services", href: "/services/mental-health" },
                { name: "Maternal & Child Health", href: "/services/maternal" },
                { name: "Elderly Care", href: "/services/elderly-care" },
                { name: "Health Insurance", href: "/services/insurance" }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center group"
                  >
                    <CheckCircle className="h-3 w-3 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-blue-200">
                  123 Health Avenue, Medical District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link to="tel:+18001234567" className="text-blue-200 hover:text-white">
                  +1 (800) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link to="mailto:info@myhealthplatform.com" className="text-blue-200 hover:text-white">
                  info@myhealthplatform.com
                </Link>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-blue-800/50 rounded-lg border border-blue-700/50 backdrop-blur-sm">
              <h4 className="font-medium mb-2">Emergency Helpline</h4>
              <Link 
                to="tel:+18009119999" 
                className="text-xl font-bold text-white hover:text-blue-200 transition-colors flex items-center"
              >
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                +1 (800) 911-9999
              </Link>
              <p className="text-xs text-blue-300 mt-1">Available 24/7 for medical emergencies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer