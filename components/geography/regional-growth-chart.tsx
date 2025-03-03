"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Mock data
const data = [
  { name: "Jan", northAmerica: 3800, europe: 2900, asiaPacific: 1800, latinAmerica: 950, africa: 650 },
  { name: "Feb", northAmerica: 3950, europe: 3050, asiaPacific: 1950, latinAmerica: 1000, africa: 700 },
  { name: "Mar", northAmerica: 4100, europe: 3150, asiaPacific: 2100, latinAmerica: 1050, africa: 720 },
  { name: "Apr", northAmerica: 4250, europe: 3250, asiaPacific: 2250, latinAmerica: 1100, africa: 750 },
  { name: "May", northAmerica: 4400, europe: 3350, asiaPacific: 2400, latinAmerica: 1150, africa: 780 },
  { name: "Jun", northAmerica: 4550, europe: 3450, asiaPacific: 2550, latinAmerica: 1200, africa: 820 },
  { name: "Jul", northAmerica: 4650, europe: 3500, asiaPacific: 2700, latinAmerica: 1220, africa: 850 },
  { name: "Aug", northAmerica: 4720, europe: 3550, asiaPacific: 2800, latinAmerica: 1240, africa: 870 },
  { name: "Sep", northAmerica: 4782, europe: 3568, asiaPacific: 2845, latinAmerica: 1256, africa: 895 },
]

export function RegionalGrowthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="northAmerica"
            name="North America"
            stroke="#FA4061"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="europe"
            name="Europe"
            stroke="#FD6B84"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="asiaPacific"
            name="Asia Pacific"
            stroke="#FD96A7"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="latinAmerica"
            name="Latin America"
            stroke="#FFBDC9"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="africa"
            name="Africa"
            stroke="#FFD4DB"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

