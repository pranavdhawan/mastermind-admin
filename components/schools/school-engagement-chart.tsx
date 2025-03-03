"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Private", students: 85, teachers: 92, parents: 78 },
  { name: "Public", students: 72, teachers: 80, parents: 65 },
  { name: "Charter", students: 79, teachers: 85, parents: 70 },
]

export function SchoolEngagementChart() {
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
            formatter={(value) => [`${value}%`, "Engagement"]}
          />
          <Bar dataKey="students" name="Student Engagement" fill="#FA4061" radius={[4, 4, 0, 0]} />
          <Bar dataKey="teachers" name="Teacher Engagement" fill="#FD6B84" radius={[4, 4, 0, 0]} />
          <Bar dataKey="parents" name="Parent Engagement" fill="#FD96A7" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

