"use client"

import { MoreHorizontal, TrendingUp } from "lucide-react"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot,
} from "recharts"
import { cn } from "@/lib/utils"

const timeFilters = ["1D", "7D", "30D", "3M", "1Y", "ALL"]

// Chart data matching the original curve pattern with realistic trading growth
const chartData = [
  { month: "Jul '23", value: 42000 },
  { month: "Aug '23", value: 48000 },
  { month: "Sep '23", value: 45000 },
  { month: "Oct '23", value: 52000 },
  { month: "Nov '23", value: 48000 },
  { month: "Dec '23", value: 55000 },
  { month: "Jan '24", value: 58000 },
  { month: "Feb '24", value: 65000 },
  { month: "Mar '24", value: 78000 },
  { month: "Apr '24", value: 88000 },
  { month: "May '24", value: 105000 },
  { month: "Jun '24", value: 124571.34 },
]

export function EquityChart() {
  const lastDataPoint = chartData[chartData.length - 1]
  
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0D1117] p-6 h-full flex flex-col transition-all duration-300 hover:border-gray-700">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-1.5">
            EQUITY GROWTH
          </h3>
          <p className="text-[32px] font-bold text-white leading-none tracking-tight">$124,571.34</p>
          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-xs font-bold text-emerald-500">24.57%</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">(All Time)</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={cn(
                "px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all duration-200",
                filter === "ALL"
                  ? "bg-[#f97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              {filter}
            </button>
          ))}
          <div className="w-px h-4 bg-gray-800 mx-1" />
          <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Chart with floating tooltip */}
      <div className="relative flex-1 min-h-[240px]">
        {/* Floating tooltip at the end - styled as dark card with glow */}
        <div className="absolute right-14 top-0 z-10">
          <div className="rounded-xl border border-gray-800 bg-[#0D1117] px-4 py-2.5 shadow-2xl backdrop-blur-sm shadow-orange-500/5">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Jun 23, 2024</p>
            <p className="text-base font-bold text-white tracking-tight">$124,571.34</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 30, right: 15, left: -5, bottom: 0 }}>
            <defs>
              {/* Glow filter for neon effect */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              {/* Gradient fill that fades quickly */}
              <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.15} />
                <stop offset="40%" stopColor="#f97316" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            {/* Dashed grid lines - very subtle gray-800 */}
            <CartesianGrid 
              strokeDasharray="4 4" 
              stroke="#1f2937" 
              strokeOpacity={0.4}
              vertical={false}
            />
            
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#4b5563", fontWeight: 600 }}
              dy={12}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#4b5563", fontWeight: 600 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              dx={-8}
              domain={[40000, 140000]}
              ticks={[40000, 60000, 80000, 100000, 120000, 140000]}
            />
            
            {/* Vertical dashed guide line at last point */}
            <ReferenceLine 
              x={lastDataPoint.month} 
              stroke="#374151" 
              strokeDasharray="4 4"
              strokeOpacity={0.5}
            />
            
            {/* Main area chart with glow effect */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={2.5}
              fill="url(#equityGradient)"
              filter="url(#glow)"
              dot={false}
              activeDot={false}
              animationDuration={1500}
            />
            
            {/* Glowing dot at the last data point */}
            <ReferenceDot
              x={lastDataPoint.month}
              y={lastDataPoint.value}
              r={5}
              fill="#0D1117"
              stroke="#f97316"
              strokeWidth={3}
              filter="url(#glow)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Navigator - Mini-map chart with range selector */}
      <div className="mt-6">
        <div className="relative h-12 bg-gray-900/30 rounded-xl border border-gray-800/50 overflow-hidden">
          {/* Mini chart background */}
          <div className="absolute inset-0 px-3 py-2 opacity-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  strokeWidth={1}
                  fill="url(#miniGradient)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Range selector handles - styled with orange accent */}
          <div className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-gray-600 rounded-full cursor-ew-resize hover:bg-[#f97316] transition-colors shadow-lg" />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-gray-600 rounded-full cursor-ew-resize hover:bg-[#f97316] transition-colors shadow-lg" />
          
          {/* Active selection area overlay */}
          <div className="absolute inset-y-0 left-[4px] right-[4px] border-x border-gray-700 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
