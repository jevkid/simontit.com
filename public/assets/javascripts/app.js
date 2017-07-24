var app = function() {
  var module = {};

  module.textChange = function(){    

    $('html').on('click focus', '[data-scroll]', function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 700);
    });

    $('html').on('click focus', 'a.btn-link', function(e){
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 700);
    });
  };
  
  $(document).on('ready', function(){
    app.textChange();
  });

  return module;
}();
