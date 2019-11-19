# LaravelVue

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]
[![StyleCI][ico-styleci]][link-styleci]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Installation

> Pull git repository in `packages` directory under project's root directory, and add below script in `composer.json` file

```json
"repositories": {
    "pinetco/laravel-vue": {
        "type": "path",
        "url": "/Users/{user}/code/{project}/packages/Pinetco/LaravelVue"
    }
}
```

Via Composer

``` bash
$ composer require pinetco/laravel-vue
```

> Copy `package.json` to project's root directory and add following to `webpack.mix.js` file:
>
> We are adding this config to export js to `node_modules` so that we can require in `app.js`  

```js
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            modules: [
                path.resolve(__dirname, 'vendor/pinetco/laravel-vue/resources/js'),
                'node_modules'
            ],
            alias: {
                'vue$': mix.inProduction() ? 'vue/dist/vue.min' : 'vue/dist/vue.js'
            }
        }
    });
```

## Usage

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [author name][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/pinetco/laravel-vue.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/pinetco/laravel-vue.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/pinetco/laravel-vue/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/pinetco/laravel-vue
[link-downloads]: https://packagist.org/packages/pinetco/laravel-vue
[link-travis]: https://travis-ci.org/pinetco/laravel-vue
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/pinetco
[link-contributors]: ../../contributors
