  $(function(){
    $(".notification").slideDown(1000);
    $(".clear").click(function(){
      $(".notification").fadeOut();
    });

  $(window).scroll(function(){
    //console.log($(this).scrollTop);
    if ($(this).scrollTop()>200){
      $(".arrowup").fadeIn(500);
    } else {
      $(".arrowup").fadeOut(500);
    }
  });

  $(".help").mouseover(function(){
    $(this).animate({
      "width":"30px"
    });
  });

    $(".help").mouseout(function(){
      $(this).animate({
        "width":"20px"
      });
    });
    $(".search a, .footer-search a").click(function(){
      $(".overlaybox").slideDown();
      return false;
    });
    $(".box-clear").click(function(){
      $(this).parent().parent("div").slideUp();
      $(".inputtext").val("");
    });

    $('.overlaybox').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });

    $(".box-search").hover(function(){
      $(this).children().css("color","darkred");
    }, function(){
      $(this).children().css("color","red");
    });


  });
