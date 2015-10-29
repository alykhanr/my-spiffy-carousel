$(function(){

	var slideWidth = $('.slide').width(),
		slidecount = $('slide').size(),
		clicks = 0;

	$('.tray').width(slideWidth * slidecount);

	$('.next').click(function(){
		if (clicks < slidecount - 1) {
			clicks += 1;
		} 	else {
			clicks = 0;
		}
		var slidedistance = slideWidth * clicks;
		$('.tray').animate({'right':slidedistance},600);


	});

		$('.prev').click(function(){
		if (clicks >0) {
		clicks -= 1;
		} else {
		clicks = slidecount - 1;	
		}

		var slidedistance = slideWidth * clicks;
		$('.tray').animate({'left':slidedistance},600);

	});

		$('.prev, .next').hide();

		$('frame').hover(function(){
			$('.prev, .next').show();
		}, function(){
			$('.prev, .next').hide();
		}
		})
});