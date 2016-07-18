
$(".menu > ul > li").each(function() {
	$(this).click(function(){
	 	$(".menu > ul > li").css('background-color',"#fff");
		if ($(this).find("ul").length != 0) {
			$(this).css('background-color',"#f2f2f2");
			if ($(this).hasClass('active')) {
				$(".menu > ul > li").css('background-color',"#fff");
				$(this).removeClass('active');		
			}
			else {
				$(".menu > ul > li").removeClass('active');
				$(this).addClass('active');
			}
			return false;
		}
		else {
			$(".menu > ul > li").removeClass('active');
		}
 	})				  
});



$(document).mouseup(function (e) {
    var container = $(".menu > ul > li > ul");
    if (container.hasClass('active').length === 0){
		$(".menu > ul > li").css('background-color',"#fff");
    }
});

$(function(){
  $(document).click(function(event)  {
    if ($(event.target).closest(".menu > ul > li").length) return;
    	$(".menu > ul > li").removeClass('active');
		$(".menu > ul > li").css('background-color',"#fff");
    	event.stopPropagation();
  });
});


$(".menu > ul > li > ul > li").hover(function() {
			$(".menu > ul > li > ul > li").parent('ul').height('auto')
			$(".menu > ul > li > ul > li").children('ul').css('display','none');

			var height = $(this).parent('ul').height();
			if ( height < $(this).children('ul').height() ) {
				height = $(this).children('ul').height()
			}
	
			$(this).parent('ul').height(height+'px');
			$(this).children('ul').css({
				"display": "block",
				"left": "100%",
				"top": 0,
				"height": height+'px',
			})
		}, 
		function() {
			$(this).height('auto');
			
		 }
);
  

$('.main-header .mob-menu').click ( function (){
		$('.main-header .menu').toggle();
})

$('.invision form').submit(function (){
	$('.invision form .form-input input').each(function () {
		$(this).val();
		if($(this).val() == ""){
			$(this).addClass('error')
		}
	})
	return false;
})


$('.invision form .form-input input').each(function(){
	$(this).keypress(function(){
		if ($(this).hasClass('error')) {
			$(this).removeClass('error')
		}
		var text = $(this).prevAll('label').text();
		$(this).prevAll('label').text("");
	})
})

$('footer .conter-footer .nav .media-box p').each(function() { 
	$(this).click(function(){
		if ($(window).width() <= 767 ){
			$(this).next('ul').toggle();
		}
		})
})