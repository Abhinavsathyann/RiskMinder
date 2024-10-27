import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import TransactionManager from './components/TransactionManager';
import RiskTrends from './components/RiskTrends';
import { Layout, Home, Settings as SettingsIcon, List, TrendingUp } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'transactions', label: 'Transactions', icon: List },
    { id: 'risk-trends', label: 'Risk Trends', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Layout className="w-6 h-6 text-indigo-600" />
            <span className="ml-2 text-lg font-semibold text-gray-900">RiskGuard</span>
          </div>
          <nav className="mt-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
        <main className="flex-1 ml-64">
          <div className="p-8">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'transactions' && <TransactionManager />}
            {activeTab === 'risk-trends' && <RiskTrends />}
            {activeTab === 'settings' && <Settings />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;