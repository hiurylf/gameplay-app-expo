module.exports = function(api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            pages: './src/pages',
            global: './src/global',
            components: './src/components',
            routes: './src/routes',
            utils: './src/utils'
          },
        },
      ],
    ],
  }
}
