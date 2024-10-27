import React from 'react';
import { ComplianceStatus as IComplianceStatus } from '../types';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const mockStatus: IComplianceStatus = {
  kycStatus: 'verified',
  amlStatus: 'review',
  lastUpdated: '2024-03-10T15:00:00Z',
};

export default function ComplianceStatus() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
      case 'compliant':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
      case 'review':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <h3 className="text-sm font-medium text-gray-900">KYC Status</h3>
          <p className="text-sm text-gray-500">Know Your Customer</p>
        </div>
        {getStatusIcon(mockStatus.kycStatus)}
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <h3 className="text-sm font-medium text-gray-900">AML Status</h3>
          <p className="text-sm text-gray-500">Anti-Money Laundering</p>
        </div>
        {getStatusIcon(mockStatus.amlStatus)}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Last updated: {new Date(mockStatus.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}