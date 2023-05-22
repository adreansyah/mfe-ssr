module.exports = {
  mode: "jit",
  content: [
    '../**/*.{js,ts,jsx,tsx,mdx}',
    '../**/*.{html,js}'
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'top-header': 'url("/static/images/backgrounds/bg_header.png")'
      },
    },
  },
  plugins: [require("daisyui")],
};