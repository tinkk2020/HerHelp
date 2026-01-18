
import React from 'react';
import { ServiceItem, Provider } from './types';

export const KING_KONG_SERVICES: ServiceItem[] = [
  { id: '1', name: '水电维修', icon: 'fa-tools' },
  { id: '2', name: '家电清洗', icon: 'fa-sink' },
  { id: '3', name: '居家安装', icon: 'fa-hammer' },
  { id: '4', name: '女子搬家', icon: 'fa-truck-loading' },
  { id: '5', name: '陪诊陪护', icon: 'fa-user-nurse' },
  { id: '6', name: '法律咨询', icon: 'fa-balance-scale' },
  { id: '7', name: '心理疏导', icon: 'fa-heartbeat' },
  { id: '8', name: '数码维修', icon: 'fa-laptop-code' },
  { id: '9', name: '上门喂宠', icon: 'fa-paw' },
  { id: '10', name: '全部分类', icon: 'fa-th-large' },
];

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 'p1',
    name: '林姐',
    avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDkWlrbTTmx_CIcbyTciOcGpsJmDfMAAK1C2sbLXBZR07dkWCHmD0eAQADAgADdwADOAQ',
    rating: 5.0,
    orders: 302,
    tags: ['持证电工', '公安备案', '自带鞋套'],
    distance: '1.2km',
    time: '15分钟'
  },
  {
    id: 'p2',
    name: '陈老师',
    avatar: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDkmlrbaT9daX-GA-Hbo7EkvMtgxA7AAK2C2sbLXBZR-xiyPvLcs7gAQADAgADdwADOAQ',
    rating: 4.9,
    orders: 156,
    tags: ['心理咨询', '温柔耐心', '认证医师'],
    distance: '2.5km',
    time: '30分钟'
  }
];

export const MOCK_LESSONS = [
  { id: 'l1', title: '独居女性如何排查摄像头？', duration: '5:20', views: '2.3w', type: '安全', cover: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDj2lrbFDIUxkWO2G4Vd6_TvSWKehTAAKzC2sbLXBZRxcPUobrnyYrAQADAgADdwADOAQ' },
  { id: 'l2', title: '零基础更换水龙头垫片', duration: '8:45', views: '1.1w', type: '技能', cover: 'https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIDkGlrbJz5UT9TjyurQOOVz6Hg6x6oAAK0C2sbLXBZR2jOWSVsAZ2xAQADAgADdwADOAQ' },
  { id: 'l3', title: '简易电路跳闸排查', duration: '6:15', views: '8.5k', type: '技能', cover: 'https://picsum.photos/seed/l3/400/225' },
];
