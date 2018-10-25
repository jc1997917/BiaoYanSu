Vue.component('like',{
       template:`<button :class="{like:liked}" 
@click="on_click()">👍
{{like_count}}{{liked}}</button>`,
        data:function(){
           return {
               like_count:10,
               liked:false,
           };
        },
        methods:{
            on_click:function () {
                if(!this.liked){
                this.like_count++;}
                else{
                this.like_count--;}

                this.liked=!this.liked;
            }}
});

new Vue({
    el:'#app',
})
