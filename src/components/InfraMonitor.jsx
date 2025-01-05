import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function InfraMonitor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [
          ...prev,
          {
            time: new Date().toLocaleTimeString().slice(0, 8),
            cpu: Math.floor(Math.random() * 100),
            memory: Math.floor(Math.random() * 100),
          },
        ];
        return next.length > 15 ? next.slice(-15) : next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Infrastructure Monitoring (Live)
      </h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "none" }}
            labelStyle={{ color: "#f3f4f6" }}
            itemStyle={{ color: "#f3f4f6" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#f97316"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="memory"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
