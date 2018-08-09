<template>
    <div class="home-page">
    </div>
</template>
<script>
export default {
    name: "index",
    components: {},
    props: [],
    data() {
        return {};
    },
    methods: {},
    async asyncData({ $axios }) {
        // let response = await Promise.all([
        //     $axios.get("/journalismApi"),
        //     $axios.get("/satinGodApi?type=1&page=1"),
        //     $axios.get("/novelApi")
        // ]);
        // if (response.length) {
        //     return {
        //         news: response[0].data.data,
        //         satins: response[1].data.data,
        //         novels: response[2].data.data
        //     };
        // }
    },
    mounted() {
        // console.log(this)
    }
};
</script>
<style lang="scss" scoped>
</style>
