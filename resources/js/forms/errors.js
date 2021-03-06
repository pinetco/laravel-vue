/**
 * App form error collection class.
 */
window.AppFormErrors = function () {
    this.errors = {};

    /**
     * Determine if the collection has any errors.
     */
    this.hasErrors = function () {
        return ! _.isEmpty(this.errors);
    };


    /**
     * Determine if the collection has errors for a given field.
     */
    this.has = function (field) {
        return _.indexOf(_.keys(this.errors), field) > -1;
    };

    /**
     * Returns has-error class if the collection has errors for the given field.
     */
    this.classFor = function (field) {
        return this.has(field) ? 'is-invalid' : '';
    };

    /**
     * Returns helper block html if given field has error.
     */
    this.helperBlock = function (field) {
        if (this.has(field)) {
            return '<div class="text-danger">' + this.get(field) + '</div>';
        }
    };

    /**
     * Get all of the raw errors for the collection.
     */
    this.all = function () {
        return this.errors;
    };


    /**
     * Get all of the errors for the collection in a flat array.
     */
    this.flatten = function () {
        return _.flatten(_.toArray(this.errors));
    };


    /**
     * Get the first error message for a given field.
     */
    this.get = function (field) {
        if (this.has(field)) {
            return this.errors[field][0];
        }
    };


    /**
     * Set the raw errors for the collection.
     */
    this.set = function (errors) {
        if (typeof errors === 'object') {
            this.errors = errors;
        } else {
            this.errors = {'form': [__('Something went wrong. Please try again or contact customer support.')]};
        }
    };


    /**
     * Remove errors from the collection.
     */
    this.forget = function (field) {
        if (typeof field === 'undefined') {
            this.errors = {};
        } else {
            Vue.delete(this.errors, field);
        }
    };
};
