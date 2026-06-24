"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Kpi, KpiColor } from "@/data/adminDashboardData"

const colorMap: Record<
  KpiColor,
  { ring: string; iconBg: string; iconText: string; glow: string; sub: string }
> = {
  blue: {
    ring: "from-[#2563EB]/10 to-transparent",
    iconBg: "bg-[#2563EB]/10",
    iconText: "text-[#2563EB]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.45)]",
    sub: "text-[#2563EB]",
  },
  green: {
    ring: "from-[#10B981]/10 to-transparent",
    iconBg: "bg-[#10B981]/10",
    iconText: "text-[#10B981]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(16,185,129,0.45)]",
    sub: "text-[#10B981]",
  },
  purple: {
    ring: "from-[#8B5CF6]/10 to-transparent",
    iconBg: "bg-[#8B5CF6]/10",
    iconText: "text-[#8B5CF6]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(139,92,246,0.45)]",
    sub: "text-[#8B5CF6]",
  },
  amber: {
    ring: "from-[#F59E0B]/10 to-transparent",
    iconBg: "bg-[#F59E0B]/10",
    iconText: "text-[#F59E0B]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(245,158,11,0.45)]",
    sub: "text-[#B45309]",
  },
  rose: {
    ring: "from-[#EF4444]/10 to-transparent",
    iconBg: "bg-[#EF4444]/10",
    iconText: "text-[#EF4444]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(239,68,68,0.45)]",
    sub: "text-[#EF4444]",
  },
  orange: {
    ring: "from-[#F97316]/10 to-transparent",
    iconBg: "bg-[#F97316]/10",
    iconText: "text-[#F97316]",
    glow: "group-hover:shadow-[0_18px_40px_-20px_rgba(249,115,22,0.45)]",
    sub: "text-[#C2410C]",
  },
}

export function KpiCard({ kpi, index }: { kpi: Kpi; index: number }) {
  const c = colorMap[kpi.color]
  const Icon = kpi.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-shadow duration-300",
        c.glow,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
          c.ring,
        )}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-[#64748B]">
            {kpi.label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
            {kpi.value}
          </p>
          {kpi.subtext && (
            <p className={cn("mt-1.5 text-xs font-medium", c.sub)}>
              {kpi.subtext}
            </p>
          )}
        </div>
        <div
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-xl",
            c.iconBg,
            c.iconText,
          )}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </motion.div>
  )
}
