import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import HomePage from "./pages/HomePage";
import CampaignsPage from "./pages/CampaignsPage";
import ChannelsPage from "./pages/ChannelsPage";
import FunnelPage from "./pages/FunnelPage";
import SettingsPage from "./pages/SettingsPage";
import "./index.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const App = () => {
  const [page, setPage] = useState("home");
  const [hasLicense, setHasLicense] = useState(false);
  const [loadingLicense, setLoadingLicense] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initApp = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Session error:", sessionError);
        setLoadingLicense(false);
        return;
      }

      setUser(session?.user?.email || null);

      if (session?.user?.id) {
        const { data, error } = await supabase
          .from("subscriptions")
          .select("status")
          .eq("user_id", session.user.id)
          .single();

        if (data && data.status === "active") {
          setHasLicense(true);
        }
      }

      setLoadingLicense(false);
    };

    initApp();
  }, []);

  if (loadingLicense) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="glass-card p-8 text-center max-w-md animate-spin-delay">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="text-white mt-4">กำลังตรวจสอบสิทธิ์...</p>
        </div>
      </div>
    );
  }

  if (!hasLicense && user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="p-6 max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Dashboard AI</h1>
          <p className="text-white/60 mb-8">ระบบตรวจสอบลิขสิทธิ์</p>

          <div className="glass-card p-6 rounded border-white/20">
            <h3 className="text-white font-medium mb-4">เริ่มต้นใช้งาน</h3>
            <p className="text-white/60 mb-6">ซื้อลิขสิทธิ์เพื่อเข้าถึง dashboard พร้อมคุณสมบัติต่อไปนี้:</p>
            <ul className="space-y-3 text-white/60">
              <li>✅ หน้าหลักแสดงเมตริค</li>
              <li>✅ ติดตามแคมเปญสด</li>
              <li>✅ การกระจายโดยช่องทาง</li>
              <li>✅ ฟันน้ำยานำทาง (Funnel)</li>
              <li>✅ การตั้งค่าธีม</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://pay.stripe.com/checkout/price_1Ph3x2LKb7E7v3R61cKzF8Zw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full glass-pill bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors"
              >
                ซื้อลิขสิทธิ์แบบ One-time
              </a>
            </div>
            <p className="text-white/60 mt-4 text-sm">หรือล็อกอินด้วยอีเมลของคุณ</p>
            <button
              onClick={() => supabase.auth.signInWithOAuth({ provider: "email" }) }
              className="mt-3 w-full glass-pill bg-white/10 text-white/60 font-medium hover:bg-white/20 transition-colors text-sm"
              >
                ล็อกอินด้วยอีเมล
              </button>
            </div>
          </div>
        </div>
    );
  }

  // Map pages
  const pages = {
    home: <HomePage />,
    campaigns: <CampaignsPage />,
    channels: <ChannelsPage />,
    funnel: <FunnelPage />,
    settings: <SettingsPage />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Navbar with MarketFlow logo */}
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex items-center gap-2">
            <div
              dangerouslySetInnerHTML={{
                __html: '<svg width="32" height="32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" rx="16" ry="16" fill="#0F172A"/><text x="24" y="38" fill="#66D8EE" font-family="Inter, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.5">MarketFlow</text></svg>',
              }}
              className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"
            />
            <h1 className="text-xl font-bold">Dashboard AI</h1>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-2">
            <button className="glass-pill">หน้าหลัก</button>
            <button className="glass-pill">แคมเปญ</button>
            <button className="glass-pill">ช่องทาง</button>
            <button className="glass-pill">ฟันน้ำยา</button>
            <button className="glass-pill">ตั้งค่า</button>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <main className="p-6 pt-16">
        {pages[page]}
      </main>
    </div>
  );
};

export default App;
