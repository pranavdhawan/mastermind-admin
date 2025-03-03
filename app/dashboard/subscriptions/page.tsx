"use client"

import { useState } from "react"
import { Download } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ActiveSubscriptionsChart } from "@/components/dashboard/active-subscriptions-chart"
import { SubscriptionsByPlanChart } from "@/components/subscriptions/subscriptions-by-plan-chart"
import { SubscriptionGrowthChart } from "@/components/subscriptions/subscription-growth-chart"
import { SubscriptionRetentionChart } from "@/components/subscriptions/subscription-retention-chart"
import { SubscriptionsTable } from "@/components/subscriptions/subscriptions-table"

export default function SubscriptionsPage() {
  const [csvExported, setCsvExported] = useState(false)

  const handleExportCSV = () => {
    // Simulate CSV export
    setTimeout(() => {
      setCsvExported(true)
      setTimeout(() => setCsvExported(false), 3000)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Subscriptions</h2>
          <p className="text-muted-foreground">Analyze subscription metrics and trends</p>
        </div>
        <div className="flex items-center gap-2">
          <DateRangePicker />
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="mr-2 h-4 w-4" />
            {csvExported ? "Exported!" : "Export CSV"}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,834</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">486</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Expired Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">-8.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Renewal Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.4%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Subscription Growth</CardTitle>
            <CardDescription>Monthly subscription growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionGrowthChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Subscriptions by Plan</CardTitle>
            <CardDescription>Distribution of subscription plans</CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionsByPlanChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Subscriptions</CardTitle>
            <CardDescription>Monthly active subscription trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveSubscriptionsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription Retention</CardTitle>
            <CardDescription>Retention rate by subscription duration</CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionRetentionChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Subscriptions</CardTitle>
          <CardDescription>Latest subscription activities</CardDescription>
        </CardHeader>
        <CardContent>
          <SubscriptionsTable />
        </CardContent>
      </Card>
    </div>
  )
}

