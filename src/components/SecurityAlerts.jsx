import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = {
  ddos: "#f97316",
  malware: "#ef4444",
  brute: "#3b82f6"
};

const attackTypes = ["ddos", "malware", "brute"];

export default function SecurityAlerts() {
  const [attackData, setAttackData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
        message: "New suspicious activity detected",
        time: new Date().toLocaleTimeString()
      };
      setAlerts((prev) => [newAlert, ...prev.slice(0, 19)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Security Events (Live)
        </h3>
        <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md flex justify-between items-center animate-pulse"
            >
              <span className="capitalize font-medium text-sm text-gray-800 dark:text-white">
                {alert.type}
              </span>
              <span className="text-xs text-gray-500">{alert.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
