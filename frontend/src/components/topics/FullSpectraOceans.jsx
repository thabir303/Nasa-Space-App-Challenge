import { useNavigate } from 'react-router-dom';

const FullSpectraOceans = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/spectraOceans-details');
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 min-h-screen">
      <h2 className="text-5xl font-bold mb-12 text-green-800 text-center tracking-tight">
        Full Spectra from Global Oceans
      </h2>
      
      <div className="relative w-full max-w-3xl mb-16 group">
        <img 
          src="./images/spectra.png" 
          alt="Full Spectra from Global Oceans Visualization" 
          className="w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
          <p className="text-white text-xl font-semibold pb-8 px-6 text-center">
            Visualizing the Full Spectra from Global Oceans
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10 mb-12 transition-all duration-300 hover:shadow-2xl">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          This interactive section allows us to explore hyperspectral datasets from PACE, visualizing the Rrs (Remote Sensing Reflectance) over the global oceans. The map displays the Rrs values across different wavelengths and provides insights into the distribution of chlorophyll concentrations.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          With tools like <code>earthaccess</code> and <code>xarray</code>, users can select a specific wavelength or location to examine the spectral data. This interactive exploration helps in understanding the dynamics of the global oceans and how chlorophyll-a concentrations vary across different regions.
        </p>
      </div>

      <button 
        onClick={handleNavigate} 
        className="px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xl font-bold rounded-full hover:from-green-700 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Explore Full Spectra Data
      </button>
    </div>
  );
};

export default FullSpectraOceans;
