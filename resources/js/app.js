/**
 * Export the root App application.
 */
module.exports = {
    el: '#app',


    /**
     * Holds the timestamp for the last time we updated the API token.
     */
    lastRefreshedApiTokenAt: null,


    /**
     * The application's data.
     */
    data: {},


    /**
     * The component has been created by Vue.
     */
    created() {

    },


    /**
     * Prepare the application.
     */
    mounted() {
        this.whenReady();
    },


    methods: {
        /**
         * Finish bootstrapping the application.
         */
        whenReady() {
            //
        },
    },


    computed: {}
};
