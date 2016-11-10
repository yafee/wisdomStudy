$(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    scrollingSpeed: 600,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
  	afterLoad:function(anchorLink,index){
  		$('.section').eq(index-1).find('.sectionText').addClass('textAnimate');
  		$('.section').eq(index-1).find('.sectionImg').addClass('imgAnimate');
  		$('.section').eq(index-1).find('.keywords').addClass('keywordsAnimate');
  	},
  	onLeave:function(anchorLink,index){
  		$('.section').eq(index-1).find('.sectionText').removeClass('textAnimate');
  		$('.section').eq(index-1).find('.sectionImg').removeClass('imgAnimate');
  		$('.section').eq(index-1).find('.keywords').removeClass('keywordsAnimate');
  	}
  });
});
