"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockData = [
  { id: 1, name: "John Doe", plan: "1 Book", status: "Active", date: "2023-10-26" },
  { id: 2, name: "Jane Smith", plan: "3 Books", status: "Active", date: "2023-10-25" },
  { id: 3, name: "Peter Jones", plan: "5 Books", status: "Cancelled", date: "2023-10-24" },
  { id: 4, name: "Mary Brown", plan: "1 Book", status: "Active", date: "2023-10-23" },
  { id: 5, name: "David Wilson", plan: "3 Books", status: "Active", date: "2023-10-22" },
  { id: 6, name: "Sarah Garcia", plan: "5 Books", status: "Cancelled", date: "2023-10-21" },
]

export function SubscriptionsTable() {
  return (
    <Table>
      <TableCaption>Recent Subscriptions</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Plan</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.plan}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

