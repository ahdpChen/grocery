<template>
    <div>
        <HeaderG></HeaderG>
        <Content>
            <ul>
                <li v-for="(item, index) in pics" :key="index">
                    <img :src="item.url" />
                </li>
            </ul>
        </Content>
    </div>
</template>
<script>
import HeaderG from "../../components/HeaderG";
export default {
    components: { HeaderG },
    data() {
        return {
            pics: []
        };
    },
    methods: {
        novelDetail(name) {
            this.$router.push(`/novel/detail/${name}`);
        }
    },
    async asyncData({ $axios, $Spin }) {
        let response = await $axios.get("meituApi?page=1");
        if (response && response.status == 200) {
            return {
                pics: response.data.data
            };
        }
    }
};
</script>
<style lang="scss" scoped>
.ivu-layout-content {
    margin: 0px 20px;
    padding-top: 64px;
    background: #fff;
    min-height: 500px;
    ul {
        li {
            img {
                width: 100%;
            }
        }
    }
}
</style>
