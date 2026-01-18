
import React from 'react';
import { UserMode, TabType } from './types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  mode: UserMode;
  onSwitchMode: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, mode, onSwitchMode }) => {
  const isEmployer = mode === UserMode.EMPLOYER;
  const activeColor = isEmployer ? 'text-purple-600' : 'text-blue-600';
  const bgColor = isEmployer ? 'bg-purple-600' : 'bg-blue-900';

  const tabs = isEmployer ? [
    { id: 'HOME', icon: 'fa-home', label: '首页' },
    { id: 'SCHOOL', icon: 'fa-graduation-cap', label: '学堂' },
    { id: 'MESSAGE', icon: 'fa-comment-dots', label: '消息' },
    { id: 'PROFILE', icon: 'fa-user', label: '我的' },
  ] : [
    { id: 'HOME', icon: 'fa-bolt', label: '接单' },
    { id: 'SCHOOL', icon: 'fa-chart-line', label: '提升' },
    { id: 'MESSAGE', icon: 'fa-comments', label: '联系' },
    { id: 'PROFILE', icon: 'fa-briefcase', label: '工作台' },
  ];

  return (
    <div className={`flex flex-col h-full w-full transition-mode relative ${isEmployer ? 'bg-slate-50' : 'bg-slate-100'}`}>
      <main className="flex-1 pb-24 overflow-y-auto no-scrollbar relative">
        {children}
      </main>

      {/* Mode Switcher Island - Changed fixed to absolute */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-max">
        <button 
          onClick={onSwitchMode}
          className={`${bgColor} text-white px-6 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-all active:scale-95 whitespace-nowrap`}
        >
          <span className="text-sm font-medium">当前为{isEmployer ? '委托人' : '服务者'}模式</span>
          <i className="fas fa-sync-alt text-xs"></i>
        </button>
      </div>

      {/* Tab Navigation - Changed fixed to absolute */}
      <nav className="absolute bottom-0 w-full glass border-t border-slate-200 flex justify-around items-center h-16 px-2 z-40">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex flex-col items-center justify-center w-full transition-colors ${
              activeTab === tab.id ? activeColor : 'text-slate-400'
            }`}
          >
            <i className={`fas ${tab.icon} text-xl mb-1`}></i>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
