import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://help.mahitichakra.in';

  const routes = [
    '',
    '/gold-rates',
    '/krushi-rates',
    '/dinasi-rates',
    '/photo-resizer',
    '/land-converter',
    '/emi-calculator',
    '/age-calculator',
    '/gst-calculator',
    '/sip-calculator',
    '/tax-calculator',
    '/fuel-calculator',
    '/panchanga',
    '/blogs',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
