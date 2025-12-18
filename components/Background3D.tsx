
import React, { useMemo } from 'react';

const Background3D: React.FC = () => {
  // Tạo dữ liệu cho tuyết cố định để tránh re-render giật lag
  const snowData = useMemo(() => Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 7,
    delay: Math.random() * -20,
    swayDuration: Math.random() * 4 + 3,
    opacity: Math.random() * 0.7 + 0.3,
    blur: Math.random() * 2,
    isGold: Math.random() > 0.9
  })), []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Background Glows (Aurora) */}
      <div className="absolute inset-0 aurora-bg opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-amber-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Grid Floor 3D perspective */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)] [mask-image:linear-gradient(to_top,black,transparent)] opacity-40"></div>

      {/* Floating 3D Printed Ornaments (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-500/20 rounded-xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-white/10 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-emerald-500/20 rotate-45 animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

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
