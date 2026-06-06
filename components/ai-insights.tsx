"use client"

import { Sparkles, AlertTriangle, CheckCircle2, Clock, ArrowRight } from "lucide-react"

const insights = [
  {
    icon: AlertTriangle,
    iconBg: "bg-amber-500/20",
    iconGlow: "shadow-[0_0_12px_rgba(245,158,11,0.4)]",
    iconColor: "text-amber-500",
    title: "Overtrading Detected",
    description: "You placed 37% more trades than your monthly average. Focus on quality setups.",
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-emerald-500/20",
    iconGlow: "shadow-[0_0_12px_rgba(16,185,129,0.4)]",
    iconColor: "text-emerald-500",
    title: "Risk Management",
    description: "Your risk per trade is optimal. Keep it up!",
  },
  {
    icon: Clock,
    iconBg: "bg-sky-500/20",
    iconGlow: "shadow-[0_0_12px_rgba(14,165,233,0.4)]",
    iconColor: "text-sky-500",
    title: "Best Trading Hours",
    description: "You're most profitable between 9:30 AM – 11:30 AM.",
  },
]

function GlowingBrain() {
  return (
    <div className="relative w-24 h-20 -mt-2 -mr-2">
      {/* Intense outer glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange rounded-full blur-2xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 rounded-full blur-xl opacity-40" />
      
      <svg viewBox="0 0 96 80" className="relative w-full h-full drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" fill="none">
        <defs>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <filter id="brainGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Left hemisphere */}
        <ellipse cx="38" cy="40" rx="20" ry="26" fill="url(#brainGrad)" filter="url(#brainGlow)" />
        {/* Right hemisphere */}
        <ellipse cx="58" cy="40" rx="20" ry="26" fill="url(#brainGrad)" filter="url(#brainGlow)" />
        
        {/* Brain grooves - left */}
        <path d="M25 28 Q32 22 40 28" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M22 40 Q32 34 42 40" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M25 52 Q32 46 40 52" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        
        {/* Brain grooves - right */}
        <path d="M56 28 Q64 22 71 28" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M54 40 Q64 34 74 40" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M56 52 Q64 46 71 52" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.5" />
        
        {/* Center stem */}
        <ellipse cx="48" cy="40" rx="5" ry="16" fill="#fdba74" opacity="0.6" />
        
        {/* Neural nodes */}
        <circle cx="30" cy="32" r="2" fill="#fff" opacity="0.6" />
        <circle cx="66" cy="32" r="2" fill="#fff" opacity="0.6" />
        <circle cx="48" cy="24" r="2" fill="#fff" opacity="0.6" />
        <circle cx="48" cy="56" r="2" fill="#fff" opacity="0.6" />
        <circle cx="34" cy="48" r="1.5" fill="#fff" opacity="0.4" />
        <circle cx="62" cy="48" r="1.5" fill="#fff" opacity="0.4" />
        
        {/* Connecting lines */}
        <line x1="30" y1="32" x2="48" y2="24" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
        <line x1="66" y1="32" x2="48" y2="24" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="32" x2="34" y2="48" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
        <line x1="66" y1="32" x2="62" y2="48" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  )
}

export function AIInsights() {
  return (
    <div className="rounded-xl border border-border bg-[#0d1117] p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-orange" />
          <h3 className="text-[11px] font-semibold text-white tracking-[0.1em] uppercase">AI Insights</h3>
        </div>
        <GlowingBrain />
      </div>

      <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
        Personalized insights to help you trade better.
      </p>

      {/* Insight Cards */}
      <div className="flex-1 space-y-2">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-lg bg-[#161b22] p-3"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${insight.iconBg} ${insight.iconGlow}`}
            >
              <insight.icon className={`h-4 w-4 ${insight.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-orange">
                {insight.title}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <button className="mt-3 flex w-full items-center justify-between rounded-lg border border-orange/50 bg-transparent px-4 py-2.5 text-xs font-medium text-orange transition-all hover:bg-orange/10 hover:border-orange">
        <span>View Detailed Analysis</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
