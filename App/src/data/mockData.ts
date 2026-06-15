// Mock data for the dashboard
export const kpiMetrics = {
  totalStudents: 2450,
  enrolled: 2100,
  graduate: 350,
  atRisk: 187,
  modelAccuracy: 92,
  totalDebt: 2500000000,
  financialDebtors: 234,
};

export const featureImportanceData = [
  { feature: 'Attendance Rate', importance: 0.28 },
  { feature: 'GPA', importance: 0.24 },
  { feature: 'Assignment Completion', importance: 0.18 },
  { feature: 'Financial Status', importance: 0.15 },
  { feature: 'Engagement Score', importance: 0.10 },
  { feature: 'Prior Academic History', importance: 0.05 },
];

export const statusDistribution = [
  { name: 'Aktif', value: 2100, color: '#10b981' },
  { name: 'Alumni', value: 350, color: '#3b82f6' },
  { name: 'Putus Studi', value: 80, color: '#ef4444' },
  { name: 'Lainnya', value: 20, color: '#f59e0b' },
];

export const financialRetentionData = [
  { month: 'Jan', retention: 94, financial: 86 },
  { month: 'Feb', retention: 93, financial: 85 },
  { month: 'Mar', retention: 95, financial: 88 },
  { month: 'Apr', retention: 92, financial: 82 },
  { month: 'May', retention: 94, financial: 87 },
  { month: 'Jun', retention: 96, financial: 91 },
];

export interface Student {
  id: string;
  name: string;
  riskLevel: 'Tinggi' | 'Sedang' | 'Rendah';
  riskScore: number;
  gpa: number;
  attendance: number;
  financialStatus: string;
}

export const students: Student[] = [
  {
    id: '1',
    name: 'Ahmad Wijaya',
    riskLevel: 'Tinggi',
    riskScore: 0.85,
    gpa: 2.1,
    attendance: 65,
    financialStatus: 'Menunggak',
  },
  {
    id: '2',
    name: 'Siti Rahman',
    riskLevel: 'Tinggi',
    riskScore: 0.78,
    gpa: 2.3,
    attendance: 72,
    financialStatus: 'Menunggak',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    riskLevel: 'Tinggi',
    riskScore: 0.76,
    gpa: 2.2,
    attendance: 68,
    financialStatus: 'Menunggak',
  },
  {
    id: '4',
    name: 'Dewi Kusuma',
    riskLevel: 'Tinggi',
    riskScore: 0.72,
    gpa: 2.4,
    attendance: 75,
    financialStatus: 'Lunas',
  },
  {
    id: '5',
    name: 'Eka Putri',
    riskLevel: 'Tinggi',
    riskScore: 0.68,
    gpa: 2.5,
    attendance: 78,
    financialStatus: 'Lunas',
  },
  {
    id: '6',
    name: 'Fajar Irawan',
    riskLevel: 'Sedang',
    riskScore: 0.55,
    gpa: 2.9,
    attendance: 82,
    financialStatus: 'Lunas',
  },
  {
    id: '7',
    name: 'Gita Suryani',
    riskLevel: 'Sedang',
    riskScore: 0.50,
    gpa: 3.1,
    attendance: 85,
    financialStatus: 'Lunas',
  },
  {
    id: '8',
    name: 'Hendra Kusuma',
    riskLevel: 'Rendah',
    riskScore: 0.25,
    gpa: 3.5,
    attendance: 92,
    financialStatus: 'Lunas',
  },
  {
    id: '9',
    name: 'Indah Wulandari',
    riskLevel: 'Rendah',
    riskScore: 0.20,
    gpa: 3.7,
    attendance: 95,
    financialStatus: 'Lunas',
  },
  {
    id: '10',
    name: 'Joko Prasetyo',
    riskLevel: 'Rendah',
    riskScore: 0.15,
    gpa: 3.8,
    attendance: 96,
    financialStatus: 'Lunas',
  },
];
