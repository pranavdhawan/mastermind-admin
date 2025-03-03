"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Calendar,
  Clock,
  Download,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  PieChart,
  Settings,
  Users,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Subscriptions",
      href: "/dashboard/subscriptions",
      icon: Calendar,
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Content",
      href: "/dashboard/content",
      icon: BookOpen,
    },
    {
      title: "Schools",
      href: "/dashboard/schools",
      icon: GraduationCap,
    },
    {
      title: "Geography",
      href: "/dashboard/geography",
      icon: PieChart,
    },
    {
      title: "Time Analytics",
      href: "/dashboard/time-analytics",
      icon: Clock,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="flex items-center gap-2 md:ml-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Mastermind Publications</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Mastermind Admin</span>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>
          <div className="py-4">
            <SidebarNav items={navItems} />
          </div>
        </aside>
        <div
          className={cn(
            "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-300 md:hidden",
            sidebarOpen ? "block" : "hidden",
          )}
          onClick={() => setSidebarOpen(false)}
        />
        <main className="flex-1 overflow-x-hidden p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1 px-2", className)} {...props}>
      {items.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            <item.icon className={cn("h-5 w-5")} />
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

