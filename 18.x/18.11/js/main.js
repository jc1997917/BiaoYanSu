 Vue.component('console',{
            template:'<button @click="onClick">点我啊</button>',
     props:['msg'],
     methods:{
        onClick:function(){
            console.log(this.msg);
        }
        }
});

new Vue({
    el:'#seg2',
})
