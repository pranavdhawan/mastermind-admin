"use client"

import { useState } from "react"
import { Download, Search, UserPlus } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserGrowthChart } from "@/components/users/user-growth-chart"
import { UsersByAgeChart } from "@/components/dashboard/users-by-age-chart"
import { UsersByClassChart } from "@/components/dashboard/users-by-class-chart"
import { UserActivityChart } from "@/components/users/user-activity-chart"

export default function UsersPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage and analyze user data</p>
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
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,546</div>
            <p className="text-xs text-muted-foreground">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,764</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-muted-foreground">+22.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76.8%</div>
            <p className="text-xs text-muted-foreground">+3.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <UserGrowthChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Daily active users over time</CardDescription>
          </CardHeader>
          <CardContent>
            <UserActivityChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Users by Class</CardTitle>
            <CardDescription>Distribution of users by class level</CardDescription>
          </CardHeader>
          <CardContent>
            <UsersByClassChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Users by Age</CardTitle>
            <CardDescription>Age distribution of platform users</CardDescription>
          </CardHeader>
          <CardContent>
            <UsersByAgeChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>View and manage user accounts</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search users..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="new">New</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userMockData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.class}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "Inactive"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.joined}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const userMockData = [
  {
    id: "U1001",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    class: "5th Class",
    age: 11,
    status: "Active",
    joined: "2023-01-15",
  },
  {
    id: "U1002",
    name: "Samantha Lee",
    email: "sam.lee@example.com",
    class: "7th Class",
    age: 13,
    status: "Active",
    joined: "2023-02-20",
  },
  {
    id: "U1003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    class: "4th Class",
    age: 10,
    status: "Inactive",
    joined: "2022-11-05",
  },
  {
    id: "U1004",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    class: "6th Class",
    age: 12,
    status: "Active",
    joined: "2023-03-10",
  },
  {
    id: "U1005",
    name: "James Garcia",
    email: "james.g@example.com",
    class: "8th Class",
    age: 14,
    status: "New",
    joined: "2023-10-01",
  },
  {
    id: "U1006",
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    class: "5th Class",
    age: 11,
    status: "Active",
    joined: "2023-05-22",
  },
  {
    id: "U1007",
    name: "Noah Thompson",
    email: "noah.t@example.com",
    class: "9th Class",
    age: 15,
    status: "Active",
    joined: "2022-09-15",
  },
]

