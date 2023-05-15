module.exports = {
    mode:"jit",
    content: [
        // join(__dirname, '../movies/**/**/**/*.{js,ts,jsx,tsx,mdx}'),
        // join(__dirname, '../movies/**/**/**/*.{js,ts,jsx,tsx,mdx}'),
        '../**/*.{js,ts,jsx,tsx,mdx}',
        '../**/*.{html,js}'
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
};