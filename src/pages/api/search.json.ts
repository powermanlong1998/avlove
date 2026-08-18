import { getCollection } from 'astro:content';
import { encodeAssetPath } from '../../utils/tags';

export async function GET() {
  const actresses = await getCollection('actresses');
  const data = actresses.map((a) => ({
    slug: a.id,
    name_jp: a.data.name_jp,
    name_cn: a.data.name_cn,
    region: a.data.region,
    avatar: encodeAssetPath(a.data.avatar),
    tags: a.data.tags,
    films: a.data.films || 0,
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}