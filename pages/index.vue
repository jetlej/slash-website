<template>
  <div class="homepage">
    <div class="content-hider"></div>

    <a
      class="btn btn-default btn-sm try-it try-it-fixed"
      data-toggle="modal"
      data-target="#tryModal"
      >Try it now</a
    >

    <section class="hero">
      <div class="container">
        <h1>The first <span>do</span> app.</h1>
        <h2>Get more done than ever before.</h2>
      </div>
    </section>

    <section id="focus-mode" class="sub-hero">
      <div class="desktop-bg"></div>
      <div class="container">
        <h2>
          <p>Slash is a tiny helper that keeps you organized and focused.</p>
          <p>Scroll down to see how it works…</p>
        </h2>
      </div>
    </section>

    <div class="app-window-container">
      <div class="app-window">
        <div class="screens">
          <div class="hero-list">
            <div class="list">
              <h4>Today</h4>
              <div class="tasks"></div>
              <input type="text" placeholder="Add task..." />
              <a class="btn btn-primary btn-lg btn-block">Start Slashing</a>
            </div>
          </div>
          <div class="focus">
            <p>Learn about Slash</p>
            <span class="timer">0:00</span>
          </div>
          <div class="plan-day" data-step="day">
            <div class="list">
              <h4>This Week</h4>
              <div class="tasks">
                <div><span>Learn about Slash</span></div>
                <div><span>Answer emails</span></div>
                <div><span>Buy flight to Portugal</span></div>
                <div>Finish V2 of pitch deck</div>
                <div>Find a new book to read</div>
                <div>Research date ideas</div>
              </div>
            </div>
            <div class="list">
              <h4>Today</h4>
              <div class="tasks"></div>
            </div>
          </div>
          <div class="done">
            <div>
              <img src="/images/winning.gif" />
              <div class="progress">
                <div class="bar">
                  <div></div>
                </div>
                <div class="text">
                  <div>3/6 done</div>
                  <div>50%</div>
                </div>
              </div>
              <p>Next: Answer emails for 30 minutes</p>
              <button class="btn btn-primary btn-lg">Keep Slashing</button>
              <!--<small>or <u>take a break</u></small>-->
            </div>
          </div>
          <div class="end-day">
            <div>
              <div class="part1 task-list">
                <div class="completed-task">
                  <div>
                    <span class="text">Learn about Slash</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="completed-task">
                  <div>
                    <span class="text">Answer emails for 30 minutes</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="completed-task">
                  <div>
                    <span class="text">Buy flight to Portugal</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="completed-task">
                  <div>
                    <span class="text">Finish V2 of pitch deck</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="completed-task">
                  <div>
                    <span class="text">Find a new book to read</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="completed-task">
                  <div>
                    <span class="text">Research date ideas</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div class="part2">
                <div class="fireworks"></div>

                <div class="progress">
                  <h2>Progress This Week</h2>
                  <div class="progress-bar">
                    <div class="bar">
                      <div></div>
                    </div>
                    <div class="text">
                      <div>16 of 24 done</div>
                      <div>66%</div>
                    </div>
                  </div>
                </div>

                <div class="button">
                  <a class="btn btn-xl btn-primary">Go Celebrate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
  <section class="science">
    <div class="container">
      <h2>The powerful <span>Science of Focus</span></h2>
      <img src="images/icon-naked.svg"/>
      <p><span>50%</span> more productive</p>
      <p><span>50%</span> more free time</p>
    </div>
  </section>
  -->

    <section class="flow">
      <!--
    <div class="step step1">
      <h3><span>1</span> <b>Plan your week</b></h3>
      <p>Choose all of your tasks for the week, like a sprint.</p>
    </div>
    -->
      <div class="step step2" data-step="day">
        <div>
          <div>
            <div class="number">1</div>
            <h3>
              <span><span>Plan</span> your day</span>.
            </h3>
          </div>
          <p>
            Select tasks for today from your 'This Week' list.
            <b>Prioritize.</b>
          </p>
        </div>
      </div>
      <div class="step step3" data-step="focus">
        <div>
          <div>
            <div class="number">2</div>
            <h3>
              <span>Enter <span>focus mode</span></span
              >.
            </h3>
          </div>
          <p>
            See a constant reminder of your current task. <b>Stay focused.</b>
          </p>
        </div>
      </div>
      <div class="step step4" data-step="done">
        <div>
          <div>
            <div class="number">3</div>
            <h3>
              <span><span>Finish</span> your task</span>.
            </h3>
          </div>
          <p>Then move on to your next task. <b>Stay in flow state.</b></p>
        </div>
      </div>
      <div class="step step5" data-step="end">
        <div>
          <div>
            <div class="number">4</div>
            <h3>
              <span><span>Win</span> your day</span>.
            </h3>
          </div>
          <p>
            See a satisfying summary of your progress.
            <b>Stop working & rest.</b>
          </p>
        </div>
      </div>
    </section>

    <div style="margin-top: 3000px;">
      <h2 class="text-center text-3xl sm:text-5xl leading-tight font-bold mb-10">
        ...and it works
      </h2>
      <Testimonials />
    </div>

    <section class="so-much-more">
      <div class="container">
        <h2 class="center">+30 features to help you get more done</h2>
      </div>
    </section>

    <section class="features">
      <!--
    <section class="feature feature-focus">
      <div class="container">
        <div class="flex">
          <div class="text">
            <div>
              <h3>Focus Mode</h3>
              <p>Your current task stays pinned on screen with a timer so you are constantly aware of what you're doing, and how long you've been doing it for.</p>
            </div>
          </div>
          <div class="image mobile-scroll-2">
            <div>
              <div class="focus-window">
                <small>Edit photoshoot</small>
              </div>
              <img src="/images/desktop.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature feature-flow even">
      <div class="container">
        <div class="flex">
          <div class="text">
            <div>
              <h3>Stay in Flow</h3>
              <p>Complete task after task without searching for what to do next. Constant flow state.</p>
            </div>
          </div>
          <div class="image image-border">
            <div>
              <h3>Nice job! Your next task is:</h3>
              <p>Feed the cat</p>
              <button class="btn btn-primary btn-lg">Next Task</button>
              <small>or <u>take a break</u></small>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

      <section class="feature feature-integrations">
        <div class="container container-lg">
          <div class="flex">
            <div class="text">
              <div>
                <h3>Seamless Sync</h3>
                <p>
                  Need to keep using another app? No problem. Sync your tasks
                  from Trello & Todoist. More apps coming soon.
                </p>
              </div>
            </div>
            <div class="image">
              <div class="trello">
                <img src="images/trello.svg" />
                <img class="mobile" src="images/trello-sm.svg" />
              </div>
              <div class="todoist">
                <img src="images/todoist.svg" />
                <img class="mobile" src="images/todoist-sm.svg" />
              </div>
              <div class="asana coming-soon">
                <img src="images/asana.svg" />
                <img class="mobile" src="images/asana-sm.svg" />
              </div>
              <div class="jira coming-soon">
                <img src="images/jira.svg" />
                <img class="mobile" src="images/jira-sm.svg" />
              </div>
              <div class="basecamp coming-soon">
                <img src="images/basecamp.svg" />
                <img class="mobile" src="images/basecamp-sm.svg" />
              </div>
              <div class="ellipses coming-soon">
                <img src="images/ellipses.svg" />
                <img class="mobile" src="images/ellipses.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature feature-time-tracking">
        <div class="container container-lg">
          <div class="flex">
            <div class="text">
              <div>
                <h3>Time Tracking</h3>
                <p>
                  Detailed analytics of your time for charging clients or
                  tracking your own productivity.
                </p>
              </div>
            </div>
            <div class="image">
              <div>
                <canvas width="200" height="200" id="time-chart"></canvas>
                <div class="time-legend">
                  <div>
                    <div style="background: #BC83FF;" class="circle"></div>
                    <div>
                      <p>Slash</p>
                      <span>14hr 20min</span>
                    </div>
                  </div>
                  <div>
                    <div style="background: #666666;" class="circle"></div>
                    <div>
                      <p>Freelance #2</p>
                      <span>7hr 51min</span>
                    </div>
                  </div>
                  <div>
                    <div style="background: #F62F6F;" class="circle"></div>
                    <div>
                      <p>Personal</p>
                      <span>4hr 5min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature feature-stats">
        <div class="container container-lg">
          <div class="flex">
            <div class="text">
              <div>
                <h3>Work Analytics</h3>
                <p>
                  Any and all links in your task notes will open in your browser
                  when you start the task.
                </p>
              </div>
            </div>
            <div class="image">
              <img src="/images/stats.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section class="feature feature-time-limit-tasks">
        <div class="container container-lg">
          <div class="flex">
            <div class="text">
              <div>
                <h3>Time Limit Tasks</h3>
                <p>
                  A task titled "Answers emails for 20 minutes" will
                  automatically start with a 20 min timer.
                </p>
              </div>
            </div>
            <div class="image time-limit-tasks">
              <p>Answer emails for <span>1 hour</span>.</p>
              <p>Meditate for <span>10 min</span>.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="feature feature-quick-entry">
        <div class="container container-lg">
          <div class="flex">
            <div class="text">
              <div>
                <h3>Quick Task Entry</h3>
                <p>
                  Use the handy global keyboard shortcut to add a task from
                  anywhere without interrupting your workflow.
                </p>
              </div>
            </div>
            <div class="image">
              <div class="quick-entry">
                <input
                  class="form-control input-xl"
                  type="text"
                  placeholder="Enter task and hit enter..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--
    <section class="feature feature-scheduling">
      <div class="container">
        <div class="flex">
          <div class="text">
            <div>
              <h3>Task Scheduling</h3>
              <p>Quickly schedule tasks to show up in your list at a later date + time.</p>
            </div>
          </div>
          <div class="image image-border">
            <img src="/images/stats.jpg"/>
          </div>
        </div>
      </div>
    </section>

    <section class="feature feature-platforms even">
      <div class="container">
        <div class="flex">
          <div class="text">
            <div>
              <h3>Any Platform</h3>
              <p>Add tasks on the go from iOS or Android, then Slash through them on Mac or Windows. Linux coming soon! </p>
            </div>
          </div>
          <div class="image">
            <img class="platforms hidden-sm hidden-xs" src="/images/platforms.jpg?v=2"/>
            <img class="platforms-sm visible-sm visible-xs" src="/images/platforms-sm.jpg?v=2"/>
          </div>
        </div>
      </div>
    </section>

    <section class="feature feature-customizable">
      <div class="container">
        <div class="flex">
          <div class="text">
            <div>
              <h3>Hyper-Customizable</h3>
              <p>Slash provides every possible setting to make it flexible to your perfect workflow</p>
            </div>
          </div>
          <div class="image">
            <img src="/images/workflow.png?v=2"/>
          </div>
        </div>
      </div>
    </section>
    --></section>

    <section class="extras">
      <div class="container container-lg">
        <div class="hider">
          <div class="flex">
            <div>
              <img class="pomodoro" src="images/icon-pomodoro.svg" />
              <h3>Pomodoros</h3>
              <p>
                The technique of working for 25 minutes intervals with 5 minute
                breaks.
              </p>
            </div>
            <!--
          <div>
            <img src="images/icon-time.svg"/>
            <h3>Time Tracking</h3>
            <p>Automatically track the time you spend on each task, and see work time totals for each day.</p>
          </div>
          <div>
            <img src="images/icon-time-driven-tasks.svg"/>
            <h3>Time-Driven Tasks</h3>
            <p>A task titled "Emails for 20 minutes" will start with a 20 min timer.</p>
          </div>
          -->
            <div>
              <img src="images/icon-eisenhower-matrix.svg" />
              <h3>Eisenhower Matrix</h3>
              <p>
                A special tool to mark tasks as urgent and/or important to
                automatically prioritize.
              </p>
            </div>
            <!--
          <div>
            <img src="images/icon-global-task-entry.svg"/>
            <h3>Global Task Entry</h3>
            <p>Easily add tasks from any app without interrupting your flow.</p>
          </div>
          -->
            <div>
              <img class="note" src="images/icon-note.svg" />
              <h3>Task Notes</h3>
              <p>Save links, comments and other details for each task.</p>
            </div>
            <div>
              <img class="recurring" src="images/icon-recurring.svg" />
              <h3>Recurring Tasks</h3>
              <p>
                Schedule tasks to be automatically created on a regular schedule
              </p>
            </div>
            <div>
              <img class="scheduling" src="images/icon-calendar.svg" />
              <h3>Task Scheduling</h3>
              <p>
                Quickly schedule tasks to show up in your list on a later date.
              </p>
            </div>
            <div>
              <img class="shortcuts" src="images/icon-keyboard-shortcuts.svg" />
              <h3>Keyboard Shortcuts</h3>
              <p>16 and counting. Do it all at light-speed with no mouse.</p>
            </div>
            <div>
              <img src="images/icon-theme.svg" />
              <h3>Dark + Light Modes</h3>
              <p>
                ..and the option to automatically switch based on time of day.
              </p>
            </div>
            <div>
              <img src="images/icon-link.svg" />
              <h3>Auto-Link Opening</h3>
              <p>
                Any web links in the task notes open in browser when you start
                the task.
              </p>
            </div>
            <div>
              <img src="images/icon-sound.svg" />
              <h3>Satisfying Sounds</h3>
              <p>
                Choose from a library of ultra-satisying sound effects for
                completing a task.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="roadmap">
      <div class="container">
        <a target="_blank" href="https://slash.nolt.io/">
          <h3>Want a certain feature?</h3>
          <p>Vote for it on our Product Roadmap &raquo;</p>
        </a>
      </div>
    </section>

    <section class="why">
      <div class="container container-sm">
        <h2><b>Why?</b> Todo lists are broken.</h2>
        <div class="flex">
          <span>1</span>
          <p>
            Manually choosing your next task causes friction and wastes precious
            decision-making energy
          </p>
        </div>
        <div class="flex">
          <span>2</span>
          <p>
            Humans tend to choose the easiest task next, rather than the most
            important + urgent
          </p>
        </div>
        <div class="flex">
          <span>3</span>
          <p>They do nothing to keep you focused on the current task</p>
        </div>
        <div class="flex the-result">
          <span></span>
          <p>
            <b
              >The result is tasks continually rolling over to the next day, a
              cycle of inefficiency.</b
            >
          </p>
        </div>
      </div>
    </section>

    <section class="bottom-cta">
      <div class="container container-sm">
        <h2>Ready to <b>slash</b> some tasks?</h2>
        <div class="btn-container subscribe-form subscribe download-form">
          <form class="button-form">
            <input
              type="email"
              class="form-control input-xl"
              name="EMAIL"
              placeholder="What's your email?"
            />
            <button type="submit" class="btn btn-xl btn-default">
              <img class="loading" src="images/loading.svg" />
              <img class="send" src="images/send.svg" />
              <img class="checkmark" src="images/checkmark.svg" />
              <span>Try it now</span>
            </button>
          </form>
          <span class="result">for macOS + Windows</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
var validator = require('email-validator')
import Testimonials from '../components/testimonials'

export default {
  data() {
    return {
      loading: false,
      quantity: 1,
      activeModal: false,
      email: '',
      emailError: '',
      loading: false,
      product: {
        variants: [{}]
      },
      mobileNavActive: false
    }
  },
  components: {
    Testimonials
  },
  mixins: [clickaway],
  async mounted() {
    if (process.client) {
      // Mobile 100vh fix
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    }
  },
  methods: {
    mobileNavClickaway(e) {
      if (this.mobileNavActive) this.mobileNavActive = false
    },
    subscribe() {
      if (!validator.validate(this.email)) {
        this.emailError = 'Invalid email!'
        return
      }
      this.emailError = ''

      this.loading = true
      this.$axios
        .post('/api/mailchimp', { email: this.email })
        .then((response) => {
          this.loading = false
          console.log('Success!')
          console.log(response.data)
          document.location.href = '/spar-cards.pdf'
        })
        .catch((error) => {
          this.loading = false
          console.log('Error!')
          console.log(error.response.data)
          document.location.href = '/spar-cards.pdf'
          //this.emailError = error.response.data.detail
        })
    },
    openModal(name) {
      this.mobileNavActive = false
      this.activeModal = name
    },
    closeModal() {
      this.activeModal = null
    }
  },
  computed: {
    subscribeText() {
      return !this.loading ? 'Submit' : 'Sending...'
    }
  },
  head() {
    return {
      title: 'Slash - The ultimate app for do-ers.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A new breed of productivity app. Slash through your to-do lists by staying focused and in flow.'
        }
      ],
      bodyAttrs: {
        class: ['homepage']
      },
      script: [
        { src: '/js/jquery-1.12.0.min.js', body: true },
        { src: '/js/anime.min.js', body: true },
        { src: '/js/gsap3/gsap.min.js', body: true },
        { src: '/js/scrollmagic/uncompressed/ScrollMagic.js', body: true },
        {
          src: '/js/scrollmagic/uncompressed/plugins/animation.gsap.js',
          body: true
        },
        { src: '/js/chart.js', body: true },
        { src: '/js/jquery.waypoints.min.js', body: true },
        { src: '/js/main.js', body: true },
        { src: '/js/homepage.js', body: true }
      ]
    }
  }
}
</script>

<style lang="scss">
// @import '../assets/css/plyr.css';
</style>
