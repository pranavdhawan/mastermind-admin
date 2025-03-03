"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", newBooks: 8, cumulativeBooks: 180 },
  { name: "Feb", newBooks: 10, cumulativeBooks: 190 },
  { name: "Mar", newBooks: 12, cumulativeBooks: 202 },
  { name: "Apr", newBooks: 9, cumulativeBooks: 211 },
  { name: "May", newBooks: 11, cumulativeBooks: 222 },
  { name: "Jun", newBooks: 14, cumulativeBooks: 236 },
  { name: "Jul", newBooks: 8, cumulativeBooks: 244 },
  { name: "Aug", newBooks: 10, cumulativeBooks: 254 },
  { name: "Sep", newBooks: 12, cumulativeBooks: 266 },
]

export function ContentGrowthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 300]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          />
          <Bar yAxisId="left" dataKey="newBooks" name="New Books" fill="#FA4061" radius={[4, 4, 0, 0]} />
          <Bar
            yAxisId="right"
            dataKey="cumulativeBooks"
            name="Total Books"
            fill="rgba(222, 69, 57, 0.6)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

