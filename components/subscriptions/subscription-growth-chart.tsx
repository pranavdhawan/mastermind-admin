"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", newSubs: 180, cancelledSubs: 20, netGrowth: 160 },
  { name: "Feb", newSubs: 200, cancelledSubs: 30, netGrowth: 170 },
  { name: "Mar", newSubs: 250, cancelledSubs: 40, netGrowth: 210 },
  { name: "Apr", newSubs: 280, cancelledSubs: 50, netGrowth: 230 },
  { name: "May", newSubs: 300, cancelledSubs: 60, netGrowth: 240 },
  { name: "Jun", newSubs: 350, cancelledSubs: 70, netGrowth: 280 },
  { name: "Jul", newSubs: 400, cancelledSubs: 80, netGrowth: 320 },
  { name: "Aug", newSubs: 450, cancelledSubs: 90, netGrowth: 360 },
  { name: "Sep", newSubs: 486, cancelledSubs: 100, netGrowth: 386 },
]

export function SubscriptionGrowthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <Area
            type="monotone"
            dataKey="newSubs"
            name="New Subscriptions"
            stackId="1"
            stroke="#FA4061"
            fill="rgba(250, 64, 97, 0.6)"
          />
          <Area
            type="monotone"
            dataKey="cancelledSubs"
            name="Cancelled Subscriptions"
            stackId="2"
            stroke="#FD96A7"
            fill="rgba(253, 150, 167, 0.6)"
          />
          <Area type="monotone" dataKey="netGrowth" name="Net Growth" stroke="#DE4539" fill="none" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

