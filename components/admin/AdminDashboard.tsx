"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  RefreshCw,
  Download,
  ChevronDown,
  TrendingUp,
  CalendarDays,
  PieChart as PieChartIcon,
  MessageSquare,
  Filter,
  Bot,
  Home,
} from "lucide-react"
import { kpis } from "@/data/adminDashboardData"
import { KpiCard } from "./KpiCard"
import { ChartCard } from "./ChartCard"
import { MetricGrid } from "./MetricGridCard"
import { ConversionFunnel } from "./ConversionFunnel"
import {
  SignupsChart,
  RevenueChart,
  SubscriptionsDonut,
} from "./DashboardCharts"
import { LeadAnalyticsBody, PropertyBreakdownBody } from "./InfoCards"
import { RecentPaymentsTable } from "./RecentPaymentsTable"
import { UsersTable } from "./UsersTable"
import { messagingStats, chatbotEngagement } from "@/data/adminDashboardData"

export function AdminDashboard() {
  const [refreshing, setRefreshing] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleRefresh = () => {
    setRefreshing(true)
    setRefreshKey((k) => k + 1)
    setTimeout(() => setRefreshing(false), 800)
  }

  return (
    <div key={refreshKey} className="mx-auto w-full max-w-[1440px]">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex items-center gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white shadow-[0_8px_20px_-8px_rgba(56,189,248,0.7)]">
            <LayoutDashboard className="size-5" />
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
              Admin Dashboard
            </h1>
            <p className="text-sm text-[#64748B]">
              Platform analytics &amp; business metrics
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm font-medium text-[#334155] transition-colors duration-200 hover:bg-[#F8FAFC]"
          >
            <CalendarDays className="size-4 text-[#64748B]" />
            Last 30 days
            <ChevronDown className="size-4 text-[#94A3B8]" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm font-medium text-[#334155] transition-colors duration-200 hover:bg-[#F8FAFC]"
          >
            <Download className="size-4 text-[#64748B]" />
            Export Report
          </button>
          <button
            type="button"
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-3.5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)] active:scale-[0.97]"
          >
            <RefreshCw className={refreshing ? "size-4 animate-spin" : "size-4"} />
            Refresh
          </button>
        </div>
      </motion.div>

      {/* KPI cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {kpis.map((kpi, i) => (
          <KpiCard key={kpi.label} kpi={kpi} index={i} />
        ))}
      </div>

      {/* Charts grid */}
      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Revenue" subtitle="Last 30 days" icon={TrendingUp}>
          <RevenueChart />
        </ChartCard>
        <ChartCard title="Signups" subtitle="Last 30 days" icon={CalendarDays}>
          <SignupsChart />
        </ChartCard>
        <ChartCard title="Subscriptions by Plan" icon={PieChartIcon}>
          <SubscriptionsDonut />
        </ChartCard>
        <ChartCard title="Messaging" subtitle="Last 30 days" icon={MessageSquare}>
          <MetricGrid stats={messagingStats} />
        </ChartCard>
        <ChartCard title="Conversion Funnel" icon={Filter}>
          <ConversionFunnel />
        </ChartCard>
        <ChartCard title="Lead Analytics" icon={TrendingUp}>
          <LeadAnalyticsBody />
        </ChartCard>
        <ChartCard title="Chatbot &amp; Engagement" subtitle="Last 30 days" icon={Bot}>
          <MetricGrid stats={chatbotEngagement} columns={3} />
        </ChartCard>
        <ChartCard title="Property Breakdown" icon={Home}>
          <PropertyBreakdownBody />
        </ChartCard>
      </div>

      {/* Tables */}
      <div className="mb-6">
        <RecentPaymentsTable />
      </div>
      <UsersTable />
    </div>
  )
}
