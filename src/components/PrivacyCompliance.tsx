import React from 'react';
import { Lock, Shield, FileCheck, Clock } from 'lucide-react';
import { PrivacyMetrics } from '../types';

const mockPrivacyMetrics: PrivacyMetrics = {
  dataEncryption: true,
  lastAudit: '2024-02-15T00:00:00Z',
  gdprCompliant: true,
  dataRetention: 90,
  consentStatus: true,
};

export default function PrivacyCompliance() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Privacy & Compliance</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Lock className="w-5 h-5 text-indigo-500" />
            <span className="ml-2 text-sm font-medium text-gray-900">Encryption Status</span>
          </div>
          <div className="mt-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full
              ${mockPrivacyMetrics.dataEncryption ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
            `}>
              {mockPrivacyMetrics.dataEncryption ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-indigo-500" />
            <span className="ml-2 text-sm font-medium text-gray-900">GDPR Status</span>
          </div>
          <div className="mt-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full
              ${mockPrivacyMetrics.gdprCompliant ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
            `}>
              {mockPrivacyMetrics.gdprCompliant ? 'Compliant' : 'Review Required'}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-indigo-500" />
            <span className="ml-2 text-sm font-medium text-gray-900">Data Retention</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-600">
              {mockPrivacyMetrics.dataRetention} days
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <FileCheck className="w-5 h-5 text-indigo-500" />
            <span className="ml-2 text-sm font-medium text-gray-900">Last Audit</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-600">
              {new Date(mockPrivacyMetrics.lastAudit).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-900">Privacy Score</h3>
        <div className="mt-2 flex items-center">
          <div className="flex-1 bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: '85%' }}
            />
          </div>
          <span className="ml-2 text-sm font-medium text-blue-900">85%</span>
        </div>
      </div>
    </div>
  );
}