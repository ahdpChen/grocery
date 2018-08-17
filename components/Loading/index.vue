<template>
    <Spin size="large" fix v-if="loading"></Spin>
</template>
<script>
export default {
    data() {
        return {
            loading: false
        }
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

<style lang="scss" scoped>
.ivu-spin-fix {
    bottom: 0;
    right: 0;
}
</style>