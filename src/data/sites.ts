// 网站链接数据：9 种类型，每种 2 个示例网站（共 18 个），按类型分组
// 【安全说明】account / password 字段仅用于演示，全部为占位值。
// 若要录入自己的真实账号，可直接编辑本文件；注意不要把该文件推送到公开仓库。

export type SiteType = '论坛' | '漫画' | '游戏' | '图片' | 'VR' | '直播' | '资源' | '复古' | '影视';

export interface SiteLink {
  slug: string;            // 详情页路由路径，全局唯一（字母数字减号下划线）
  name: string;
  url: string;             // 目前地址（首页入口）
  publishUrl: string;      // 发布页（发帖 / 发布内容的地址）
  loginUrl: string;        // 登录页
  account: string;         // 登录账户（演示占位值）
  password: string;        // 登录密码（演示占位值）
  icon: string;            // emoji 图形
  color: string;           // 图标方块配色：red/pink/orange/yellow/green/teal/blue/purple/brown
  type: SiteType;          // 网站类型（用于卡片和图例）
  description?: string;
}

export interface SiteTypeGroup {
  type: SiteType;
  sites: SiteLink[];
}

// 9 种类型对应的配色
export const TYPE_COLORS: Record<SiteType, string> = {
  '论坛': 'blue',
  '漫画': 'pink',
  '游戏': 'purple',
  '图片': 'teal',
  'VR':   'brown',
  '直播': 'red',
  '资源': 'orange',
  '复古': 'yellow',
  '影视': 'green',
};

// 按类型分组（每组 2 个示例），用于主页按类型分隔展示
export const siteGroupsByType: SiteTypeGroup[] = [
  {
    type: '论坛',
    sites: [
      {
        slug: '2048论坛',
        name: '2048论坛',
        type: '论坛',
        icon: '🟠',
        color: 'orange',
        url: 'https://8jjl.cid3r7.com/thread.php?fid=43',
        publishUrl: 'https://fby.hfz300.com/',
        loginUrl: 'https://8jjl.cid3r7.com/thread.php?fid=43',
        account: 'l13099450291',
        password: 'QAZwsx1998520',
        description: '115资源获取论坛',
      },
      {
        slug: 'javbus论坛',
        name: 'javbus论坛',
        type: '论坛',
        icon: '💡',
        color: 'blue',
        url: 'https://www.javbus.com/forum/forum.php?mod=forumdisplay&fid=2&filter=author&orderby=dateline',
        publishUrl: 'https://www.javbus.com',
        loginUrl: 'https://www.javbus.com',
        account: 'test',
        password: 'test',
        description: 'javbus资源论坛',
      },
    ],
  },
  {
    type: '漫画',
    sites: [
      {
        slug: 'comic-webtoon',
        name: 'Webtoon',
        type: '漫画',
        icon: '🖼️',
        color: 'pink',
        url: 'https://comic.naver.com/',
        publishUrl: 'https://comic.naver.com/genre/bestChallenge.nhn',
        loginUrl: 'https://nid.naver.com/nidlogin.login',
        account: 'demo_comic_user_1',
        password: 'ComicDemo2024',
        description: '韩国知名条漫平台，包含海量连载漫画与挑战漫画板块。',
      },
      {
        slug: 'comic-kuaikan',
        name: '快看漫画',
        type: '漫画',
        icon: '📕',
        color: 'pink',
        url: 'https://www.kuaikanmanhua.com/',
        publishUrl: 'https://www.kuaikanmanhua.com/submit',
        loginUrl: 'https://www.kuaikanmanhua.com/login',
        account: 'demo_comic_user_2',
        password: 'KuaiKanRead!8',
        description: '国内热门国漫连载与条漫社区。',
      },
    ],
  },
  {
    type: '游戏',
    sites: [
      {
        slug: 'game-steam',
        name: 'Steam',
        type: '游戏',
        icon: '🎮',
        color: 'blue',
        url: 'https://store.steampowered.com/',
        publishUrl: 'https://partner.steamgames.com/',
        loginUrl: 'https://store.steampowered.com/login/',
        account: 'demo_gamer_1',
        password: 'GamePlay!77',
        description: '全球最大的 PC 游戏商店与玩家社区。',
      },
      {
        slug: 'game-taptap',
        name: 'TapTap',
        type: '游戏',
        icon: '🕹️',
        color: 'purple',
        url: 'https://www.taptap.cn/',
        publishUrl: 'https://www.taptap.cn/developer',
        loginUrl: 'https://www.taptap.cn/account/login',
        account: 'demo_gamer_2',
        password: 'TapPlayGo#6',
        description: '手游分发与玩家社区，国服/国际站齐全。',
      },
    ],
  },
  {
    type: '图片',
    sites: [
      {
        slug: 'image-pixiv',
        name: 'Pixiv',
        type: '图片',
        icon: '🎨',
        color: 'teal',
        url: 'https://www.pixiv.net/',
        publishUrl: 'https://www.pixiv.net/upload.php',
        loginUrl: 'https://accounts.pixiv.net/login',
        account: 'demo_artist_1',
        password: 'ArtGallery@01',
        description: '日本最大的插画/漫画作品发布与交流社区。',
      },
      {
        slug: 'image-weibo',
        name: '微博图库',
        type: '图片',
        icon: '🌟',
        color: 'red',
        url: 'https://weibo.com/',
        publishUrl: 'https://weibo.com/n/',
        loginUrl: 'https://passport.weibo.com/sso/signin',
        account: 'demo_artist_2',
        password: 'WeiboPicture&4',
        description: '中文社交平台，图片分享与博主图集中心。',
      },
    ],
  },
  {
    type: 'VR',
    sites: [
      {
        slug: 'vr-sidequest',
        name: 'SideQuest',
        type: 'VR',
        icon: '🥽',
        color: 'brown',
        url: 'https://sidequestvr.com/',
        publishUrl: 'https://sidequestvr.com/publish',
        loginUrl: 'https://sidequestvr.com/login',
        account: 'demo_vr_user_1',
        password: 'VRLand#88',
        description: 'Quest / Pico 等 VR 头显的第三方应用市场。',
      },
      {
        slug: 'vr-pico',
        name: 'PICO VR',
        type: 'VR',
        icon: '👓',
        color: 'brown',
        url: 'https://www.picoxr.com/',
        publishUrl: 'https://developer.pico-interactive.com/',
        loginUrl: 'https://www.picoxr.com/account/login',
        account: 'demo_vr_user_2',
        password: 'PicoDevGo!2',
        description: '国产 VR 头显官网与开发者平台。',
      },
    ],
  },
  {
    type: '直播',
    sites: [
      {
        slug: 'live-twitch',
        name: 'Twitch',
        type: '直播',
        icon: '🎥',
        color: 'purple',
        url: 'https://www.twitch.tv/',
        publishUrl: 'https://dashboard.twitch.tv/',
        loginUrl: 'https://www.twitch.tv/login',
        account: 'demo_streamer_1',
        password: 'LiveStream&42',
        description: '全球知名的游戏/娱乐直播平台。',
      },
      {
        slug: 'live-bilibili',
        name: '哔哩哔哩直播',
        type: '直播',
        icon: '📺',
        color: 'pink',
        url: 'https://live.bilibili.com/',
        publishUrl: 'https://link.bilibili.com/p/center/index',
        loginUrl: 'https://passport.bilibili.com/login',
        account: 'demo_streamer_2',
        password: 'BiliBiliLive#7',
        description: '国内二次元/游戏直播主流平台。',
      },
    ],
  },
  {
    type: '资源',
    sites: [
      {
        slug: 'resource-baidu',
        name: '百度',
        type: '资源',
        icon: '🔍',
        color: 'blue',
        url: 'https://www.baidu.com/',
        publishUrl: 'https://ziyuan.baidu.com/content/index',
        loginUrl: 'https://wappass.baidu.com/passport/login',
        account: 'demo_baidu_user',
        password: 'BaiDuYuan99',
        description: '中文搜索与资源入口，百度搜索、资源提交中心。',
      },
      {
        slug: 'resource-google',
        name: 'Google',
        type: '资源',
        icon: '🔎',
        color: 'red',
        url: 'https://www.google.com/',
        publishUrl: 'https://www.google.com/search-console',
        loginUrl: 'https://accounts.google.com/signin',
        account: 'demo_google_user',
        password: 'GoogleSearch!5',
        description: '全球通用搜索引擎与站长资源工具。',
      },
    ],
  },
  {
    type: '复古',
    sites: [
      {
        slug: 'vintageflash',
        name: 'vintageflash',
        type: '复古',
        icon: '📼',
        color: 'yellow',
        url: 'https://vintageflash.com/index.html?entrance_accept=1',
        publishUrl: 'https://vintageflash.com',
        loginUrl: 'https://vintageflash.com/login',
        account: 'long',
        password: '123456',
        description: '全球最古老、最大的尼龙癖好网站（自1998年起在线）的好处 4个月会员期（非定期）：100美元',
      },
    ],
  },
  {
    type: '影视',
    sites: [
      {
        slug: 'pornhub',
        name: 'pornhub',
        type: '影视',
        icon: '📚',
        color: 'blue',
        url: 'https://cn.pornhub.com/',
        publishUrl: 'https://cn.pornhub.com/',
        loginUrl: 'https://cn.pornhub.com/',
        account: 'test',
        password: 'test',
        description: '第1大porn网站',
      },
      {
        slug: 'xvideos',
        name: 'xvideos',
        type: '影视',
        icon: '📚',
        color: 'green',
        url: 'https://www.xvideos.com/',
        publishUrl: 'https://www.xvideos.com/',
        loginUrl: 'https://www.xvideos.com/',
        account: 'test',
        password: 'test',
        description: '第二大porn网站',
      },
    ],
  },
];

// 扁平数组（详情页 getStaticPaths 使用）
export const siteList: SiteLink[] = siteGroupsByType.flatMap((g) => g.sites);

// 按 slug 查表（详情页快速检索）
export const siteBySlug: Record<string, SiteLink | undefined> = Object.fromEntries(
  siteList.map((s) => [s.slug, s])
);
