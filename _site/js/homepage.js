$(function(){

	var controller = new ScrollMagic.Controller();

	var focusMode1 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', duration: 1000})
	.setTween(TweenMax.to(".app-window", 1, {width: 350, height: 50, bottom: '20px', borderRadius: '7px', ease: "power2.inOut"}))
	.addTo(controller)

	var focusMode2 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', duration: 375})
	.setTween(TweenMax.to(".app-window .list", 1, {opacity: 0,display: 'none', ease: "expo.out"}))
	.addTo(controller)

	var focusMode3 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', offset: 500, duration: 350})
	.setTween(TweenMax.from(".app-window .focus", 1, {opacity: 0, ease: "power1.inOut"}))
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 3000})
	.setPin(".sub-hero", {pushFollowers: true})
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 500, offset: 500})
	.setTween(TweenMax.from(".sub-hero h2 p:first-child", 1, {opacity: 0, scale: 0.8}))
	.on('leave', startTimer)
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 500, offset: 1500})
	.setTween(TweenMax.from(".sub-hero h2 p:last-child", 1, {opacity: 0, scale: 0.8}))
	.on('leave', startTimer)
	.addTo(controller)

	function startTimer() {
		let time = 0
		$('.timer').text('0:00')
		clearInterval(interval)
		interval = setInterval(function(){
			time++
			let formattedTime = formatTimestamp(time)
			$('.timer').text(formattedTime)
		}, 1000)
	}

	var waypoint1 = $('.feature-focus').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.focus-window').addClass('active')
		}
	})

	var waypoint2 = $('.feature-flow').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.feature-flow').addClass('active')
		}
	})

	var waypoint3 = $('.feature-integrations').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.feature-integrations').addClass('active')
		}
	})

	let interval, stepInterval, intervalSet = null

	let waypoint4 = $('.icons').waypoint({
		offset: 200,
		handler: function(direction) {
			if(!intervalSet){
				intervalSet = true
				let stepCount = 2
				setTimeout(()=>{
					changeStep(stepCount)
				}, 400)
				stepInterval = setInterval(function(){
					stepCount++
					if(stepCount === 5) stepCount = 1
					changeStep(stepCount)
				}, 3000)
			}
		}
	})

	$('.icons > div').on('click', (e) => {
		clearInterval(stepInterval)
		let stepNumber = $(event.currentTarget).data('step')
		changeStep(stepNumber)
	})

	$('.icons img').each(function(){
		var $img = $(this)
		var imgClass = $img.attr('class')
		var imgURL = $img.attr('src')
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg')
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg')
			}
			$svg = $svg.removeAttr('xmlns:a')
			$img.replaceWith($svg)
		}, 'xml')
	})
})