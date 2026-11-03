import React from "react";

// Channels page - marketing channel performance
const ChannelsPage = () => {
  // Sample channel data
  const channels = [
    {
      name: "Social Media",
      value: 45,
      color: "cyan",
      description:
        "Facebook, Instagram, TikTok, Twitter - แชร์และโพสต์",
    },
    {
      name: "Email Marketing",
      value: 25,
      color: "green",
      description:
        "Newsletter, โพสต์อีเมล - แคมเปญตรง",
    },
    {
      name: "Search Engine",
      value: 20,
      color: "orange",
      description:
        "Google Ads, SEO - การค้นหา",
    },
    {
      name: "Display Advertising",
      value: 10,
      color: "purple",
      description:
        "Banner Ads, Retargeting - โฆษณาแสดงผล",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 text-white">
      <nav className="navbar border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div dangerouslySetInnerHTML={{ __html: '<svg width="32" height="32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" rx="16" ry="16" fill="#0F172A"/><text x="24" y="38" fill="#66D8EE" font-family="Inter, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.5">MarketFlow</text></svg>' }} className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"/>
            <h1 className="text-xl font-bold">ช่องทางการตลาด</h1>
          </div>
          <button className="glass-pill" onClick={() => window.history.back()}>
            กลับหน้าหลัก
          </button>
        </div>
      </nav>

      <main className="p-6 pt-16">
        {/* Channels Overview */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">การกระจายโดยช่องทาง</h2>
          <div className="space-y-3">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3 h-3 rounded-full bg-${channel.color}`}
                  />
                  <span className="text-white/60 text-sm">
                    {channel.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-white font-medium">
                    {channel.value}%
                  </span>
                  <span className="text-white/60 text-xs">
                    ของรวม
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Details */}
        <div className="glass-card">
          <h2 className="text-white font-medium mb-4">รายละเอียดช่องทาง</h2>
          <p className="text-white/60 mb-4">
            แต่ละช่องทางมีส่วนร่วมดังนี้:
          </p>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>
              Social Media: 45% - โฟกัสที่ TikTok และ Instagram Reels
            </li>
            <li>
              Email Marketing: 25% - โฟกัสที่ Newsletter สัปดาหละ 2 ครั้ง
            </li>
            <li>
              Search Engine: 20% - โฟกัสที่ Google Keyword Ads
            </li>
            <li>
              Display Advertising: 10% - โฟกัสที่ Banner Ads และ Retargeting
            </li>
          </ul>
        </div>

        {/* Channel Performance Chart */}
        <div className="glass-card mt-8">
          <h2 className="text-white font-medium mb-4">ผลงานช่องทาง</h2>
          <div className="h-64 relative">
            <svg
              viewBox="0 0 100 60"
              className="absolute inset-0 w-full h-full"
            >
              <path
                fill="none"
                stroke="rgba(102, 212, 238, 0.2)"
                strokeWidth={1}
                d="M0 50 Q25 10, 50 30 Q75 50, 100 30 Q75 10, 50 20 Q25 30, 0 50 Z"
              />
              <path
                fill="none"
                stroke="#66D8EE"
                strokeWidth={2}
                d="M0 50 Q20 30, 40 45 Q60 55, 80 40 Q60 25, 40 15 Q20 25, 0 50 Z"
              />
            </svg>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              fontSize="16"
            >
              +12.5%
            </text>
          </div>
          <div className="flex justify-between text-white/60 text-sm mt-3">
            <span>เดือนที่แล้ว</span>
            <span>+12.5%</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChannelsPage;