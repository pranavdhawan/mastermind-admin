import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  description: string
  icon: LucideIcon
  link: string
}

export function StatsCard({ title, value, change, trend, description, icon: Icon, link }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1">
          {trend === "up" ? (
            <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
          ) : trend === "down" ? (
            <ArrowDownRight className="mr-1 h-4 w-4 text-rose-500" />
          ) : null}
          <p
            className={
              trend === "up"
                ? "text-xs text-emerald-500"
                : trend === "down"
                  ? "text-xs text-rose-500"
                  : "text-xs text-muted-foreground"
            }
          >
            {change}
          </p>
        </div>
        <CardDescription className="pt-2">
          <Link href={link} className="text-xs hover:underline">
            {description}
          </Link>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

