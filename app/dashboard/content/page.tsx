"use client"

import { useState } from "react"
import { BookPlus, Download, Search } from "lucide-react"

import { DateRangePicker } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TopBooksChart } from "@/components/dashboard/top-books-chart"
import { ContentEngagementChart } from "@/components/content/content-engagement-chart"
import { ContentBySubjectChart } from "@/components/content/content-by-subject-chart"
import { ContentGrowthChart } from "@/components/content/content-growth-chart"

export default function ContentPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Content</h2>
          <p className="text-muted-foreground">Manage and analyze educational content</p>
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
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+12 new books this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Across all class levels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Most Popular Book</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Science Explorer</div>
            <p className="text-xs text-muted-foreground">1,240 purchases this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">From 3,842 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Content Growth</CardTitle>
            <CardDescription>New books added over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentGrowthChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Content by Subject</CardTitle>
            <CardDescription>Distribution of books by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentBySubjectChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Books</CardTitle>
            <CardDescription>Most popular books purchased</CardDescription>
          </CardHeader>
          <CardContent>
            <TopBooksChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Engagement</CardTitle>
            <CardDescription>User engagement with content</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentEngagementChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>Book Management</CardTitle>
            <CardDescription>View and manage educational books</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search books..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Books</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <BookPlus className="mr-2 h-4 w-4" />
              Add Book
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Purchases</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookMockData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.subject}</TableCell>
                  <TableCell>{book.class}</TableCell>
                  <TableCell>{book.published}</TableCell>
                  <TableCell>{book.purchases}</TableCell>
                  <TableCell>{book.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const bookMockData = [
  {
    id: "B1001",
    title: "Science Explorer",
    subject: "Science",
    class: "5th Class",
    published: "2023-01-15",
    purchases: 1240,
    rating: "4.8/5",
  },
  {
    id: "B1002",
    title: "Math Mastery",
    subject: "Mathematics",
    class: "6th Class",
    published: "2023-02-20",
    purchases: 980,
    rating: "4.7/5",
  },
  {
    id: "B1003",
    title: "History Chronicles",
    subject: "History",
    class: "7th Class",
    published: "2022-11-05",
    purchases: 860,
    rating: "4.5/5",
  },
  {
    id: "B1004",
    title: "Language Arts",
    subject: "English",
    class: "4th Class",
    published: "2023-03-10",
    purchases: 750,
    rating: "4.6/5",
  },
  {
    id: "B1005",
    title: "Geography Atlas",
    subject: "Geography",
    class: "8th Class",
    published: "2023-04-01",
    purchases: 620,
    rating: "4.4/5",
  },
  {
    id: "B1006",
    title: "Computer Science",
    subject: "Technology",
    class: "9th Class",
    published: "2023-05-22",
    purchases: 580,
    rating: "4.9/5",
  },
]

