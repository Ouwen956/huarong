$(function () {
  // 存取款到账时间条
  let num = 0.00
  var timer = setInterval(function () {
    let ckhsdz = (num += 0.1).toString()
    ckhsdz = ckhsdz.substring(0, 3);
    $("#sec").html(ckhsdz)
    if (num > 8.8) {
      clearInterval(timer)
    }
  }, 8)
  let cknum = 0.00
  var timer1 = setInterval(function () {
    let ckhsdz = (cknum += 0.01).toString()
    ckhsdz = ckhsdz.substring(0, 4);
    $("#min").html(ckhsdz)
    if (cknum > 1.38) {
      clearInterval(timer1)
    }
  }, 10)

  // 右侧关闭按钮
  $('#float_close a').click(function () {
    $(this).parent().parent().parent().slideUp()
  })
  // 忘记密码
  $('.forget').click(function () {
    alert('请联系在线客服')
  })

  // 右侧广告滚动效果
  var menuYloc = $(".float").offset().top;

  $(window).scroll(function () {
    var offsetTop = menuYloc + $(window).scrollTop() + 10 + "px";
    $(".float").animate({
      top: offsetTop
    }, {
      duration: 500,
      queue: false
    });
  });

  // 顶部登录验证
  $('#loginSubmitBtn').on('click', function () {
    let TopUserName = $('#userName').val().trim(); //用户名表单
    let TopPassWord = $('#userPwd').val().trim(); //密码表单
    let TopYzm = $('#loginVcode').val().trim(); //验证码表单
    let Topreg = /^[A-Za-z1-9]{6,20}$/ //正则验证
    if (TopUserName == '' || !Topreg.test(TopUserName)) {
      alert('用户名格式错误')
    } else if (TopPassWord == '' || !Topreg.test(TopPassWord)) {
      alert('密码格式错误')
    } else if (TopYzm == '') {
      alert('验证码不能为空')
    } else {
      let From = $("#loginForm").serializeArray()
      JSON.stringify(From)
      console.log(From);
    }
  })

  $('#contact_form').submit(function () {
    let CheckPsw = $('.checkPw');
    if (CheckPsw.eq(0).val() !== CheckPsw.eq(1).val()) {
      alert('确认密码错误')
      return false;
    }
    let data = JSON.stringify($(this).serializeArray()) //需要传送的信息
    return false;
  })

  //规则说明的显示隐藏 
  $("#rules a").click(function () {
    $(this).next().slideToggle()
    $(this).next().siblings('.drop').slideUp()
  })
})