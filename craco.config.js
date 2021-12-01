const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@src': resolvePath('./src'),
      '@assets': resolvePath('./public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
