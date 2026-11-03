import React, { useState } from "react";

// Settings page - user preferences and configuration
const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("th");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 text-white">
      <nav className="navbar border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div dangerouslySetInnerHTML={{ __html: '<svg width="32" height="32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" rx="16" ry="16" fill="#0F172A"/><text x="24" y="38" fill="#66D8EE" font-family="Inter, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.5">MarketFlow</text></svg>' }} className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"/>
            <h1 className="text-xl font-bold">ตั้งค่า</h1>
          </div>
          <button className="glass-pill" onClick={() => window.history.back()}>
            กลับหน้าหลัก
          </button>
        </div>
      </nav>

      <main className="p-6 pt-16">
        {/* Theme Settings */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">ธีม</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme("light")}
              className={`glass-pill ${theme === "light" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"} transition-colors`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`glass-pill ${theme === "dark" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"} transition-colors`}
            >
              Dark
            </button>
          </div>
          <p className="text-white/60 text-sm mt-2">
            การเปลี่ยนแปลงจะใช้ทันที
          </p>
        </div>

        {/* Notifications Settings */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">การแจ้งเตือน</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="w-4 h-4 rounded bg-primary-500 border-2 border-white/10 cursor-pointer"
              />
              <span className="text-white/60">
                รับแจ้งเตือนเมตริคสำคัญ
              </span>
            </label>
            <p className="text-white/60 text-sm">
              ส่งผ่านอีเมลและแอพพลิเคชัน
            </p>
          </div>
        </div>

        {/* Language Settings */}
        <div className="glass-card mb-8">
          <h2 className="text-white font-medium mb-4">ภาษา</h2>
          <div className="space-y-2">
            <button
              onClick={() => setLanguage("th")}
              className={`glass-pill ${language === "th" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"} transition-colors`}
            >
              ภาษาไทย
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`glass-pill ${language === "en" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"} transition-colors`}
            >
              English
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="glass-card">
          <h2 className="text-white font-medium mb-4">บัญชี</h2>
          <div className="p-4">
            <p className="text-white/60 mb-2">อีเมล: marketflow@dashboard.ai</p>
            <p className="text-white/60 mb-2">สถานะ: ใบอนุญาตใช้งาน</p>
            <p className="text-white/60 text-sm">
              อัพเดทล่าสุด: วันที่ 3 พฤศจิกายน 2026
            </p>
          </div>
          <button
            className="mt-4 w-full glass-pill bg-white/10 text-white/60 text-sm"
          >
            อัพเดทโปรไฟล์
          </button>
        </div>

        {/* Save Settings Button */}
        <div className="mt-8 glass-card text-center">
          <button
            className="w-full glass-pill bg-cyan-500 text-white font-medium py-3 px-6 rounded transition-colors hover:bg-cyan-400"
          >
            บันทึกการตั้งค่า
          </button>
          <p className="mt-2 text-white/60 text-sm">
            การเปลี่ยนแปลงจะบันทึกอัตโนมัติ
          </p>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;