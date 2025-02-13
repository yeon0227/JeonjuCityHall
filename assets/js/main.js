
// btn-top opacity
$(window).scroll(function(e){
  e.preventDefault();
  curr = $(this).scrollTop();
  target = $('.inner-cont2').offset().top;
  if (curr > target - (window.innerHeight/2) ) {
    $('.btn-top').addClass('scroll');
  } else {
    $('.btn-top').removeClass('scroll');
  }
})

// header nav
$('#header .nav .nav-item').hover(function(){
  subH = $(this).find('.depth2-list').height();
  $('#header').css('--height', `calc(${subH} + 40)`);
  $(this).find('.depth2-list').addClass('show');
}, function(){
  $('#header').css('--height',0);
  $(this).find('.depth2-list').removeClass('show');
});

// dark mode
$('#header .group-top .dark').click(function (e) { 
  e.preventDefault();
  let isDarkMode = $('html').attr('data-dark') == 'true';

  $('html').attr('data-dark', !isDarkMode); // 다크 모드 상태 변경

  // 다크 모드 상태에 따라 텍스트 변경
  $('.util-item:last-child .dark').text(isDarkMode ? '다크모드' : '라이트모드');
});

// sc-news 주요뉴스 swiper-slide
const news1Slide = new Swiper('.sc-news #newsTab1 .swiper',{
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  speed: 1000,
  navigation:{
    nextEl:".sc-news #newsTab1 .next",
    prevEl:".sc-news #newsTab1 .prev",
  },
  on:{
    "init":function(){
      $('.sc-news #newsTab1 .total').text(this.slides.length);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');     
      $('.sc-news #newsTab1 .desc').text(desc);
    },
    "slideChange":function(){
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-news #newsTab1 .curr').text(this.realIndex+1);
      $('.sc-news #newsTab1 .desc').text(desc);
    }
  }
});
// sc-news 시민참여 swiper-slide
const news2Slide = new Swiper('.sc-news #newsTab2 .swiper',{
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  speed: 1000,
  navigation:{
    nextEl:".sc-news #newsTab2 .next",
    prevEl:".sc-news #newsTab2 .prev",
  },
  on:{
    "init":function(){
      $('.sc-news #newsTab2 .total').text(this.slides.length);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-news #newsTab2 .desc').text(desc);
    },
    "slideChange":function(){
      $('.sc-news #newsTab2 .curr').text(this.realIndex+1);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-news #newsTab2 .desc').text(desc);
    }
  }
}); 

news2Slide.autoplay.stop();

// sc-news 주요뉴스 swiper-slide 일시정지
$('.sc-news #newsTab1 .pause').on('click',function(){
  $(this).toggleClass('auto');

  if($(this).hasClass('auto')){
    news1Slide.autoplay.stop();
  } else {
    news1Slide.autoplay.start();
  }
})
// sc-news 시민참여  swiper-slide 일시정지
$('.sc-news #newsTab2 .pause').on('click',function(){
  $(this).toggleClass('auto');

  if($(this).hasClass('auto')){
    news2Slide.autoplay.stop();
  } else {
    news2Slide.autoplay.start();
  }
})
// sc-news tab-menu
$('.sc-news .tab').click(function (){ 
  tabName = $(this).data('tab');

  $('.sc-news .group-content').removeClass('active');
  $(tabName).addClass('active');

  $('.sc-news .tab').removeClass('active');
  $(this).addClass('active');

  if ($(this).hasClass('tab1')) {
    news2Slide.autoplay.stop();
    news1Slide.autoplay.start();
    if($('#newsTab1 .pause').hasClass('auto')){
      news1Slide.autoplay.stop();
    }
  } else {
    news1Slide.autoplay.stop();
    news2Slide.autoplay.start();
    if($('#newsTab2 .pause').hasClass('auto')){
      news2Slide.autoplay.stop();
    }
  }
});
// sc-news modal
$('.sc-news .group-content .all-view').click(function (e) { 
  e.preventDefault();
  $('body').addClass('scroll-hidden');
  $('.sc-news .group-modal').addClass('show');
});
$('.sc-news .group-modal .close').click(function (e) { 
  e.preventDefault();
  $('body').removeClass('scroll-hidden');
  $('.sc-news .group-modal').removeClass('show');
});

// sc-notice Tabmenu
$('.sc-notice .notice-list .menu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');
  
  $('.sc-notice .notice-list .menu').removeClass('active');
  $(this).addClass('active');

  $('.sc-notice .notice-list .con-list').removeClass('show');
  $(tabName).addClass('show');
});

// sc-event Slide
const eventSlide = new Swiper('.sc-event .content-area .swiper',{
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  speed: 1000,
  lazy : {
    loadPrevNext : true
  },
  navigation:{
    nextEl:".sc-event .control-area .next",
    prevEl:".sc-event .control-area .prev"
  },
  on:{
    "init":function(){
      $('.sc-event .fraction .total').text(this.slides.length);
    },
    "slideChange":function(){
      $('.sc-event .fraction .curr').text(this.realIndex+1);
    }
  }
})

// sc-banner swiper-slide
const bannerSlide = new Swiper ('.sc-banner .group-banner .swiper',{
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  speed: 1000,
  lazy : {
    loadPrevNext : true
  },
  navigation:{
    nextEl:".sc-banner .control .next",
    prevEl:".sc-banner .control .prev",
  },
  on:{
    "init":function(){
      $('.sc-banner .fraction .total').text(this.slides.length);
    },
    "slideChange":function(){
      $('.sc-banner .fraction .curr').text(this.realIndex+1);
    }
  }
})
// sc-banner swiper-slide 일시정지
$('.sc-banner .control .pause').on('click',function(){
  $(this).toggleClass('auto');

  if($(this).hasClass('auto')){
    bannerSlide.autoplay.stop();
  } else {
    bannerSlide.autoplay.start();
  }
})
// sc-banner modal
$('.sc-banner .all-view').click(function(e) { 
  e.preventDefault();
  $('body').addClass('scroll-hidden');
  $('.sc-banner .group-modal').addClass('active');
});
$('.sc-banner .group-modal .close').click(function(e) { 
  e.preventDefault();
  $('body').removeClass('scroll-hidden');
  $('.sc-banner .group-modal').removeClass('active');
});

// sc-policy tab-menu
$('.sc-policy .tab-list .tab-menu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.sc-policy .tab-list .tab-menu').removeClass('active');
  $(this).addClass('active');

  $(tabName).addClass('show').siblings().removeClass('show');
}); 
// sc-policy modal
$('.sc-policy .plus').click(function(e) { 
  e.preventDefault();
  $('body').addClass('scroll-hidden');
  $('.sc-policy .group-modal').addClass('active');
});
$('.sc-policy .group-modal .btn-close').click(function(e) { 
  e.preventDefault();
  $('body').removeClass('scroll-hidden');
  $('.sc-policy .group-modal').removeClass('active');
});

// // sns Slide
const snsSlide = new Swiper ('.sc-sns .content .swiper',{
  slidesPerView : 2,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  loop:true,
  lazy : {
    loadPrevNext : true
  },
  speed:1000,
  navigation:{
    nextEl:".sc-sns .swiper-bottom .next",
    prevEl:".sc-sns .swiper-bottom .prev"
  },
  on:{
    "init":function(){
      $('.sc-sns .fraction .total').text(this.slides.length);
    },
    "slideChange":function(){
      $('.sc-sns .fraction .curr').text(this.realIndex+1);
    }
  }
})
// sns Slide autoplay
$('.sc-sns .swiper-bottom .pause').on('click',function(){
  $(this).toggleClass('auto');

  if($(this).hasClass('auto')){
    snsSlide.autoplay.stop();
  } else {
    snsSlide.autoplay.start();
  }
})

// btn-top
// $('.btn-top').click(function () { 
//   window.scrollTo({top:0,behavior:"smooth"}) 
// }); 

// footer sitemap Slide
const sitemapSlide = new Swiper ('.sitemap-area .swiper',{
  loop: true,
  slidesPerView : 'auto',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  speed: 1000,
  navigation:{
    nextEl:".sitemap-area .swiper-control .next",
    prevEl:".sitemap-area .swiper-control .prev"
  }
})
// footer sitemap Slide 일시정지
$('.sitemap-area .swiper-control .pause').on('click',function(){
  $(this).toggleClass('auto');

  if($(this).hasClass('auto')){
    sitemapSlide.autoplay.stop();
  } else {
    sitemapSlide.autoplay.start();
  }
})

// footer link-area slideUp
$('#footer .link-list .plus').click(function (e) { 
  e.preventDefault();
  
  if ($(this).hasClass('on')) {
    $(this).removeClass('on').siblings('.box').stop().slideUp();
  } else {
    $('#footer .link-list .item').removeClass('on').siblings('.box').stop().slideUp();
    $(this).addClass('on').siblings('.box').stop().slideDown();
  }
});

$('#footer .link-item').mouseleave(function(){
  $('#footer .link-list .item').removeClass('on').siblings('.box').stop().slideUp();
});