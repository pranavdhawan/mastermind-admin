"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Mock data
const data = [
  { name: "Mathematics", value: 45 },
  { name: "Science", value: 38 },
  { name: "English", value: 32 },
  { name: "History", value: 28 },
  { name: "Geography", value: 22 },
  { name: "Technology", value: 18 },
]

const COLORS = ["#FA4061", "#FD6B84", "#FD96A7", "#FFBDC9", "#FFD4DB", "#FFEAED"]

export function ContentBySubjectChart() {
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
            formatter={(value) => [`${value} books`, "Books"]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

