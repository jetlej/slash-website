$(function(){

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