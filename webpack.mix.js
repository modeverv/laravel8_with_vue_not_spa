const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
    .js('resources/js/app.js', 'public/js')
    .sourceMaps()
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .ts('resources/ts/**/*', 'public/js')
    .browserSync({
        proxy: {
        target: "http://homestead.test" // 最後に/は不要
     },
     https: false, // httpsのサイトをproxyするならtrueをセット
     files: [ // チェックするファイルは下記で十分ではないかな。
       './resources/**/*',
       './app/**/*',
       './config/**/*',
       './routes/**/*',
       './public/**/*'
     ],
     //open: false, //BrowserSync起動時にブラウザを開かない
     reloadOnRestart: true //BrowserSync起動時にブラウザにリロード命令おくる
  });
