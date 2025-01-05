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

  const latest = data[data.length - 1] || { cpu: 0, memory: 0 };

  const getStatus = (value) => {
    if (value > 85) return "Critical";
    if (value > 65) return "Warning";
    return "Stable";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Infrastructure Monitoring (Live)
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">CPU Usage</p>
          <p className="text-xl font-semibold text-orange-500">{latest.cpu}%</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">Memory Usage</p>
          <p className="text-xl font-semibold text-blue-500">{latest.memory}%</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">Status</p>
          <p
            className={`text-xl font-semibold ${
              getStatus(Math.max(latest.cpu, latest.memory)) === "Critical"
                ? "text-red-500"
                : getStatus(Math.max(latest.cpu, latest.memory)) === "Warning"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {getStatus(Math.max(latest.cpu, latest.memory))}
          </p>
        </div>
      </div>

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
