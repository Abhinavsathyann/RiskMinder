import React from 'react';
import { AlertOctagon, AlertTriangle, Bell, Shield } from 'lucide-react';
import { RiskAlert } from '../types';

const mockAlerts: RiskAlert[] = [
  {
    id: '1',
    severity: 'critical',
    type: 'Unusual Pattern',
    message: 'Multiple high-value transactions detected from new device',
    timestamp: '2024-03-10T14:30:00Z',
    status: 'new',
  },
  {
    id: '2',
    severity: 'high',
    type: 'Location Anomaly',
    message: 'Transaction attempted from blocked jurisdiction',
    timestamp: '2024-03-10T14:15:00Z',
    status: 'investigating',
  },
];

export default function RiskAlerts() {
  const getSeverityIcon = (severity: RiskAlert['severity']) => {
    switch (severity) {
      case 'critical':
        return <AlertOctagon className="w-5 h-5 text-red-500" />;
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'medium':
        return <Bell className="w-5 h-5 text-yellow-500" />;
      default:
        return <Shield className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Risk Alerts</h2>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
          {mockAlerts.length} Active
        </span>
      </div>
      <div className="divide-y divide-gray-200">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="py-4">
            <div className="flex items-start">
              {getSeverityIcon(alert.severity)}
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{alert.type}</p>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full
                    ${alert.status === 'new' ? 'bg-red-100 text-red-800' : ''}
                    ${alert.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${alert.status === 'resolved' ? 'bg-green-100 text-green-800' : ''}
                  `}>
                    {alert.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{alert.message}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}