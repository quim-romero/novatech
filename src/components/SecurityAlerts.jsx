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
}
