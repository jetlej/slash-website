$(function(){

	$.getJSON('https://api.github.com/repos/jetlej/taskslayer-releases/releases/latest').done(function(release) {
		let url = ''
		release.assets.forEach(function(asset){
			console.log(asset.name)
			if(asset.name.endsWith('.dmg')){
				console.log('It includes')
				url = asset.browser_download_url;
			}
		});
		if(url) $('.cta').attr('href', url);
	});

	var waypoint1 = $('.feature1').waypoint({
		handler: function(direction) {
			$('.feature1 video').get(0).play()
		}
	})

	var waypoint2 = $('.feature2').waypoint({
		handler: function(direction) {
			$('.focus-window').addClass('active')
		}
	})

	var waypoint3 = $('.feature3').waypoint({
		handler: function(direction) {
			$('.feature3').addClass('active')
		}
	})

})