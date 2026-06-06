import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { EquityChart } from "@/components/equity-chart"
import { AIInsights } from "@/components/ai-insights"
import { PerformanceSummary } from "@/components/performance-summary"
import { RiskAnalysis } from "@/components/risk-analysis"
import { TradingFrequency } from "@/components/trading-frequency"

// Custom icons matching the original design
function ProfitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect x="4" y="10" width="4" height="10" rx="1" fill="#22c55e" opacity="0.6" />
      <rect x="10" y="6" width="4" height="14" rx="1" fill="#22c55e" opacity="0.8" />
      <rect x="16" y="2" width="4" height="18" rx="1" fill="#22c55e" />
      <path d="M6 8L12 4L18 1" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WinRateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#f97316" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="#f97316" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="#f97316" />
      <path d="M12 3V1M12 23V21M3 12H1M23 12H21" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function RiskScoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="1.5" />
      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DrawdownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M3 7L8 12L12 8L21 17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 17H21V11" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[232px]">
        <Header />
        
        <div className="px-6 pb-6">
          {/* Page Title */}
          <div className="mb-5">
            <h1 className="text-[22px] font-bold text-foreground">Dashboard Overview</h1>
            <p className="text-[13px] text-muted-foreground mt-0.5">
              Track your performance, analyze your edge, and grow consistently.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <StatCard
              title="TOTAL PROFIT"
              value="$24,571.34"
              change={{
                value: "12.42%",
                positive: true,
                label: "vs last 30 days",
              }}
              icon={<ProfitIcon />}
              iconBg="bg-green/10"
            />
            <StatCard
              title="WIN RATE"
              value="68.42%"
              change={{
                value: "8.17%",
                positive: true,
                label: "vs last 30 days",
              }}
              icon={<WinRateIcon />}
              iconBg="bg-orange/10"
            />
            <StatCard
              title="RISK SCORE"
              value="42"
              subValue="/100"
              badge={{
                text: "Moderate Risk",
                color: "orange",
              }}
              icon={<RiskScoreIcon />}
              iconBg="bg-orange/10"
            />
            <StatCard
              title="DRAWDOWN"
              value="6.32%"
              change={{
                value: "1.23%",
                positive: false,
                label: "vs last 30 days",
              }}
              icon={<DrawdownIcon />}
              iconBg="bg-red/10"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <EquityChart />
            </div>
            <div>
              <AIInsights />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-3 gap-4">
            <PerformanceSummary />
            <RiskAnalysis />
            <TradingFrequency />
          </div>
        </div>
      </main>
    </div>
  )
}
