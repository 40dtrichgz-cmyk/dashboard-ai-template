import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [timeRange, setTimeRange] = useState("24h");
  const [selectedMetric, setSelectedMetric] = useState("all");

  const handleApply = () => {
    onFilterChange({ timeRange, selectedMetric });
  };

  return (
    <div className="glassmorphism p-6 mb-6 max-w-2xl">
      <h3 className="text-white font-medium mb-6">กรองข้อมูล</h3>

      <div className="space-y-4">
        <div>
          <label className="text-white/60 text-sm mb-2">ช่วงเวลา</label>
          <select
            className="w-full glassmorphism p-3 rounded border border-white/20 bg-white/05 text-white focus:outline-none focus:border-cyan-400"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="24h">24 ชั่วโมง</option>
            <option value="7d">7 วัน</option>
            <option value="30d">30 วัน</option>
            <option value="90d">90 วัน</option>
          </select>
        </div>

        <div>
          <label className="text-white/60 text-sm mb-2">เมตริก</label>
          <select
            className="w-full glassmorphism p-3 rounded border border-white/20 bg-white/05 text-white focus:outline-none focus:border-cyan-400"
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
          >
            <option value="all">ทั้งหมด</option>
            <option value="users">จำนวนผู้ใช้</option>
            <option value="accuracy">ความแม่นยำ</option>
            <option value="market">การตลาด</option>
            <option value="trend">แนวโน้ม</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="mt-4 w-full glassmorphism p-3 rounded bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors"
      >
        ใช้ฟิลเตอร์
      </button>
    </div>
  );
};

export default Filters;