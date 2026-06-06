"use client"

import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Avg. Risk/Trade", value: "1.23%" },
  { label: "Largest Loss", value: "-$1,234.56", negative: true },
  { label: "Risk/Reward Ratio", value: "1.92" },
  { label: "Max Consecutive Loss", value: "3" },
]

export function RiskAnalysis() {
  const riskScore = 42;
  const strokeDasharray = `${riskScore * 2.39} 239`;

  return (
    <div className="bg-[#0D1117] border border-gray-800 rounded-2xl p-6 transition-all hover:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center gap-1 mb-6">
        <h3 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          RISK ANALYSIS
        </h3>
        <Info className="h-3 w-3 text-gray-500 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Stats List */}
        <div className="flex-1 space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between group">
              <span className="text-[13px] text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </span>
              <span
                className={cn(
                  "text-[13px] font-bold tabular-nums",
                  stat.negative ? "text-red-500" : "text-white"
                )}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Risk Score Gauge with Glow */}
        <div className="relative flex flex-col items-center justify-center shrink-0">
          {/* Subtle Orange Glow behind the Gauge */}
          <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-xl" />
          
          <svg className="h-[90px] w-[90px] -rotate-90 drop-shadow-[0_0_8px_rgba(249,115,22,0.2)]" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#1e1e1e"
              strokeWidth="8"
            />
            {/* Progress circle (Orange) */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#f97316"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black text-white leading-none">{riskScore}</span>
            <div className="flex flex-col items-center -space-y-1 mt-0.5">
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Moderate</span>
              <span className="text-[9px] text-orange-500 font-black uppercase tracking-tight">Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
