$(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    css3: true,
    afterLoad: function(anchorLink, index) {
      goAnimation('sectionText',index);
      goAnimation('sectionImg',index);
      goAnimation('keywords',index);
    },
    onLeave: function(anchorLink, index) {
      backAnimation('sectionText',index);
      backAnimation('sectionImg',index);
      backAnimation('keywords',index);
    }
  });
  function goAnimation(ele,index){
  	$('.'+ele).eq(index-2).addClass(ele+'Animate');
  }
  function backAnimation(ele,index){
  	$('.'+ele).eq(index-2).removeClass(ele+'Animate');
  }
});
