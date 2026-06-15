import { Users, GraduationCap, AlertTriangle, Wallet, Award, TrendingUp } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  kpiMetrics,
  featureImportanceData,
  statusDistribution,
  financialRetentionData,
  students,
} from '../data/mockData';

export default function ExecutiveDashboard() {
  // Get top 5 high-risk students
  const highRiskStudents = students
    .filter(s => s.riskLevel === 'Tinggi')
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 5);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Tinggi': return 'bg-red-100 text-red-700 border-red-200';
      case 'Sedang': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Rendah': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard Eksekutif</h1>
          <p className="mt-1 text-sm text-gray-600">
            Monitoring real-time performa akademik & deteksi risiko dropout mahasiswa
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <TrendingUp className="mr-1 h-3 w-3" />
            Model Aktif
          </Badge>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Mahasiswa"
          value={kpiMetrics.totalStudents.toLocaleString('id-ID')}
          subtitle={`${kpiMetrics.enrolled} aktif, ${kpiMetrics.graduate} lulus`}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Mahasiswa Berisiko"
          value={kpiMetrics.atRisk}
          subtitle="Memerlukan intervensi segera"
          icon={AlertTriangle}
          color="red"
          trend={{ value: '+12 dari bulan lalu', positive: false }}
        />
        <MetricCard
          title="Akurasi Model ML"
          value={`${kpiMetrics.modelAccuracy}%`}
          subtitle="Random Forest Classifier"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Total Tunggakan"
          value={`Rp ${(kpiMetrics.totalDebt / 1000000000).toFixed(1)}M`}
          subtitle={`${kpiMetrics.financialDebtors} mahasiswa menunggak`}
          icon={Wallet}
          color="orange"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Feature Importance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Faktor Prediksi Dropout (Feature Importance)</CardTitle>
            <p className="text-sm text-gray-600">
              Variabel yang paling berpengaruh terhadap risiko dropout mahasiswa
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {featureImportanceData.map((item) => (
                <div key={item.feature} className="flex items-center gap-3">
                  <span className="w-44 text-xs text-gray-600 text-right shrink-0">{item.feature}</span>
                  <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
                    <div
                      className="h-full bg-[#1e3a5f] rounded flex items-center justify-end pr-2 transition-all"
                      style={{ width: `${(item.importance / 0.3) * 100}%` }}
                    >
                      <span className="text-xs text-white">{(item.importance * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Status Mahasiswa</CardTitle>
            <p className="text-sm text-gray-600">
              Breakdown status akademik seluruh mahasiswa
            </p>
          </CardHeader>
          <CardContent>
            {(() => {
              const total = statusDistribution.reduce((s, d) => s + d.value, 0);
              const r = 80, cx = 130, cy = 110, stroke = 28;
              const circumference = 2 * Math.PI * r;
              let offset = 0;
              const slices = statusDistribution.map(d => {
                const pct = d.value / total;
                const dash = pct * circumference;
                const slice = { ...d, dash, gap: circumference - dash, offset, pct };
                offset += dash;
                return slice;
              });
              return (
                <div className="flex items-center gap-6">
                  <svg viewBox="0 0 260 220" className="w-56 shrink-0">
                    {slices.map((s) => (
                      <circle
                        key={s.name}
                        cx={cx} cy={cy} r={r}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={stroke}
                        strokeDasharray={`${s.dash} ${s.gap}`}
                        strokeDashoffset={-s.offset}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
                      />
                    ))}
                    <text x={cx} y={cy - 6} textAnchor="middle" fontSize={22} fontWeight="600" fill="#111827">{total.toLocaleString('id-ID')}</text>
                    <text x={cx} y={cy + 14} textAnchor="middle" fontSize={11} fill="#6b7280">Mahasiswa</text>
                  </svg>
                  <div className="space-y-3 flex-1">
                    {statusDistribution.map(d => (
                      <div key={d.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full shrink-0" style={{ background: d.color }} />
                          <span className="text-sm text-gray-700">{d.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-gray-900">{d.value.toLocaleString('id-ID')}</span>
                          <span className="text-xs text-gray-500 ml-1">({((d.value / total) * 100).toFixed(0)}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Financial vs Retention Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Korelasi Tunggakan & Tingkat Dropout</CardTitle>
            <p className="text-sm text-gray-600">
              Tren tunggakan keuangan dan pengaruhnya terhadap risiko dropout
            </p>
          </CardHeader>
          <CardContent>
            {(() => {
              const w = 500, h = 220, pad = { t: 10, r: 20, b: 30, l: 40 };
              const cw = w - pad.l - pad.r;
              const ch = h - pad.t - pad.b;
              const months = financialRetentionData.map(d => d.month);
              const n = months.length;
              const maxT = 200, minT = 100;
              const maxD = 20, minD = 0;
              const xPos = (i: number) => pad.l + (i / (n - 1)) * cw;
              const yT = (v: number) => pad.t + ch - ((v - minT) / (maxT - minT)) * ch;
              const yD = (v: number) => pad.t + ch - ((v - minD) / (maxD - minD)) * ch;
              const tunggakanPath = financialRetentionData
                .map((d, i) => `${i === 0 ? 'M' : 'L'}${xPos(i).toFixed(1)},${yT(d.tunggakan).toFixed(1)}`)
                .join(' ');
              const dropoutPath = financialRetentionData
                .map((d, i) => `${i === 0 ? 'M' : 'L'}${xPos(i).toFixed(1)},${yD(d.dropout).toFixed(1)}`)
                .join(' ');
              return (
                <div>
                  <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
                    {[100, 120, 140, 160, 180, 200].map(v => (
                      <line key={`tg-${v}`} x1={pad.l} x2={w - pad.r} y1={yT(v)} y2={yT(v)} stroke="#f0f0f0" strokeWidth={1} />
                    ))}
                    {[100, 120, 140, 160, 180, 200].map(v => (
                      <text key={`tl-${v}`} x={pad.l - 4} y={yT(v) + 4} textAnchor="end" fontSize={10} fill="#9ca3af">{v}</text>
                    ))}
                    {months.map((m, i) => (
                      <text key={`ml-${m}`} x={xPos(i)} y={h - 8} textAnchor="middle" fontSize={10} fill="#9ca3af">{m}</text>
                    ))}
                    <path d={tunggakanPath} fill="none" stroke="#f59e0b" strokeWidth={2.5} strokeLinejoin="round" />
                    <path d={dropoutPath} fill="none" stroke="#dc2626" strokeWidth={2.5} strokeLinejoin="round" strokeDasharray="6 4" />
                    {financialRetentionData.map((d, i) => (
                      <circle key={`tp-${i}`} cx={xPos(i)} cy={yT(d.tunggakan)} r={4} fill="#f59e0b" />
                    ))}
                    {financialRetentionData.map((d, i) => (
                      <circle key={`dp-${i}`} cx={xPos(i)} cy={yD(d.dropout)} r={4} fill="#dc2626" />
                    ))}
                  </svg>
                  <div className="flex gap-6 justify-center mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-amber-400" />
                      <span className="text-xs text-gray-600">Jumlah Penunggak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-red-500 border-dashed" style={{ borderTop: '2px dashed #dc2626', background: 'none' }} />
                      <span className="text-xs text-gray-600">Dropout</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>

        {/* High Risk Alert Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Alert Risiko Tinggi
            </CardTitle>
            <p className="text-sm text-gray-600">
              5 mahasiswa prioritas untuk intervensi
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {highRiskStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-start gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 flex-shrink-0">
                    <span className="text-sm font-semibold">{student.riskScore}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900 truncate">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.nim} • {student.major}</p>
                    <div className="mt-1 flex gap-1">
                      {student.financialStatus === 'Menunggak' && (
                        <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                          Menunggak
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                        IPK: {student.semester2GPA}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                Lihat Semua Alert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scholarship Impact */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              Dampak Beasiswa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Penerima Beasiswa</span>
                <span className="text-2xl font-semibold">{kpiMetrics.scholarshipRecipients}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tingkat Retensi Beasiswa</span>
                <span className="text-2xl font-semibold text-emerald-600">
                  {kpiMetrics.scholarshipRetentionRate}%
                </span>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Mahasiswa dengan beasiswa memiliki tingkat dropout <span className="font-semibold text-emerald-600">65% lebih rendah</span> dibanding non-penerima
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rekomendasi Aksi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-red-900">Intervensi Segera Diperlukan</p>
                  <p className="text-xs text-red-700 mt-0.5">
                    {highRiskStudents.length} mahasiswa dengan skor risiko &gt;75 memerlukan konseling akademik
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <Wallet className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-amber-900">Skema Pembayaran Fleksibel</p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Tawarkan cicilan untuk {kpiMetrics.financialDebtors} mahasiswa penunggak
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <Award className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-emerald-900">Perluasan Program Beasiswa</p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Identifikasi 50 mahasiswa berprestasi namun terkendala finansial
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
