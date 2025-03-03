"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data generator
const generateSignUpData = (timeRange: string) => {
  if (timeRange === "week") {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return days.map((day) => ({
      name: day,
      value: Math.floor(Math.random() * 100) + 20,
    }))
  } else if (timeRange === "month") {
    return Array.from({ length: 30 }, (_, i) => ({
      name: `${i + 1}`,
      value: Math.floor(Math.random() * 80) + 10,
    }))
  } else {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.map((month) => ({
      name: month,
      value: Math.floor(Math.random() * 1000) + 200,
    }))
  }
}

interface SignUpsChartProps {
  timeRange: string
}

export function SignUpsChart({ timeRange }: SignUpsChartProps) {
  const [data, setData] = useState(generateSignUpData(timeRange))

  useEffect(() => {
    setData(generateSignUpData(timeRange))
  }, [timeRange])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} sign-ups`, "Sign Ups"]}
          />
          <Bar dataKey="value" fill="#FA4061" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

