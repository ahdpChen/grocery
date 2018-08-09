<template>
    <div class="user-info-page">
        <HeaderG></HeaderG>
        <Content :style="{margin: '0px 20px', paddingTop: '64px', background: '#fff', minHeight: '500px'}">
            <div>用户名：{{userInfo.phone}}</div>
        </Content>
    </div>
</template>
<script>
import HeaderG from "../../components/HeaderG";
export default {
    components: { HeaderG },
    data() {
        return {};
    },
    computed: {
        userInfo() {
            console.log(this.$store.state.userInfo);
            return this.$store.state.userInfo;
        }
    },
    methods: {},
    // async asyncData({ $axios }) {
    //     let response = await $axios.get("/novelApi");
    //     if (response && response.status == 200) {
    //         return {
    //             novels: response.data.data
    //         };
    //     }
    // }
    mounted() {
        console.log(this.$store.state);
    }
};
</script>
<style lang="scss" scoped>
.user-info-page {
    .ivu-layout-content {
       
    }
}
</style>
