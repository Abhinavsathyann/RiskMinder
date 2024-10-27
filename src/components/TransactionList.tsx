import React from 'react';
import { Transaction } from '../types';
import { format } from 'date-fns';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 1250.00,
    timestamp: '2024-03-10T14:30:00Z',
    status: 'approved',
    riskScore: 15,
    merchant: 'Amazon',
    location: 'US',
  },
  {
    id: '2',
    amount: 899.99,
    timestamp: '2024-03-10T13:45:00Z',
    status: 'flagged',
    riskScore: 75,
    merchant: 'Unknown Vendor',
    location: 'RU',
  },
  {
    id: '3',
    amount: 50.00,
    timestamp: '2024-03-10T13:15:00Z',
    status: 'pending',
    riskScore: 35,
    merchant: 'Spotify',
    location: 'GB',
  },
];

export default function TransactionList() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Timestamp
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Merchant
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Risk Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {format(new Date(transaction.timestamp), 'MMM d, yyyy HH:mm')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.merchant}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${transaction.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                  ${transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${transaction.status === 'flagged' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        transaction.riskScore < 30
                          ? 'bg-green-500'
                          : transaction.riskScore < 60
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${transaction.riskScore}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{transaction.riskScore}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}