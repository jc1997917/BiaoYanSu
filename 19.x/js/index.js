var routes = [
    {
       path:'/' ,
        component:{
           template:`
        <div>
            <h1>首页</h1>
        </div>`},
    },
    {
        path:'/about' ,
        component:{
            template:`
        <div>
            <h1>关于我们</h1>
        </div>`},
    },
    {
        path:'/user/:name' ,
        component:{
            template:`
        <div>
           <div>我叫{{$route.params.name}}</div>
           <router-link to="more" append>更多信息</router-link>
           <router-view></router-view>
           <div>我今年{{$route.query.age}}了</div>
        </div>`},
        children:[
            {
                path: 'more',
                component:{
                    template:`
           <div>用户{{$route.params.name}}的详细信息</div>
                    `
                }
            }
        ]
    },
];

var router = new VueRouter({
    routes:routes,
});

new Vue({
    el:'#app',
    router:router,
})