$(function () {
    var text = new Input('#text');
    valid = text.validator.is_valid();
    console.log('valid:',valid);
})
/*var validator = new Validator('6234',{
    max:60,
    min:18,
    maxLength:12,
    minLength:6,
    pattern:'^[a-zA-Z0-9]*$',
});

var result = validator.validate_pattern();
console.log('result:',result);
});*/
/*选中页面中所有的input[data-rule]*/

/*解析每一个input的验证规则*/

/*验证*/