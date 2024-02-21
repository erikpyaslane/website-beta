<template>
  <nav class="stroke row align-self-center justify-content-center" id="mainNav">
    <div class="col-sm-8 m-0 py-1 justify-content-center">
      <ul class="nav nav-pills flex-row py-0 justify-content-end align-items-center">
        <li class="nav-item py-1 px-4 mr-5 ml-5">
          <router-link to="/projects"> PROJEKTID </router-link>
        </li>
        <li class="nav-item py-1 px-4 mr-5 ml-5">
          <router-link to="/">MINUST</router-link>
        </li>
        <li class="nav-item py-1 px-4 ml-5">
          <router-link to="/contact">KONTAKT</router-link>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 justify-content-end align-items-center">
      <ul class="nav py-0 justify-content-end">
        <li>
          <!-- <a href="https://www.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_18246125.htm#
                      query=instagram%20logo&position=0&from_view=keyword&track=ais&uuid=4ae88f2d-2d5d-43d8-acff-8e87dea1479b"> -->
          <a
            ><img
              src="/images/insta.png"
              title="Image by rawpixel.com"
              width="40"
              height="40"
          /></a>
        </li>
        <li>
          <a
            ><img
              src="/images/facebook.png"
              title="Image by rawpixel.com"
              width="40"
              height="40"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      projects: [],
    };
  },
};
</script>

<style scoped>
/*CSS3 STROKE EFFECT*/
#mainNav {
  margin-top: 0%;
  width: 100%;
  /*background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));*/
  margin-left: 0%;
  margin-right: 0%;
  background-color: transparent;
  height: 10vh;
}

#mainNav ul {
  list-style: none;
}

#mainNav ul li {
  display: inline-block;
  display: inline;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 5%;
}

#mainNav ul li a {
  padding-bottom: 10px;
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-family: "Inika";
}

#mainNav ul li a,
#mainNav ul li a:after,
#mainNav ul li a:before {
  transition: all 0.4s;
}

#mainNav ul li a:hover {
  color: black;
}

#mainNav.stroke ul li a {
  position: relative;
}

#mainNav.stroke ul li a:after,
#mainNav ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: #e34f25;
  height: 2px;
}

#mainNav.stroke ul li a:hover:after {
  width: 100%;
}

#mainNav ul li a {
  transition: all 1s;
}

#mainNav ul li a:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}

#mainNav ul li a:hover {
  color: #e34f25;
  z-index: 1;
}

#mainNav ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  opacity: 1;
}
</style>
