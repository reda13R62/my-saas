"use client"

import { Search, Calendar, Bell, ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Search */}
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2 w-[260px]">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground outline-none"
        />
        <div className="flex items-center gap-0.5 rounded border border-border bg-muted/50 px-1.5 py-0.5">
          <span className="text-[10px] text-muted-foreground">&#8984;</span>
          <span className="text-[10px] text-muted-foreground">K</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Date Range */}
        <button className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-[13px] text-foreground hover:bg-accent transition-colors">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>May 24 – Jun 23, 2024</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground ml-1" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card hover:bg-accent transition-colors">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-orange" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2.5 rounded-xl px-1.5 py-1 hover:bg-accent transition-colors">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center">
            <span className="text-xs font-semibold text-white">AM</span>
          </div>
          <div className="text-left">
            <p className="text-[13px] font-medium text-foreground leading-tight">Alex Morgan</p>
            <p className="text-[11px] text-muted-foreground">Elite Trader</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  )
}
