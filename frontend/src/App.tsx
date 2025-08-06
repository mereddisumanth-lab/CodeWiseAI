import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CodeWiseAI
          </h1>
          <p className="text-xl text-gray-600">
            AI-Powered Code Review Portal
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tailwind CSS Test
            </h2>
            <p className="text-gray-600 mb-6">
              If you can see this styled page, Tailwind CSS is working correctly!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  ✅ Frontend Ready
                </h3>
                <p className="text-blue-600">
                  React + TypeScript + Tailwind CSS configured
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🚀 Next Steps
                </h3>
                <p className="text-green-600">
                  Backend setup and API integration
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  🎯 Phase 1
                </h3>
                <p className="text-purple-600">
                  Project setup and tools configuration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
