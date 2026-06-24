"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Users, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { directoryUsers, type UserRole } from "@/data/adminDashboardData"

const PAGE_SIZE = 25
const filters: Array<{ key: "all" | UserRole; label: string }> = [
  { key: "all", label: "All" },
  { key: "agent", label: "Agent" },
  { key: "user", label: "User" },
  { key: "admin", label: "Admin" },
]

const roleStyle: Record<UserRole, string> = {
  user: "bg-[#64748B]/10 text-[#475569]",
  agent: "bg-[#2563EB]/10 text-[#2563EB]",
  admin: "bg-[#8B5CF6]/10 text-[#7C3AED]",
}

export function UsersTable() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<"all" | UserRole>("all")
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return directoryUsers.filter((u) => {
      const matchesFilter = filter === "all" || u.role === filter
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [query, filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages - 1)
  const start = safePage * PAGE_SIZE
  const rows = filtered.slice(start, start + PAGE_SIZE)

  const reset = (fn: () => void) => {
    fn()
    setPage(0)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
    >
      <div className="flex flex-col gap-4 border-b border-[#E2E8F0] px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
            <Users className="size-[18px]" />
          </span>
          <h3 className="text-[15px] font-semibold tracking-tight text-[#0F172A]">
            Users{" "}
            <span className="font-normal text-[#64748B]">
              ({filtered.length})
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#94A3B8]" />
            <input
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="Search by name or email..."
              className="h-9 w-full rounded-lg border border-[#E2E8F0] bg-white pl-9 pr-3 text-sm text-[#0F172A] outline-none transition-colors duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 sm:w-64"
            />
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => reset(() => setFilter(f.key))}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-medium transition-colors duration-200",
                  filter === f.key
                    ? "bg-white text-[#2563EB] shadow-sm"
                    : "text-[#64748B] hover:text-[#0F172A]",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B] sm:px-6">Name</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Email</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Role</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Subscription</th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Joined</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-[#64748B]">
                  No users match your search.
                </td>
              </tr>
            ) : (
              rows.map((u, i) => (
                <tr
                  key={`${u.email}-${i}`}
                  className="border-b border-[#F1F5F9] transition-colors duration-150 last:border-0 hover:bg-[#F8FAFC]"
                >
                  <td className="px-5 py-3 text-sm font-medium text-[#0F172A] sm:px-6">{u.name}</td>
                  <td className="px-5 py-3 text-sm text-[#64748B]">{u.email}</td>
                  <td className="px-5 py-3">
                    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", roleStyle[u.role])}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-[#64748B]">{u.subscription ?? "—"}</td>
                  <td className="px-5 py-3 text-sm tabular-nums text-[#64748B]">{u.joined}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#E2E8F0] px-5 py-3 sm:px-6">
        <p className="text-xs text-[#64748B]">
          {filtered.length === 0
            ? "0 of 0"
            : `${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} of ${filtered.length}`}
        </p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous page"
            disabled={safePage === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="grid size-8 place-items-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next page"
            disabled={safePage >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="grid size-8 place-items-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
