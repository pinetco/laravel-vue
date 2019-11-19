<template>
    <span>{{ filteredValue }}</span>
</template>

<script>
    export default {
        props: {
            value: {
                default: ''
            },
            filter: {
                type: String,
                default: ''
            }
        },

        computed: {
            filteredValue() {
                return Vue.filter(this.filter)(this.value);
            }
        }
    }
</script>
