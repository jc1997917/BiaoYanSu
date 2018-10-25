// $.ajax('https://api.github.com/users/biaoyansu')
//  .done(function(data){console.log("data:",data);})

// var form = $('#search');
// var input = $('#username');
// var result = $('#result');
// var userName;
//
// form.on('submit',function (e) {
//     e.preventDefault();
//     userName=input.val();
//     $.ajax('https://api.github.com/users/'+userName)
//         .done(function (data) {
//             var html=
//                 '<div>用户名:'+data.login+'</div>'+
//             '<div>介绍:'+data.bio+'</div>'
//             result.html(html);
//         });
// })

$.ajax({
    url:'https://api.github.com/users/biaoyansu',
    method:'get',
    data:{
        username:'whh',
        password:'asdf',
    },
    success:function (data) {

    },
    error:function () {
        alert("找不到");
    }
})