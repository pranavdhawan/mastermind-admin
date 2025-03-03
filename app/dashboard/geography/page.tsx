"use client"

import { useState } from "react"
import { Download, MapPin } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserLocationMap } from "@/components/geography/user-location-map"
import { RegionalEngagementChart } from "@/components/geography/regional-engagement-chart"
import { CountryDistributionChart } from "@/components/geography/country-distribution-chart"
import { RegionalGrowthChart } from "@/components/geography/regional-growth-chart"

export default function GeographyPage() {
  const [csvExported, setCsvExported] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState("all")

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
          <h2 className="text-3xl font-bold tracking-tight">Geography</h2>
          <p className="text-muted-foreground">Analyze user distribution and engagement by location</p>
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
            <CardTitle className="text-sm font-medium">Total Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 new countries this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">North America</div>
            <p className="text-xs text-muted-foreground">38% of total users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fastest Growing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Asia Pacific</div>
            <p className="text-xs text-muted-foreground">+24.8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">International Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.6%</div>
            <p className="text-xs text-muted-foreground">+2.4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>User Location Map</CardTitle>
            <CardDescription>Global distribution of platform users</CardDescription>
          </div>
          <div className="ml-auto">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                <SelectItem value="latin-america">Latin America</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <UserLocationMap region={selectedRegion} />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Regional Growth</CardTitle>
            <CardDescription>User growth by geographic region</CardDescription>
          </CardHeader>
          <CardContent>
            <RegionalGrowthChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Country Distribution</CardTitle>
            <CardDescription>Top countries by user count</CardDescription>
          </CardHeader>
          <CardContent>
            <CountryDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Engagement</CardTitle>
          <CardDescription>User engagement metrics by region</CardDescription>
        </CardHeader>
        <CardContent>
          <RegionalEngagementChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Geographic Insights</CardTitle>
          <CardDescription>Key metrics by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left font-medium">Region</th>
                  <th className="py-3 text-left font-medium">Users</th>
                  <th className="py-3 text-left font-medium">Growth</th>
                  <th className="py-3 text-left font-medium">Engagement</th>
                  <th className="py-3 text-left font-medium">Retention</th>
                  <th className="py-3 text-left font-medium">Avg. Session</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    North America
                  </td>
                  <td className="py-3">4,782</td>
                  <td className="py-3 text-emerald-500">+12.4%</td>
                  <td className="py-3">78.2%</td>
                  <td className="py-3">82.5%</td>
                  <td className="py-3">24 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Europe
                  </td>
                  <td className="py-3">3,568</td>
                  <td className="py-3 text-emerald-500">+8.7%</td>
                  <td className="py-3">72.4%</td>
                  <td className="py-3">76.8%</td>
                  <td className="py-3">22 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Asia Pacific
                  </td>
                  <td className="py-3">2,845</td>
                  <td className="py-3 text-emerald-500">+24.8%</td>
                  <td className="py-3">68.5%</td>
                  <td className="py-3">70.2%</td>
                  <td className="py-3">18 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Latin America
                  </td>
                  <td className="py-3">1,256</td>
                  <td className="py-3 text-emerald-500">+15.2%</td>
                  <td className="py-3">64.8%</td>
                  <td className="py-3">68.4%</td>
                  <td className="py-3">20 min</td>
                </tr>
                <tr>
                  <td className="py-3 flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Africa
                  </td>
                  <td className="py-3">895</td>
                  <td className="py-3 text-emerald-500">+18.6%</td>
                  <td className="py-3">62.1%</td>
                  <td className="py-3">65.7%</td>
                  <td className="py-3">16 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

