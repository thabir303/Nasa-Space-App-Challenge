import { ArrowLeft, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverImage from '../HoverImage';

const ChlorophyllDetailPage = () => {
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
          Back to Chlorophyll-A
        </button>

        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">
          Chlorophyll-A Global Distribution
        </h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6">
            <HoverImage></HoverImage>
            <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
              <Info size={24} className="mr-2" />
              NASA Dataset Visualization
            </h3>

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
                          This map visualizes the global concentration of chlorophyll-A, a key indicator of phytoplankton abundance in our oceans. The color intensity represents concentration levels.
                        </p>
                      )}
                      {section === 'interpretation' && (
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-green-700 rounded-full mr-3"></span>
                            Dark green areas indicate high chlorophyll-A concentrations.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-green-300 rounded-full mr-3"></span>
                            Lighter green shows moderate concentrations.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-blue-300 rounded-full mr-3"></span>
                            Blue regions represent lower concentrations.
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 bg-gray-200 rounded-full mr-3"></span>
                            White areas likely represent cloud cover, obscuring satellite observations.
                          </li>
                        </ul>
                      )}
                      {section === 'impact' && (
                        <p className="text-gray-700 leading-relaxed">
                          This visualization allows for analysis of chlorophyll-A distribution across different latitudes and regions. Note the higher concentrations near the poles and in coastal areas, indicating rich phytoplankton ecosystems.
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
            Did You Know?
          </h3>
          <p className="text-gray-700">
            Phytoplankton, responsible for most of the chlorophyll-A in our oceans, produce about half of the world's oxygen through photosynthesis!
          </p>
        </div>

        <button
          onClick={() => {/* Add functionality to explore more data */}}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Explore More Ocean Data
        </button>
      </div>
    </div>
  );
};

export default ChlorophyllDetailPage;
