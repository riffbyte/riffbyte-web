import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                concrete: 'rgb(242,242,242)',
                ebony: 'rgb(11,6,40)',
                'blue-violet': 'rgb(111,97,192)',
                'medium-purple': 'rgb(160,132,232)',
                'water-leaf': 'rgb(139,232,229)',
                'cosmic-latte': 'rgb(213,255,228)',
            },
        },
    },
    plugins: [],
};
export default config;
