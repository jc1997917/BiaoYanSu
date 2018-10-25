Vue.filter('currency',function(val,unit){
    val = val || 0;
    unit = unit || '元';
    return val + unit;
})

new Vue({
    el: '#app',
    data:{
        price:10,
    }
})
