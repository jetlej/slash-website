$(function(){

	let tapfiliateId = null
    tap('getTrackingId', null, function(trackingId) {
      tapfiliateId = trackingId
    })

    let platform = getOS()

	if (!['Mac OS', 'Windows'].includes(platform)){

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
		if(!platform) platform = 'Download Page'
		console.log(platform)
		gtag('event', 'Download', {
			'event_category': 'Downloads',
			'event_label': platform,
		})
	})

	$(document).on('submit', '.button-form', function(e){
		e.preventDefault()

		if ($(this).parent().hasClass('subscribe')) {

			$(this).closest('.subscribe-form').removeClass('subscribe').addClass('submit')
			$(this).find('input').focus()

		} else if($(this).parent().hasClass('submit')) {

			let action = $(this).parent().hasClass('download-form') ? 'download' : 'subscribe'
			ajaxMailChimpForm($(this), $(".result"), action)
		}
	})

	function ajaxMailChimpForm($form, $resultElement, action) {

		if (!isValidEmail($form)) {
			var error =  "Please enter a valid email"
			$resultElement.addClass('error')
			$resultElement.html(error)
		} else {
			$resultElement.html('')
			$resultElement.removeClass('error')

			if (action === 'download') {
				registerEmail($form, $resultElement)
			} else { 
				mailchimpSubscribe($form, $resultElement)
			}
		}
	}

	// Validate the email address in the form
	function isValidEmail($form) {
		var email = $form.find("input[type='email']").val()
		if (!email || !email.length) {
			return false
		} else if (email.indexOf("@") == -1) {
			return false
		}
		return true
	}

	function registerEmail($form, $resultElement) {

		$('.subscribe-form').removeClass('submit').addClass('submitting')

		$resultElement.removeClass('error')
		$resultElement.html('')

		let data = { email: $form.find('input').val() }
    	if (tapfiliateId) data.affiliateId = tapfiliateId

    	let url = 'https://api.taskslayer.io/auth/register-new'
    	// let url = 'https://slash-api.hkek.app/auth/register-new'

    	$.ajax({
    		type: 'POST',
    		dataType: 'json',
    		url: url,
    		data: data,
    		success: function (message) {
    			console.log(message)
    			$resultElement.html('Check spam just in case!')
    			$form.find('span').text('Check your email').closest('.subscribe-form').removeClass('submitting').addClass('success')
    		},
    		error: function (xhr, error) {
    			var message = xhr.responseText || "Something went wrong! Please refresh the page and try again."
    			$resultElement.addClass('error')
    			$resultElement.html(message);
    			$('.subscribe-form').removeClass('submitting').addClass('submit')
    		}
    	})
	}

	function mailchimpSubscribe($form, $resultElement) {

		$('.subscribe-form').removeClass('submit').addClass('submitting')

		$.ajax({
			type: "GET",
			url: "https://getslash.us5.list-manage.com/subscribe/post-json?u=2e58ea2720a92579a1fd9ba6a&amp;id=bda01cf26f",
			data: $form.serialize(),
			cache: false,
			dataType: "jsonp",
			jsonp: "c",
			contentType: "application/json; charset=utf-8",
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