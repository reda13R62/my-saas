"use client"

import { Info } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Winning", value: 88, color: "#10b981" }, // أخضر زمردي
  { name: "Losing", value: 40, color: "#ef4444" },  // أحمر
]

const stats = [
  { label: "Total Trades", value: "128" },
  { label: "Winning Trades", value: "88" },
  { label: "Losing Trades", value: "40" },
  { label: "Expectancy", value: "$192.74", highlight: true },
]

export function PerformanceSummary() {
  return (
    <div className="bg-[#0D1117] border border-gray-800 rounded-2xl p-6 transition-all hover:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center gap-1 mb-6">
        <h3 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          PERFORMANCE SUMMARY
        </h3>
        <Info className="h-3 w-3 text-gray-500 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* Stats List */}
        <div className="flex-1 space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between group">
              <span className="text-[13px] text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </span>
              <span
                className={`text-[13px] font-bold tabular-nums ${
                  stat.highlight ? "text-emerald-500" : "text-white"
                }`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Pie Chart with Glow Effect */}
        <div className="relative h-[100px] w-[100px] shrink-0">
          {/* Subtle Glow behind the chart */}
          <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-xl" />
          
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={45}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
                animationBegin={0}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    className="hover:opacity-80 transition-opacity outline-none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Text (Optional: can add % here) */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[10px] font-bold text-gray-500">68%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
