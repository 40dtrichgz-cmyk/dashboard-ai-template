import React from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="glassmorphism p-6 max-w-2xl">
      <h3 className="text-white font-medium mb-6">ตั้งค่า</h3>

      <div className="space-y-4">
        <div>
          <label className="text-white/60 text-sm mb-2">ธีม</label>
          <div className="flex space-x-2">
            <button
              onClick={() => setTheme("light")}
              className={`glassmorphism p-3 rounded ${
                theme === "light" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"
              } transition-colors`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`glassmorphism p-3 rounded ${
                theme === "dark" ? "bg-cyan-500 text-white" : "bg-white/20 text-white/60"
              } transition-colors`}
            >
              Dark
            </button>
          </div>
        </div>

        <div>
          <label className="text-white/60 text-sm mb-2">สถานะลิขสิทธิ์</label>
          <p className="text-white/60 text-sm">เวอร์ชัน: 1.0.0</p>
          <p className="text-white/60 text-sm">อัพเดทล่าสุด: วันที่ 3 พฤศจิกายน 2026</p>
        </div>

        <button
          onClick={toggleTheme}
          className="w-full glassmorphism p-3 rounded bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
        >
          รีสेटการตั้งค่าทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default Settings;