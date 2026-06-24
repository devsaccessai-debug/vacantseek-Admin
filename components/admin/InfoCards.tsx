"use client"

import { cn } from "@/lib/utils"
import { leadAnalytics, propertyBreakdown } from "@/data/adminDashboardData"

function Badge({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: "blue" | "amber" | "purple" | "green" | "slate"
}) {
  const tones: Record<string, string> = {
    blue: "bg-[#2563EB]/10 text-[#2563EB]",
    amber: "bg-[#F59E0B]/10 text-[#B45309]",
    purple: "bg-[#8B5CF6]/10 text-[#7C3AED]",
    green: "bg-[#10B981]/10 text-[#059669]",
    slate: "bg-[#64748B]/10 text-[#475569]",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-transform duration-200 hover:scale-[1.03]",
        tones[tone],
      )}
    >
      {label}
      <span className="font-semibold tabular-nums">{value}</span>
    </span>
  )
}

function MiniStat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
      <p className="text-xl font-bold tracking-tight text-[#0F172A]">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-[#64748B]">{label}</p>
    </div>
  )
}

export function LeadAnalyticsBody() {
  const l = leadAnalytics
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniStat value={l.totalLeads} label="Total Leads" />
        <MiniStat value={l.new30d} label="New (30d)" />
        <MiniStat value={l.thisWeek} label="This Week" />
        <MiniStat value={l.converted} label="Converted" />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
          By Source
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge label="Zillow" value={l.source.zillow} tone="slate" />
          <Badge label="CSV" value={l.source.csv} tone="blue" />
          <Badge label="Other" value={l.source.other} tone="slate" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
          By Status
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge label="New" value={l.status.new} tone="blue" />
          <Badge label="Contacted" value={l.status.contacted} tone="amber" />
          <Badge label="Qualified" value={l.status.qualified} tone="purple" />
          <Badge label="Converted" value={l.status.converted} tone="green" />
        </div>
      </div>
    </div>
  )
}

export function PropertyBreakdownBody() {
  const p = propertyBreakdown
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniStat value={p.totalProperties} label="Total Properties" />
        <MiniStat value={p.forRent} label="For Rent" />
        <MiniStat value={p.forSale} label="For Sale" />
        <MiniStat value={p.sold} label="Sold" />
      </div>

      {/* Status distribution bar */}
      <div>
        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-[#EEF2F7]">
          <div
            className="h-full bg-[#2563EB]"
            style={{ width: `${(p.forRent / p.totalProperties) * 100}%` }}
          />
          <div
            className="h-full bg-[#F59E0B]"
            style={{ width: `${(p.forSale / p.totalProperties) * 100}%` }}
          />
          <div
            className="h-full bg-[#10B981]"
            style={{ width: `${(p.sold / p.totalProperties) * 100}%` }}
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#2563EB]" /> For Rent
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#F59E0B]" /> For Sale
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#10B981]" /> Sold
          </span>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
          By Type
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge label="Houses" value={p.type.houses} tone="blue" />
          <Badge label="Apartments" value={p.type.apartments} tone="purple" />
          <Badge label="Condos" value={p.type.condos} tone="slate" />
          <Badge label="Townhouses" value={p.type.townhouses} tone="green" />
        </div>
      </div>
    </div>
  )
}
