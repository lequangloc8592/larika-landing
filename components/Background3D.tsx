
import React, { useMemo } from 'react';

const Background3D: React.FC = () => {
  // Tạo dữ liệu cho tuyết cố định để tránh re-render giật lag
  // Lưu ý: tăng nhẹ số lượng/kích thước để nhìn rõ trên màn hình sáng và tránh cảm giác "không chạy"
  const snowData = useMemo(() => Array.from({ length: 160 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 10 + 7,
    delay: Math.random() * -20,
    swayDuration: Math.random() * 4 + 3,
    opacity: Math.random() * 0.6 + 0.35,
    blur: Math.random() * 2,
    isGold: Math.random() > 0.9
  })), []);

  // Dây đèn Noel (twinkle lights) — dữ liệu cố định để tránh re-render
  const lightsData = useMemo(() => Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: (i * (100 / 28)) + (Math.random() * 2),
    size: Math.random() * 3 + 5,
    delay: Math.random() * 2,
    duration: Math.random() * 1.8 + 1.2,
    hue: Math.random() > 0.5 ? 'amber' : (Math.random() > 0.5 ? 'red' : 'emerald'),
    glow: Math.random() * 0.6 + 0.4,
  })), []);

  return (
    // Tránh z-index âm (một số trình duyệt có thể render/stacking khác khiến animation khó thấy)
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      {/* Background Glows (Aurora) */}
      <div className="absolute inset-0 aurora-bg opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-amber-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Dây đèn Noel (top string lights) */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none">
        <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10"></div>
        {lightsData.map((l) => (
          <span
            key={l.id}
            className={`christmas-light christmas-light--${l.hue}`}
            style={{
              left: `${l.left}%`,
              width: `${l.size}px`,
              height: `${l.size}px`,
              animationDelay: `${l.delay}s`,
              animationDuration: `${l.duration}s`,
              opacity: l.glow,
            }}
          />
        ))}
      </div>

      {/* Grid Floor 3D perspective */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)] [mask-image:linear-gradient(to_top,black,transparent)] opacity-40"></div>

      {/* (Ẩn) Khung trang trí 3D — bỏ để tránh hiện “ô vuông dư” trên nền */}

      {/* Hiệu ứng Tuyết rơi */}
      {snowData.map((snow) => (
        <div
          key={snow.id}
          className="snowflake-wrapper"
          style={{
            left: `${snow.left}%`,
            animation: `snowfall ${snow.duration}s linear infinite`,
            animationDelay: `${snow.delay}s`,
          }}
        >
          <div
            className={`snowflake-inner ${snow.isGold ? 'bg-amber-400 shadow-[0_0_10px_#f59e0b]' : 'bg-white'}`}
            style={{
              width: `${snow.size}px`,
              height: `${snow.size}px`,
              opacity: snow.opacity,
              filter: `blur(${snow.blur}px)`,
              animation: `snow-sway ${snow.swayDuration}s ease-in-out infinite`,
            }}
          />
        </div>
      ))}

      {/* Bottom festive light */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-amber-950/20 via-black/0 to-transparent"></div>
    </div>
  );
};

export default Background3D;
