require('./bootstrap');

window.Vue = require('vue');

window.VueRouter=require('vue-router').default;

window.vueAxios=require('vue-axios').default;

window.Axios=require('axios').default;

let AppLayout = require('./components/App.vue');

//registering modules
Vue.use(VueRouter,vueAxios, axios);

//show list post templete
const Listposts=Vue.component('Listposts', require('./components/Listposts.vue'));

//add post template
const Addpost=Vue.component('Addpost', require('./components/Addpost.vue'));

//edit post template 
const Editpost=Vue.component('Editpost', require('./components/Editpost.vue'));

//delete post template
const Deletepost=Vue.component('Deletepost', require('./components/Deletepost.vue'));

//view single post template
const Viewpost=Vue.component('Viewpost', require('./components/Viewpost.vue'));

const routes = [
    {
        name: 'Listposts',
        path: '/',
        component: Listposts
    },
    {
        name: 'Addpost',
        path: '/add-post',
        component: Addpost
    },
    {
        name: 'Editpost',
        path: '/edit/:id',
        component: Editpost
    },
    {
        name: 'Deletepost',
        path: '/post-delete',
        component: Deletepost
    },
    {
        name: 'Viewpost',
        path: '/View/:id',
        component: Viewpost
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app');
