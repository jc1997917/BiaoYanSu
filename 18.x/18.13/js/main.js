var Event = new Vue;

Vue.component('wanghuahua', {
    template: `<div>我说<input @keyup="on_change" type="text" v-model="i_said"></div>`,
    data: function () {
        return {
            i_said: '',
        }
    },
    methods: {
        on_change: function () {
            Event.$emit('huahua-said-something',this.i_said);
            console.log(this);
        }
    }
});
Vue.component('lishuandan', {
    template: '<div>王花花说{{huahua_said}}</div>',
    data: function () {
        return {
            huahua_said: '',
        }
    },
    mounted:function () {
        var me = this;
        Event.$on('huahua-said-something',function(data){
            me.huahua_said=data;
            console.log(this);
        })
    }
});
new Vue({
    el: '#seg2',
})
