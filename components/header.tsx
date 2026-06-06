"use client"

import { Search, Calendar, Bell, ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-transparent">
      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-gray-800 bg-[#141414]/50 px-4 py-2.5 w-[320px] transition-all duration-300 focus-within:border-gray-700 focus-within:bg-[#141414] group">
        <Search className="h-4 w-4 text-gray-500 group-focus-within:text-[#f97316] transition-colors" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent text-[14px] text-white placeholder:text-gray-500 outline-none font-medium"
        />
        <div className="flex items-center gap-1 rounded-md border border-gray-800 bg-gray-900/80 px-1.5 py-0.5 shadow-sm">
          <span className="text-[10px] font-bold text-gray-500">⌘</span>
          <span className="text-[10px] font-bold text-gray-500">K</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Date Range */}
        <button className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#141414]/50 px-4 py-2.5 text-[13px] font-bold text-gray-300 hover:bg-[#141414] hover:text-white transition-all duration-200 shadow-sm">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>May 24 – Jun 23, 2024</span>
          <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-[#141414]/50 hover:bg-[#141414] transition-all duration-200 group">
          <Bell className="h-[20px] w-[20px] text-gray-400 group-hover:text-white transition-colors" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.6)] border-2 border-[#0D1117]" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-800 mx-1" />

        {/* User */}
        <button className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-gray-800/40 transition-all duration-200 group">
          <div className="h-10 w-10 rounded-full border-2 border-gray-800 overflow-hidden bg-gray-900 flex items-center justify-center shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
              alt="Alex Morgan" 
              className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-[14px] font-bold text-white leading-tight">Alex Morgan</p>
            <p className="text-[11px] font-black text-[#f97316] uppercase tracking-wider opacity-80">Elite Trader</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
        </button>
      </div>
    </header>
  )
}
