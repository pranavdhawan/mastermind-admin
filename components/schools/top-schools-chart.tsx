"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Westlake Academy", value: 85 },
  { name: "Highland Preparatory", value: 88 },
  { name: "Oakridge Charter", value: 79 },
  { name: "Lakeview Middle", value: 74 },
  { name: "Riverside Public", value: 72 },
  { name: "Meadowbrook Elementary", value: 68 },
]

export function TopSchoolsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value}%`, "Engagement"]}
          />
          <Bar dataKey="value" fill="#FA4061" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

