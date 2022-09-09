$(".slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$(".collection_slider").slick({
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

jQuery( '.slider_year' ).slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.time_slider_one',
  arrows: false,
  dots: false,
  autoplay: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
  		centerMode: false,	
         slidesToShow: 8,
        arrows: true,	
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
  		centerMode: false,
        slidesToShow: 8,
        arrows: true,	
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
  		centerMode: false,
        slidesToShow: 8,
        arrows: true,	
        infinite: true,
      }
    }
  ]
});

$('.time_slider_one').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumbers = nextSlide;
  $('.slider_year .slick-slide').removeClass('slick-current');
  $('.slider_year .slick-slide').eq(mySlideNumbers).addClass('slick-current');
});

jQuery( '.time_slider_one' ).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
   fade: true,
    cssEase: 'ease-in-out',
  asNavFor: '.slider_year',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },{
    breakpoint: 790,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },{
    breakpoint: 520,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

function showds(para) {
  $('#tab'+para).slideToggle('1000');
  //$('#q'+para +' '+'i').toggleClass("ion-android-remove");

  if($('#q'+para +' '+'i').hasClass('fa-chevron-down')){
    $('#q'+para +' '+'i').addClass("fa-chevron-up");
    $('#q'+para +' '+'i').removeClass("fa-chevron-down");
  } else {
    $('#q'+para +' '+'i').addClass("fa-chevron-down");
    $('#q'+para +' '+'i').removeClass("fa-chevron-up");
  }
}

/*
$(function() {  
  $('.btn-5')
  .on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  });
  $('[href=#]').click(function(){return false});
});
*/

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});

/*
$(document).ready(function() {
  var dialogShown = localStorage.getItem('dialogShown')
  // .bodytop  class in body div
  if (!dialogShown) {
    setTimeout(function() {
      $(".one").fadeIn();
      $('.bodytop').css({ 'overflow': 'hidden' });
    },10000);
  }
  else {
    $(".one").hide();
    $('.bodytop').css({ 'overflow': 'visible' });
  }
});
*/

function pop() {
  $(".one").fadeIn();
  $('.bodytop').css({ 'overflow': 'hidden' });
}

function closepop() {
  $('.one').fadeOut(); // Now the pop up is hiden.
  $('.bodytop').css({ 'overflow': 'visible' });
  //localStorage.setItem('dialogShown', 1)
}

function showds(para) {
  $('#tab'+para).slideToggle('1000');
  //$('#q'+para +' '+'i').toggleClass("ion-android-remove");

  if($('#q'+para +' '+'i').hasClass('fa-chevron-down')){
    $('#q'+para +' '+'i').addClass("fa-chevron-up");
    $('#q'+para +' '+'i').removeClass("fa-chevron-down");
  } else {
    $('#q'+para +' '+'i').addClass("fa-chevron-down");
    $('#q'+para +' '+'i').removeClass("fa-chevron-up");
  }
}

/*
$(function() {  
  $('.btn-5')
  .on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  });
  $('[href=#]').click(function(){return false});
});
*/

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function reset_acc(para) {
  $('#tab'+para).slideToggle('1000');
  //$('#q'+para +' '+'i').toggleClass("ion-android-remove");

  if($('#q'+para +' ').hasClass('acc-active')){
    $('#q'+para +' ').addClass("acc-dactive");
    $('#q'+para +' ').removeClass("acc-active");
  } else {
    $('#q'+para +' ').addClass("acc-active");
    $('#q'+para +' ').removeClass("acc-dactive");
  }
}

$(document).ready( function() {
  $(window).scroll(function() {        
    if($(window).scrollTop() < 1) {
      $(".banner--clone").removeClass('banner--stick');    
      $("#bodytop").css({'padding-top': '0px'});                        
    } else {             
      $(".banner--clone").addClass('banner--stick');
      $("#bodytop").css({'padding-top': jQuery('.banner--clone').outerHeight()-5});                        
    }
  });

  jQuery(window).on('resize', function(){
    if($(window).scrollTop() < 1) {
      $(".banner--clone").removeClass('banner--stick');    
      $("#bodytop").css({'padding-top': '0px'});                        
    } else {             
      $(".banner--clone").addClass('banner--stick');
      $("#bodytop").css({'padding-top': jQuery('.banner--clone').outerHeight()-5});                        
    }
  });
});

//AOS.init({once: true});