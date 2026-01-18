<div align="center">
  <img src="https://github.com/tinkk2020/HerHelp/blob/main/herhelp_logo.png" alt="HerHelp Logo" width="120" />
  <h1>她帮 HerHelp</h1>
  <h3>For Her, By Her. 给生活多一种“她”解法。</h3>

  <p>
    <a href="#-项目背景">项目背景</a> •
    <a href="#-核心功能">核心功能</a> •
    <a href="#-技术栈">技术栈</a> •
    <a href="#-项目结构">代码结构</a> •
    <a href="#-快速开始">快速开始</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Status-Hackathon_Demo-purple?style=flat-square" alt="Status" />
    <img src="https://img.shields.io/badge/Stack-React_18-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  </p>
</div>

---

## 📖 项目背景 (Background)

**HerHelp (她帮)** 是一款专为女性设计的互助服务平台，隶属于 **HerSpace** 女性数字生活生态。

在当今社会，独居女性、单亲妈妈等群体在寻求上门服务（如维修、搬家、法律援助）时，面临着**安全感缺失**与**隐私顾虑**的痛点。同时，大量拥有专业技能的蓝领/白领女性缺乏一个安全、公平的接单与成长环境。

我们致力于：
1.  **重构安全感：** 为女性用户提供 100% 实名认证的女性专业服务者。
2.  **打破刻板印象：** 通过“技能学堂”赋能女性，孵化更多女电工、女装机师等技术人才。
3.  **双向赋能：** 让每一次求助都安心，让每一次服务都有价值。

## ✨ 核心功能 (Key Features)

### 1. 🛡️ 安心地图 & 极速支援 (Client Side)
- **LBS 可视化：** 实时展示附近的女性服务者，告别盲盒式派单。
- **夜间守护：** 智能感知深夜场景，自动触发“极速救援”安全预警。
- **透明档案：** 技能认证、公安备案、服务评分一览无余。

### 2. 🔄 双向身份流转 (Dual Mode)
- **一键切换：** 创新的“浮窗”交互，瞬间在 **委托人 (紫色 UI)** 与 **守护者 (蓝色 UI)** 之间切换。
- **角色定义：** 你既是需要帮助的生活家，也是通过技能获得收入的职业人。

### 3. 🎓 女性技能学堂 (HerHelp Academy)
- **职业孵化：** 提供从水电维修到编程开发的微课体系。
- **师徒体系：** 经验丰富的女性导师在线带教，帮助小白实现技能变现。

### 4. 🔐 严密风控体系 (Trust System)
- **实名+性别双重校验：** 接入公安系统 API 与人脸识别。
- **互助保险：** 每一单服务均包含定制化的女性安全险。

## 📸 界面预览 (Screenshots)

| 委托人模式 (Client) | 守护者模式 (Provider) | 技能学堂 (Academy) |
| :---: | :---: | :---: |
| <img src="https://github.com/tinkk2020/HerHelp/blob/main/sy.png" width="200" alt="委托人首页" /> | <img src="https://github.com/tinkk2020/HerHelp/blob/main/fw.png" width="200" alt="守护者首页" /> | <img src="https://github.com/tinkk2020/HerHelp/blob/main/xt.png" width="200" alt="学堂" /> |

*(注：请将您的UI截图放入 docs 文件夹并替换上方链接)*

## 🛠 技术栈与架构 (Tech Stack & Architecture)

本项目目前处于 **Hackathon Demo** 阶段，主要侧重于前端交互逻辑与产品概念验证。

### 🚧 当前实现 (Current Demo Implementation)
*   **Frontend Framework:** React 18 + TypeScript + Vite
*   **UI/Styling:** CSS Modules / Styled Components
*   **Routing:** React Router v6
*   **State Management:** React Context API (Local State)
*   **Data Source:** Mock Data (`metadata.json`, `constants.tsx`)
*   **Maps:** Static Rendering / Mock LBS Coordinates

### 🏗️ 商业化目标架构 (Target Commercial Architecture)
*(To be implemented for production)*

| Layer | Technology | Status |
| :--- | :--- | :--- |
| **Backend** | **NestJS** (Node.js) + **TypeScript** | ⏳ Planned |
| **Database** | **PostgreSQL** (Core Data) + **Redis** (Session & GeoHash) | ⏳ Planned |
| **Security** | **Aliyun API** (Real-name Auth) + **Face++** (Liveness Detection) | ⏳ Planned |
| **Real-time** | **Socket.io** (Chat & Order Status) | ⏳ Planned |
| **Infra** | Docker + K8s / Serverless Deployment | ⏳ Planned |
## 🗺️ 开发计划 (Development Roadmap)

我们致力于将 **HerHelp** 从一个概念 Demo 打造成真正的商业产品。

### Phase 1: 概念验证与交互演示 (Current Status)
- [x] **UI/UX 实现**: 完成委托人(紫)与守护者(蓝)的双色调界面开发。
- [x] **核心交互**: 实现底部浮窗的“一键身份切换”逻辑。
- [x] **前端业务流**: 跑通服务筛选、列表展示、技能学堂的静态页面。
- [x] **数据模拟**: 完成基于 Mock 数据的用户展示与订单流程。

### Phase 2: MVP 商业化落地 (Next Step: 1-3 Months)
- [ ] **后端服务构建**: 搭建 NestJS 后端，设计 User, Order, Course 数据库表结构。
- [ ] **LBS 实时匹配**: 接入 Redis Geo 实现基于地理位置的毫秒级服务者检索。
- [ ] **信任体系接入**: 
    - [ ] 接入公安实名认证 API。
    - [ ] 集成人脸识别 SDK (动态活体检测)。
- [ ] **实时通讯**: 实现委托人与守护者的 IM 聊天功能 (Socket.io)。

### Phase 3: 安全壁垒与生态扩展 (3-6 Months)
- [ ] **安全护航系统**:
    - [ ] 订单行程录音/一键报警功能。
    - [ ] 对接保险 API，自动生成“女性安全险”电子保单。
- [ ] **智能算法**: 基于用户评价与技能标签的智能派单推荐系统。
- [ ] **WebRTC 远程指导**: 在“学堂”中增加视频连线，专家远程指导维修。
- [ ] **B端管理后台**: 为社区、物业提供 SaaS 管理面板。
## 📂 项目结构 (Project Structure)

基于 `src` 目录的文件结构说明：

```bash
src/
├── components/          # 核心业务组件
│   ├── HomeView.tsx     # 委托人首页 (地图、服务分类、附近服务者)
│   ├── Layout.tsx       # 全局布局 (底部导航栏、浮窗切换逻辑)
│   ├── MessageView.tsx  # 消息中心 (订单通知、官方消息)
│   ├── ProfileView.tsx  # 个人中心 (认证徽章、设置)
│   └── SchoolView.tsx   # 技能学堂 (微课列表、导师展示)
├── constants.tsx        # 全局常量 (服务类型定义、模拟数据)
├── types.ts             # TypeScript 类型定义 (User, Order, Course)
├── App.tsx              # 应用入口与路由配置
├── index.tsx            # 渲染入口
└── metadata.json        # 静态配置数据
