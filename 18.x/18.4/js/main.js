var app = new Vue({
    el:'#app',
    methods:{
        onClick:function(){
            console.log("啊！我被点了！");
        },
        onEnter:function(){
            console.log("Enter");
        },

        onLeave:function(){
            console.log("Leave");
        },
        onSubmit:function () {
            console.log("submited");
        },

        onKeyup:function () {
            console.log("Enter");
        }
    },
});
