new Vue({
    el:'#seg1',
    components:{
        console:{
            template:'<button @click="onClick">点我啊</button>',
        methods:{
        onClick:function(){
            console.log('Yo.');
        }
        }
    }
    }
});

new Vue({
    el:'#seg2',
})
