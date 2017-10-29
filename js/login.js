//---控制登录窗口显示隐藏---
$('.top-btn-login').on('click', function () {
    $('.login').show('fast');
    $('.home').css('backgroud-color', 'rgba(0,0,0,.7)');
    $('.login').css('opacity', '1')
})
$('.btn-login-close').on('click', function () {
    $('.login').hide('fast');
    $('.home').css('opacity', '1');
})

//简单的登录验证
++function () {
    var userCount = [];
    var username = [];
    var pwd = [];
    var flag = false;
    $('#btn-submit').click(function () {
        $.get('./login.txt', function (data, status) {
            var data = JSON.parse(data);
            var user = Object.keys(data);
            for (let i in user) {
                var count = user[i];
                userCount[i] = data[count][0];
                userCount[i].昵称 = count
            }
            console.log(userCount)
            //获取输入的用户名密码
            var getUserName = $('#username').val();
            var getpwd = $('#pwd').val();

            for (let i in userCount) {
                if (getUserName == userCount[i].qq账号) {
                    flag = true
                    var pwd = userCount[i].qq密码
                    console.log(pwd)
                    if (getpwd == pwd) {
                        console.log('登录成功')
                        //获取账号昵称
                        var cilent = userCount[i].昵称
                        console.log(cilent)
                        window.open('managePage.aspx?name=' + cilent, '_self')
                    }
                }

            }
            flag === false && console.log('用户名不存在');
        })
    })
}()
