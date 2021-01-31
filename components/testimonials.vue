<template>
  <section class="testimonials">
    <div class="">
      <div class="flex overflow-x-auto py-10">
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1202060?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201349?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201541?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201614?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1202019?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201515?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201522?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201517?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            style="border: none;"
            src="https://cards.producthunt.com/cards/comments/1201534?v=1"
            width="500"
            height="405"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: 0 5px;

  > div > div {
    > div {
      margin: 0 5px;

      > iframe {
        width: 300px;
        background: white;
        height: 370px;
      }

      @screen sm {
        margin: 0 10px;
        width: auto;
        // border: 3px solid #6101ea;
        // border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

        > iframe {
          width: 350px;
          height: 400px;
        }
      }
    }
  }
}
</style>
