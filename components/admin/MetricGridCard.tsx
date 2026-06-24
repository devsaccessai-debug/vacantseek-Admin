"use client"

import { motion } from "framer-motion"

export type MetricStat = { label: string; value: number | string }

export function MetricGrid({
  stats,
  columns = 2,
}: {
  stats: MetricStat[]
  columns?: 2 | 3
}) {
  return (
    <div
      className={
        columns === 3
          ? "grid grid-cols-2 gap-3 sm:grid-cols-3"
          : "grid grid-cols-2 gap-3"
      }
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-colors duration-200 hover:border-[#2563EB]/30 hover:bg-white"
        >
          <p className="text-2xl font-bold tracking-tight text-[#0F172A]">
            {stat.value}
          </p>
          <p className="mt-1 text-xs font-medium leading-snug text-[#64748B]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
