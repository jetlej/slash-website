$(function(){

	let platform = getOS()

	if (!['Mac OS', 'Windows'].includes(platform)){
		return true
	} else {
		$.getJSON('https://api.github.com/repos/jetlej/slash-releases/releases/latest').done(function(release) {
			let directUrl, macUrl, windowsUrl
			release.assets.forEach(function(asset){
				if(asset.name.endsWith('.dmg')){
					macUrl = asset.browser_download_url
				}
				if(asset.name.endsWith('.exe')){
					windowsUrl = asset.browser_download_url
				}
			})
			$('#download-mac').attr('href', macUrl)
			$('#download-windows').attr('href', windowsUrl)
			if(platform === 'Mac OS') { 
				$('.cta').data('platform', 'Mac').attr('href', macUrl)
			}
			else if(platform === 'Windows') {
				$('.cta').data('platform', 'Windows').attr('href', windowsUrl)
			}
		})
	}

	$('body').on('click', '.download', (e) => {
		let platform = $(e.currentTarget).data('platform')
		console.log(platform)
		if (platform) ga('send', 'event', 'Download', 'click', platform)
		else ga('send', 'event', 'Download', 'click', 'Download Page')
	})

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

	$(document).on('submit', 'form', function(e){

		e.preventDefault();

		if($(this).parent().hasClass('subscribe')){

			$(this).closest('.subscribe-form').removeClass('subscribe').addClass('submit')
			$(this).find('input').focus()

		}else if($(this).parent().hasClass('submit')){

			ajaxMailChimpForm($(this), $(".result"))

			function ajaxMailChimpForm($form, $resultElement){
				// Hijack the submission. We'll submit the form manually.

				if (!isValidEmail($form)) {
					var error =  "Please enter a valid email";
					$resultElement.addClass('error');
					$resultElement.html(error);
				} else {
					$resultElement.html('');
					$resultElement.removeClass('error');
					submitSubscribeForm($form, $resultElement);
				}
			}

			// Validate the email address in the form
			function isValidEmail($form) {
				// If email is empty, show error message.
				// contains just one @
				var email = $form.find("input[type='email']").val();
				if (!email || !email.length) {
					return false;
				} else if (email.indexOf("@") == -1) {
					return false;
				}
				return true;
			}

			// Submit the form with an ajax/jsonp request.
			// Based on http://stackoverflow.com/a/15120409/215821
			function submitSubscribeForm($form, $resultElement) {

				$('.subscribe-form').removeClass('submit').addClass('submitting')

				$.ajax({
					type: "GET",
					url: "https://getslash.us5.list-manage.com/subscribe/post-json?u=2e58ea2720a92579a1fd9ba6a&amp;id=bda01cf26f",
					data: $form.serialize(),
					cache: false,
					dataType: "jsonp",
					jsonp: "c", // trigger MailChimp to return a JSONP response
					contentType: "application/json; charset=utf-8",
					error: function(error){
						// According to jquery docs, this is never called for cross-domain JSONP requests
					},
					success: function(data){
						if (data.result != "success") {
							var message = data.msg || "Something went wrong! Please refresh the page and try again."
							$resultElement.addClass('error')
							if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
								message = "You're already subscribed."
								$resultElement.removeClass('error')
							}
							$resultElement.html(message);
							$('.subscribe-form').removeClass('submitting').addClass('submit')
						} else {
							$resultElement.removeClass('error')
							$resultElement.html('Keep an eye on your inbox')
							$form.find('span').text('You\'re on the list').closest('.subscribe-form').removeClass('submitting').addClass('success')
						}
					}
				})
			}
		}
	})
})

let interval

function changeStep(step){

	$('.icons > div').removeClass('active')
	$('.icons [data-step="'+ step +'"]').addClass('active')

	if(step === 1) {
		$('.app').removeClass('step2 step3 step4 active').addClass('step1')
		setTimeout(() => {
			$('.app').addClass('active')
		}, 500)
	}

	if(step === 2 || step === 4) {
		let time = 0
		$('.timer').text('0:00')
		$('.app').removeClass('step1 step3 active').addClass('step2')
		if(step === 2) $('.focus .task-text').text('Finish website design')
		else $('.focus .task-text').text('Send beta invites')
			setTimeout(() => {
				$('.app').addClass('active')
				clearInterval(interval)
				interval = setInterval(function(){
					time++
					let formattedTime = formatTimestamp(time)
					$('.timer').text(formattedTime)
				}, 1000)
			}, 500)
	}

	if(step === 3) {
		$('.app').removeClass('step1 step2 step4 active').addClass('step3')
		setTimeout(() => {
			$('.app').addClass('active')
		}, 500)
	}
}

function getOS() {
	var userAgent = window.navigator.userAgent,
	platform = window.navigator.platform,
	macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS'
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS'
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows'
	} else if (/Android/.test(userAgent)) {
		os = 'Android'
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux'
	}
	return os;
}

function formatTimestamp (time) {
	let hours, minutes
	let seconds = Math.abs(Math.round(time))
	if (!seconds) return

		hours = Math.floor(seconds / 3600)
	seconds %= 3600

	minutes = Math.floor(seconds / 60)
	if (hours) minutes = ('0' + minutes).slice(-2)

		seconds = ('0' + seconds % 60).slice(-2)
	return hours ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds
}