"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, Users } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActiveSubscriptionsChart } from "@/components/dashboard/active-subscriptions-chart"
import { SignUpsChart } from "@/components/dashboard/sign-ups-chart"
import { StudyTimeChart } from "@/components/dashboard/study-time-chart"
import { TopBooksChart } from "@/components/dashboard/top-books-chart"
import { UsersByClassChart } from "@/components/dashboard/users-by-class-chart"
import { UsersByAgeChart } from "@/components/dashboard/users-by-age-chart"
import { SubjectTimeChart } from "@/components/dashboard/subject-time-chart"
import { StatsCard } from "@/components/dashboard/stats-card"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("month")
  const { status } = useSession({
    required: false,
    onUnauthenticated() {
      window.location.href = "/login"
    }
  })

  if (status === "loading") {
    return(
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Overview of your educational platform metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <DateRangePicker />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Subscriptions"
          value="2,834"
          change="+12.5%"
          trend="up"
          description="Current active subscriptions"
          icon={Users}
          link="/dashboard/subscriptions"
        />
        <StatsCard
          title="Sign Ups (Last Month)"
          value="1,240"
          change="+22.4%"
          trend="up"
          description="New users in the last 30 days"
          icon={Users}
          link="/dashboard/users"
        />
        <StatsCard
          title="Monthly Active Users"
          value="8,764"
          change="+5.2%"
          trend="up"
          description="Users active in the last 30 days"
          icon={Users}
          link="/dashboard/users"
        />
        <StatsCard
          title="Expired Subscriptions"
          value="342"
          change="-8.1%"
          trend="down"
          description="Subscriptions expired this month"
          icon={Users}
          link="/dashboard/subscriptions"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Sign Ups</CardTitle>
              <CardDescription>New user registrations over time</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/users">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <SignUpsChart timeRange={timeRange} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>Monthly subscription trends</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/subscriptions">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ActiveSubscriptionsChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Study Time with AI</CardTitle>
              <CardDescription>Average time spent studying with AI</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/time-analytics">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <StudyTimeChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Books</CardTitle>
              <CardDescription>Most popular books purchased</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/content">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <TopBooksChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Users by Class</CardTitle>
              <CardDescription>Distribution of users by class level</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/users">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <UsersByClassChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Users by Age</CardTitle>
              <CardDescription>Age distribution of platform users</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/users">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <UsersByAgeChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Subject Time</CardTitle>
              <CardDescription>Time spent on different subjects</CardDescription>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/time-analytics">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <SubjectTimeChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

