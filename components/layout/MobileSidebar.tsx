"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Sidebar } from "./Sidebar"
import type { SidebarItem as SidebarItemType } from "@/data/sidebarItems"

type MobileSidebarProps = {
  open: boolean
  activeRoute: string
  onClose: () => void
  onSelect: (item: SidebarItemType) => void
}

export function MobileSidebar({
  open,
  activeRoute,
  onClose,
  onSelect,
}: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050B1E]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            className="absolute left-0 top-0 h-full w-[280px]"
            role="dialog"
            aria-label="Navigation menu"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-3 top-4 z-50 grid size-8 place-items-center rounded-lg text-[#64748B] transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#F8FAFC]"
            >
              <X className="size-[18px]" />
            </button>

            <Sidebar
              collapsed={false}
              activeRoute={activeRoute}
              onSelect={(item) => {
                onSelect(item)
                onClose()
              }}
              showCollapseButton={false}
            />
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
