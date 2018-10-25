var app = new Vue({
    el:'#app',
    data:{
        mat:380,
        rail:400,
        ball:200,
    },
    computed:{
      sum:function () {
          return parseFloat(this.mat != 0 ? this.mat : 0) + parseFloat(this.rail != 0 ? this.rail : 0 ) + parseFloat(this.ball != 0 ? this.ball : 0);
      },

      average:function () {
          return Math.round(this.sum/3);
      }
    },
});
