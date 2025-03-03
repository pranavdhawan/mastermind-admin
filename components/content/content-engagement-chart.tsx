"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", views: 12500, completions: 8200 },
  { name: "Feb", views: 14200, completions: 9100 },
  { name: "Mar", views: 16800, completions: 10500 },
  { name: "Apr", views: 15600, completions: 9800 },
  { name: "May", views: 18200, completions: 11400 },
  { name: "Jun", views: 21500, completions: 13200 },
  { name: "Jul", views: 24800, completions: 15600 },
  { name: "Aug", views: 27200, completions: 17800 },
  { name: "Sep", views: 29500, completions: 19200 },
]

export function ContentEngagementChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          />
          <Line
            type="monotone"
            dataKey="views"
            name="Content Views"
            stroke="#FA4061"
            strokeWidth={2}
            dot={{ r: 4, fill: "#FA4061", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#FA4061", strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="completions"
            name="Content Completions"
            stroke="#DE4539"
            strokeWidth={2}
            dot={{ r: 4, fill: "#DE4539", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#DE4539", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

