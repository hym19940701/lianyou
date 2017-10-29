

//侧边栏显示隐藏
//在使用animat时通过给侧边栏和主内容设置不同的动画速率，来规避同步动画时它们之间产生的间隙
~~function () {
    var flag = true;
    $('.navbar-header .nav-btn').on('click', function () {
        flag && $('.sidebar').animate({ 'width': '0' },450,'swing', function () { flag = false });
        flag && $('.content-main').animate({ 'padding-left': '0' }, 300, function () { flag = false });
        !flag && $('.content-main').animate({ 'padding-left': '196px' }, 450, 'swing', function () { flag = true });
        !flag && $('.sidebar').animate({ 'width': '196px' },300, function () { flag = true });
    })
}()


//侧边栏样式交互
~~function () {
    $('.a1>a').on('click', function () {
        var imgsrc = $(this).find('.arrow-icon').attr('src');
        imgsrc === 'static/img/vectorgraph/arrow-bottom.png'
        ? $(this).find('.arrow-icon').attr('src', 'static/img/vectorgraph/arrow-left.png')
        : $(this).find('.arrow-icon').attr('src', 'static/img/vectorgraph/arrow-bottom.png');
        $(this).parent().addClass('active-a1').siblings().removeClass('active-a1');
        console.log($(this).parent().find('ul'));
        $(this).parent().find('.nav-scond-level .a2').toggle();
        $(this).parent().siblings().find('.nav-scond-level .a2').css('display', 'none')
    })
}()

var homelink = $('#homelink').attr('href')
var href = homelink + window.location.search
$('#homelink').attr('href', href)
$('#homelink')[0].click()
//动态添加侧边栏
// var a1 = [];
// var a2 = [];
// $.get('./sidebar.txt', function (data, stauts) {
//     var sidebarData = JSON.parse(data).sidebar
//     for (var i in sidebarData) {
//         //console.log(sidebarData[i])
//         var key = Object.keys(sidebarData[i])[0];
//         var value=sidebarData[i][key]
//         a1.push(key)
//         a2.push(value)
//         console.log(key,sidebarData[i][key])
//     }
//     var ja1span = $('.a1>a>span')
//     for (var i in ja1span) {
//         ja1span.eq(i).html(a1[i])
//         var ja2span = ja1span.eq(i).parent().parent()
//         console.log('ja2', ja2span[0], i)
//         if (ja2span.find('.a2')) {
//             for (var j in ja2span.find('.a2')) {
//                 ja2span.find('.a2').eq(j).find('span').html(a2[i][j])
//             }
//         }
//     }
// })
