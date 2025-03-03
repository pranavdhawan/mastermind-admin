"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"

// Mock data
const data = [
  { subject: "Math", time: 120 },
  { subject: "Science", time: 98 },
  { subject: "English", time: 86 },
  { subject: "History", time: 65 },
  { subject: "Geography", time: 45 },
  { subject: "Computer", time: 72 },
]

export function SubjectTimeChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Time Spent" dataKey="time" stroke="#FA4061" fill="#FA4061" fillOpacity={0.6} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} minutes`, "Average Time"]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

