/**
 * Intercept the incoming responses.
 *
 * Handle any unexpected HTTP errors and pop up modals, etc.
 */
window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response === undefined) {
        return Promise.reject(error);
    }

    switch (error.response.status) {
        case 401:
            window.axios.get('/logout');
            // $('#modal-session-expired').modal('show');
            break;

        case 402:
            // window.location = '/settings#/subscription';
            break;

        case 403:
            flash(error.response.data.message || "You don't have access to do this", 'danger');
            break;
    }

    return Promise.reject(error);
});
