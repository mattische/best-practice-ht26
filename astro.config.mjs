// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://mattische.github.io',
	base: '/best-practice-ht26',
	integrations: [
		starlight({
			title: 'Företag i kurser',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mattische/best-practice-ht26' }],
			sidebar: [
				{ label: 'Start', link: '/' },
				{ label: 'Presentation', link: '/presentation/' },
				{
					label: 'Om föreläsningen',
					items: ['konceptet', 'dv1706', 'dv1707', 'lardomar'],
				},
			],
			customCss: ['./src/styles/custom.css'],
			pagination: false,
		}),
	],
});
