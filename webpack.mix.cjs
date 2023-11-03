let mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js').react()
.sass('resources/scss/app.scss', 'public/css')
.browserSync({proxy: '0.0.0.0:8000'});