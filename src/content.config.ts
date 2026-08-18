import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const regions = ['日本', '欧美', '韩国', '国产'] as const;

// 远程 URL 或本地静态资源路径校验（支持中文/日文/韩文等 Unicode 文件名）
function isValidAssetPath(v: string): boolean {
  if (/^https?:\/\//i.test(v)) {
    try { new URL(v); return true; } catch { return false; }
  }
  // 以 / 开头，允许 Unicode 字母/数字/常见符号，以图片扩展名结尾
  return /^\/[^\\?*:"<>|\r\n]*\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(v);
}

const avatarSchema = z.string().refine(isValidAssetPath, {
  message: 'avatar 必须是 http(s) URL 或以 / 开头的本地静态资源路径（支持中文文件名，.png/.jpg/.svg/.webp 等）',
});

const workImageSchema = z.string().refine(isValidAssetPath, {
  message: '作品图片 image 必须是 http(s) URL 或以 / 开头的本地静态资源路径（支持中文文件名，.png/.jpg/.svg/.webp 等）',
});

const actresses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actresses' }),
  schema: z.object({
    name_jp: z.string(),
    name_cn: z.string(),
    region: z.enum(regions),
    avatar: avatarSchema,
    tags: z.array(z.string()),
    films: z.number().optional(),
    // 星级 1-5（默认 3）
    rating: z.number().min(1).max(5).default(3),
    // 代表作品：每部含标题、图片、简介
    works: z.array(z.object({
      title: z.string(),
      image: workImageSchema,
      description: z.string(),
    })).default([]),
    // 综合评价
    review: z.string().default(''),
  }),
});

export const collections = { actresses };