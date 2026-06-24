"use client"

import { motion } from "framer-motion"
import { CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"
import { recentPayments, type PaymentPlan, type PaymentStatus } from "@/data/adminDashboardData"

const planStyle: Record<PaymentPlan, string> = {
  basic: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
  standard: "bg-[#8B5CF6]/10 text-[#7C3AED] border-[#8B5CF6]/20",
  enterprise: "bg-[#F59E0B]/10 text-[#B45309] border-[#F59E0B]/20",
}

const statusStyle: Record<PaymentStatus, string> = {
  pending: "bg-[#F59E0B]/10 text-[#B45309]",
  paid: "bg-[#10B981]/10 text-[#059669]",
  failed: "bg-[#EF4444]/10 text-[#DC2626]",
}

function Pill({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", className)}>
      {children}
    </span>
  )
}

export function RecentPaymentsTable() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
    >
      <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
        <span className="grid size-8 place-items-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
          <CreditCard className="size-[18px]" />
        </span>
        <h3 className="text-[15px] font-semibold tracking-tight text-[#0F172A]">
          Recent Payments
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B] sm:px-6">User</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Plan</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Amount</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Status</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((p, i) => (
              <tr
                key={`${p.email}-${p.date}-${i}`}
                className="border-b border-[#F1F5F9] transition-colors duration-150 last:border-0 hover:bg-[#F8FAFC]"
              >
                <td className="px-5 py-3 sm:px-6">
                  <p className="text-sm font-medium text-[#0F172A]">{p.name}</p>
                  <p className="text-xs text-[#64748B]">{p.email}</p>
                </td>
                <td className="px-5 py-3">
                  <Pill className={cn("border", planStyle[p.plan])}>{p.plan}</Pill>
                </td>
                <td className="px-5 py-3 text-sm font-semibold tabular-nums text-[#0F172A]">
                  ${p.amount}
                </td>
                <td className="px-5 py-3">
                  <Pill className={statusStyle[p.status]}>{p.status}</Pill>
                </td>
                <td className="px-5 py-3 text-sm tabular-nums text-[#64748B]">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}
