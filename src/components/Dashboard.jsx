import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen glassmorphism p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard AI</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: ผู้ใช้ */}
        <div className="glassmorphism p-6 mb-4">
          <h3 className="text-white font-medium mb-4">จำนวนผู้ใช้</h3>
          <div className="text-4xl font-bold text-cyan-400">1,234</div>
          <div className="text-white/60 text-sm">เพิ่มขึ้น 12% จากเมื่อวาน</div>
        </div>

        {/* Card 2: ความแม่นยำ */}
        <div className="glassmorphism p-6 mb-4">
          <h3 className="text-white font-medium mb-4">ความแม่นยำ</h3>
          <div className="text-4xl font-bold text-green-400">94.5%</div>
          <div className="text-white/60 text-sm">โมเดลล่าสุด</div>
        </div>

        {/* Card 3: realtime */}
        <div className="glassmorphism p-6 mb-4">
          <h3 className="text-white font-medium mb-4">สถานะ realtime</h3>
          <div className="text-4xl font-bold text-yellow-400">🟢 ออนไลน์</div>
          <div className="text-white/60 text-sm">อัพเดททุก 5 วินาที</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-white font-medium mb-4">เมตริクスเพิ่มเติม</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glassmorphism p-4">
            <div className="text-white">การตลาด</div>
            <div className="text-2xl font-bold text-cyan-400">4,567</div>
          </div>
          <div className="glassmorphism p-4">
            <div className="text-white">แนวโน้ธุรกิจ</div>
            <div className="text-2xl font-bold text-green-400">↗️ เพิ่มขึ้น</div>
          </div>
          <div className="glassmorphism p-4">
            <div className="text-white">ทรัพยากร</div>
            <div className="text-2xl font-bold text-yellow-400">67%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;