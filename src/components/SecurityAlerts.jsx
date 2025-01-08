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
}
