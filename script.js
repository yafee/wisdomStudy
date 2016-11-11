$(function() {
  var test = document.getElementsByTagName("body")[0].style;
  if (typeof test.animation != "undefined" || typeof test.WebkitAnimation != "undefined") {
    alert("浏览器支持CSS3动画！");
  } else {
    alert("浏览器不支持CSS3动画！");
  }
  $('#fullpage').fullpage({
    loopBottom: true,
    scrollingSpeed: 600,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    afterLoad: function(anchorLink, index) {
      $('.section').eq(index - 1).find('.sectionText').addClass('textAnimate');
      $('.section').eq(index - 1).find('.sectionImg').addClass('imgAnimate');
      $('.section').eq(index - 1).find('.keywords').addClass('keywordsAnimate');
    },
    onLeave: function(anchorLink, index) {
      $('.section').eq(index - 1).find('.sectionText').removeClass('textAnimate');
      $('.section').eq(index - 1).find('.sectionImg').removeClass('imgAnimate');
      $('.section').eq(index - 1).find('.keywords').removeClass('keywordsAnimate');
    }
  });
});
