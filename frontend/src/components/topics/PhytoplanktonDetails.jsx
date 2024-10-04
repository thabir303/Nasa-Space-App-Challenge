import { ArrowLeft, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverImage from '../HoverImage';
import HoverForPhyto from '../HoverForPhyto';

const PhytoplanktonDetails = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

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
          Back to Phytoplankton
        </button>

        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">
          Phytoplankton in False Color
        </h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6">
            <HoverForPhyto></HoverForPhyto>
            <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
              <Info size={24} className="mr-2" />
              Phytoplankton Visualization
            </h3>

            <div className="space-y-4">
              {['overview', 'interpretation', 'significance'].map((section) => (
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
                          This map uses false color to highlight various types of phytoplankton in the ocean. Different colors represent the presence of various phytoplankton species, indicating the health and nutrient levels of marine ecosystems.
                        </p>
                      )}
                      {section === 'interpretation' && (
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-green-700 rounded-full mr-3"></span>
                            Green areas indicate regions with high concentrations of certain phytoplankton.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-blue-300 rounded-full mr-3"></span>
                            Blue regions show areas with lower phytoplankton activity.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                            Purple hues indicate different types of phytoplankton or algae blooms.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-gray-200 rounded-full mr-3"></span>
                            White areas represent cloud cover, blocking satellite observations.
                          </li>
                        </ul>
                      )}
                      {section === 'significance' && (
                        <p className="text-gray-700 leading-relaxed">
                          Studying the distribution of phytoplankton is crucial for understanding marine ecosystems. The concentration and types of phytoplankton can reveal information about ocean health, climate change, and the global carbon cycle.
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
            Phytoplankton are the foundation of the oceanic food web, playing a vital role in absorbing CO₂ and producing oxygen. They are key indicators of ocean health and climate change.
          </p>
        </div>

        <button
          onClick={() => {/* Add functionality to explore more data */}}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Explore More Phytoplankton Data
        </button>
      </div>
    </div>
  );
};

export default PhytoplanktonDetails;
