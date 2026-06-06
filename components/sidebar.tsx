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
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[232px] flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 pt-5 pb-6">
        <div className="flex h-9 w-9 items-center justify-center">
          <svg viewBox="0 0 40 40" className="h-9 w-9">
            <path
              d="M20 4C20 4 8 16 8 24C8 30.627 13.373 36 20 36C26.627 36 32 30.627 32 24C32 16 20 4 20 4Z"
              fill="#f97316"
            />
            <path
              d="M20 12C20 12 14 20 14 24C14 27.314 16.686 30 20 30C23.314 30 26 27.314 26 24C26 20 20 12 20 12Z"
              fill="#fb923c"
            />
          </svg>
        </div>
        <div className="flex flex-col -space-y-0.5">
          <span className="text-[17px] font-bold text-foreground leading-tight">PropPulse</span>
          <span className="text-[10px] font-bold tracking-[0.15em] text-orange">TRADING</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors",
                  item.active
                    ? "bg-orange text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <item.icon className="h-[18px] w-[18px]" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Premium Card */}
      <div className="mx-3 mb-3 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-border/50 p-4">
        <div className="flex items-start justify-between mb-1.5">
          <span className="text-[13px] font-semibold text-foreground">Unlock Premium</span>
          <Crown className="h-5 w-5 text-orange" />
        </div>
        <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
          Get advanced analytics, AI coaching & more.
        </p>
        <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-orange px-4 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-orange/90">
          Upgrade Now
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* User Profile */}
      <div className="border-t border-sidebar-border px-3 py-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-accent transition-colors">
          <div className="relative h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-xs font-medium text-muted-foreground">
              PT
            </div>
            <Star className="absolute -bottom-0.5 -left-0.5 h-3.5 w-3.5 fill-orange text-orange" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[13px] font-medium text-foreground">Prop Trader</p>
            <p className="text-[11px] text-muted-foreground">Elite Plan</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </aside>
  )
}
