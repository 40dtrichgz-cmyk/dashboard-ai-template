import React from "react";

// Funnel page - conversion funnel visualization
const FunnelPage = () => {
  // Sample funnel data
  const funnelStages = [
    {
      stage: "Impressions",
      value: 125000,
      percentage: 100,
      description: "จำนวนผู้ชมทั้งหมด",
    },
    {
      stage: "Clicks",
      value: 18500,
      percentage: 14.8,
      description: "ผู้ที่คลิกโฆษณา",
    },
    {
      stage: "Signups",
      value: 3200,
      percentage: 2.6,
      description: "ผู้ลงทะเบียน",
    },
    {
      stage: "Customers",
      value: 890,
      percentage: 0.7,
      description: "ลูกค้าจริง",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 text-white">
      <nav className="navbar border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div dangerouslySetInnerHTML={{ __html: '<svg width="32" height="32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" rx="16" ry="16" fill="#0F172A"/><text x="24" y="38" fill="#66D8EE" font-family="Inter, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.5">MarketFlow</text></svg>' }} className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"/>
            <h1 className="text-xl font-bold">เส้นทางการแปลง</h1>
          </div>
          <button className="glass-pill" onClick={() => window.history.back()}>
            กลับหน้าหลัก
          </button>
        </div>
      </nav>

      <main className="p-6 pt-16">
        {/* Funnel Visualization */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">ฟันน้ำยานำทาง (Funnel)</h2>
          <div className="space-y-2">
            {funnelStages.map((stage, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <span className="text-white/60 text-sm">
                  {stage.stage}
                </span>
                <div className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      index % 2 === 0 ? "bg-cyan-500" : "bg-purple-500"
                    }-500 transition-width duration-700`}
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
                <span className="text-white font-medium text-right">
                  {stage.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel Analysis */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">การวิเคราะห์จุดหยุด</h2>
          <p className="text-white/60 mb-4">
            จุดที่ผู้ใช้หยุดเคลื่อนไหวในฟันน้ำยา:
          </p>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>
              Impressions → Clicks: การสูญเสีย 85.2% มักเกิดจากหัวข้อที่ดึงดูดไม่เพียงพอ
            </li>
            <li>
              Clicks → Signups: การสูญเสีย 82.8% มักเกิดจากหน้า Landing ที่ไม่ตรงกับโฆษณา
            </li>
            <li>
              Signups → Customers: การสูญเสีย 72.2% มักเกิดจากขั้นตอน Checkout ที่ซับซ้อน
            </li>
          </ul>
        </div>

        {/* Funnel Metrics */}
        <div className="glass-card">
          <h2 className="text-white font-medium mb-4">ผลการวิเคราะห์</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/60 text-uppercase text-sm mb-2">อัตราการรักษา</p>
              <p className="text-2xl font-bold text-green-400">15.2%</p>
            </div>
            <div>
              <p className="text-white/60 text-uppercase text-sm mb-2">อัตราแปลงเป็นลูกค้า</p>
              <p className="text-2xl font-bold text-purple-400">0.71%</p>
            </div>
          </div>
          <button className="mt-4 w-full glass-pill bg-white/10 text-white/60 text-sm">
            เพิ่มอัตราแปลงเป็น
          </button>
        </div>
      </main>
    </div>
  );
};

export default FunnelPage;