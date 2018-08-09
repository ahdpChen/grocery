<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark">
            <div class="ivu-menu-item" :class="{active: item.name == activeName}" v-for="(item, index) of menuList" :key="index" @click="select(item.name)">
                <Icon type="ios-paper" /> {{item.text}}
            </div>
        </Menu>
    </Header>
</template>
<script>
export default {
    data() {
        return {
            menuList: [
                {
                    name: "satin",
                    text: "推荐"
                },
                {
                    name: "news",
                    text: "新闻"
                },
                {
                    name: "novel",
                    text: "小说"
                },
                {
                    name: "my",
                    text: "会员"
                }
            ]
        };
    },
    computed: {
        activeName() {
            return this.$route.fullPath.replace("/", "");
        }
    },
    methods: {
        select(name) {
            this.$router.push(`/${name}`);
        }
    },
    mounted() {
        // console.log(this);
    }
};
</script>
<style lang="scss" scoped>
.ivu-layout-header {
    padding: 0;
    .ivu-menu {
        display: flex;
        height: 64px;
        line-height: 64px;
        .ivu-menu-item {
            flex: 1;
            padding: 0 5px;
            text-align: center;
            &.active {
                color: #fff;
            }
            > i {
                margin: 0;
            }
        }
    }
}
</style>
