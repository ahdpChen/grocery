<template>
    <Spin size="large" fix v-if="loading"></Spin>
</template>
<script>
export default {
    data() {
        loading: false
    },
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
}
</script>
