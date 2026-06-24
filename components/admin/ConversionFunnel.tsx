"use client"

import { motion } from "framer-motion"
import { conversionFunnel } from "@/data/adminDashboardData"

export function ConversionFunnel() {
  return (
    <div className="flex flex-col gap-5">
      {conversionFunnel.map((stage, i) => (
        <div key={stage.label}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium text-[#334155]">{stage.label}</span>
            <span className="tabular-nums text-[#64748B]">
              <span className="font-semibold text-[#0F172A]">
                {stage.value.toLocaleString()}
              </span>{" "}
              ({stage.percentage}%)
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#EEF2F7]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(stage.percentage, 1.5)}%` }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
