
import React from 'react';
import { MOCK_LESSONS } from './constants';

export const SchoolView: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Icon Row */}
      <div className="flex justify-around py-4">
        {[
          { label: '新手必修', icon: 'fa-book-open', color: 'bg-orange-100 text-orange-500' },
          { label: '技能认证', icon: 'fa-certificate', color: 'bg-blue-100 text-blue-500' },
          { label: '线下实操', icon: 'fa-tools', color: 'bg-purple-100 text-purple-500' },
          { label: '师徒广场', icon: 'fa-users', color: 'bg-green-100 text-green-500' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center soft-shadow`}>
              <i className={`fas ${item.icon} text-xl`}></i>
            </div>
            <span className="text-[11px] font-medium text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Section: Micro-lessons */}
      <div>
        <div className="flex justify-between items-center mb-3 px-1">
          <h2 className="font-bold text-lg">技能微课</h2>
          <span className="text-xs text-slate-400">查看更多</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar py-2">
          {MOCK_LESSONS.map(lesson => (
            <div key={lesson.id} className="flex-shrink-0 w-64 bg-white rounded-2xl soft-shadow overflow-hidden border border-slate-50">
              <div className="relative h-36">
                <img src={lesson.cover} className="w-full h-full object-cover" alt={lesson.title} />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur">
                  {lesson.duration}
                </div>
                <div className="absolute top-2 left-2 bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  {lesson.type}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm line-clamp-1">{lesson.title}</h3>
                <p className="text-[10px] text-slate-400 mt-1">{lesson.views} 次播放</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Mentors */}
      <div>
        <div className="flex justify-between items-center mb-3 px-1">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-lg">金牌导师带教</h2>
            <span className="text-[10px] text-slate-400">跟师姐学手艺</span>
          </div>
        </div>
        <div className="space-y-3">
          <div  className="bg-white p-4 rounded-2xl soft-shadow flex items-center space-x-4 border border-slate-50">
              <img src={`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDk2lrblgT_PwmqfYXAAFP_0dNtin11gACtwtrGy1wWUfJFEiM0wtnmgEAAwIAA3cAAzgE`} className="w-12 h-12 rounded-full" alt="mentor" />
              <div className="flex-1">
                <h4 className="font-bold text-sm">王晓芳 | 10年电工经验</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">带徒人数: 42 | 擅长领域: 家装电路, 强弱电</p>
              </div>
              <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-full active:scale-95">拜师</button>
          </div>
          <div  className="bg-white p-4 rounded-2xl soft-shadow flex items-center space-x-4 border border-slate-50">
              <img src={`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDlWlrcgF_bE81-ZIkmy9bcd3qUMSsAAK4C2sbLXBZRyPV6Gy4HiorAQADAgADdwADOAQ`} className="w-12 h-12 rounded-full" alt="mentor" />
              <div className="flex-1">
                <h4 className="font-bold text-sm">陈秀琴 | 9年家装水电老师傅</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">带徒人数: 39 | 擅长领域: 全屋水电布局，智能家居布线</p>
              </div>
              <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-full active:scale-95">拜师</button>
          </div>
          <div  className="bg-white p-4 rounded-2xl soft-shadow flex items-center space-x-4 border border-slate-50">
              <img src={`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDmmlrcotJ0vHgrt9lSIxtVmsBHJWuAAK9C2sbLXBZR3J-RzhXeBD_AQADAgADdwADOAQ`} className="w-12 h-12 rounded-full" alt="mentor" />
              <div className="flex-1">
                <h4 className="font-bold text-sm">周慧敏 | 12年国风摄影师</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">带徒人数: 32 | 擅长领域: 新中式国风写真，表情引导</p>
              </div>
              <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-full active:scale-95">拜师</button>
          </div>
        </div>
      </div>

      {/* Section: Q&A */}
      <div>
        <h2 className="font-bold text-lg mb-3 px-1">互助问答</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { q: '如何防止上门维修时价格翻倍？', a: '可以要求在平台下单前录入明细...', bounty: 5, expert: true },
            { q: '女子搬家有推荐的工具包吗？', a: '推荐配备阻门器和便携扳手...', bounty: 2, expert: false },
          ].map((qa, idx) => (
            <div key={idx} className="bg-white p-3 rounded-2xl soft-shadow border border-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                   <span className="text-orange-500 font-bold text-[10px]">💰 悬赏{qa.bounty}元</span>
                </div>
                <p className="text-xs font-bold leading-relaxed">{qa.q}</p>
              </div>
              <div className="mt-3 flex items-center space-x-1">
                {qa.expert && <span className="text-[9px] bg-purple-100 text-purple-600 px-1 rounded">认证师</span>}
                <span className="text-[9px] text-slate-400">3条回答</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
