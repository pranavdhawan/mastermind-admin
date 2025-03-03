"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Mock data
const data = [
  {
    name: "North America",
    activeUsers: 78.2,
    contentCompletion: 72.5,
    retention: 82.5,
  },
  {
    name: "Europe",
    activeUsers: 72.4,
    contentCompletion: 68.8,
    retention: 76.8,
  },
  {
    name: "Asia Pacific",
    activeUsers: 68.5,
    contentCompletion: 64.2,
    retention: 70.2,
  },
  {
    name: "Latin America",
    activeUsers: 64.8,
    contentCompletion: 60.5,
    retention: 68.4,
  },
  {
    name: "Africa",
    activeUsers: 62.1,
    contentCompletion: 58.3,
    retention: 65.7,
  },
]

export function RegionalEngagementChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value}%`, ""]}
          />
          <Legend />
          <Bar dataKey="activeUsers" name="Active Users" fill="#FA4061" radius={[4, 4, 0, 0]} />
          <Bar dataKey="contentCompletion" name="Content Completion" fill="#FD6B84" radius={[4, 4, 0, 0]} />
          <Bar dataKey="retention" name="Retention Rate" fill="#FD96A7" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

