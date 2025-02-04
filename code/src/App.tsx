import React, { useState, useEffect } from 'react';
import { Bell, Droplets, Thermometer, Wind, Sun, Activity, Check, Loader2, Wifi, Database, Brain, BarChart, ChevronDown } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Type definitions
interface WeatherDataPoint {
  name: string;
  temp: number;
  humidity: number;
  soil: number;
}

interface CropScore {
  name: string;
  score: number;
  demand: 'High' | 'Medium' | 'Low';
  waterReq: 'High' | 'Medium' | 'Low';
  season: 'Current' | 'Off-season';
}

interface Alert {
  id: number;
  type: 'weather' | 'market' | 'pest';
  title: string;
  description: string;
}

interface AnalysisStep {
  id: number;
  title: string;
  icon: React.ElementType;
}

type TabType = 'dashboard' | 'analysis' | 'alerts' | 'weather';

const weatherData: WeatherDataPoint[] = [
  { name: 'Mon', temp: 32, humidity: 65, soil: 45 },
  { name: 'Tue', temp: 30, humidity: 68, soil: 42 },
  { name: 'Wed', temp: 31, humidity: 70, soil: 44 },
  { name: 'Thu', temp: 33, humidity: 62, soil: 40 },
  { name: 'Fri', temp: 35, humidity: 58, soil: 38 },
];

const cropScoreData: CropScore[] = [
  { name: 'Cotton', score: 92, demand: 'High', waterReq: 'Medium', season: 'Current' },
  { name: 'Soybean', score: 85, demand: 'Medium', waterReq: 'Low', season: 'Current' },
  { name: 'Sugarcane', score: 78, demand: 'Medium', waterReq: 'High', season: 'Off-season' },
];

const alertsData: Alert[] = [
  { id: 1, type: 'weather', title: 'High Temperature Alert', description: 'Temperature expected to reach 38°C tomorrow' },
  { id: 2, type: 'market', title: 'Price Alert', description: 'Cotton prices trending upward in nearby markets' },
  { id: 3, type: 'pest', title: 'Pest Warning', description: 'Increased pest activity reported in the region' },
];

const IntegratedKrishiSakha: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedCrop, setSelectedCrop] = useState<number | null>(null);

  const steps: AnalysisStep[] = [
    { id: 0, title: 'Connecting to IoT Devices...', icon: Wifi },
    { id: 1, title: 'Reading Sensor Data...', icon: Database },
    { id: 2, title: 'Analyzing Historical Data...', icon: BarChart },
    { id: 3, title: 'Running AI Models...', icon: Brain },
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const startNewAnalysis = (): void => {
    setCurrentStep(0);
    setShowResult(false);
    setSelectedCrop(null);
  };

  const renderDashboard = (): JSX.Element => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <Thermometer className="text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-xl font-bold">32°C</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <Droplets className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Soil Moisture</p>
              <p className="text-xl font-bold">45%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <Wind className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="text-xl font-bold">12 km/h</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Weekly Weather Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" name="Temperature" />
                <Line type="monotone" dataKey="humidity" stroke="#3b82f6" name="Humidity" />
                <Line type="monotone" dataKey="soil" stroke="#22c55e" name="Soil Moisture" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderAnalysis = (): JSX.Element => (
    !showResult ? (
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Crop Analysis in Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                currentStep >= index ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <step.icon className={`h-5 w-5 ${
                    currentStep > index ? 'text-green-500' : 
                    currentStep === index ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <span>{step.title}</span>
                </div>
                <div>
                  {currentStep > index && <Check className="h-5 w-5 text-green-500" />}
                  {currentStep === index && <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    ) : (
      <div className="space-y-4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Crop Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={cropScoreData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#22c55e" name="Compatibility Score" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 mb-4">
          {cropScoreData.map((crop, index) => (
            <Card key={index} 
                  className={`cursor-pointer transition-all ${
                    selectedCrop === index ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedCrop(index)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{crop.name}</h3>
                    <p className="text-sm text-gray-600">Compatibility Score: {crop.score}%</p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                
                {selectedCrop === index && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p><span className="font-medium">Market Demand:</span> {crop.demand}</p>
                    <p><span className="font-medium">Water Requirement:</span> {crop.waterReq}</p>
                    <p><span className="font-medium">Growing Season:</span> {crop.season}</p>
                    <p className="mt-4 text-green-600">
                      Recommended due to optimal soil conditions and expected market demand in the next season.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-4">
          <button 
            onClick={startNewAnalysis}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Start New Analysis
          </button>
        </div>
      </div>
    )
  );

  const renderAlerts = (): JSX.Element => (
    <div className="space-y-4">
      {alertsData.map(alert => (
        <Alert key={alert.id} className="bg-yellow-50 border-yellow-200">
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  );

  const renderWeather = (): JSX.Element => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>5-Day Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" name="Temperature" />
                <Line type="monotone" dataKey="humidity" stroke="#3b82f6" name="Humidity" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Today's Overview</h3>
            <div className="space-y-2">
              <p>Max Temperature: 35°C</p>
              <p>Min Temperature: 24°C</p>
              <p>Humidity: 65%</p>
              <p>Wind Speed: 12 km/h</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Weather Advisory</h3>
            <p className="text-gray-600">
              Clear skies expected. Ideal conditions for crop maintenance activities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = (): JSX.Element => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'analysis':
        return renderAnalysis();
      case 'alerts':
        return renderAlerts();
      case 'weather':
        return renderWeather();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 p-4 text-white">
        <h1 className="text-xl font-bold">Krishi-Sakha Smart Farming Assistant</h1>
        <p className="text-sm">AI-Powered Crop Recommendations</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {renderContent()}
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t grid grid-cols-4 p-2">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`p-2 flex flex-col items-center ${activeTab === 'dashboard' ? 'text-green-600' : 'text-gray-500'}`}>
          <Activity className="h-6 w-6" />
          <span className="text-xs">Dashboard</span>
        </button>
        <button 
          onClick={() => setActiveTab('analysis')}
          className={`p-2 flex flex-col items-center ${activeTab === 'analysis' ? 'text-green-600' : 'text-gray-500'}`}>
          <BarChart className="h-6 w-6" />
          <span className="text-xs">Analysis</span>
        </button>
        <button 
          onClick={() => setActiveTab('alerts')}
          className={`p-2 flex flex-col items-center ${activeTab === 'alerts' ? 'text-green-600' : 'text-gray-500'}`}>
          <Bell className="h-6 w-6" />
          <span className="text-xs">Alerts</span>
        </button>
        <button 
          onClick={() => setActiveTab('weather')}
          className={`p-2 flex flex-col items-center ${activeTab === 'weather' ? 'text-green-600' : 'text-gray-500'}`}>
          <Sun className="h-6 w-6" />
          <span className="text-xs">Weather</span>
        </button>
      </div>
    </div>
  );
};

export default IntegratedKrishiSakha;