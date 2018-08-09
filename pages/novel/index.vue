<template>
    <div>
        <HeaderG></HeaderG>
        <Content :style="{margin: '0px 20px', paddingTop: '64px', background: '#fff', minHeight: '500px'}">
            <ul>
                <li v-for="(item, index) in novels" :key="index">
                    <div>{{item.bookname}}</div>
                    <img :src="item.book_cover" />
                    <div>{{item.book_info}}...</div>
                    <div @click="novelDetail(item.bookname)">详情</div>
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
            novels: []
        };
    },
    methods: {
        novelDetail(name) {
            this.$router.push(`/novel/detail/${name}`);
        }
    },
    async asyncData({ $axios }) {
        let response = await $axios.get("/novelApi");
        if (response && response.status == 200) {
            return {
                novels: response.data.data
            };
        }
    }
};
</script>
