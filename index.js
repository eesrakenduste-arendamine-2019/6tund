/*jshint esversion:6*/
$(document).ready(function(){
  $('li').css({'list-style-type':'none'});
  $('li:even').css({'background-color':'blue'});
  $('li:odd').css({'backgroundColor':'yellow', 'border':'2px solid red'});
  $('title').text('JQuery');

  $('#pic-container img').css({'width':'20vw'});

  let selectedPic = $('.active').attr('src');

  $('li.list-item').html('<img src="' + selectedPic + '">').hide().fadeIn(1000);
  $('ul img').css({'width':'80vw'});

  $('#pic-container img').click(function(){
    $('img.active').removeClass('active');
    $(this).addClass('active');
    selectedPic = $(this).parent().find('.active').attr('src');

    $('li.list-item').html('<img src="' + selectedPic + '">').hide().fadeIn(1000);
    $('ul img').css({'width':'80vw'});
  });

  $('#next').on('click', picForward);
  $('#prev').on('click', picBackward);

  function picForward(){
    selectedPic = $('img.active').next();
    let currentPic = $('img.active');

    if(selectedPic.length){
      selectedPic.addClass('active');
      currentPic.removeClass('active');

      $('li.list-item').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(1000);
      $('ul img').css({'width':'80vw'});
    }else{
      selectedPic = $('#pic-container img').siblings(':first').prev();
      currentPic.removeClass('active');
      selectedPic.addClass('active');

      $('li.list-item').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(1000);
      $('ul img').css({'width':'80vw'});
    }


  }

  function picBackward(){
    selectedPic = $('img.active').prev();
    let currentPic = $('img.active');

    if(selectedPic.length){
      selectedPic.addClass('active');
      currentPic.removeClass('active');

      $('li.list-item').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(1000);
      $('ul img').css({'width':'80vw'});
    }else{
      selectedPic = $('#pic-container img').siblings(':last').next();
      currentPic.removeClass('active');
      selectedPic.addClass('active');

      $('li.list-item').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(1000);
      $('ul img').css({'width':'80vw'});
    }
  }

  // tuletame meelde php-d
  // vorm pildi üles laadmiseks
  // php laeme pildi üles
  // php kuvame välja - foreach
  // JQuery'ga galerii ilusaks
  // <- -> klaviatuuril liigutavad pilte edasi-tagasi - keydown eventListener
  //








  // console.log($('#container').html());
  // $('#container').html('Tere');
  // console.log($('#container').html());
  // $('li').hide(1000);
  // $('li').show(2000);

  // $('li').fadeOut(2000);
  // $('li').fadeIn(1500);
  // $('li').fadeToggle(1500);
  // $('li').fadeToggle(1500);
  // $('li').slideUp('slow');
  // $('li').slideDown('fast');
  // $('li').slideToggle(1500);
  // $('li').slideToggle(1500);
//$('li').slideToggle(1500).slideToggle(1000).slideUp('slow').slideDown('fast');
  // $('li').animate({
  //   duration: '2000',
  //   width: '200px',
  //   height: "50px",
  //   opacity: '0.5'
  // });

});
