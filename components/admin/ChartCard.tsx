"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type ChartCardProps = {
  title: string
  subtitle?: string
  icon?: LucideIcon
  action?: ReactNode
  className?: string
  children: ReactNode
}

export function ChartCard({
  title,
  subtitle,
  icon: Icon,
  action,
  className,
  children,
}: ChartCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <span className="grid size-8 place-items-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
              <Icon className="size-[18px]" />
            </span>
          )}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#0F172A]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-[#64748B]">{subtitle}</p>
            )}
          </div>
        </div>
        {action}
      </div>
      <div className="flex-1">{children}</div>
    </motion.section>
  )
}
