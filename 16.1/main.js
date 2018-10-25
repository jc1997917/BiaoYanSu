var trigger = $('#trigger');
var card = $('#card');
trigger.on('click',
    function(){
    card.load('card.html');
})