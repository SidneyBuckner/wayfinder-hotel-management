import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
    'content': [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    'theme': {
        'extend': {
            'colors': {
                'primary': '#DAB972',
                'secondary': '#936685',
                'tertiary': {
                    'dark': '#A31414',
                    'light': '#f8c169',
                },
            },
            'fontFamily': {
                'poppins': [ 'var(--font-poppins)', ...fontFamily.sans ],
            },
        },
    },
    'plugins': [],
};

export default config;