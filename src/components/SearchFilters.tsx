import React from 'react';
import { X } from 'lucide-react';

interface SearchFiltersProps {
  onClose: () => void;
}

export default function SearchFilters({ onClose }: SearchFiltersProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-20">
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 h-0 overflow-y-auto">
              <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-white">Filters</h2>
                  <button
                    onClick={onClose}
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="px-4 sm:px-6">
                  <div className="space-y-6 pt-6 pb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Transaction Amount Range
                      </label>
                      <div className="mt-1 flex space-x-4">
                        <input
                          type="number"
                          placeholder="Min"
                          className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Risk Score
                      </label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                        <option>All</option>
                        <option>Low Risk (0-30)</option>
                        <option>Medium Risk (31-70)</option>
                        <option>High Risk (71-100)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Transaction Status
                      </label>
                      <div className="mt-2 space-y-2">
                        {['Approved', 'Pending', 'Flagged', 'Blocked'].map((status) => (
                          <div key={status} className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-900">{status}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Date Range
                      </label>
                      <div className="mt-1 space-y-2">
                        <input
                          type="date"
                          className="block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                        <input
                          type="date"
                          className="block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-4 bg-gray-50">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}