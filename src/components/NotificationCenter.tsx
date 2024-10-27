import React from 'react';
import { X, Bell, Shield, AlertTriangle } from 'lucide-react';

interface NotificationCenterProps {
  onClose: () => void;
}

const mockNotifications = [
  {
    id: 1,
    type: 'alert',
    title: 'High-Risk Transaction Detected',
    description: 'Multiple transactions from unverified device',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'info',
    title: 'System Update Complete',
    description: 'Risk assessment algorithms have been updated',
    time: '1 hour ago',
    read: true,
  },
  {
    id: 3,
    type: 'warning',
    title: 'Compliance Review Required',
    description: 'Monthly KYC verification due in 2 days',
    time: '3 hours ago',
    read: false,
  },
];

export default function NotificationCenter({ onClose }: NotificationCenterProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      default:
        return <Shield className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-20">
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 h-0 overflow-y-auto">
              <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-white">Notifications</h2>
                  <button
                    onClick={onClose}
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="pt-2">
                {mockNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-50 ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      {getIcon(notification.type)}
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {notification.description}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 px-4 py-4 flex justify-between bg-gray-50">
              <button className="text-sm text-indigo-600 hover:text-indigo-500">
                Mark all as read
              </button>
              <button className="text-sm text-indigo-600 hover:text-indigo-500">
                View all notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}