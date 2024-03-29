import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
  return {
    test: /\.(js|jsx|tsx)&/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          options.isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
