window.__ = (key, replace) => {
    var translation = App.translations[key] ? App.translations[key] : key;

    _.forEach(replace, (value, key) => {
        translation = translation.replace(':'+key, value);
    });

    return translation;
};

window.flash = function (message, level = 'success') {
    Bus.$emit('flash', {message, level});
};
