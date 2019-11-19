<?php

namespace Pinetco\LaravelVue;

use Illuminate\Support\ServiceProvider;

class LaravelVueServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'pinetco');
        // $this->loadViewsFrom(__DIR__.'/../resources/views', 'pinetco');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        // $this->loadRoutesFrom(__DIR__.'/routes.php');

        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
//        $this->mergeConfigFrom(__DIR__.'/../config/laravel-vue.php', 'laravel-vue');
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['laravel-vue'];
    }

    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole()
    {
        // Publishing the configuration file.
        /*$this->publishes([
            __DIR__.'/../config/laravel-vue.php' => config_path('laravel-vue.php'),
        ], 'laravel-vue.config');*/

        // Publishing the views.
        /*$this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/pinetco'),
        ], 'laravel-vue.views');*/

        // Publishing assets.
        /*$this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/pinetco'),
        ], 'laravel-vue.views');*/

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/pinetco'),
        ], 'laravel-vue.views');*/

        // Registering package commands.
        // $this->commands([]);
    }
}
