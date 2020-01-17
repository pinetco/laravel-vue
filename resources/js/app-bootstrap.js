/*
 * Load various JavaScript modules that assist App.
 */
window.URI = require('urijs');
window.axios = require('axios');
window._ = require('lodash');
window.moment = require('moment');
window.Promise = require('promise');
window.Popper = require('popper.js').default;

/*
 * Define Moment locales
 */
window.moment.defineLocale('en-short', {
    parentLocale: 'en',
    relativeTime : {
        future: "in %s",
        past:   "%s",
        s:  "1s",
        m:  "1m",
        mm: "%dm",
        h:  "1h",
        hh: "%dh",
        d:  "1d",
        dd: "%dd",
        M:  "1 month ago",
        MM: "%d months ago",
        y:  "1y",
        yy: "%dy"
    }
});
window.moment.locale('en');

/*
 * Load jQuery and Bootstrap jQuery, used for front-end interaction.
 */
if (window.$ === undefined || window.jQuery === undefined) {
    window.$ = window.jQuery = require('jquery');
}

require('bootstrap');

/**
 * Load Vue if this application is using Vue as its framework.
 */
if ($('#app').length > 0) {
    require('vue-bootstrap');
}

require('./helpers');
