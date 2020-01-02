/*
 * Load Vue, the JavaScript framework used by App.
 */
if (window.Vue === undefined) {
    window.Vue = require('vue');

    window.Bus = new Vue();
}

Vue.prototype._ = _;

/**
 * Load Vue Global Mixin.
 */
Vue.mixin(require('./mixin'));

/**
 * Define the Vue filters.
 */
require('./filters');

/**
 * Load the App form utilities.
 */
require('./forms/bootstrap');
