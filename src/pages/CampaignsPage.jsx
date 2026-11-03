import React, { useState } from "react";

// Campaigns page - campaign performance overview
const CampaignsPage = () => {
  // Sample campaign data
  const [activeCampaign, setActiveCampaign] = useState(null);
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "active",
      budget: 50000,
      spent: 32000,
      conversions: 1250,
      revenue: 75000,
      roi: 2.34,
      startDate: "2024-06-01",
      endDate: "2024-08-31",
    },
    {
      id: 2,
      name: "Winter Promo",
      status: "paused",
      budget: 30000,
      spent: 15000,
      conversions: 620,
      revenue: 38000,
      roi: 2.53,
      startDate: "2024-12-01",
      endDate: "2024-12-31",
    },
    {
      id: 3,
      name: "Spring Launch",
      status: "active",
      budget: 45000,
      spent: 28000,
      conversions: 980,
      revenue: 55000,
      roi: 1.96,
      startDate: "2024-03-01",
      endDate: "2024-05-31",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 text-white">
      <nav className="navbar border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div dangerouslySetInnerHTML={{ __html: '<svg width="32" height="32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" rx="16" ry="16" fill="#0F172A"/><text x="24" y="38" fill="#66D8EE" font-family="Inter, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.5">MarketFlow</text></svg>' }} className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"/>
            <h1 className="text-xl font-bold">แคมเปญ</h1>
          </div>
          <button className="glass-pill" onClick={() => window.history.back()}>
            กลับหน้าหลัก
          </button>
        </div>
      </nav>

      <main className="p-6 pt-16">
        {/* Campaigns Table */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">แคมเปญทั้งหมด</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/20">
              <thead>
                <tr className="text-white/60 text-xs uppercase">
                  <th className="text-left">แคมเปญ</th>
                  <th className="text-center">สถานะ</th>
                  <th className="text-right">งบประมาณ</th>
                  <th className="text-right">ใช้ไป</th>
                  <th className="text-right">ROI</th>
                  <th className="text-right">การดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr
                    key={campaign.id}
                    className="hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => setActiveCampaign(campaign)}
                  >
                    <td className="font-medium">
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-${campaign.status === "active" ? "green" : "gray"}`}></span>
                        {campaign.name}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className={`text-{${campaign.status === "active" ? "green" : "gray"}-400 font-medium}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="text-right font-medium">{campaign.budget} บาท</td>
                    <td className="text-right">{campaign.spent} บาท</td>
                    <td className={`text-right font-medium text-${campaign.roi >= 3 ? "green" : "red"}-400`}>
                      {campaign.roi}x
                    </td>
                    <td className="text-right">
                      <button
                        className="glass-pill bg-white/10 text-white/60 text-xs px-3 py-1"
                      >
                        ดูรายละเอียด
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Campaign Detail */}
        {activeCampaign && (
          <div className="glass-card mb-8">
            <h2 className="text-white font-medium mb-4">
              รายละเอียดแคมเปญ: {activeCampaign.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-white/60 text-uppercase text-sm mb-2">งบประมาณ</p>
                <p className="text-2xl font-bold text-cyan-400">
                  {activeCampaign.budget} บาท
                </p>
              </div>
              <div>
                <p className="text-white/60 text-uppercase text-sm mb-2">ใช้ไป</p>
                <p className="text-2xl font-bold text-green-400">
                  {activeCampaign.spent} บาท
                </p>
              </div>
              <div>
                <p className="text-white/60 text-uppercase text-sm mb-2">ROI</p>
                <p className="text-2xl font-bold text-purple-400">
                  {campaign.roi}x
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white/60 text-sm">ช่วงระยะเวลา:</p>
              <p className="text-white font-medium">
                {activeCampaign.startDate} - {activeCampaign.endDate}
              </p>
            </div>
            <button
              className="mt-4 w-full glass-pill bg-white/10 text-white/60 text-sm"
            >
              กลับไปแคมเปญ
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CampaignsPage;