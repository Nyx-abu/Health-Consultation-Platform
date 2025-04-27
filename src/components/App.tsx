import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Hero/Footer";
import Hero from "./Hero/Hero";
import Package1 from "./Hero/Package1";
import Package2 from "./Hero/Package2";
import Package3 from "./Hero/Package3";
import TestimonialMarquee from "./Hero/Testimonials";
import BookingsReport from "./Hero/Bookings&Reports";
import UploadPrescription from "./Hero/UploadPrescription";
import SearchResults from "./Hero/SearchResults";
import Cart from "./Hero/Cart";
import Checkout from "./Payment/Checkout";

// Admin imports
import Layout from "../components/Admin/Layout";
import Dashboard from "./Admin/Pages/Dashboard";
import AdminLogin from "./Admin/AdminLogin";
import ProtectedRoute from "./Admin/ProtectedRoute.js/ProtectedRoute";
import LabLocations from "./Sidebar/LabLocations";
import AboutUs from "./Sidebar/AboutUs";
import Contact from "./Sidebar/Contact";
import AllHealthPackage from "./Hero/AllHealthPackage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
  
              <Layout><Dashboard /></Layout>
        
          } 
        />

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Package1 />
              <Package2 />
              <Package3 />
              <TestimonialMarquee />
              <Footer />
            </>
          }
        />
        <Route
          path="/booking-reports"
          element={
            <>
              <BookingsReport />
              <Footer />
            </>
          }
        />
        <Route path="/upload-prescription" element={<UploadPrescription />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart onExplore={() => {}} />} />
        <Route path="/lablocations" element={<LabLocations />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all" element={<AllHealthPackage />} />
      </Routes>
    </Router>
  );
}

export default App;