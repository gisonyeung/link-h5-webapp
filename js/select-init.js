$(function() {
	var curr = new Date().getFullYear();


	var opt = {
		time: {
			preset: 'time'
		},
		select: {
			preset: 'select'
		},
		config: {
			theme: 'android-ics light',
			mode: 'scroller',
			display: 'bottom',
			lang: 'zh',
		}
	};

	$('.time-select')
		.val('')
		.scroller('destroy')
		.scroller($.extend(opt.time, opt.config));

	$('.text-select')
			.children('.hidden-select')
			.val('')
			.scroller('destroy')
			.scroller($.extend(opt.select, opt.config));

});