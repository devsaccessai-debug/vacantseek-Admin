import {
  LayoutDashboard,
  Home,
  Building2,
  CalendarClock,
  FileText,
  MessageSquare,
  Users,
  Mail,
  RefreshCw,
  ShieldCheck,
  UsersRound,
  Folder,
  Megaphone,
  BookOpen,
  type LucideIcon,
} from "lucide-react"

export type SidebarItem = {
  label: string
  route: string
  icon: LucideIcon
  badge?: string
  count?: number
  disabled?: boolean
}

export type SidebarSection = {
  title: string | null
  items: SidebarItem[]
}

export const sidebarSections: SidebarSection[] = [
  {
    title: null,
    items: [
      {
        label: "Admin Dashboard",
        route: "/admin-dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "CORE",
    items: [
      { label: "Overview", route: "/overview", icon: Home },
      { label: "My Listings", route: "/my-listings", icon: Building2 },
      { label: "Showings", route: "/showings", icon: CalendarClock },
      { label: "Offers", route: "/offers", icon: FileText },
      { label: "Messages", route: "/messages", icon: MessageSquare },
    ],
  },
  {
    title: "LEAD MANAGEMENT",
    items: [
      { label: "Leads", route: "/leads", icon: Users },
      { label: "Email Templates", route: "/email-templates", icon: Mail },
      { label: "CRM Sync", route: "/crm-sync", icon: RefreshCw },
    ],
  },
  {
    title: "PROPERTY MANAGEMENT",
    items: [
      {
        label: "Tenant Screening",
        route: "/tenant-screening",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "COLLABORATION",
    items: [
      { label: "Teams", route: "/teams", icon: UsersRound },
      { label: "Documents", route: "/documents", icon: Folder },
      {
        label: "Open-House Blaster",
        route: "/open-house-blaster",
        icon: Megaphone,
      },
      { label: "Knowledge Base", route: "/knowledge-base", icon: BookOpen },
    ],
  },
]

export const sidebarUser = {
  userName: "Vacant Seek",
  role: "ADMIN",
  initials: "VS",
}
