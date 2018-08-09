<template>
    <div class="login-page">
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>登录注册</BreadcrumbItem>
        </Breadcrumb>
        <div class="login-wrap">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="手机号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formInline: {
                user: "",
                password: ""
            },
            ruleInline: {
                user: [
                    {
                        required: true,
                        message: "请填写手机号",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请填写密码",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        min: 6,
                        message:
                            "The password length cannot be less than 6 bits",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                console.log(valid);
                if (valid) {
                    this.login();
                } else {
                    this.$Message.error("验证失败!");
                }
            });
        },
        async login() {
            let { user, password } = this.formInline;
            let response = await this.$axios.get(
                `login?key=00d91e8e0cca2b76f515926a36db68f5&phone=${user}&passwd=${password}`
            );
            console.log(response);
            if (response && response.status == 200) {
                let msg = response.data.msg;
                if (response.data.code == 200) {
                    this.success(response.data);
                } else if (msg == "用户不存在！") {
                    this.register();
                } else {
                    this.$Message.error(msg);
                }
            }
        },
        async register() {
            let { user, password } = this.formInline;
            let response = await this.$axios.get(
                `createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${user}&passwd=${password}`
            );
            if (response && response.status == 200) {
                let msg = response.data.msg;
                this.success(response.data);
            }
        },
        success(data) {
            console.log(data)
            this.$Message.success(data.msg);
            this.$store.commit('SET_LOGIN_STATUS', true);
            this.$store.commit('SET_LOGIN_INFO', data.data);
            this.$router.push(this.$route.query.fromPage || '/');
        }
    },
    mounted() {
        // console.log(this.$route.query.fromPage)
    }
};
</script>
<style lang="scss" scoped>
.login-page {
    .login-wrap {
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        form {
            width: 80%;
        }
    }
}
</style>
