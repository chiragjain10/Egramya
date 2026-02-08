import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- CONFIGURATION ---
const DOMAIN = 'https://www.absolutegramya.com';
const OUTPUT_FILE = path.resolve(process.cwd(), 'public/sitemap.xml');

// Static Routes (Add all your frontend routes here)
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/structure', priority: 0.9, changefreq: 'weekly' },
  { path: '/gallery', priority: 0.7, changefreq: 'weekly' },
  { path: '/enroll', priority: 0.9, changefreq: 'monthly' },
  { path: '/module-1', priority: 0.6, changefreq: 'monthly' },
  { path: '/module-2', priority: 0.6, changefreq: 'monthly' },
  { path: '/module-3', priority: 0.6, changefreq: 'monthly' },
];

// --- DYNAMIC DATA FETCHING (Future Admin Panel Integration) ---
async function fetchDynamicRoutes() {
  console.log('Fetching dynamic routes from Admin Panel (Mock)...');
  
  // TODO: Replace this with actual API call to your Admin Panel / CMS
  // Example:
  // const response = await fetch('https://api.youradminpanel.com/posts');
  // const posts = await response.json();
  // return posts.map(post => ({ path: `/blog/${post.slug}`, priority: 0.7, changefreq: 'weekly' }));

  return []; // Returning empty for now
}

// --- GENERATOR ---
async function generateSitemap() {
  try {
    const dynamicRoutes = await fetchDynamicRoutes();
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => {
    return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, sitemap);
    console.log(`✅ Sitemap generated successfully at ${OUTPUT_FILE}`);
    console.log(`   Total URLs: ${allRoutes.length}`);

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
