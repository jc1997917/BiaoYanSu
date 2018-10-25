 Vue.component('balance',{
            template:`<div>
      <show @show-balance="show_balance"></show>
      <div v-if="show">余额还有900亿</div>
</div>`,
     data:function () {
         return{
             show:false,
         }
     },
     methods:{
         show_balance:function (data) {
             this.show = true;
             console.log(this);
             console.log(data);
         }
     }


});
 Vue.component('show',{
     template:'<button @click="onClick">显示余额</button>',
     methods:{
         onClick:function(){
             this.$emit('show-balance',{a:1,b:2});
         }
     }
 });
new Vue({
    el:'#seg2',
})
