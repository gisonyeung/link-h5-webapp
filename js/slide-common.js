$(document).ready(function() {

	// 显示菜单
	// $('#menu').show();

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	$('.js-slideout-toggle').on('click', function() {
		slideout.toggle();
	});


	$(function() {



		// 检测info-panel高度
		var infoH = $('.info-panel').innerHeight();
		var headerH = $('#header').height();
		if ( infoH ) {
			$('#main').css('margin-top', (headerH + infoH) + 'px');
		}

		$('#main').css('min-height', ($(window).height() - infoH - headerH) + 'px');

	});

});