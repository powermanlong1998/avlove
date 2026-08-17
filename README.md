# AVLove - 女优资料库

基于 Astro 7 构建的静态女优搜索网站，支持多地区筛选、标签过滤、全文搜索、CLI 查询和 AI Agent 集成。

## ✨ 功能

- 🔍 **Fuse.js 实时搜索** - 支持中/日/英文名称模糊搜索
- 🏷️ **彩色标签系统** - 带数量统计的热门标签云
- 🌍 **多地区分类** - 日本 / 欧美 / 韩国 / 国产 四大地区切换
- 👤 **头像卡片** - 固定尺寸头像 + 日文名（加粗）+ 中文名 + 彩色标签
- 🤖 **AI Agent API** - RESTful JSON API 供 AI Agent 调用
- 💻 **CLI 查询** - 命令行快速查询女优数据
- 🐳 **Docker + Caddy** - 一键容器化部署

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Astro 7 |
| 语言 | JavaScript (ESM) |
| 搜索引擎 | Fuse.js 7 |
| Web 服务器 | Caddy |
| 容器化 | Docker |
| 内容格式 | Markdown (MDX) |

## 📁 项目结构

```
avlove/
├── src/
│   ├── content/
│   │   └── actresses/       # 女优数据 (Markdown)
│   ├── layouts/
│   │   └── BaseLayout.astro # 基础布局
│   ├── pages/
│   │   ├── index.astro      # 首页（搜索 + 标签）
│   │   ├── actresses/
│   │   │   └── index.astro  # 女优列表页
│   │   └── api/
│   │       ├── search.json.ts    # 搜索索引
│   │       └── actresses.json.ts # AI Agent API
│   ├── utils/
│   │   └── tags.ts          # 标签颜色映射
│   └── content.config.ts    # 内容集合配置
├── scripts/
│   └── cli.mjs              # CLI 查询工具
├── Dockerfile
├── Caddyfile
└── astro.config.mjs
```

## 🚀 快速开始

### 开发

```bash
npm install
npm run dev
```

访问 http://localhost:4321

### 构建

```bash
npm run build
npm run preview
```

### CLI 查询

```bash
# 按关键词搜索
npm run search 三上

# 按地区和标签筛选
npm run search -- --region 日本 --tag 巨乳

# 组合搜索
npm run search mia --region 欧美 --limit 5
```

### AI Agent API

```
GET /api/actresses.json?region=日本&tag=巨乳&q=三上&limit=10
```

响应格式：
```json
{
  "total": 5,
  "query": { "region": "日本", "tag": "巨乳", "q": "三上", "limit": 10 },
  "results": [
    {
      "name_jp": "三上悠亜",
      "name_cn": "三上悠亚",
      "region": "日本",
      "avatar": "...",
      "tags": ["巨乳", "萝莉", "S级"],
      "films": 92
    }
  ]
}
```

## 🐳 Docker 部署

```bash
# 构建镜像
docker build -t avlove .

# 运行容器
docker run -d -p 80:80 avlove
```

或使用 Caddy 本地配置：

```bash
docker run -d -p 80:80 \
  -v $(pwd)/Caddyfile:/etc/caddy/Caddyfile \
  -v $(pwd)/dist:/usr/share/caddy \
  caddy:2-alpine
```

## 📝 添加新女优

在 `src/content/actresses/` 下创建 `.md` 文件：

```markdown
---
name_jp: 四天王うり
name_cn: 四天王尤里
region: 日本
avatar: https://...
tags: ["巨乳", "S级", "新人"]
films: 25
---

## 个人简介
...
```

## 🌐 支持的地区

- `日本` - 日本女优
- `欧美` - 欧美女优
- `韩国` - 韩国女优
- `国产` - 国产女优