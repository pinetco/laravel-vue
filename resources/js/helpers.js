window.__ = (key, replace) => {
    var translation = App.translations[key] ? App.translations[key] : key;

    _.forEach(replace, (value, key) => {
        translation = translation.replace(':'+key, value);
    });

    return translation;
};
