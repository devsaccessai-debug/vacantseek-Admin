import {
  Users,
  UserCheck,
  DollarSign,
  Building2,
  MessageSquare,
  CalendarClock,
  type LucideIcon,
} from "lucide-react"

export type KpiColor = "blue" | "green" | "purple" | "amber" | "rose" | "orange"

export type Kpi = {
  label: string
  value: string
  subtext?: string
  icon: LucideIcon
  color: KpiColor
}

export const kpis: Kpi[] = [
  {
    label: "Total Users",
    value: "194",
    subtext: "+41 this week",
    icon: Users,
    color: "blue",
  },
  { label: "Active Agents", value: "13", icon: UserCheck, color: "green" },
  {
    label: "MRR",
    value: "$0",
    subtext: "1 active subs",
    icon: DollarSign,
    color: "purple",
  },
  { label: "Properties", value: "161", icon: Building2, color: "amber" },
  {
    label: "Conversations",
    value: "45",
    subtext: "671 total messages",
    icon: MessageSquare,
    color: "rose",
  },
  {
    label: "Pending Visits",
    value: "405",
    icon: CalendarClock,
    color: "orange",
  },
]

// Signups over the last 30 days (weekly buckets)
export const signupsData = [
  { label: "Wk 1", signups: 38 },
  { label: "Wk 2", signups: 52 },
  { label: "Wk 3", signups: 47 },
  { label: "Wk 4", signups: 57 },
]

export const subscriptionsByPlan = [
  { name: "Free", value: 12, color: "#94A3B8" },
  { name: "Basic", value: 0, color: "#3B82F6" },
  { name: "Standard", value: 0, color: "#8B5CF6" },
  { name: "Enterprise", value: 1, color: "#F59E0B" },
]

export const messagingStats = [
  { label: "New Conversations", value: 5 },
  { label: "Messages Sent", value: 314 },
  { label: "Active Senders", value: 11 },
  { label: "All-time Conversations", value: 45 },
]

export const conversionFunnel = [
  { label: "Total Signups", value: 194, percentage: 100 },
  { label: "Agents", value: 13, percentage: 7 },
  { label: "Agents with Listings", value: 6, percentage: 3 },
  { label: "Paid Subscribers", value: 1, percentage: 1 },
]

export const leadAnalytics = {
  totalLeads: 12,
  new30d: 1,
  thisWeek: 0,
  converted: 1,
  source: { zillow: 0, csv: 12, other: 0 },
  status: { new: 10, contacted: 0, qualified: 1, converted: 1 },
}

export const chatbotEngagement = [
  { label: "Active Threads (Messaging)", value: 9 },
  { label: "Messages Sent", value: 314 },
  { label: "Feedback Submissions", value: 0 },
  { label: "Feedback Completed", value: 26 },
  { label: "Total Visits", value: 412 },
  { label: "Visits Scheduled", value: 332 },
]

export const propertyBreakdown = {
  totalProperties: 161,
  forRent: 125,
  forSale: 8,
  sold: 28,
  type: { houses: 5, apartments: 7, condos: 0, townhouses: 2 },
}

export type PaymentStatus = "pending" | "paid" | "failed"
export type PaymentPlan = "basic" | "standard" | "enterprise"

export type Payment = {
  name: string
  email: string
  plan: PaymentPlan
  amount: number
  status: PaymentStatus
  date: string
}

export const recentPayments: Payment[] = [
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jun 23, 2026" },
  { name: "E2E User 1781985753...", email: "e2e-playwright-2026@vacants...", plan: "basic", amount: 49, status: "pending", date: "Jun 20, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jun 20, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jun 17, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jun 13, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "standard", amount: 99, status: "pending", date: "Jun 11, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jun 10, 2026" },
  { name: "UAT Agent Tester", email: "uat-agent-26may@vacantseek...", plan: "basic", amount: 49, status: "pending", date: "May 26, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Mar 18, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Feb 27, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Feb 26, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "standard", amount: 99, status: "pending", date: "Jan 31, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "standard", amount: 99, status: "pending", date: "Jan 21, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Jan 2, 2026" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Dec 19, 2025" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "standard", amount: 99, status: "pending", date: "Dec 19, 2025" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "standard", amount: 99, status: "pending", date: "Dec 18, 2025" },
  { name: "Vacant Seek", email: "admin@vacantseek.com", plan: "basic", amount: 49, status: "pending", date: "Dec 18, 2025" },
  { name: "Irfan Ahmad", email: "irfanahmad2959@gmail.com", plan: "basic", amount: 49, status: "pending", date: "Dec 17, 2025" },
  { name: "Irfan Ahmad", email: "irfanahmad2959@gmail.com", plan: "basic", amount: 49, status: "pending", date: "Nov 12, 2025" },
]

export type UserRole = "user" | "agent" | "admin"

export type DirectoryUser = {
  name: string
  email: string
  role: UserRole
  subscription: string | null
  joined: string
}

function buildUsers(): DirectoryUser[] {
  const base: DirectoryUser[] = [
    { name: "—", email: "postflip-check-1782104890@vacantseek-migtest.com", role: "user", subscription: null, joined: "Jun 22, 2026" },
    { name: "Vacant Seek", email: "admin@vacantseek.com", role: "admin", subscription: "standard", joined: "Jun 21, 2026" },
    { name: "UAT Agent Tester", email: "uat-agent-26may@vacantseek.com", role: "agent", subscription: "basic", joined: "May 26, 2026" },
    { name: "Irfan Ahmad", email: "irfanahmad2959@gmail.com", role: "agent", subscription: "basic", joined: "Nov 12, 2025" },
  ]
  const massAssign: DirectoryUser[] = Array.from({ length: 190 }, (_, i) => {
    const id = (17818481783280 + i * 173492).toString().slice(0, 16)
    return {
      name: "Mass Assign",
      email: `mass-assign-${id}@vacantseek.dev`,
      role: "user" as UserRole,
      subscription: null,
      joined: "Jun 19, 2026",
    }
  })
  return [...base, ...massAssign]
}

export const directoryUsers: DirectoryUser[] = buildUsers()
