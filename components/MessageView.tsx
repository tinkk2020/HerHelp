
import React from 'react';

export const MessageView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="p-4 space-y-4">
        {/* Order Capsules */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar">
          {['待支付(1)', '进行中(1)', '待评价', '售后'].map((label, idx) => (
            <div key={idx} className="flex-shrink-0 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 soft-shadow">
              {label}
            </div>
          ))}
        </div>

        {/* Dynamic Ongoing Card */}
        <div className="bg-purple-600 p-4 rounded-2xl text-white soft-shadow flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-sm">订单进行中: 空调清洗</h3>
            <p className="text-[10px] opacity-90">师傅还有 1.2km 到达，预计 5 分钟</p>
          </div>
          <div className="flex flex-col items-end">
            <button className="bg-white text-purple-600 text-[10px] font-bold px-3 py-1 rounded-full mb-1">查看位置</button>
            <span className="text-[9px] opacity-70">车牌: 沪A 8**2</span>
          </div>
        </div>

        {/* List */}
        <div className="space-y-1">
  {[
    { 
      name: '官方小秘书', 
      last: '您的安全保障金已到账', 
      time: '10:02', 
      type: 'system', 
      unread: 2 
      // 不添加 avatar 字段，保持原有图标样式
    },
    { 
      name: '订单助手', 
      last: '王姐已经接下了您的订单', 
      time: '09:15', 
      type: 'order', 
      unread: 0 
      // 不添加 avatar 字段，保持原有图标样式
    },
    { 
      name: '王姐 (空调清洗)', 
      last: '好的，我大概15分钟后到楼下', 
      time: '09:30', 
      type: 'chat', 
      unread: 1,
      avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDomlrfttgfXy5eI4q3n8DxP41kn3SAALKC2sbLXBZRyheZ59-AdcxAQADAgADdwADOAQ' // 王姐专属头像
    },
    { 
      name: '李青 (律师)', 
      last: '服务已结束', 
      time: '01-10', 
      type: 'chat', 
      unread: 0,
      avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDo2lrf_XMJ91rOb0p53CqIqYZYfnqAALLC2sbLXBZR9-vHb--bpGRAQADAgADdwADOAQ' // 李青专属头像
    },
    { 
      name: '张微 (收纳)', 
      last: '服务已结束', 
      time: '2025-12-27', 
      type: 'chat', 
      unread: 0,
      avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDpGlrgDusr2icDjjeTyyTKPBk9HvbAALMC2sbLXBZRyHdo2oO8fK-AQADAgADdwADOAQ' // 张微专属头像
    },
    { 
      name: '刘知夏 (摄影)', 
      last: '底片已发送至您邮箱', 
      time: '2025-12-01', 
      type: 'chat', 
      unread: 0,
      avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDpWlrgJXfHF-yLq7k0SMgEEqxj1dxAALNC2sbLXBZR9BpEK1_ia6jAQADAgADdwADOAQ' // 刘知夏专属头像
    },
  ].map((chat, idx) => (
    <div key={idx} className="flex items-center space-x-4 p-3 bg-white rounded-2xl soft-shadow border border-slate-50 mb-3 active:bg-slate-50 cursor-pointer">
      <div className="relative">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          chat.type === 'system' ? 'bg-purple-100 text-purple-600' : 
          chat.type === 'order' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100'
        }`}>
          {chat.type === 'system' ? (
            <i className="fas fa-bullhorn"></i>
          ) : chat.type === 'order' ? (
            <i className="fas fa-clipboard-list"></i>
          ) : (
            // 仅对 chat 类型使用固定头像，保留 system/order 类型的原有图标
            <img 
              src={chat.avatar} 
              className="w-full h-full rounded-full object-cover"
              alt={`${chat.name}的头像`} 
            />
          )}
        </div>
        {chat.unread > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-2 border-white">
            {chat.unread}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-sm">{chat.name}</span>
          <span className="text-[10px] text-slate-400">{chat.time}</span>
        </div>
        <p className="text-xs text-slate-500 truncate">{chat.last}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
