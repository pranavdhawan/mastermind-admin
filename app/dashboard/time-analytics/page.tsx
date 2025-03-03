"use client"

import { useState } from "react"
import { Download } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StudyTimeChart } from "@/components/dashboard/study-time-chart"
import { SubjectTimeChart } from "@/components/dashboard/subject-time-chart"
import { DailyUsageChart } from "@/components/time-analytics/daily-usage-chart"
import { SessionLengthChart } from "@/components/time-analytics/session-length-chart"
import { TimeDistributionChart } from "@/components/time-analytics/time-distribution-chart"

export default function TimeAnalyticsPage() {
  const [csvExported, setCsvExported] = useState(false)
  const [timeRange, setTimeRange] = useState("month")

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
          <h2 className="text-3xl font-bold tracking-tight">Time Analytics</h2>
          <p className="text-muted-foreground">Analyze user engagement and time spent on the platform</p>
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
            <CardTitle className="text-sm font-medium">Average Study Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52 min/day</div>
            <p className="text-xs text-muted-foreground">+8.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Study Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M hours</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Session Length</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 minutes</div>
            <p className="text-xs text-muted-foreground">+2.5 min from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Peak Usage Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4:00 - 6:00 PM</div>
            <p className="text-xs text-muted-foreground">Weekdays</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Study Time Trends</CardTitle>
              <CardDescription>Average time spent studying with AI</CardDescription>
            </div>
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
          </CardHeader>
          <CardContent>
            <StudyTimeChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Subject Time Distribution</CardTitle>
            <CardDescription>Time spent on different subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <SubjectTimeChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Daily Usage Pattern</CardTitle>
            <CardDescription>Usage patterns throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <DailyUsageChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Session Length Distribution</CardTitle>
            <CardDescription>Distribution of user session lengths</CardDescription>
          </CardHeader>
          <CardContent>
            <SessionLengthChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Time Distribution</CardTitle>
            <CardDescription>Study time distribution by day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <TimeDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Time Analytics Insights</CardTitle>
          <CardDescription>Key insights from user time data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Peak Engagement Times</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Students are most active between 4:00 PM and 6:00 PM on weekdays, likely after school hours. Weekend
                usage is more evenly distributed throughout the day with a slight peak around 11:00 AM.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Weekday Peak:</span> 4:00 PM - 6:00 PM
                </div>
                <div>
                  <span className="font-medium">Weekend Peak:</span> 11:00 AM - 1:00 PM
                </div>
                <div>
                  <span className="font-medium">Lowest Activity:</span> 2:00 AM - 5:00 AM
                </div>
                <div>
                  <span className="font-medium">Most Active Day:</span> Tuesday
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Subject Engagement</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mathematics and Science receive the highest engagement time, with students spending an average of 120
                minutes and 98 minutes per week respectively. Language subjects follow closely behind.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Most Time:</span> Mathematics (120 min/week)
                </div>
                <div>
                  <span className="font-medium">Second Most:</span> Science (98 min/week)
                </div>
                <div>
                  <span className="font-medium">Least Time:</span> Geography (45 min/week)
                </div>
                <div>
                  <span className="font-medium">Growing Fastest:</span> Computer Science (+15%)
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Session Behavior</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The average session length is 24 minutes, with most sessions falling between 15-30 minutes. Longer
                sessions (45+ minutes) are more common during weekends and exam preparation periods.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Avg. Session:</span> 24 minutes
                </div>
                <div>
                  <span className="font-medium">Most Common:</span> 15-30 minutes (42%)
                </div>
                <div>
                  <span className="font-medium">Long Sessions:</span> 45+ minutes (18%)
                </div>
                <div>
                  <span className="font-medium">Short Sessions:</span> &lt;10 minutes (15%)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

