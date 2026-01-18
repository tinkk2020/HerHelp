
import React from 'react';
import { UserMode } from './types';

export const ProfileView: React.FC<{ mode: UserMode }> = ({ mode }) => {
  const isEmployer = mode === UserMode.EMPLOYER;

  return (
    <div className="p-4 space-y-6">
      {/* Profile Card */}
      <div className={`rounded-2xl p-6 text-white soft-shadow relative overflow-hidden transition-colors duration-500 ${
        isEmployer ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-800 to-slate-900'
      }`}>
        <div className="relative z-10 flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-white/50 overflow-hidden aura-breathe">
            <img src="https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDpmlrgUtijRLHLVX-4sYapMxN-9b4AALPC2sbLXBZRwS4WSS4vTOZAQADAgADdwADOAQ" alt="avatar" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">李思雅</h2>
              <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded backdrop-blur">
                {isEmployer ? '金牌雇主' : '认证服务者'}
              </span>
            </div>
            <p className="text-xs opacity-80 mt-1">ID: 8820 4492</p>
          </div>
        </div>

        {/* Badges */}
        <div className="relative z-10 flex space-x-2 mb-6">
          {['实名', '女性', '技能'].map(label => (
            <div key={label} className="bg-white/10 px-2 py-1 rounded flex items-center space-x-1 border border-white/20 backdrop-blur">
              <i className="fas fa-certificate text-[10px] text-yellow-300"></i>
              <span className="text-[10px]">{label}认证</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
          <div>
            <p className="text-xl font-bold">¥ 120</p>
            <p className="text-[10px] opacity-70">余额</p>
          </div>
          <div>
            <p className="text-xl font-bold">12</p>
            <p className="text-[10px] opacity-70">优惠券</p>
          </div>
          <div>
            <p className="text-xl font-bold">2.4k</p>
            <p className="text-[10px] opacity-70">积分</p>
          </div>
        </div>
      </div>

      {/* Grid Menu */}
      <div className="bg-white rounded-2xl soft-shadow border border-slate-50 p-2 grid grid-cols-4 gap-y-6 text-center py-6">
        {[
          { label: '我的订单', icon: 'fa-file-invoice' },
          { label: '地址管理', icon: 'fa-map-pin' },
          { label: '发票中心', icon: 'fa-receipt' },
          { label: '我的保险', icon: 'fa-shield-heart' },
          { label: '我的收藏', icon: 'fa-star' },
          { label: '帮助中心', icon: 'fa-question-circle' },
          { label: '系统设置', icon: 'fa-cog' },
          { label: '关于我们', icon: 'fa-info-circle' },
        ].map(item => (
          <div key={item.label} className="flex flex-col items-center space-y-2">
            <i className={`fas ${item.icon} text-slate-400 text-xl`}></i>
            <span className="text-[11px] text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Ad Card */}
      <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <i className="fas fa-gift text-orange-500 text-xl"></i>
          <div>
            <h4 className="font-bold text-sm text-orange-800">邀请好友 赚 50 元</h4>
            <p className="text-[10px] text-orange-600">每成功邀请一人奖励佣金</p>
          </div>
        </div>
        <i className="fas fa-chevron-right text-orange-300"></i>
      </div>

<div className="mt-6">
  <h3 className="text-sm font-semibold text-slate-700 mb-3 px-4">更多服务</h3>
  <div className="bg-white rounded-2xl soft-shadow border border-slate-50 overflow-hidden">
    {[
      { label: '联系客服', icon: 'fa-headset' },
      { label: '社区公约', icon: 'fa-headphones' },
      { label: '长辈关怀模式', icon: 'fa-shield' },
      { label: '账号与安全', icon: 'fa-gear' },
    ].map(item => (
      <div 
        key={item.label} 
        className="flex items-center justify-between px-4 py-3 border-b border-slate-50 last:border-b-0"
      >
        <div className="flex items-center space-x-3">
          {/* 核心修改：将图标颜色改为紫色系 */}
          <i className={`fas ${item.icon} text-purple-500 text-lg`}></i>
          <span className="text-sm text-slate-700">{item.label}</span>
        </div>
        {/* 右侧箭头也适配浅紫色，保持视觉协调 */}
        <i className="fas fa-chevron-right text-purple-300 text-xs"></i>
      </div>
    ))}
  </div>

</div>
    </div>
    
  );
};
