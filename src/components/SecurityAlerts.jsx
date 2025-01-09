import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  ddos: "#f97316",
  malware: "#ef4444",
  brute: "#3b82f6",
};

const attackTypes = ["ddos", "malware", "brute"];

export default function SecurityAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
        message: "New suspicious activity detected",
        time: new Date().toLocaleTimeString(),
      };
      setAlerts((prev) => [newAlert, ...prev.slice(0, 19)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const counts = {
    ddos: alerts.filter((a) => a.type === "ddos").length,
    malware: alerts.filter((a) => a.type === "malware").length,
    brute: alerts.filter((a) => a.type === "brute").length,
  };

  const pieData = [
    { name: "DDoS Attack", value: counts.ddos },
    { name: "Malware Incident", value: counts.malware },
    { name: "Brute Force Attempt", value: counts.brute },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Security Events (Live)
        </h3>

        <ul
          className="space-y-3 max-h-[300px] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
          role="list"
        >
          {alerts.map((alert) => (
            <li
              key={alert.id}
              role="listitem"
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md flex justify-between items-center animate-pulse"
            >
              <span className="capitalize font-medium text-sm text-gray-800 dark:text-white">
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
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={Object.values(COLORS)[index]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                itemStyle={{ color: "#f3f4f6" }}
                labelStyle={{ color: "#f3f4f6" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
