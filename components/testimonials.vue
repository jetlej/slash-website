<template>
  <section class="testimonials w-screen overflow-hidden">
    <VueSlickCarousel v-bind="settings">
      <div v-for="t in testimonials">
        <div class="slide my-3 mx-3">
          <div class="flex flex-col p-6 rounded-lg">
            <div class="text-2xl sm:text-xl h-full overflow-y-auto font-medium">
              "{{ t.highlight}}"
            </div>
            <div @click="openLink(t.link)" class="cursor-pointer flex items-center justify-start flex-shrink-0 mt-4 -mb-2">
              <div class="mr-2 flex-shrink-0"><img class="w-8 h-auto rounded-full" :src="t.photo"/></div>
              <div class="text-lg sm:text-base w-full font-medium">{{ t.name }}</div>
              <img class="ml-3 w-4 flex-shrink-0" src="/images/link.svg"/>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
// Comment for deploying
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: '70px',
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
            }
          }
        ]
      },
      testimonials: [
         {
          text: `I can't imagine my work life without Slash anymore. It's that powerful. I use it to complement Asana and since I established my system using those two apps, my productivity, focus, and organization have skyrocketed. I'm really looking forward to seeing what they add to the app next since the first versions shave been so awesome!`,
          highlight: `I can't imagine my work life without Slash anymore. It's that powerful.`,
          name: 'Evan Aguilar',
          title: '',
          photo: 'https://ph-avatars.imgix.net/3032348/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1202060'
        },
        {
          text: `Slash is the tool I've spent years looking for. The following is probably longer the average PH comment and on reflection almost reads like sales copy (I don't know anyone on the team), but whatever. Slash is great. Slash encourages all the behaviors that you already know about from the reams of information you've consumed on task and time management... if only the tools facilitated them seamlessly and didn't require you to make a pot of green tea and read six articles on zen habits and meditate upon your intentions for two hours and then create a series of SWOT analyses and GANTT charts before diving into your first task. For example: Slash encourages you to prioritize your week and day — and not just by giving you a Today view, but by making this a fluid part of its process — and it builds in techniques like Pomodoro and timeboxing to help you get started and get done. Many apps build similar features in, but none of them integrate them well into the workflow itself. You can configure certain tasks to open certain links when you begin, such as your inbox for an email sprint. Including a period of time in the name starts a countdown when you begin the task. This means all those process-y or batch-driven tasks without finite end states (as per best practice GTD methodology) are given one without any extra effort. That's at least four different apps, paper processes, or unfulfilled intentions eliminated from the Unrealistic Workflow of the Ascended Unpressured. Slash is clearly designed in a very intentional way to reduce the friction in your way and allow you to slash through tasks. Most importantly of all, it makes maintaining your context core to how it operates. In an editorial role that's heavy on the tabs, distractions, and a blend of production and management work, my quantitatively not-great working memory is constantly being whacked around like a tennis ball. The best tools for me have always kept the context of my current activity cued in my visual field. Otherwise, yeah, I'm taking care of this thing here that needed to be done at some point, but I have no idea how I got here or what I had set out to do two steps before that. This has only gotten worse as constant attention-seeking has woven itself into the internet's fabric (as I'm sure anyone reading this can attest) and as Slack has inserted itself into our lives like a hemorrhoid. Not an issue with Slash. Whether I look at the menubar or the bottom of my screen, the right mental framing is always at hand. Slash is a tool for real-world use that makes all other task managers look like ivory tower constructions. I've used them all, and quotes from my reviews as a reformed Lifehack writer have done years on some of their homepages. They were all fuzzy approximations of what we thought we needed. Now, I'm jaded enough that I'm not going to tell you that Slash is the be-all and end-all and can't be improved upon, but it's such a step up that it'll have you wondering how we wound up so far afield in this space for so many decades. But not for long, because this app provides the solution, too, and you can forget about all of that and start making up for lost time immediately. Get it.`,
          highlight:  `Slash is a tool for real-world use that makes all other task managers look like ivory tower constructions.`,
          name: 'Joel Falconer',
          title: 'Managing Editor - SitePoint',
          photo: 'https://ph-avatars.imgix.net/1033743/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201349'
        },
        {
          text: `Slash totally changed the way I work. This simple idea of seeing how much time you’ve spent (or sometimes wasted) on a current task pushes you incredibly hard to achieve more. Seing a clear picture of your achievements and time spent on them at the end of the day is awfully motivating and gives you a clear overview on your day, allowing you to plan better for the next one. On the UI side i just love ho minimalistic and intuitive it is. No manuals needed. Just start slashing! Although being very fast to start with it offers a great advanced set of planning tools and options. Slash has became my first app to start and last app to end the day with, and definitely a staple in my work. Thank you guys!`,
          highlight: `Slash totally changed the way I work. This simple idea of seeing how much time you’ve spent (or sometimes wasted) on a current task pushes you incredibly hard to achieve more. `,
          name: 'Pavlo Biegun',
          title: '',
          photo: 'https://ph-avatars.imgix.net/3030520/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201541'
        },
        {
          text: `Working with Slash is like playing Fruit Ninja of productivity - and it's doing an awesome job of Slashing Things (3) out of my life! My favourite feature is that you can analyze the time that you spend working on your tasks and I'd love to see more of that! Congratulations on the new release! Looking forward to continuing your development!!`,
          highlight: `Working with Slash is like playing Fruit Ninja of productivity - and it's doing an awesome job of Slashing Things (3) out of my life!`,
          name: 'Pavel Shokhirev',
          title: '',
          photo: 'https://ph-avatars.imgix.net/2797502/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201614'
        },
        {
          text: `You really thought of everything. I thought I was burned out on trying to-do apps, but you've got me excited.`,
          highlight: `You really thought of everything. I thought I was burned out on trying to-do apps, but you've got me excited.`,
          name: 'Cody P',
          title: '',
          photo: 'https://ph-avatars.imgix.net/904698/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1202019'
        },
        {
          text: `I came, I slashed, I conquered. Feeling full on Julius Caesar after using Slash first thing this morning. What a delightful experience. I am usually skeptical of task apps but Slash feels like a keeper. Well done!`,
          highlight: `I came, I slashed, I conquered. Feeling full on Julius Caesar after using Slash first thing this morning. What a delightful experience.`,
          name: 'Ranganaut',
          title: '',
          photo: 'https://ph-avatars.imgix.net/87524/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201515'
        },
        {
          text: `Huge fan of Slash. Many in the comments have already mentioned the deluge of productivity apps associated with task management, but I've never found one that sticks. The psychological feedback associated with culling your list of to-dos along with the super clean UI makes this the clear winner in this space. Truly helpful for increasing focus, limiting context switching and seamlessly integrating with the right third-party tools. I'm not personally familiar with the makers, but I'm excited about where this company is headed. Congrats Slash team.`,
          highlight: `The psychological feedback associated with culling your list of to-dos along with the super clean UI makes this the clear winner in this space.`,
          name: 'Neil Kamath',
          title: '',
          photo: 'https://ph-avatars.imgix.net/2229511/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201522'
        },
        {
          text: `I found Slash purely by chance and out of all the task management apps I have tried, it has been the only one to establish a flow that actually makes you more productive.`,
          highlight: `All the task management apps I have tried, [Slash] has been the only one to establish a flow that actually makes you more productive.`,
          name: 'Nathaniel Blackburn',
          title: 'UI Engineer',
          photo: 'https://ph-avatars.imgix.net/31709/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201517'
        },
        {
          text: `I don't think many other apps have grasped the need for the reminder to not just be near you (aka on a notepad or on your phone) but on the physical screen that you are using. This is the simple requirement that Slash checks well. So now I can get started on slashing all my hurdles in life.`,
          highlight: `I don't think many other apps have grasped the need for the reminder to not just be near you (aka on a notepad or on your phone) but on the physical screen that you are using.`,
          name: 'Tra Pham',
          title: '',
          photo: 'https://ph-avatars.imgix.net/3031138/original?auto=format%2Ccompress%2Cenhance&dpr=2&crop=faces&fit=crop&w=100&h=100',
          link: 'https://www.producthunt.com/posts/slash-1-0#comment-1201534'
        },
      ]
    }
  },
  components: { VueSlickCarousel },
  methods: {
    openLink (link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 0 5px;

  * {
    outline: none !important;
  }

  .slide{
    outline: none !important;
    cursor: grab;

    > div {
      outline: none !important;
      height: 350px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

      @screen sm{
        height: 350px;
      }
    }
  }
}
</style>
