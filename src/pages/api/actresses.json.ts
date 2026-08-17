import { getCollection } from 'astro:content';

export async function GET({ url }: { url: URL }) {
  const actresses = await getCollection('actresses');
  const params = url.searchParams;

  const region = params.get('region');
  const tag = params.get('tag');
  const q = params.get('q');
  const limit = parseInt(params.get('limit') || '20', 10);

  let data = actresses.map((a) => ({
    slug: a.id,
    name_jp: a.data.name_jp,
    name_cn: a.data.name_cn,
    region: a.data.region,
    avatar: a.data.avatar,
    tags: a.data.tags,
    films: a.data.films || 0,
  }));

  if (region) {
    data = data.filter((d) => d.region === region);
  }
  if (tag) {
    data = data.filter((d) => d.tags.includes(tag));
  }
  if (q) {
    const query = q.toLowerCase();
    data = data.filter(
      (d) =>
        d.name_jp.toLowerCase().includes(query) ||
        d.name_cn.toLowerCase().includes(query) ||
        d.tags.some((t) => t.toLowerCase().includes(query))
    );
  }

  data = data.slice(0, limit);

  const response = {
    total: data.length,
    query: { region, tag, q, limit },
    results: data,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}