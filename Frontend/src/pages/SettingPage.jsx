import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";

const THEMES = ["light", "dark", "retro", "green", "blue", "dracula", "pastel", "one", "sunset", "midnight", "aqua", "peach"];

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

function getColors(theme) {
  const themeMap = {
    light: {
      baseWrapper: "bg-white",
      chatBg: "bg-white",
      baseText: "text-gray-900",
      border: "border-gray-300",
      primary: "bg-blue-500",
      primaryText: "text-white",
      secondary: "bg-gray-100",
      accent: "bg-yellow-400",
      neutral: "bg-gray-300",
      buttonHover: "hover:bg-blue-600",
    },
    dark: {
      baseWrapper: "bg-[#111]",
      chatBg: "bg-[#1a1a1a]",
      baseText: "text-white",
      border: "border-[#333]",
      primary: "bg-[#111]",
      primaryText: "text-white",
      secondary: "bg-[#222]",
      accent: "bg-[#333]",
      neutral: "bg-[#444]",
      buttonHover: "hover:bg-[#222]",
    },
    retro: {
      baseWrapper: "bg-yellow-50",
      chatBg: "bg-yellow-100",
      baseText: "text-gray-900",
      border: "border-yellow-300",
      primary: "bg-orange-400",
      primaryText: "text-white",
      secondary: "bg-teal-500",
      accent: "bg-yellow-300",
      neutral: "bg-lime-200",
      buttonHover: "hover:bg-orange-500",
    },
    blue: {
      baseWrapper: "bg-blue-50",
      chatBg: "bg-blue-100",
      baseText: "text-gray-900",
      border: "border-blue-200",
      primary: "bg-blue-600",
      primaryText: "text-white",
      secondary: "bg-blue-300",
      accent: "bg-blue-400",
      neutral: "bg-blue-100",
      buttonHover: "hover:bg-blue-700",
    },
    dracula: {
      baseWrapper: "bg-gray-900",
      chatBg: "bg-gray-800",
      baseText: "text-gray-100",
      border: "border-gray-700",
      primary: "bg-purple-700",
      primaryText: "text-white",
      secondary: "bg-pink-700",
      accent: "bg-green-400",
      neutral: "bg-gray-800",
      buttonHover: "hover:bg-purple-800",
    },
    pastel: {
      baseWrapper: "bg-pink-50",
      chatBg: "bg-pink-100",
      baseText: "text-gray-900",
      border: "border-pink-200",
      primary: "bg-pink-300",
      primaryText: "text-white",
      secondary: "bg-teal-200",
      accent: "bg-yellow-200",
      neutral: "bg-gray-100",
      buttonHover: "hover:bg-pink-400",
    },
    green: {
      baseWrapper: "bg-green-50",
      chatBg: "bg-green-100",
      baseText: "text-gray-900",
      border: "border-green-200",
      primary: "bg-green-600",
      primaryText: "text-white",
      secondary: "bg-green-300",
      accent: "bg-green-400",
      neutral: "bg-green-100",
      buttonHover: "hover:bg-green-700",
    },
    one: {
      baseWrapper: "bg-[#111827]",
      chatBg: "bg-[#1f2937]",
      baseText: "text-white",
      border: "border-[#374151]",
      primary: "bg-[#1f2937]",
      primaryText: "text-white",
      secondary: "bg-[#374151]",
      accent: "bg-[#4b5563]",
      neutral: "bg-[#6b7280]",
      buttonHover: "hover:bg-[#1f2937]",
    },
    sunset: {
      baseWrapper: "bg-gradient-to-br from-orange-200 to-pink-200",
      chatBg: "bg-orange-100",
      baseText: "text-gray-800",
      border: "border-orange-300",
      primary: "bg-orange-500",
      primaryText: "text-white",
      secondary: "bg-pink-400",
      accent: "bg-yellow-300",
      neutral: "bg-pink-200",
      buttonHover: "hover:bg-orange-600",
    },
    midnight: {
      baseWrapper: "bg-gradient-to-br from-blue-900 to-black",
      chatBg: "bg-[#0d1b2a]",
      baseText: "text-white",
      border: "border-blue-800",
      primary: "bg-[#1b263b]",
      primaryText: "text-white",
      secondary: "bg-[#415a77]",
      accent: "bg-[#778da9]",
      neutral: "bg-[#e0e1dd]",
      buttonHover: "hover:bg-[#0d1b2a]",
    },
    aqua: {
      baseWrapper: "bg-gradient-to-br from-cyan-100 to-blue-100",
      chatBg: "bg-cyan-50",
      baseText: "text-gray-900",
      border: "border-cyan-200",
      primary: "bg-cyan-400",
      primaryText: "text-white",
      secondary: "bg-teal-300",
      accent: "bg-blue-300",
      neutral: "bg-cyan-200",
      buttonHover: "hover:bg-cyan-500",
    },
    peach: {
      baseWrapper: "bg-gradient-to-br from-peachpuff to-pink-100",
      chatBg: "bg-[#ffe5b4]",
      baseText: "text-gray-800",
      border: "border-pink-200",
      primary: "bg-pink-300",
      primaryText: "text-white",
      secondary: "bg-orange-300",
      accent: "bg-yellow-300",
      neutral: "bg-pink-100",
      buttonHover: "hover:bg-pink-400",
    },
  };

  return themeMap[theme] || themeMap.light;
}

const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  const currentColors = getColors(theme);

  return (
    <div className={`min-h-screen ${currentColors.baseWrapper} ${currentColors.baseText} transition-colors duration-300`}>
      <div className="container mx-auto px-4 pt-20 max-w-4xl space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-1">Theme</h2>
          <p className="text-sm text-gray-600 mb-4">Choose a theme for your chat interface</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {THEMES.map((t) => {
              const btnColors = getColors(t);
              const isSelected = theme === t;
              return (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`group rounded-xl p-3 transition-colors flex flex-col items-center gap-2 border ${
                    isSelected ? `${btnColors.baseWrapper} ${btnColors.border}` : "hover:bg-gray-200 border-gray-200"
                  }`}
                >
                  <div className="relative h-10 w-full rounded-md overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 gap-0.5 p-1">
                      <div className={`rounded ${btnColors.primary}`}></div>
                      <div className={`rounded ${btnColors.secondary}`}></div>
                      <div className={`rounded ${btnColors.accent}`}></div>
                      <div className={`rounded ${btnColors.neutral}`}></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium truncate w-full text-center capitalize">{t}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Preview</h3>
          <div className={`rounded-xl border shadow-lg ${currentColors.border}`}>
            <div className={`px-4 py-3 border-b flex items-center gap-3 bg-white ${currentColors.border}`}>
              <div className={`w-9 h-9 rounded-full ${currentColors.primary} flex items-center justify-center ${currentColors.primaryText} font-bold`}>
                J
              </div>
              <div>
                <h4 className="text-sm font-medium text-black">John Doe</h4>
                <p className="text-xs text-gray-600">Online</p>
              </div>
            </div>

            <div className={`p-4 space-y-3 max-h-[220px] overflow-y-auto ${currentColors.chatBg}`}>
              {PREVIEW_MESSAGES.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 shadow transition-colors duration-300 ${
                      msg.isSent ? `${currentColors.primary} ${currentColors.primaryText}` : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-[10px] mt-1 text-right opacity-70">12:00 PM</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-white" style={{ borderColor: currentColors.border }}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="w-full h-10 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                  value="This is a preview"
                  readOnly
                />
                <button
                  className={`h-10 px-3 rounded-md transition-colors ${currentColors.primary} ${currentColors.primaryText} ${currentColors.buttonHover}`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
