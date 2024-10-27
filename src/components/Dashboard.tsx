import React, { useState } from 'react';
import { Shield, AlertTriangle, TrendingUp, Users, Bell, Settings, Search, Filter } from 'lucide-react';
import { RiskMetrics } from '../types';
import MetricsCard from './MetricsCard';
import TransactionList from './TransactionList';
import RiskChart from './RiskChart';
import ComplianceStatus from './ComplianceStatus';
import RiskAlerts from './RiskAlerts';
import PrivacyCompliance from './PrivacyCompliance';
import AnomalyDetection from './AnomalyDetection';
import SearchFilters from './SearchFilters';
import NotificationCenter from './NotificationCenter';

const mockMetrics: RiskMetrics = {
  totalTransactions: 1234,
  flaggedTransactions: 23,
  averageRiskScore: 18.5,
  highRiskCount: 7,
  fraudPreventionRate: 99.2,
  totalAmount: 456789.00,
  riskTrend: -2.5,
};

export default function Dashboard() {
  const [showFilters, setShowFilters] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">RiskGuard Analytics</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <Filter className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-gray-100 relative"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showFilters && <SearchFilters onClose={() => setShowFilters(false)} />}
      {showNotifications && <NotificationCenter onClose={() => setShowNotifications(false)} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Risk Analytics Dashboard</h1>
          <div className="flex space-x-4">
            <select className="rounded-lg border border-gray-300 px-4 py-2">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Custom Range</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Generate Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricsCard
            title="Total Transactions"
            value={mockMetrics.totalTransactions}
            icon={TrendingUp}
            trend="+12.5%"
            trendDirection="up"
          />
          <MetricsCard
            title="Fraud Prevention Rate"
            value={`${mockMetrics.fraudPreventionRate}%`}
            icon={Shield}
            trend="+0.5%"
            trendDirection="up"
            className="text-green-600"
          />
          <MetricsCard
            title="Risk Score"
            value={mockMetrics.averageRiskScore.toFixed(1)}
            icon={AlertTriangle}
            trend={`${mockMetrics.riskTrend}%`}
            trendDirection="down"
            className="text-indigo-600"
          />
          <MetricsCard
            title="High Risk Cases"
            value={mockMetrics.highRiskCount}
            icon={Users}
            trend="+2"
            trendDirection="up"
            className="text-red-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Risk Trends</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">Daily</button>
                  <button className="px-3 py-1 text-sm rounded-full text-gray-600 hover:bg-gray-100">Weekly</button>
                  <button className="px-3 py-1 text-sm rounded-full text-gray-600 hover:bg-gray-100">Monthly</button>
                </div>
              </div>
              <RiskChart />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <RiskAlerts />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <ComplianceStatus />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <PrivacyCompliance />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <AnomalyDetection />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  View All Transactions
                </button>
              </div>
              <TransactionList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}