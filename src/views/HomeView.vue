<script setup></script>
<template>
  <div class="h-100 bg-grey-darken-4">
    <div class="blood-mountain-container bg-black d-flex align-center justify-center mt-15"></div>
    <div class="position-absolute" style="z-index: 1000 !important; bottom: 32%; right: 5%;">
      <v-btn
        aria-label="Buy Blood Mountain on Audible"
        class="button btn is-medium animated-button victoria-three animated flipInX px-15 mx-1"
        href="https://www.audible.com/pd/Blood-Mountain-Audiobook/B0FMYQXW3N?source_code=ASSGB149080119000H&share_location=pdp"
        size="x-large"
        target="_blank"
      >
        <v-img alt class="mt-n9 custom-audible-svg" src="/audible-logo-png_seeklogo-298112.png" width="85" />
      </v-btn>
      <v-btn
        aria-label="Buy Blood Mountain on Amazon"
        class="button btn is-medium animated-button victoria-three animated flipInX px-15 mx-1"
        href="https://www.amazon.com/BLOOD-MOUNTAIN-Martha-Novak/dp/B0G3X7MV1Z/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.GXQgo3w6O_2o1wtjkGJCHhFgY3hMxVUE_CGwFJQD3Zr1dFQyp2k0CyCAO0Dt2LzmH16QoHKoHwOjmUgITQ98ZlmKrj5A3SyRuOWQQj9UCJlSxdIyowRsabWlTXYLqNBPkAEnwhk2KLAk-BDVQGLO3iINActpmFOwzf9i-JxdT4ZMyZ2eEFdi9zWf5yORuccQ9IckUla3DXLbZlfFQ36h7XLRQkuPoMKnuksmOyN9_zY.1DMfdAiqLImI5N3PxAKzJchc-lxAXlzvE4pa22g0MQY&qid=1765729320&sr=1-1"
        size="x-large"
        target="_blank"
      >
        <v-img alt class="mt-n9 custom-amazon-svg" src="/294695_amazon_icon.svg" width="100" />
      </v-btn>
    </div>
  </div>
  <!--<div class="h-100" >-->
  <!--  -->
  <!--  <v-carousel height="100vh" hide-delimiters>-->
  <!--    <v-carousel-item-->
  <!--      src="@/assets/homepage/tulip-2189317_1920.jpg"-->
  <!--      height="100%"-->
  <!--      cover-->
  <!--    >-->
  <!--      <div class="transbox" style="text-align: center;">-->
  <!--        <h2>-->
  <!--          Listen to Martha’s Radio Show for powerful information and-->
  <!--          uplifting insights.-->
  <!--          <br />Open your awareness.-->
  <!--          &lt;!&ndash; <button class="button">Learn More</button> &ndash;&gt;-->
  <!--          <br />-->

  <!--          &lt;!&ndash;<v-btn&ndash;&gt;-->
  <!--          &lt;!&ndash;  density="comfortable"&ndash;&gt;-->
  <!--          &lt;!&ndash;  size="x-large"&ndash;&gt;-->
  <!--          &lt;!&ndash;  class="button btn is-medium animated-button victoria-three animated flipInX px-15"&ndash;&gt;-->
  <!--          &lt;!&ndash;  href="/radio"&ndash;&gt;-->
  <!--          &lt;!&ndash;&gt;Explore Here</v-btn&ndash;&gt;-->
  <!--          &lt;!&ndash;&gt;&ndash;&gt;-->
  <!--        </h2>-->
  <!--      </div>-->
  <!--    </v-carousel-item>-->

  <!--    <v-carousel-item-->
  <!--      src="@/assets/homepage/hummingbird-2139279_1920.jpg"-->
  <!--      height="100%"-->
  <!--      cover-->
  <!--    >-->
  <!--      <div class="transbox" style="text-align: center;">-->
  <!--        <h2>-->
  <!--          Wherever you are on your spiritual journey-->
  <!--          <br />private sessions are available.-->
  <!--          <br />-->
  <!--          <span class="slidersubHead">Discover yourself.</span>-->
  <!--          &lt;!&ndash; <button class="button">Learn More</button> &ndash;&gt;-->
  <!--          <br />-->
  <!--          <v-btn-->
  <!--            size="x-large"-->
  <!--            class="button btn is-medium animated-button victoria-three animated flipInX px-15"-->
  <!--            href="/our-people"-->
  <!--          >Connect Here</v-btn-->
  <!--          >-->
  <!--        </h2>-->
  <!--      </div>-->
  <!--    </v-carousel-item>-->

  <!--    <v-carousel-item-->
  <!--      src="@/assets/homepage/milky-way-916523_1920.jpg"-->
  <!--      height="100%"-->
  <!--      cover-->
  <!--    >-->
  <!--      <div class="transbox" style="text-align: center;">-->
  <!--        <h2>-->
  <!--          Unlock your potential-->
  <!--          <br />through personal growth and change. <br />Courses and media-->
  <!--          downloads available.-->
  <!--          &lt;!&ndash; <button class="button">Learn More</button> &ndash;&gt;-->
  <!--          <br />-->
  <!--          &lt;!&ndash;<v-btn&ndash;&gt;-->
  <!--          &lt;!&ndash;  size="x-large"&ndash;&gt;-->
  <!--          &lt;!&ndash;  class="button btn is-medium animated-button victoria-three animated flipInX px-15"&ndash;&gt;-->
  <!--          &lt;!&ndash;  href="/classes"&ndash;&gt;-->
  <!--          &lt;!&ndash;&gt;Learn More</v-btn&ndash;&gt;-->
  <!--          &lt;!&ndash;&gt;&ndash;&gt;-->
  <!--        </h2>-->
  <!--        <div class="transboxButton"></div>-->
  <!--      </div>-->
  <!--    </v-carousel-item>-->
  <!--  </v-carousel>-->
  <!--</div>-->
</template>

<style lang="scss" scoped>
.blood-mountain-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/homepage/bloodMountainAdd@2x.png');
  background-size: 100% 90%;
  padding-bottom: 56.25%;
  padding-top: 20px;
}

.v-btn::after {
  border: none;
}

div.transbox {
  margin-left: 35%;
  margin-top: 30%;
  // background-color: #ffffff;
  // border: 1px solid black;
  // opacity: 0.7;
  // filter: alpha(opacity=60);
  text-align: right;
}

div.transbox p {
  margin: 15%;
  font-weight: bold;
  color: whitesmoke;
}

div.transbox h2 {
  margin: 22% 10% 2% 30%;
  font-size: 35px;
  font-weight: 250;
  color: whitesmoke;
}

.transbox .button {
  font-weight: 500;
}

/* Animated Buttons */
a.animated-button,
a.animated-button:visited,
button.animated-button,
button.animated-button:visited {
  position: relative;
  /*display: block;*/
  margin: 20px auto 0;
  padding: 14px 15px !important;
  color: black;
  font-size: 14px;
  /*font-weight: bold;*/
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 7px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

  .custom-amazon-svg,
  .custom-audible-svg {
    transition: all 1s ease;
    filter: invert(1);
  }
}

a.animated-button:after,
a.animated-button:visited:after,
button.animated-button:after,
button.animated-button:visited:after {
  content: '';
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 99%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}

a.animated-button:hover,
a.animated-button:visited:hover,
button.animated-button:visited:hover,
button.animated-button:hover {
  color: #fff;
  text-shadow: none;
  background-color: #0e7283;
  border: 0.5px solid;
  border-color: #fff !important;

  .custom-amazon-svg,
  .custom-audible-svg {
    filter: invert(0);
  }
}

a.animated-button:hover:after,
a.animated-button:visited:hover:after,
button.animated-button:hover:after,
button.animated-button:visited:hover:after {
  height: 450%;
}

/* Sandy Buttons */
a.animated-button.victoria-three,
button.animated-button.victoria-three {
  border: 0.5px solid whitesmoke;
  width: 17.5em;
  background-color: transparent;
  color: whitesmoke;
}

a.animated-button.victoria-three:after,
button.animated-button.victoria-three:after {
  background: #0e7283;
  opacity: 0.5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

a.animated-button.victoria-three:hover:after,
button.animated-button.victoria-three:hover:after {
  height: 100%;
  opacity: 1;
}
</style>
