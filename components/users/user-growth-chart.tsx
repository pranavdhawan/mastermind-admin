"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", newUsers: 420, cumulativeUsers: 8200 },
  { name: "Feb", newUsers: 480, cumulativeUsers: 8680 },
  { name: "Mar", newUsers: 550, cumulativeUsers: 9230 },
  { name: "Apr", newUsers: 590, cumulativeUsers: 9820 },
  { name: "May", newUsers: 610, cumulativeUsers: 10430 },
  { name: "Jun", newUsers: 680, cumulativeUsers: 11110 },
  { name: "Jul", newUsers: 720, cumulativeUsers: 11830 },
  { name: "Aug", newUsers: 830, cumulativeUsers: 12660 },
  { name: "Sep", newUsers: 920, cumulativeUsers: 13580 },
]

export function UserGrowthChart() {
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
            dataKey="newUsers"
            name="New Users"
            stroke="#FA4061"
            fill="rgba(250, 64, 97, 0.2)"
            strokeWidth={2}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="cumulativeUsers"
            name="Total Users"
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

