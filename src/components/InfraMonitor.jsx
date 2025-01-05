import { useEffect, useState } from "react";

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
    <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      [Live chart here...]
    </div>
  );
}
