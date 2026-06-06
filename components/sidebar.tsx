"use client"

import {
  LayoutDashboard,
  TrendingUp,
  BookOpen,
  BarChart3,
  Shield,
  Building2,
  Brain,
  Settings,
  Crown,
  ChevronRight,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: TrendingUp, label: "Trades", active: false },
  { icon: BookOpen, label: "Journal", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Shield, label: "Risk", active: false },
  { icon: Building2, label: "Prop Firms", active: false },
  { icon: Brain, label: "Psychology", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[232px] flex-col bg-[#0D1117] border-r border-gray-800/50 shadow-2xl">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-8">
        <div className="flex h-10 w-10 items-center justify-center relative">
          {/* Logo background glow */}
          <div className="absolute inset-0 bg-[#f97316] opacity-20 blur-xl rounded-full" />
          <svg viewBox="0 0 40 40" className="h-10 w-10 relative z-10">
            <path
              d="M8 20 L14 20 L17 14 L23 26 L26 20 L32 20"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="drop-shadow(0 0 4px rgba(249,115,22,0.6))"
            />
            <circle cx="8" cy="20" r="2" fill="#f97316" />
            <circle cx="32" cy="20" r="2" fill="#f97316" />
          </svg>
        </div>
        <div className="flex flex-col -space-y-0.5">
          <span className="text-[19px] font-bold text-white tracking-tight">PropPulse</span>
          <span className="text-[10px] font-black tracking-[0.25em] text-[#f97316] uppercase">TRADING</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-semibold transition-all duration-200 group relative overflow-hidden",
                  item.active
                    ? "bg-gradient-to-r from-[#f97316]/20 to-transparent text-[#f97316] border border-[#f97316]/30 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                )}
              >
                {/* Active indicator bar */}
                {item.active && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#f97316] rounded-r-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                )}
                
                <item.icon className={cn(
                  "h-[20px] w-[20px] transition-colors",
                  item.active ? "text-[#f97316]" : "text-gray-500 group-hover:text-gray-300"
                )} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Premium Card */}
      <div className="mx-4 mb-4 rounded-2xl bg-[#141414] border border-gray-800/80 p-5 shadow-xl relative overflow-hidden group">
        {/* Card glow background */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#f97316] opacity-[0.03] blur-3xl rounded-full" />
        
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-white">Unlock Premium</span>
            <div className="h-0.5 w-8 bg-[#f97316] mt-1 rounded-full opacity-60" />
          </div>
          <div className="p-1.5 bg-[#f97316]/10 rounded-lg border border-[#f97316]/20">
            <Crown className="h-4 w-4 text-[#f97316]" />
          </div>
        </div>
        <p className="text-[11px] text-gray-400 mb-4 leading-relaxed font-medium">
          Get advanced analytics, AI coaching & more.
        </p>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#fb923c] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] group/btn">
          Upgrade Now
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </button>
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-800/60 px-4 py-5 bg-gray-900/20">
        <button className="flex w-full items-center gap-3.5 rounded-xl px-2 py-2 hover:bg-gray-800/40 transition-all duration-200 group">
          <div className="relative">
            <div className="h-10 w-10 rounded-full border-2 border-gray-800 overflow-hidden bg-gray-900 flex items-center justify-center">
               <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
                alt="Profile" 
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-1 -left-1 h-5 w-5 rounded-full bg-[#0D1117] border border-gray-800 flex items-center justify-center">
              <Star className="h-3 w-3 fill-[#f97316] text-[#f97316]" />
            </div>
          </div>
          <div className="flex-1 text-left">
            <p className="text-[14px] font-bold text-white leading-tight">Alex Morgan</p>
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Elite Trader</p>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
        </button>
      </div>
    </aside>
  )
}
