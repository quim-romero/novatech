import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ATTACK_TYPES = ["DDoS", "Malware", "Brute Force"];

const COLORS = {
  "DDoS": "#f97316",
  "Malware": "#ef4444",
  "Brute Force": "#3b82f6",
};

export default function SecurityAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      const type = ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)];
      const newAlert = {
        id: Date.now(),
        type,
        message: `New suspicious activity detected`,
        time: new Date().toLocaleTimeString(),
      };
      setAlerts((prev) => [newAlert, ...prev.slice(0, 19)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filteredAlerts =
    filter === "All" ? alerts : alerts.filter((a) => a.type === filter);

  const pieData = ATTACK_TYPES.map((type) => ({
    name: type,
    value: alerts.filter((a) => a.type === type).length,
  }));

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Security Events (Live)
          </h3>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
          >
            <option value="All">All</option>
            {ATTACK_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <ul
          className="space-y-3 max-h-[300px] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
          role="list"
        >
          {filteredAlerts.length === 0 && (
            <li className="text-sm text-gray-500 dark:text-gray-400">No alerts yet...</li>
          )}
          {filteredAlerts.map((alert) => (
            <li
              key={alert.id}
              role="listitem"
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md flex justify-between items-center animate-pulse"
            >
              <span className="font-medium text-sm text-gray-800 dark:text-white">
                {alert.type}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {alert.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Alert Type Distribution
        </h3>

        <div className="h-[200px] md:h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                label
                isAnimationActive
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[entry.name]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                itemStyle={{ color: "#f3f4f6" }}
                labelStyle={{ color: "#f3f4f6" }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
