const plugin = require('tailwindcss/plugin');

const color = plugin(({ addUtilities }) => {
  addUtilities({
    '.text-primary': {
      color: '#4c1192',
    },
    '.text-secondary': {
      color: '#212529',
    },
  });
});
module.exports = { color };
