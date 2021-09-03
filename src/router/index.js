
import Vue from 'vue';
import VueRouter  from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import NotFound from '@/components/NotFound'

Vue.use(VueRouter )


const router = new VueRouter ({
    mode: "history",
    routes: [
        { path: "/",
            component: HelloWorld },
        { path: "/home",
            name: "Home",
            component: Home },
        // { path: "*", name: "NotFound", component: NotFound },
    ],
})

export default router