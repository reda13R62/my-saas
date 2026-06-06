import { Info, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  subValue?: string
  change?: {
    value: string
    positive: boolean
    label: string
  }
  badge?: {
    text: string
    color: "green" | "orange" | "red"
  }
  icon: ReactNode
  iconBg?: string // جعلناه اختيارياً لأنه سيتم استبداله بالتوهج البرتقالي
}

export function StatCard({
  title,
  value,
  subValue,
  change,
  badge,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-[#0D1117] border border-gray-800 rounded-2xl p-5 flex justify-between items-start w-full transition-all hover:border-gray-700">
      <div className="space-y-2">
        {/* Title Section */}
        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 tracking-wider uppercase">
          {title}
          <Info className="h-3 w-3 text-gray-500 cursor-pointer" />
        </div>
        
        {/* Value Section */}
        <div className="flex items-baseline gap-0.5">
          <span className={cn(
            "text-[28px] font-bold leading-none",
            badge?.color === "orange" ? "text-orange-500" : "text-white"
          )}>
            {value}
          </span>
          {subValue && (
            <span className="text-base text-gray-500">{subValue}</span>
          )}
        </div>

        {/* Change or Badge Section */}
        {change && (
          <div className="mt-1 flex items-center gap-1">
            <span className={cn(
              "text-[11px] font-medium flex items-center gap-0.5",
              change.positive ? "text-emerald-500" : "text-red-500"
            )}>
              {change.positive ? "↗" : "↘"} {change.value}
            </span>
            <span className="text-[11px] text-gray-500">{change.label}</span>
          </div>
        )}

        {badge && (
          <div className="mt-1">
            <span className={cn(
              "text-[11px] font-medium",
              badge.color === "green" && "text-emerald-500",
              badge.color === "orange" && "text-orange-500",
              badge.color === "red" && "text-red-500"
            )}>
              {badge.text}
            </span>
          </div>
        )}
      </div>

      {/* Icon with Orange Glow (Same as Image) */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-orange-500/30 bg-orange-500/5 shadow-[0_0_20px_rgba(249,115,22,0.15)] shrink-0">
        <div className="text-orange-500">
          {icon}
        </div>
      </div>
    </div>
  )
}
