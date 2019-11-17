$(function(){

	/*
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		$('.cta').attr('href', '')
		$('.cta + small').remove()
	} else {
		$.getJSON('https://api.github.com/repos/jetlej/slash-releases/releases/latest').done(function(release) {
			let url = ''
			release.assets.forEach(function(asset){
				console.log(asset.name)
				if(asset.name.endsWith('.dmg')){
					url = asset.browser_download_url;
				}
			});
			if(url) $('.cta').attr('href', url)
		});
	}
	*/

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
								message = "You already applied."
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
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
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