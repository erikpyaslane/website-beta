<template>
  <div>
    <section class="timeline">
      <ul>
        <li
          v-for="(history, index) in histories"
          :key="index"
          :class="{ 'in-view': history.inView }"
        >
          <div class="align-items: start">
            <h5 class="py-2">
              <img :src="history.imageURL" :class="{ 'float-left': isOdd(index), 'float-right': !isOdd(index) }" class="px-2" style="width: 300px; height: 200px; border-radius: 15px">
              {{ history.text }}
            </h5>
            
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    histories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isLineInViewport: false,
    };
  },
  mounted() {
    this.callbackFunc(); // Call the function when the component is mounted

    // Listen for events
    window.addEventListener("load", this.callbackFunc);
    window.addEventListener("resize", this.callbackFunc);
    window.addEventListener("scroll", this.callbackFunc);
  },
  methods: {
    // Check if an element is in viewport
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    isOdd(index) {
      return index % 2 == 0;
    },
    // Callback function to add 'in-view' class to elements in viewport
    callbackFunc() {
      const histories = document.querySelectorAll(".timeline li");
      for (let i = 0; i < histories.length; i++) {
        // eslint-disable-next-line no-use-before-define
        if (this.isElementInViewport(histories[i])) {
          // eslint-disable-next-line no-use-before-define
          // eslint-disable-next-line
          this.histories[i].inView = true; 
        }
      }
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* TIMELINE
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {

  /*background-image: url("/public/images/low-poly-grid-haikei.svg");
  
  background-repeat: repeat;
  background-size: contain;
  background-position: top;
  */
  padding: 50px 0;
  background-color: transparent;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: -1px;
  background: black;
  border-radius: 5px;
}

.timeline ul li::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 3px;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  text-align: justify;
  top: 0;
  width: 650px;
  min-height: 250px;
  padding: 15px;
  background: white;
  border-radius: 20px;
  margin-top: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 25px,
              rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
              rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
}

.timeline ul li div::before {
  content: "";
  position: absolute;
  top: 8px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #f45b69 transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -689px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #f45b69;
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

/* EFFECTS
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background 0.5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #f45b69;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

/* GENERAL MEDIA QUERIES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #f45b69 transparent transparent;
  }
}

/* EXTRA/CLIP PATH STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.timeline-clippy ul li::after {
  width: 40px;
  height: 40px;
  border-radius: 0;
}

.timeline-rhombus ul li::after {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.timeline-rhombus ul li div::before {
  bottom: 12px;
}

.timeline-star ul li::after {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.timeline-heptagon ul li::after {
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}

.timeline-infinite ul li::after {
  animation: scaleAnimation 2s infinite;
}

@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.25);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

/* FOOTER STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  position: fixed;
  right: 0;
  bottom: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  background: rgba(255, 255, 255, 0.65);
}

.page-footer a {
  display: flex;
  margin-left: 4px;
}
</style>
