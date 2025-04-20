/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        "postcss-import": {},
        "postcss-advanced-variables": {},
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
    },
};

export default config;
