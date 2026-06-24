"use client"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { signupsData, subscriptionsByPlan } from "@/data/adminDashboardData"

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid #E2E8F0",
  boxShadow: "0 10px 30px -12px rgba(15,23,42,0.25)",
  fontSize: 12,
  padding: "8px 12px",
}

export function SignupsChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={signupsData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="signupBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
          <Tooltip cursor={{ fill: "rgba(37,99,235,0.06)" }} contentStyle={tooltipStyle} />
          <Bar dataKey="signups" name="Signups" fill="url(#signupBar)" radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function RevenueChart() {
  // No revenue yet — render a clean flat-line area as a professional empty state backdrop.
  const flat = signupsData.map((d) => ({ label: d.label, revenue: 0 }))
  return (
    <div className="relative h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={flat} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
          <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} fill="url(#revFill)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-[#E2E8F0] bg-white/90 px-3 py-1 text-xs font-medium text-[#64748B] backdrop-blur">
          No revenue data yet
        </span>
      </div>
    </div>
  )
}

export function SubscriptionsDonut() {
  const total = subscriptionsByPlan.reduce((sum, p) => sum + p.value, 0)
  const hasData = total > 0
  const data = hasData
    ? subscriptionsByPlan.filter((p) => p.value > 0)
    : [{ name: "No plans", value: 1, color: "#E2E8F0" }]

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
      <div className="relative h-[160px] w-[160px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={52}
              outerRadius={76}
              paddingAngle={data.length > 1 ? 3 : 0}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            {hasData && <Tooltip contentStyle={tooltipStyle} />}
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
            {total}
          </span>
          <span className="text-[11px] font-medium text-[#64748B]">Plans</span>
        </div>
      </div>

      <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5">
        {subscriptionsByPlan.map((plan) => (
          <li key={plan.name} className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-sm text-[#334155]">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: plan.color }}
              />
              {plan.name}
            </span>
            <span className="text-sm font-semibold tabular-nums text-[#0F172A]">
              {plan.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
