import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format, subDays, eachDayOfInterval } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type TimeRange = '24h' | '7d' | '30d' | '90d';

interface RiskDataPoint {
  timestamp: Date;
  riskScore: number;
  transactionCount: number;
  fraudAttempts: number;
}

const generateMockData = (days: number): RiskDataPoint[] => {
  const end = new Date();
  const start = subDays(end, days);
  
  return eachDayOfInterval({ start, end }).map(date => ({
    timestamp: date,
    riskScore: 20 + Math.random() * 30,
    transactionCount: 100 + Math.random() * 900,
    fraudAttempts: Math.floor(Math.random() * 20),
  }));
};

export default function RiskTrends() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [selectedMetric, setSelectedMetric] = useState<'riskScore' | 'transactionCount' | 'fraudAttempts'>('riskScore');

  const getDaysFromRange = (range: TimeRange): number => {
    switch (range) {
      case '24h': return 1;
      case '7d': return 7;
      case '30d': return 30;
      case '90d': return 90;
    }
  };

  const data = generateMockData(getDaysFromRange(timeRange));

  const chartData = {
    labels: data.map(d => format(d.timestamp, timeRange === '24h' ? 'HH:mm' : 'MMM d')),
    datasets: [
      {
        label: selectedMetric === 'riskScore' ? 'Risk Score'
          : selectedMetric === 'transactionCount' ? 'Transaction Count'
          : 'Fraud Attempts',
        data: data.map(d => d[selectedMetric]),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Risk Trends Analysis</h2>
        <div className="flex space-x-4">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value as any)}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm"
          >
            <option value="riskScore">Risk Score</option>
            <option value="transactionCount">Transaction Count</option>
            <option value="fraudAttempts">Fraud Attempts</option>
          </select>
          <div className="flex rounded-lg border border-gray-300 p-1">
            {(['24h', '7d', '30d', '90d'] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-sm rounded-md ${
                  timeRange === range
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-80">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
}