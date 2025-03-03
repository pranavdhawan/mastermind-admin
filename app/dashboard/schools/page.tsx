"use client"

import { useState } from "react"
import { Building, Download, Search } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TopSchoolsChart } from "@/components/schools/top-schools-chart"
import { SchoolsByRegionChart } from "@/components/schools/schools-by-region-chart"
import { SchoolGrowthChart } from "@/components/schools/school-growth-chart"
import { SchoolEngagementChart } from "@/components/schools/school-engagement-chart"

export default function SchoolsPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Schools</h2>
          <p className="text-muted-foreground">Manage and analyze school data</p>
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
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+52 new schools this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">986</div>
            <p className="text-xs text-muted-foreground">79% of total schools</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Students Enrolled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124,568</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72.4%</div>
            <p className="text-xs text-muted-foreground">+3.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>School Growth</CardTitle>
            <CardDescription>New schools onboarded over time</CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolGrowthChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Schools by Region</CardTitle>
            <CardDescription>Distribution of schools by region</CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolsByRegionChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Schools</CardTitle>
            <CardDescription>Schools with highest student engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <TopSchoolsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>School Engagement</CardTitle>
            <CardDescription>Average engagement metrics by school type</CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolEngagementChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>School Management</CardTitle>
            <CardDescription>View and manage school accounts</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search schools..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="charter">Charter</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Building className="mr-2 h-4 w-4" />
              Add School
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>School Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schoolMockData.map((school) => (
                <TableRow key={school.id}>
                  <TableCell>{school.id}</TableCell>
                  <TableCell>{school.name}</TableCell>
                  <TableCell>{school.type}</TableCell>
                  <TableCell>{school.region}</TableCell>
                  <TableCell>{school.students}</TableCell>
                  <TableCell>{school.engagement}</TableCell>
                  <TableCell>{school.joined}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const schoolMockData = [
  {
    id: "S1001",
    name: "Westlake Academy",
    type: "Private",
    region: "North",
    students: 1250,
    engagement: "85%",
    joined: "2022-08-15",
  },
  {
    id: "S1002",
    name: "Riverside Public School",
    type: "Public",
    region: "East",
    students: 1850,
    engagement: "72%",
    joined: "2022-09-20",
  },
  {
    id: "S1003",
    name: "Oakridge Charter School",
    type: "Charter",
    region: "West",
    students: 950,
    engagement: "79%",
    joined: "2023-01-05",
  },
  {
    id: "S1004",
    name: "Meadowbrook Elementary",
    type: "Public",
    region: "South",
    students: 1120,
    engagement: "68%",
    joined: "2023-02-10",
  },
  {
    id: "S1005",
    name: "Highland Preparatory",
    type: "Private",
    region: "North",
    students: 780,
    engagement: "88%",
    joined: "2023-03-01",
  },
  {
    id: "S1006",
    name: "Lakeview Middle School",
    type: "Public",
    region: "East",
    students: 1450,
    engagement: "74%",
    joined: "2023-04-22",
  },
]

