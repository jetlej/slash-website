$(function() {
  let windowWidth = $(window).width()
  let windowHeight = $(window).height()
  let mobile = windowWidth < 600
  let shortScreen = !mobile && windowHeight < 900
  let interval

  let taskInterval
  function planDay() {
    if (taskInterval) clearInterval(tasksInterval)
    $('.plan-day .tasks > div').removeClass('moving')
    let count = 0
    let top = 20
    tasksInterval = setInterval(() => {
      count++
      $this = $('.plan-day .tasks > div:nth-child(' + count + ')')
      $this.addClass('moving')
      // $('.plan-day .list:first-child .tasks').css({'transform' : 'translateY(-' + count * top +'px)'});
      if (count === 3) clearInterval(tasksInterval)
    }, 1000)
  }

  let endDayTimeline = anime.timeline({ loop: false, autoplay: false }).add({
    targets: '.end-day .task-list',
    opacity: [0, 1],
    duration: 1,
    easing: 'easeOutQuad'
  })

  $('.end-day .completed-task').each((index, task) => {
    let line = task.querySelector('.line')
    let text = task.querySelector('.text')

    let firstOffset = index === 0 ? '+=250' : '-=100'

    let zoomScale = mobile ? 0.75 : 1

    endDayTimeline
      .add(
        {
          targets: task,
          translateX: [
            { value: -50, duration: 1, delay: 0 },
            {
              value: '0%',
              duration: 300,
              delay: 0,
              easing: 'easeOutElastic(1, 1.2)'
            }
          ],
          scale: [
            { value: zoomScale, duration: 1, delay: 0 },
            { value: 0.5, duration: 200, delay: 450 }
          ],
          opacity: [
            { value: 0, duration: 1, delay: 0 },
            { value: 1, duration: 200, delay: 0 },
            { value: 0.5, duration: 200, delay: 150 }
          ],
          easing: 'easeOutQuad'
        },
        firstOffset
      )
      .add(
        {
          targets: line,
          width: [
            { value: 0, duration: 1, delay: 0 },
            { value: '100%', duration: 200, delay: 200 }
          ],
          easing: 'easeOutQuad'
        },
        '-=700'
      )
      .add(
        {
          targets: text,
          opacity: [
            { value: 1, duration: 1, delay: 0 },
            { value: 0.5, duration: 200, delay: 200 }
          ],
          easing: 'easeOutQuad'
        },
        '-=300'
      )
  })

  endDayTimeline
    .add(
      {
        targets: '.end-day .task-list',
        opacity: 0,
        duration: 400,
        easing: 'linear'
      },
      '+=250'
    )
    .add({
      targets: '.end-day .part2',
      opacity: [0, 1],
      duration: 400,
      easing: 'linear'
    })
    .add({
      targets: '.end-day .part2 .progress',
      opacity: [0, 1],
      duration: 200,
      easing: 'linear'
    })
    .add({
      targets: '.progress .bar > div',
      width: ['0%', '66%'],
      duration: 250,
      easing: 'cubicBezier(.61,.18,.56,1.04)'
    })
    .add(
      {
        targets: '.end-day .part2 .button',
        opacity: [0, 1],
        duration: 600,
        easing: 'linear'
      },
      '+=700'
    )

  function endDay() {
    endDayTimeline.restart()
  }

  function createTimeChart() {
    var ctx = $('#time-chart')[0].getContext('2d')
    var timeChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [14, 8, 4],
            backgroundColor: ['#BC83FF', '#666666', '#F62F6F'],
            label: 'Dataset 1'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        animation: {
          duration: 1000,
          easing: 'easeOutQuad'
        }
      }
    })
  }

  setTimeout(function() {
    $('.content-hider').hide()
  }, 200)

  anime
    .timeline({ loop: false })
    .add({
      targets: '.hero h1',
      translateY: [-20, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 300
    })
    .add(
      {
        targets: '.hero h2',
        translateY: [-20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000
      },
      '-=200'
    )
    /*
  .add({
    targets: '.app-window',
    width: [300, 800],
    height: [50, 500],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 750
  }, '-=600')
  */
    .add(
      {
        targets: '.app-window-container',
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000
      },
      '-=400'
    )
    .add(
      {
        targets: '.app-window .screens',
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000
      },
      '-=800'
    )
    .add(
      {
        targets: '.header, .try-it-fixed',
        translateY: [-20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 400
      },
      '-=500'
    )

  function addTasks() {
    let tasks = [
      'Learn about Slash',
      'Answer emails for 30 minutes',
      'Buy flight to Portgual'
    ]

    let timer = 3000
    let val = ''

    tasks.forEach(function(task) {
      var string = task.split('')

      string.forEach(function(letter) {
        let max = 120
        let min = 30
        let rand = Math.floor(Math.random() * (max - min + 1)) + min
        timer += rand
        val += letter
        var setValue = val
        setTimeout(function() {
          $('.app-window .hero-list input').val(setValue)
        }, timer)
      })

      val = ''
      timer += 150

      setTimeout(function() {
        $('.app-window .hero-list input').val('')
        $('.app-window .hero-list .tasks').append('<div>' + task + '</div>')
      }, timer)

      timer += 500
    })
  }

  addTasks()

  let appHeightMax = mobile ? '50vh' : 450
  appHeightMax = shortScreen ? '53vh' : appHeightMax
  let appWidthMax = shortScreen ? 700 : 800

  let appHeightMin = 50
  let appWidthMin = 350

  let borderRadiusFull = mobile ? '18px' : '12px'
  let borderRadiusFocus = mobile ? '9px' : '7px'

  let appWindowBottom = shortScreen ? '5vh' : '8vh'

  var controller = new ScrollMagic.Controller()

  var focusMode1 = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 'onLeave',
    duration: 1000,
    offset: 100
  })
    .setTween(
      TweenMax.to('.app-window', 1, {
        width: appWidthMin,
        height: appHeightMin,
        bottom: appWindowBottom,
        borderRadius: borderRadiusFocus,
        ease: 'power2.inOut'
      })
    )
    .addTo(controller)

  var focusMode2 = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 'onLeave',
    duration: 375,
    offset: 100
  })
    .setTween(
      TweenMax.to('.app-window .hero-list', 1, {
        opacity: 0,
        display: 'none',
        ease: 'expo.out'
      })
    )
    .addTo(controller)

  var focusMode3 = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 'onLeave',
    offset: 750,
    duration: 350
  })
    .setTween(
      TweenMax.to('.app-window .focus', 1, {
        display: 'flex',
        opacity: 1,
        ease: 'power1.inOut'
      })
    )
    .addTo(controller)

  var bgShow = new ScrollMagic.Scene({
    triggerElement: '.sub-hero',
    triggerHook: 'onLeave',
    duration: 500
  })
    .setTween(TweenMax.from('.sub-hero .desktop-bg', 1, { opacity: 0 }))
    .addTo(controller)

  var subHeroPin1 = new ScrollMagic.Scene({
    triggerElement: '.sub-hero',
    triggerHook: 'onLeave',
    duration: 3000
  })
    .setPin('.sub-hero', { pushFollowers: true })
    .addTo(controller)

  var subHeroPin2 = new ScrollMagic.Scene({
    triggerElement: '.sub-hero',
    triggerHook: 'onLeave',
    duration: 500,
    offset: 500
  })
    .setTween(TweenMax.from('.sub-hero h2 p:first-child', 1, { opacity: 0 }))
    .on('leave', startTimer)
    .addTo(controller)

  var subHeroPin3 = new ScrollMagic.Scene({
    triggerElement: '.sub-hero',
    triggerHook: 'onLeave',
    duration: 500,
    offset: 1500
  })
    .setTween(TweenMax.from('.sub-hero h2 p:last-child', 1, { opacity: 0 }))
    .on('leave', startTimer)
    .addTo(controller)

  var subHeroPin4 = new ScrollMagic.Scene({
    triggerElement: '.flow',
    triggerHook: 'onEnter',
    duration: 500,
    offset: -500
  })
    .setTween(TweenMax.to('.sub-hero h2', 1, { opacity: 0 }))
    .addTo(controller)

  var step1 = new ScrollMagic.Scene({
    triggerElement: '.flow',
    triggerHook: 'onEnter',
    duration: 500,
    offset: -500
  })
    .setTween(TweenMax.to('.sub-hero .desktop-bg', 1, { opacity: 0 }))
    .addTo(controller)

  var step1 = new ScrollMagic.Scene({
    triggerElement: '.flow',
    triggerHook: 'onEnter',
    duration: 1000
  })
    .setTween(
      TweenMax.to('.app-window', 1, {
        width: appWidthMax,
        height: appHeightMax,
        bottom: appWindowBottom,
        borderRadius: borderRadiusFull,
        ease: 'power2.inOut'
      })
    )
    .addTo(controller)

  var step1a = new ScrollMagic.Scene({
    triggerElement: '.flow',
    triggerHook: 'onEnter',
    duration: 500
  })
    .setTween(
      TweenMax.to('.app-window .focus', 1, { display: 'none', opacity: 0 })
    )
    .addTo(controller)

  $('.flow > div').each(function(i) {
    let step = this
    let name = $(this).data('step')

    var subHeroPin = new ScrollMagic.Scene({
      triggerElement: step,
      triggerHook: 'onLeave',
      duration: 2000
    })
      .setPin(step, { pushFollowers: true })
      .addTo(controller)

    var textFadeIn = new ScrollMagic.Scene({
      triggerElement: step,
      triggerHook: 'onLeave',
      duration: 500,
      offset: 0
    })
      .setTween(
        TweenMax.fromTo(step, 1, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      )
      .addTo(controller)

    var textFadeOut = new ScrollMagic.Scene({
      triggerElement: step,
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1500
    })
      .setTween(TweenMax.to(step, 1, { y: -20, opacity: 0 }))
      .addTo(controller)

    if (name === 'day') {
      subHeroPin
        .on('enter', function() {
          planDay()
        })
        .addTo(controller)

      var focusMode3 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500
      })
        .setTween(
          TweenMax.to('.app-window .focus', 1, {
            display: 'none',
            opacity: 0,
            ease: 'power1.inOut'
          })
        )
        .addTo(controller)

      var focusMode2 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onLeave',
        duration: 375
      })
        .setTween(
          TweenMax.to('.app-window .plan-day', 1, {
            display: 'flex',
            opacity: 1,
            ease: 'expo.out'
          })
        )
        .addTo(controller)
    }

    if (name === 'focus') {
      var focusMode3 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500
      })
        .setTween(
          TweenMax.to('.app-window .plan-day', 1, {
            display: 'none',
            opacity: 0,
            ease: 'power1.inOut'
          })
        )
        .addTo(controller)

      var focusMode1 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onLeave',
        duration: 1000
      })
        .setTween(
          TweenMax.to('.app-window', 1, {
            width: appWidthMin,
            height: appHeightMin,
            bottom: '30px',
            borderRadius: borderRadiusFocus,
            ease: 'power2.inOut'
          })
        )
        .addTo(controller)

      var focusMode3 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onLeave',
        offset: 500,
        duration: 350
      })
        .setTween(
          TweenMax.to('.app-window .focus', 1, {
            display: 'flex',
            opacity: 1,
            ease: 'power1.inOut'
          })
        )
        .addTo(controller)
    }

    if (name === 'done') {
      var step1 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 1000
      })
        .setTween(
          TweenMax.to('.app-window', 1, {
            width: appWidthMax,
            height: appHeightMax,
            bottom: appWindowBottom,
            borderRadius: borderRadiusFull,
            ease: 'power2.inOut'
          })
        )
        .addTo(controller)

      var step1a = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500
      })
        .setTween(
          TweenMax.to('.app-window .focus', 1, { display: 'none', opacity: 0 })
        )
        .addTo(controller)

      var step1a = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500,
        offset: 500
      })
        .setTween(
          TweenMax.to('.app-window .done', 1, { display: 'flex', opacity: 1 })
        )
        .addTo(controller)
    }

    if (name === 'end') {
      subHeroPin
        .on('enter', function() {
          console.log('Leaving the end day scene')
          endDay()
        })
        .addTo(controller)

      var step1a = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500
      })
        .setTween(
          TweenMax.to('.app-window .done', 1, { display: 'none', opacity: 0 })
        )
        .addTo(controller)

      var step1a = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: 'onEnter',
        duration: 500,
        offset: 500
      })
        .setTween(
          TweenMax.to('.app-window .end-day', 1, {
            display: 'flex',
            opacity: 1
          })
        )
        .addTo(controller)
    }
  })

  var hideAppWindow = new ScrollMagic.Scene({
    triggerElement: '.so-much-more',
    triggerHook: 'onEnter',
    duration: 750,
    offset: -500
  })
    .setTween(
      TweenMax.to('.app-window', 1, {
        opacity: 0,
        width: appWidthMin,
        height: appHeightMin,
        bottom: '20px',
        borderRadius: borderRadiusFocus,
        display: 'none',
        ease: 'power2.inOut'
      })
    )
    .addTo(controller)

  var hideAppWindow = new ScrollMagic.Scene({
    triggerElement: '.so-much-more',
    triggerHook: 'onEnter',
    duration: 500,
    offset: -500
  })
    .setTween(
      TweenMax.to('.app-window .end-day', 1, { display: 'none', opacity: 0 })
    )
    .addTo(controller)

  /*
  var soMuchMorePin = new ScrollMagic.Scene({triggerElement: ".so-much-more", triggerHook: 'onLeave', duration: 1000})
  .setPin(".so-much-more", {pushFollowers: true})
  .addTo(controller)

  var soMuchMoreShow = new ScrollMagic.Scene({triggerElement: ".so-much-more", triggerHook: 'onLeave', duration: 500, offset: 0})
  .setTween(TweenMax.from(".so-much-more h2", 1, {opacity: 0}))
  .on('leave', startTimer)
  .addTo(controller)

  var soMuchMoreHide = new ScrollMagic.Scene({triggerElement: ".so-much-more", triggerHook: 'onLeave', duration: 500, offset: 1500})
  .setTween(TweenMax.to(".so-much-more h2", 1, {opacity: 0}))
  .on('leave', startTimer)
  .addTo(controller)
  */

  function startTimer() {
    let time = 0
    $('.timer').text('0:00')
    clearInterval(interval)
    interval = setInterval(function() {
      time++
      let formattedTime = formatTimestamp(time)
      $('.timer').text(formattedTime)
    }, 1000)
  }

  var waypoint1 = $('.feature-time-tracking').waypoint({
    offset: 200,
    handler: function(direction) {
      createTimeChart()
      this.destroy()
    }
  })

  var waypoint2 = $('.feature-quick-entry').waypoint({
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

  $('.hero').on('click', function () {
    let offset = subHeroPin4.scrollOffset()

    $('html, body').animate({
        scrollTop: offset
    }, {
      duration: 4000,
      easing: 'swing'
    })

    /*window.scroll({
      top: offset,
      left: 0,
      behavior: 'smooth'
    })*/
  })

  /*
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
  */
})
