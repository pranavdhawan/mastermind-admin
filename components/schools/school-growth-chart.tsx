"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", newSchools: 28, cumulativeSchools: 980 },
  { name: "Feb", newSchools: 35, cumulativeSchools: 1015 },
  { name: "Mar", newSchools: 42, cumulativeSchools: 1057 },
  { name: "Apr", newSchools: 38, cumulativeSchools: 1095 },
  { name: "May", newSchools: 45, cumulativeSchools: 1140 },
  { name: "Jun", newSchools: 48, cumulativeSchools: 1188 },
  { name: "Jul", newSchools: 52, cumulativeSchools: 1240 },
  { name: "Aug", newSchools: 58, cumulativeSchools: 1298 },
  { name: "Sep", newSchools: 62, cumulativeSchools: 1360 },
]

export function SchoolGrowthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="newSchools"
            name="New Schools"
            stroke="#FA4061"
            fill="rgba(250, 64, 97, 0.2)"
            strokeWidth={2}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="cumulativeSchools"
            name="Total Schools"
            stroke="#DE4539"
            fill="none"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

