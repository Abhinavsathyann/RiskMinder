export interface Transaction {
  id: string;
  amount: number;
  timestamp: string;
  status: 'approved' | 'pending' | 'flagged' | 'blocked';
  riskScore: number;
  merchant: string;
  location: string;
  category: string;
  deviceId: string;
  ipAddress: string;
  anomalyScore: number;
}

export interface RiskMetrics {
  totalTransactions: number;
  flaggedTransactions: number;
  averageRiskScore: number;
  highRiskCount: number;
  fraudPreventionRate: number;
  totalAmount: number;
  riskTrend: number;
}

export interface ComplianceStatus {
  kycStatus: 'verified' | 'pending' | 'failed';
  amlStatus: 'compliant' | 'review' | 'non-compliant';
  lastUpdated: string;
  riskLevel: 'low' | 'medium' | 'high';
  nextReviewDate: string;
  documentStatus: {
    identity: boolean;
    address: boolean;
    income: boolean;
  };
}

export interface AnomalyData {
  timestamp: string;
  score: number;
  type: 'location' | 'amount' | 'frequency' | 'device' | 'pattern';
  details: string;
}

export interface RiskAlert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: string;
  message: string;
  timestamp: string;
  status: 'new' | 'investigating' | 'resolved';
}

export interface PrivacyMetrics {
  dataEncryption: boolean;
  lastAudit: string;
  gdprCompliant: boolean;
  dataRetention: number;
  consentStatus: boolean;
}