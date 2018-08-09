<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/novel">小说</BreadcrumbItem>
            <BreadcrumbItem v-if="novelDetail.info">{{novelDetail.info.qp_rewrite}}</BreadcrumbItem>
        </Breadcrumb>
        <Content v-if="novelDetail.aladdin">
            <img :src="novelDetail.aladdin.cover" />
            <div>
                <div>
                    <span>作者：</span>
                    <span>{{novelDetail.aladdin.author}}</span>
                </div>
                <div>
                    <span>类别：</span>
                    <span>{{novelDetail.aladdin.category}}</span>
                </div>
                <div>
                    <span>标签：</span>
                    <span>{{novelDetail.aladdin.tags}}</span>
                </div>
                <div>
                    <span>字数：</span>
                    <span>{{novelDetail.aladdin.words | FormatNumberWithComma}}字</span>
                </div>
                <div>
                    <span>简介：</span>
                    <span>{{novelDetail.aladdin.desc}}</span>
                </div>
            </div>
        </Content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            novelDetail: {}
        };
    },
    computed: {},
    methods: {},
    async asyncData({ $axios, params: { name }}) {
        let response = await $axios.get(`novelInfoApi?name=${encodeURI(name)}`);
        if (response && response.status == 200) {
            return {
                novelDetail: response.data.data
            };
        }
    },
    mounted() {}
};
</script>
