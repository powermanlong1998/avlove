import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(__dirname, '../dist/api/search.json');

function loadData() {
  try {
    const raw = readFileSync(dataPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    console.error('错误: 请先运行 npm run build 构建项目');
    process.exit(1);
  }
}

function search(query, options = {}) {
  const data = loadData();
  const { region, tag, limit = 10 } = options;

  let results = data;

  if (region) {
    results = results.filter((a) => a.region === region);
  }

  if (tag) {
    results = results.filter((a) => a.tags.includes(tag));
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (a) =>
        a.name_jp.toLowerCase().includes(q) ||
        a.name_cn.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return results.slice(0, limit);
}

function printResults(results) {
  if (!results.length) {
    console.log('未找到匹配的女优');
    return;
  }

  console.log(`\n找到 ${results.length} 位女优:\n`);
  for (const r of results) {
    console.log(`  ${r.name_jp} (${r.name_cn})`);
    console.log(`    地区: ${r.region}  影片: ${r.films || 'N/A'} 部`);
    console.log(`    标签: ${r.tags.join(', ')}`);
    console.log(`    头像: ${r.avatar}`);
    console.log('');
  }
}

const args = process.argv.slice(2);

if (!args.length) {
  console.log('用法:');
  console.log('  node scripts/cli.mjs <关键词> [--region <地区>] [--tag <标签>] [--limit <数量>]');
  console.log('');
  console.log('示例:');
  console.log('  node scripts/cli.mjs 三上');
  console.log('  node scripts/cli.mjs --region 日本 --tag 巨乳');
  console.log('  node scripts/cli.mjs mia --region 欧美');
  console.log('');
  console.log('可用地区: 日本, 欧美, 韩国, 国产');
  process.exit(0);
}

const options = {};
const positionalArgs = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--region' && args[i + 1]) {
    options.region = args[++i];
  } else if (args[i] === '--tag' && args[i + 1]) {
    options.tag = args[++i];
  } else if (args[i] === '--limit' && args[i + 1]) {
    options.limit = parseInt(args[++i], 10);
  } else {
    positionalArgs.push(args[i]);
  }
}

const query = positionalArgs.join(' ');
const results = search(query, options);
printResults(results);