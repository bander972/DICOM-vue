import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  uname: '',
  utype: '',
  uauth: '',
  logid: '',
  cname: ''
};
 
const mutations = {
      upname(state, uname) {
        state.uname = uname;
      },uptype(state, utype) {
        state.utype = utype;
    },
    upcname(state, cname) {
        state.cname = cname;
    },
    upauth(state, uauth) {
        state.uauth = uauth;
    },
    uplogid(state, logid) {
        state.logid = logid;
    }
};
const actions = {
    upname(context, uname) {
          context.uname = uname;
        },
    uptype(context, utype) {
            context.utype = utype;
        },
    upcname(context, cname) {
            context.cname = cname;
    },
    upauth(context, uauth) {
        context.uauth = uauth;
    },
    uplogid(context, logid) {
        context.logid = logid;
    }
};
 
export default new Vuex.Store({
    state: {
        user: false,
        uname: '',
        utype: '',
        uauth: '',
        logid: '',
        cname: ''
    },
    mutations: {
        // 登录
        login(state, user) {
            state.user = user;
            localStorage.setItem("userInfo", user);
        },
        // 退出
        logout(state, user) {
            state.user = "";
            state.uname = "";
            state.utype = "";
            state.uauth = "";
            state.logid = "";
            state.cname = "";
            localStorage.setItem("userInfo", "");
        },
        upname(state, uname) {
            state.uname = uname;
        },
        uptype(state, utype) {
            state.utype = utype;
        },
        upcname(state, cname) {
            state.cname = cname;
        },
        upauth(state, uauth) {
            state.uauth = uauth;
        },
        uplogid(state, logid) {
            state.logid = logid;
        }
    },
    actions : {
        upname(context, uname) {
            context.uname = uname;
          },
        uptype(context, utype) {
            context.utype = utype;
        },  
        upcname(context, cname) {
            context.cname = cname;
        },
        upauth(context, uauth) {
            context.uauth = uauth;
        },
        uplogid(context, logid) {
            context.logid = logid;
        }
      },
    store : new Vuex.Store({
        state,
        actions,
        mutations
      }),
}) 