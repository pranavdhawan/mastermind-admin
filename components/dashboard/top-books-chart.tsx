"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Science Explorer", value: 1240 },
  { name: "Math Mastery", value: 980 },
  { name: "History Chronicles", value: 860 },
  { name: "Language Arts", value: 750 },
  { name: "Geography Atlas", value: 620 },
  { name: "Computer Science", value: 580 },
]

export function TopBooksChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} purchases`, "Purchases"]}
          />
          <Bar dataKey="value" fill="#FA4061" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

