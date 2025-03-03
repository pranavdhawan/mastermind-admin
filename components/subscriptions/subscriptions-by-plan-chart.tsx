"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Mock data
const data = [
  { name: "1 Book", value: 35 },
  { name: "3 Books", value: 30 },
  { name: "5 Books", value: 25 },
  { name: "8 Books", value: 10 },
]

const COLORS = ["#FA4061", "#FD6B84", "#FD96A7", "#FFBDC9"]

export function SubscriptionsByPlanChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value}%`, "Percentage"]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

