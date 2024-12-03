import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button'; // Assuming Button component

const Alert = () => {
    const navigate = useNavigate();
  
    const [isAcknowledged, setIsAcknowledged] = useState(false);
  
    const handleConfirm = () => {
      if (isAcknowledged) {
        navigate('/'); // Navigate to home or the next step if the user acknowledges
      }
    };
  
    return (
      <div className="min-h-screen bg-red-100 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-4 border-red-600">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 text-white rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-2xl font-bold">!</span>
            </div>
            <h1 className="text-3xl font-bold text-red-700 ml-3">Critical Warning</h1>
          </div>
          <p className="text-lg text-red-700 font-semibold mb-6">
            Failure to comply with the following conditions may result in serious issues or inability to proceed.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li>Condition 1: Acknowledge Google's Generative AI Prohibited Uses Policy.</li>
            <li>Condition 2: Ensure your Chrome version is 128.0.6545.0 or newer.</li>
            <li>Condition 3: Confirm at least 22 GB of free storage is available on the device.</li>
            <li>Condition 4: Enable the required flags in Chrome for Gemini Nano and Prompt API.</li>
            <li>Condition 5: Use a compatible desktop platform with supported hardware and network requirements.</li>
          </ul>
  
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="acknowledge"
              checked={isAcknowledged}
              onChange={() => setIsAcknowledged(!isAcknowledged)}
              className="mr-2"
            />
            <label htmlFor="acknowledge" className="text-gray-700 font-semibold">
              I understand and agree to the terms.
            </label>
          </div>
  
          <div className="flex justify-center">
            <Button
              onClick={handleConfirm}
              className={`bg-red-600 text-white px-6 py-2 rounded-lg ${
                isAcknowledged ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isAcknowledged}
            >
              Confirm and Continue
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Alert;