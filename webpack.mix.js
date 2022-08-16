const mix = require('laravel-mix');

mix.js('src/js/app.js', "assets")
    .postCss('src/css/main.css', "assets", [
        require('tailwindcss')
    ]);
