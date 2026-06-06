"use client"

import { Info } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { day: "Mon", value: 15 },
  { day: "Tue", value: 8 },
  { day: "Wed", value: 12 },
  { day: "Thu", value: 18 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 10 },
  { day: "Sun", value: 6 },
]

export function TradingFrequency() {
  return (
    <div className="bg-[#0D1117] border border-gray-800 rounded-2xl p-6 transition-all hover:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center gap-1 mb-6">
        <h3 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          TRADING FREQUENCY
        </h3>
        <Info className="h-3 w-3 text-gray-500 cursor-pointer" />
      </div>

      <div className="flex gap-6">
        {/* Bar Chart Container */}
        <div className="h-[100px] flex-1 relative">
           {/* Subtle glow background for the chart area */}
          <div className="absolute inset-0 bg-orange-500/5 rounded-xl blur-2xl" />
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#4B5563", fontWeight: 500 }}
                dy={6}
                interval={0}
              />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'rgba(249, 115, 22, 0.05)' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#161B22] border border-gray-700 p-2 rounded-lg shadow-xl">
                        <p className="text-[10px] font-bold text-white">{`${payload[0].value} Trades`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="value"
                fill="#f97316"
                radius={[4, 4, 4, 4]} // أعمدة دائرية أكثر أناقة
                maxBarSize={16}
                className="drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] hover:opacity-80 transition-all cursor-pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-4 min-w-[100px] border-l border-gray-800 pl-6">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Most Active Day</p>
            <p className="text-[16px] font-black text-orange-500">Friday</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Most Active Hour</p>
            <p className="text-[16px] font-black text-orange-500">10 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
