
import React, { useState, useEffect } from 'react';
import { UserMode } from './types';
import { KING_KONG_SERVICES, MOCK_PROVIDERS } from './constants';

export const HomeView: React.FC<{ mode: UserMode; onEmergency: () => void }> = ({ mode, onEmergency }) => {
  const isEmployer = mode === UserMode.EMPLOYER;
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 6) setIsNight(true);
  }, []);

  if (!isEmployer) {
    return (
      <div className="p-4 space-y-4">
        <div className="bg-blue-900 text-white p-6 rounded-2xl soft-shadow space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="opacity-80 text-sm">今日预计收入</p>
              <h1 className="text-3xl font-bold">¥ 458.00</h1>
            </div>
            <div className="text-right">
              <p className="opacity-80 text-sm">今日接单</p>
              <h1 className="text-xl font-bold">5</h1>
            </div>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 w-3/4"></div>
          </div>
          <p className="text-xs">目标进度 75% | 距离下一等级还差 12 分</p>
        </div>

        <div className="flex items-center justify-between py-2">
          <h2 className="font-bold text-lg">附近派单</h2>
          <div className="flex space-x-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">地图模式</span>
            <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">筛选</span>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-4 rounded-2xl soft-shadow border border-slate-100">
              <div className="flex justify-between mb-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">女性客户</span>
                <span className="text-blue-600 font-bold">¥ 120</span>
              </div>
              <h3 className="font-bold mb-1">空调清洗 - 长宁区天山路...</h3>
              <p className="text-sm text-slate-500 mb-4">距离 1.8km | 约 10分钟到达</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium active:scale-95 transition-transform">立即抢单</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Sticky Header */}
      <header className="sticky top-0 glass z-30 px-4 pt-4 pb-2">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center space-x-1 text-purple-700">
            <i className="fas fa-map-marker-alt"></i>
            <span className="font-medium">上海</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
          <div className="flex-1 bg-slate-100 rounded-full flex items-center px-4 py-1.5 space-x-2 border border-slate-200">
            <i className="fas fa-search text-slate-400"></i>
            <span className="text-slate-400 text-sm">清洗油烟机</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full active:scale-90">
            <i className="fas fa-shield-alt text-xl"></i>
          </button>
        </div>
      </header>

      {/* Night mode alert */}
      {isNight && (
        <div className="mx-4 bg-slate-900 text-white p-3 rounded-xl mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-moon text-yellow-400"></i>
            <p className="text-xs">夜深了，紧急服务建议使用“极速救援”</p>
          </div>
          <i className="fas fa-times opacity-50"></i>
        </div>
      )}

      {/* King Kong Area */}
      <div className="px-4 grid grid-cols-5 gap-y-4 mb-6">
        {KING_KONG_SERVICES.map(item => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-2xl soft-shadow flex items-center justify-center mb-1 border border-slate-50">
              <i className={`fas ${item.icon} text-purple-500 text-lg`}></i>
            </div>
            <span className="text-[11px] text-slate-600">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="px-4 grid grid-cols-3 gap-3 h-52 mb-6">
        <div 
          onClick={onEmergency}
          className="col-span-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white relative overflow-hidden active:scale-[0.98] transition-transform cursor-pointer"
        >
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-xl font-bold">🚨 极速支援</h3>
            </div>
            <p className="text-xs opacity-90">断电、漏水、门锁故障</p>
            <div className="mt-8">
              <span className="bg-white/20 text-[10px] px-2 py-1 rounded-full border border-white/30">最近师傅 500m</span>
            </div>
          </div>
          {/* Dynamic Waves bg */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full aura-breathe"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-white rounded-full aura-breathe" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div className="space-y-3 flex flex-col">
          <div className="flex-1 bg-white rounded-2xl soft-shadow p-3 border border-slate-100 flex flex-col justify-between">
            <h4 className="font-bold text-sm">🙋‍♀️ 加入她帮</h4>
            <p className="text-[10px] text-slate-400">今日已有58位入驻</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl soft-shadow p-3 border border-slate-100 flex flex-col justify-between">
            <h4 className="font-bold text-sm">📦 严选好物</h4>
            <p className="text-[10px] text-slate-400">独居安全专区</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-purple-50 h-8 flex items-center overflow-hidden mb-6 border-y border-purple-100">
        <div className="marquee text-purple-600 text-[11px] font-medium">
          刚刚，徐汇区的李女士完成了‘空调清洗’订单。 &nbsp;&nbsp;&nbsp;&nbsp; 刚刚，静安区的王姐入驻了‘法律咨询’。
        </div>
      </div>

      {/* Service List */}
      <div className="px-4 pb-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold">附近的服务者</h2>
          <span className="text-xs text-slate-400">筛选 <i className="fas fa-sliders-h"></i></span>
        </div>
        
        <div className="space-y-4">
          {MOCK_PROVIDERS.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-2xl soft-shadow border border-slate-50 flex space-x-4">
              <div className="relative">
                <img src={p.avatar} className="w-14 h-14 rounded-full aura-breathe" alt={p.name} />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white scale-75">
                  <i className="fas fa-check text-[8px]"></i>
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between">
                  <span className="font-bold">{p.name} | ⭐ {p.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-slate-400">已接单 {p.orders}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">#{tag}</span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400">
                  距离 {p.distance} | 平均{p.time}上门
                </p>
              </div>
              <div className="flex items-center">
                <button className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium active:scale-95 transition-transform">预约</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
