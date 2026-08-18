const tagColors: Record<string, string> = {
  '巨乳': 'red',
  '萝莉': 'pink',
  '御姐': 'orange',
  '人妻': 'yellow',
  '制服': 'green',
  '丝袜': 'teal',
  '黑丝': 'blue',
  '白丝': 'purple',
  '眼镜': 'brown',
  '护士': 'red',
  '教师': 'pink',
  '女仆': 'orange',
  '兔女郎': 'yellow',
  '泳装': 'green',
  '运动': 'teal',
  '短发': 'blue',
  '长发': 'purple',
  '双马尾': 'brown',
  'S级': 'red',
  'A级': 'pink',
  '经典': 'orange',
  '新人': 'yellow',
  '人气': 'green',
  '美少女': 'teal',
  '熟女': 'blue',
  '年轻': 'purple',
  '巨臀': 'brown',
  '纹身': 'red',
  '冷艳': 'pink',
};

export function getTagColor(tag: string): string {
  return tagColors[tag] || 'blue';
}

/**
 * 将本地静态资源路径中的特殊字符（空格、中文等）编码，保证 <img src> 在浏览器中可靠加载。
 * - 远程 http(s) URL 原样返回
 * - 本地路径按 "/" 分段编码，保留目录分隔符
 */
export function encodeAssetPath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return path
    .split('/')
    .map((seg) => encodeURIComponent(seg))
    .join('/');
}