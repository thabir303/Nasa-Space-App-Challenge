import  { useState } from 'react';
import { ArrowLeft, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HoverForSpectra from '../HoverForSpectra';

const FullSpectraOceansDetails = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);
  const [showSecondImage, setShowSecondImage] = useState(false); // State to control the visibility of the second image

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Map
        </button>

        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">
          Full Spectra from Global Oceans
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6">
            <HoverForSpectra></HoverForSpectra>

            {/* Button to show the second image */}
            <button 
              onClick={() => setShowSecondImage(!showSecondImage)}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mb-6"
            >
              {showSecondImage ? 'Hide Wavelength Image' : 'See Wavelength for a Specific Location?'}
            </button>

            {/* Conditionally render the second image */}
            {showSecondImage && (
              <div className="mb-6 space-y-6">
                <img 
                  src="./images/bokeh_plot_wave_len.png" 
                  alt="Bokeh Plot Wavelength" 
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
              <Info size={24} className="mr-2" />
              Hyperspectral Data Visualization
            </h2>
            
            <div className="space-y-4">
              {['overview', 'interpretation', 'impact'].map((section) => (
                <div key={section} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection(section)}
                    className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    {expandedSection === section ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSection === section && (
                    <div className="p-4 bg-gray-50">
                      {section === 'overview' && (
                        <p className="text-gray-700 leading-relaxed">
                          This section explores the hyperspectral datasets from PACE, focusing on the remote sensing reflectance (Rrs) over global oceans. The map provides an interactive way to observe Rrs values across various wavelengths.
                        </p>
                      )}
                      {section === 'interpretation' && (
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <span className="w-3 h-3 bg-green-700 rounded-full mr-3"></span>
                            Higher reflectance values indicate areas of phytoplankton bloom.
                          </li>
                          <li className="flex items-center">
                            <span className="w-3 h-3 bg-blue-300 rounded-full mr-3"></span>
                            Lower reflectance in open oceans signifies clearer water with fewer phytoplankton.
                          </li>
                          <li className="flex items-center">
                            <span className="w-3 h-3 bg-gray-200 rounded-full mr-3"></span>
                            White regions indicate areas with insufficient data due to cloud cover or other obstructions.
                          </li>
                        </ul>
                      )}
                      {section === 'impact' && (
                        <p className="text-gray-700 leading-relaxed">
                          Using this visualization, scientists can better understand ocean ecosystems by analyzing how spectral signatures vary with the concentration of marine life. The ability to measure Rrs at different wavelengths enhances our understanding of phytoplankton dynamics globally.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-6 mb-8 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
            <Info size={24} className="mr-2" />
            Quick Fact
          </h3>
          <p className="text-gray-700">
            Hyperspectral sensors onboard satellites can detect changes in ocean color, allowing us to monitor phytoplankton concentrations and assess their impact on the marine food web and carbon cycling!
          </p>
        </div>

        <button
          onClick={() => {/* Add functionality to explore more data */}}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Explore More Spectral Data
        </button>
      </div>
    </div>
  );
};

export default FullSpectraOceansDetails;
