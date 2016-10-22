$(document).ready(function() {
  OAuth.initialize('DMagtFxez3eK9mmTO_RhvTMCsmE');
  $(document).on('click', 'span.login-text a', function(e) {
    e.preventDefault()
    $('#register').addClass('animated fadeOutLeft')

    var switchToLogin = $.ajax({
      url: '/users/login',
      type: 'get'
    })
    switchToLogin.done(function(data) {
      $('#register').replaceWith(data)
      // window.location.replace('/login')

      // $('#login').addClass('animated fadeInRight')
    })
  })
  //
  $(document).on('click', 'span.register-text a', function(e) {
    e.preventDefault()
    $('#login').removeClass('fadeInRight')
    $('#login').addClass('animated fadeOutLeft')
    var switchToRegister = $.ajax({
      url: '/users/new',
      type: 'get'
    })
    switchToRegister.done(function(data) {
      $('#login').replaceWith(data)
      // window.location.replace('/register')
      // $('#register').addClass('animated fadeInLeft')
    })
  })

  $('#bars').on('click', function() {
    if($('.sidebar').css('left') == '0px') {
      $('.search-bar').animate({
      left: "-200px",
      position: 'relative'
    }, 600, function() {
      // Animation complete.
    });
      $('.sidebar').animate({
      left: "-185",
    }, 300, function() {
      // Animation complete.
    });
  } else {
    $('.search-bar').animate({
    left: "0",
    position: 'relative'
  }, 300, function() {
    // Animation complete.
  });
    $('.sidebar').animate({
    left: "0",
  }, 300, function() {
    // Animation complete.
  });
  }
  })
})
