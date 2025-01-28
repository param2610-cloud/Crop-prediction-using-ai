import React, { useState } from 'react';
import { Sun, Droplets, Wind, AlertTriangle, TrendingUp, Calendar, Settings, Bell } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const FarmerApp = () => {
  const [language, setLanguage] = useState('english');
  
  // Translation object (simplified)
  type Translations = {
    [key: string]: {
      weather: string;
      soil: string;
      alerts: string;
      market: string;
      forecast: string;
      settings: string;
    };
  };

  const translations: Translations = {
    english: {
      weather: "Weather",
      soil: "Soil Health",
      alerts: "Alerts",
      market: "Market Prices",
      forecast: "7-Day Forecast",
      settings: "Settings"
    },
    hindi: {
      weather: "मौसम",
      soil: "मिट्टी की सेहत",
      alerts: "चेतावनी",
      market: "बाजार के भाव",
      forecast: "7-दिन का पूर्वानुमान",
      settings: "सेटिंग"
    }
  };

  const t = translations[language];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Language Selector */}
      <div className="bg-white p-4 flex justify-between items-center shadow">
        <select 
          className="p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
        </select>
        <Bell className="h-6 w-6 text-gray-600" />
      </div>

      {/* Alert Section */}
      <div className="p-4">
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            Rain expected tomorrow. Consider delaying fertilizer application.
          </AlertDescription>
        </Alert>
      </div>

      {/* Current Conditions */}
      <div className="p-4 bg-white m-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Current Conditions</h2>
          <Sun className="h-6 w-6 text-yellow-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Droplets className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Soil Moisture</div>
              <div className="font-medium">75%</div>
            </div>
          </div>
          <div className="flex items-center">
            <Wind className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Temperature</div>
              <div className="font-medium">28°C</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-4 bg-white m-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Recommendations</h2>
          <Calendar className="h-6 w-6 text-green-500" />
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm">Best time to irrigate: Early morning tomorrow</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm">Wheat market price trending up - Consider selling</span>
          </li>
        </ul>
      </div>

      {/* Market Prices */}
      <div className="p-4 bg-white m-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Market Prices</h2>
          <TrendingUp className="h-6 w-6 text-blue-500" />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Wheat</span>
            <span className="font-medium text-green-600">₹2,100/quintal ↑</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Rice</span>
            <span className="font-medium">₹1,900/quintal</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t">
        <div className="grid grid-cols-4 gap-1 p-2">
          <button className="flex flex-col items-center p-2 text-blue-600">
            <Sun className="h-6 w-6" />
            <span className="text-xs mt-1">{t.weather}</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Droplets className="h-6 w-6" />
            <span className="text-xs mt-1">{t.soil}</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-xs mt-1">{t.alerts}</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">{t.settings}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerApp;
