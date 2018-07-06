window.onload = function () {
  var contentList = document.querySelectorAll('#app .content>div')
  var guideItems = document.querySelectorAll('#app .guide_item')
  var loginOrRegister = document.querySelectorAll('.login_content>form>div')
  var loginA = document.querySelectorAll('.login_header_title>a')
  var profileLink = document.querySelector('#app .profile-link')
  var goBack = document.querySelector('.go_back')
  var headerLogin = document.querySelector('.header_login')
  var login = document.querySelector('#app>div')



  //swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    }
  })

  // footer tab切换
  for (var i = 0; i < guideItems.length; i++) {
    var item = guideItems[i]
    // 为什么必须这样写？
    item.index = i
    item.addEventListener('touchend',function () {
      for (var i = 0; i < guideItems.length; i++) {
        guideItems[i].className = 'guide_item'
        contentList[i].className = ''
      }
      this.className = 'guide_item on'
      contentList[this.index].className = 'on'
    })
  }
  //切换手机号登陆/密码登陆
  for (var i = 0; i < loginA.length; i++) {
    loginA[i].index = i
    loginA[i].addEventListener('touchend', function () {
      for (var i = 0; i < loginOrRegister.length; i++) {
        loginA[i].className = ''
        loginOrRegister[i].className = ''
      }
      this.className = 'on'
      loginOrRegister[this.index].className = 'on'
    })
  }

  //控制登陆界面的on/off
  profileLink.addEventListener('touchend', function () {
    login.className = 'on'
  })
  goBack.addEventListener('touchend', function () {
    login.className = 'off'
  })

  //点击首页的登录注册 跳转到登录注册
  headerLogin.addEventListener('touchend', function () {
    login.className = 'on'
  })


}


