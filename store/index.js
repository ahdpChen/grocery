import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        userInfo: {},
        isLogin: false
    },
    mutations: {
        SET_LOGIN_STATUS(state, isLogin) {
            state.isLogin = isLogin
        },
        SET_LOGIN_INFO(state, loginInfo) {
            state.userInfo = loginInfo
        }
    }
})

export default store