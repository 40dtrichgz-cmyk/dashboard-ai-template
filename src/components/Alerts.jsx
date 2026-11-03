import React, { useState, useEffect } from "react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  // Mock realtime alerts
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlerts = [
        {
          id: Math.random().toString(36).substr(2, 9),
          type: "warning",
          message: "การใช้ทรัพยากรสูงกว่า 80%",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: Math.random().toString(36).substr(2, 9),
          type: "success",
          message: "โมเดลใหม่พร้อมใช้งาน",
          time: new Date().toLocaleTimeString(),
        },
      ];
      setAlerts([...newAlerts]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glassmorphism p-6">
      <h3 className="text-white font-medium mb-6">การแจ้งเตือน</h3>
      {alerts.length === 0 ? (
        <div className="text-white/60 text-sm">ไม่มีการแจ้งเตือน</div>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`glassmorphism p-4 rounded ${alert.type === "success" ? "border-green-500/30 bg-green-500/10" : "border-red-500/30 bg-red-500/10"}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white font-medium">{alert.message}</p>
                  <p className="text-white/60 text-xs">{alert.time}</p>
                </div>
                <span
                  className={`text-white/60 text-xs ${
                    alert.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {alert.type === "success" ? "✓" : "⚠"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alerts;