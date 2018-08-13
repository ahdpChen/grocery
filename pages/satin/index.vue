<template>
    <div class="satin-page">
        <HeaderG></HeaderG>
        <Content>
            <ul>
                <li v-for="(item, index) in satins" :key="index">
                    <img :src="item.header" />
                    <div>{{item.text}}</div>
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
            satins: []
        };
    },
    head() {
        return {
            title: '杂货铺-推荐',
            // meta: [
            //     {
            //         hid: "description",
            //         name: "description",
            //         content: "My custom description"
            //     }
            // ]
        };
    },
    async asyncData({ $axios }) {
        let response = await $axios.get("/satinGodApi?type=1&page=1");
        if (response && response.status == 200) {
            return {
                satins: response.data.data
            };
        }
    }
};
</script>
<style lang="scss" scoped>
.satin-page {
    .ivu-layout-content {
        margin: 0px 20px;
        padding-top: 64px;
        background: #fff;
        min-height: 500px;
        ul {
            li {
                img {
                    width: 50px;
                }
            }
        }
    }
}
</style>

