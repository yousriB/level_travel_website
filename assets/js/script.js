$( function() {
    $( "#inputCheckOut" ).datepicker();
    $( "#inputCheckIn" ).datepicker();
    $('.level-slider').slick({
        dots:true,
        slidesToShow:2,
        SlidesToScroll:1,
        arrows:false,
      });


      function videotoggel(){
        video = $('.level-video').get(0)
        if(video.paused){
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();
        }else{
            video.pause();
            $('.video-control-pause').hide();
            $('.video-control-play').show();
        }
      }
      $('.video-control-play').click(function(){
        videotoggel();
      })
      $('.video-control-pause').click(function(){
        videotoggel();
      })
  } );