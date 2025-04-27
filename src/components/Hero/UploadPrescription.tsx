import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrescriptionUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Handle file upload logic here
      console.log('Files dropped:', e.dataTransfer.files);
    }
  };
  
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Handle file upload logic here
      console.log('Files selected:', e.target.files);
    }
  };
  const navigate = useNavigate();
  
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center mb-6 mt-8">
        <button className="mr-2 p-1" onClick={()=> navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Upload Prescription</h1>
      </div>
      
      <div 
        className={`relative border-2 border-dashed rounded-lg p-6 min-h-80 cursor-pointer ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-500'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        {/* Background text starting from top */}
        <div className="absolute inset-0 overflow-hidden p-6">
          <div className="text-xs text-gray-400 leading-relaxed opacity-70">
            <p>
              This study was conducted in the Western Development Region of Nepal. The aim of the study was to evaluate the prescription patterns and rational prescribing in the private community pharmacies of Kavre and Eastern Nepal, using some of the WHO core drug use indicators.
            </p>
            <p className="mt-2">
              <strong>Material and Methods</strong><br />
              Five private community pharmacies were selected using stratified random sampling. Five hundred patient prescriptions from these pharmacies were assessed prospectively for two months from September 2017 to February 2018. Information was collected from each patient encounter and were recorded directly into a prescription indicator form.
            </p>
            <p className="mt-2">
              <strong>Results</strong><br />
              Average number of drugs prescribed per prescription was 2.14 (n=1830). Percentage of drugs prescribed by generic name and from essential drug list was 45.19% (n=827) and 78.14% (n=1430) respectively. Percentage of encounters in which antibiotics and injections was prescribed were 40.64% (n=366) and 3.44% (n=31) respectively.
            </p>
            <p className="mt-2">
              <strong>Conclusion</strong>
            </p>
          </div>
        </div>
        
        {/* Centered upload UI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-gray-400 mb-3">
            <Upload size={48} strokeWidth={2.5} />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-1">Drag and Drop here</h3>
            <p className="text-gray-500 font-medium mb-2">or</p>
            <button 
              className="text-lg text-blue-500 font-bold"
              onClick={handleBrowseClick}
            >
              Browse Files
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={handleFileChange}
              multiple
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUpload;