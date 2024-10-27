import React, { useState } from 'react';
import { Save, Bell, Lock, Eye, Shield, RefreshCcw } from 'lucide-react';

interface SettingsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  settings: {
    id: string;
    label: string;
    type: 'toggle' | 'select' | 'input';
    value: any;
    options?: string[];
  }[];
}

export default function Settings() {
  const [settings, setSettings] = useState<SettingsSection[]>([
    {
      id: 'notifications',
      title: 'Notifications',
      icon: <Bell className="w-5 h-5" />,
      settings: [
        {
          id: 'highRiskAlerts',
          label: 'High-risk transaction alerts',
          type: 'toggle',
          value: true,
        },
        {
          id: 'complianceAlerts',
          label: 'Compliance deadline reminders',
          type: 'toggle',
          value: true,
        },
        {
          id: 'alertFrequency',
          label: 'Alert frequency',
          type: 'select',
          value: 'realtime',
          options: ['realtime', 'hourly', 'daily'],
        },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Lock className="w-5 h-5" />,
      settings: [
        {
          id: 'twoFactor',
          label: 'Two-factor authentication',
          type: 'toggle',
          value: true,
        },
        {
          id: 'sessionTimeout',
          label: 'Session timeout (minutes)',
          type: 'input',
          value: '30',
        },
      ],
    },
    {
      id: 'riskManagement',
      title: 'Risk Management',
      icon: <Shield className="w-5 h-5" />,
      settings: [
        {
          id: 'autoFlagThreshold',
          label: 'Auto-flag risk threshold',
          type: 'input',
          value: '75',
        },
        {
          id: 'riskAlgorithm',
          label: 'Risk assessment algorithm',
          type: 'select',
          value: 'advanced',
          options: ['basic', 'advanced', 'ml-powered'],
        },
      ],
    },
    {
      id: 'display',
      title: 'Display',
      icon: <Eye className="w-5 h-5" />,
      settings: [
        {
          id: 'defaultDateRange',
          label: 'Default date range',
          type: 'select',
          value: '7days',
          options: ['24hours', '7days', '30days', '90days'],
        },
        {
          id: 'autoRefresh',
          label: 'Auto-refresh interval (seconds)',
          type: 'input',
          value: '30',
        },
      ],
    },
  ]);

  const handleSettingChange = (sectionId: string, settingId: string, value: any) => {
    setSettings(prevSettings =>
      prevSettings.map(section =>
        section.id === sectionId
          ? {
              ...section,
              settings: section.settings.map(setting =>
                setting.id === settingId ? { ...setting, value } : setting
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        {settings.map(section => (
          <div key={section.id} className="bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="ml-2 text-lg font-medium text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.settings.map(setting => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">{setting.label}</label>
                    <div className="w-1/3">
                      {setting.type === 'toggle' ? (
                        <button
                          onClick={() =>
                            handleSettingChange(section.id, setting.id, !setting.value)
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                            setting.value ? 'bg-indigo-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                              setting.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : setting.type === 'select' ? (
                        <select
                          value={setting.value}
                          onChange={e =>
                            handleSettingChange(section.id, setting.id, e.target.value)
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {setting.options?.map(option => (
                            <option key={option} value={option}>
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={setting.value}
                          onChange={e =>
                            handleSettingChange(section.id, setting.id, e.target.value)
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}