
import React, { useState, useEffect } from 'react';
import { UserMode, TabType } from './types';
import { Layout } from './components/Layout';
import { HomeView } from './components/HomeView';
import { SchoolView } from './components/SchoolView';
import { MessageView } from './components/MessageView';
import { ProfileView } from './components/ProfileView';

const App: React.FC = () => {
  const [mode, setMode] = useState<UserMode>(UserMode.EMPLOYER);
  const [activeTab, setActiveTab] = useState<TabType>('HOME');
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwitchMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(prev => prev === UserMode.EMPLOYER ? UserMode.PROVIDER : UserMode.EMPLOYER);
      setIsTransitioning(false);
    }, 600);
  };

  const renderContent = () => {
    if (isEmergencyMode) {
      return (
        <div className="absolute inset-0 bg-white z-[60] p-6 flex flex-col items-center justify-center space-y-12">
          <div className="relative">
            <div className="w-48 h-48 bg-purple-100 rounded-full flex items-center justify-center aura-breathe">
              <i className="fas fa-bolt text-purple-600 text-6xl"></i>
            </div>
            <div className="absolute inset-0 aura-breathe border-4 border-purple-500 rounded-full scale-110"></div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">正在为您匹配极速救援</h1>
            <p className="text-slate-500">正在呼叫附近 3km 内的在线师傅...</p>
          </div>
          <button 
            onClick={() => setIsEmergencyMode(false)}
            className="bg-slate-100 text-slate-500 px-8 py-3 rounded-full font-bold active:scale-95"
          >
            取消呼叫
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case 'HOME': return <HomeView mode={mode} onEmergency={() => setIsEmergencyMode(true)} />;
      case 'SCHOOL': return <SchoolView />;
      case 'MESSAGE': return <MessageView />;
      case 'PROFILE': return <ProfileView mode={mode} />;
      default: return <HomeView mode={mode} onEmergency={() => setIsEmergencyMode(true)} />;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen p-4 sm:p-8">
      {/* 手机物理外壳 */}
      <div className="relative w-[375px] h-[812px] bg-slate-900 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-slate-800 flex flex-col items-center">
        
        {/* 灵动岛 (Dynamic Island) */}
        <div className="absolute top-6 w-32 h-7 bg-black rounded-full z-[100] flex items-center justify-end px-3">
          <div className="w-2 h-2 rounded-full bg-slate-800 mr-2 shadow-inner"></div>
        </div>

        {/* 侧边按键细节 */}
        <div className="phone-btn h-12 left-[-11px] top-32"></div>
        <div className="phone-btn h-12 left-[-11px] top-48"></div>
        <div className="phone-btn h-20 right-[-11px] top-40"></div>

        {/* 内部屏幕容器 */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-inner">
          
          {/* 状态栏模拟 */}
          <div className="h-8 flex justify-between items-center px-8 text-[11px] font-bold text-slate-900 absolute top-0 w-full z-[80]">
            <span>9:41</span>
            <div className="flex space-x-1.5 items-center">
              <i className="fas fa-signal"></i>
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-full text-sm"></i>
            </div>
          </div>

          {/* 应用内容 */}
          <div className="w-full h-full pt-8">
            <Layout 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              mode={mode} 
              onSwitchMode={handleSwitchMode}
            >
              {renderContent()}
            </Layout>

            {/* 底部 Home Bar 指示条 */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-[100]"></div>
          </div>

          {/* 身份切换动画遮罩 */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-white z-[100] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
               <div className="w-24 h-24 bg-purple-500 rounded-3xl soft-shadow flex items-center justify-center animate-bounce mb-4">
                 <i className="fas fa-female text-white text-4xl"></i>
               </div>
               <p className="text-slate-600 font-bold text-lg">切换身份中...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
