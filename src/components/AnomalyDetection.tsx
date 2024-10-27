import React from 'react';
import { AnomalyData } from '../types';
import { Activity, AlertCircle } from 'lucide-react';

const mockAnomalies: AnomalyData[] = [
  {
    timestamp: '2024-03-10T14:30:00Z',
    score: 0.85,
    type: 'amount',
    details: 'Transaction amount 500% above user average',
  },
  {
    timestamp: '2024-03-10T14:15:00Z',
    score: 0.92,
    type: 'location',
    details: 'Transaction location differs from usual pattern',
  },
];

export default function AnomalyDetection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Anomaly Detection</h2>
        <Activity className="w-5 h-5 text-indigo-500" />
      </div>

      <div className="space-y-4">
        {mockAnomalies.map((anomaly, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <div className="ml-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {anomaly.type.charAt(0).toUpperCase() + anomaly.type.slice(1)} Anomaly
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    {(anomaly.score * 100).toFixed(0)}% Confidence
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{anomaly.details}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(anomaly.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${anomaly.score * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}