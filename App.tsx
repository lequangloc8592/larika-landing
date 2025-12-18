
import React from 'react';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  // Liên hệ thực tế của bạn
  const zaloNumber1 = "0707922049"; 
  const zaloNumber2 = "0868609729";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-black text-white isolate">
      <Background3D />

      {/* Floating Zalo Contacts - Siêu gọn trên mobile/tablet */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 lg:gap-4">
        {[
          { num: zaloNumber1, id: 'Z1', label: 'Liên hệ', sub: 'Zalo 1' },
          { num: zaloNumber2, id: 'Z2', label: 'Hỗ trợ', sub: 'Zalo 2' }
        ].map((item, idx) => (
          <a 
            key={idx}
            href={`https://zalo.me/${item.num}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center bg-zinc-950/80 border border-amber-500/30 p-1.5 lg:p-2 pr-1.5 lg:pr-5 rounded-r-full backdrop-blur-xl hover:bg-amber-500 transition-all duration-500 hover:translate-x-2 shadow-[5px_0_30px_rgba(245,158,11,0.1)]"
          >
            <div className="w-8 h-8 lg:w-11 lg:h-11 bg-amber-500 rounded-full flex items-center justify-center text-black font-black group-hover:bg-black group-hover:text-amber-500 transition-colors shadow-inner text-[10px] lg:text-base">
              {item.id}
            </div>
            <div className="hidden lg:flex flex-col ml-3">
              <span className="text-[10px] font-bold tracking-widest text-amber-500/60 group-hover:text-black/60 uppercase leading-none mb-1">{item.label}</span>
              <span className="text-xs font-black tracking-widest text-amber-500 group-hover:text-black uppercase">{item.sub}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Header / Logo */}
      <nav className="absolute top-0 left-0 right-0 p-8 flex justify-center z-20">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-amber-500 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-700 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
               {/* Màu xanh ngọc bg-cyan-400 phù hợp với theme tuyết/Noel và công nghệ */}
               <div className="w-5 h-5 md:w-6 md:h-6 bg-cyan-400 rounded-sm shadow-[0_0_15px_#22d3ee]"></div>
            </div>
            <div className="absolute inset-0 border border-cyan-500/50 rounded-lg animate-ping opacity-20"></div>
          </div>
          <span className="text-3xl md:text-4xl font-space font-bold tracking-tighter text-white">
            LARIKA<span className="text-amber-500">.</span>COM
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        <div className="inline-block px-5 py-2 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md animate-bounce shadow-[0_0_15px_rgba(34,211,238,0.2)]">
           <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-cyan-300 uppercase">
             Merry Christmas & Happy New Year
           </span>
        </div>

        <h1 className="text-5xl md:text-9xl font-space font-extrabold tracking-tighter mb-8 leading-[1.1] md:leading-[0.9] text-glow-gold">
          THÍCH LÀ IN <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-white to-amber-500">
            NHÌN LÀ MÊ
          </span>
        </h1>

        <p className="text-base md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium italic px-4">
          Nơi những ý tưởng "điên rồ" nhất trở thành hiện thực qua từng lớp in. Larika mang đến hơi thở mới cho cộng đồng sáng tạo với công nghệ in 3D hiện đại nhất.
        </p>

        {/* Coming Soon Status */}
        <div className="flex flex-col items-center gap-6">
          <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center group">
            <span className="text-amber-500 font-space text-4xl md:text-5xl font-bold tracking-widest mb-2 group-hover:scale-110 transition-transform duration-500">2025</span>
            <span className="text-[10px] md:text-xs font-black text-white/40 tracking-[0.5em] uppercase">Vận hành chính thức</span>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
            <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">Hệ thống đang được hoàn thiện</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 w-full px-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] gap-4 tracking-[0.2em] font-bold">
        <p className="uppercase">© 2025 LARIKA.COM | PRECISION & PASSION</p>
        <div className="flex gap-8 uppercase">
          <a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">TikTok</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
