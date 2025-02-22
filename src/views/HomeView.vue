<script setup>

</script>
<template>
	<div class="h-100" >
    <v-carousel height="100vh" hide-delimiters>
      <v-carousel-item
        src="@/assets/homepage/tulip-2189317_1920.jpg"
        height="100%"
        cover
      >
        <div class="transbox" style="text-align: center;">
          <h2>
            Listen to Martha’s Radio Show for powerful information and
            uplifting insights.
            <br />Open your awareness.
            <!-- <button class="button">Learn More</button> -->
            <br />

            <!--<v-btn-->
            <!--  density="comfortable"-->
            <!--  size="x-large"-->
            <!--  class="button btn is-medium animated-button victoria-three animated flipInX px-15"-->
            <!--  href="/radio"-->
            <!--&gt;Explore Here</v-btn-->
            <!--&gt;-->
          </h2>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="@/assets/homepage/hummingbird-2139279_1920.jpg"
        height="100%"
        cover
      >
        <div class="transbox" style="text-align: center;">
          <h2>
            Wherever you are on your spiritual journey
            <br />private sessions are available.
            <br />
            <span class="slidersubHead">Discover yourself.</span>
            <!-- <button class="button">Learn More</button> -->
            <br />
            <v-btn
              size="x-large"
              class="button btn is-medium animated-button victoria-three animated flipInX px-15"
              href="/our-people"
            >Connect Here</v-btn
            >
          </h2>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="@/assets/homepage/milky-way-916523_1920.jpg"
        height="100%"
        cover
      >
        <div class="transbox" style="text-align: center;">
          <h2>
            Unlock your potential
            <br />through personal growth and change. <br />Courses and media
            downloads available.
            <!-- <button class="button">Learn More</button> -->
            <br />
            <!--<v-btn-->
            <!--  size="x-large"-->
            <!--  class="button btn is-medium animated-button victoria-three animated flipInX px-15"-->
            <!--  href="/classes"-->
            <!--&gt;Learn More</v-btn-->
            <!--&gt;-->
          </h2>
          <div class="transboxButton"></div>
        </div>
      </v-carousel-item>
    </v-carousel>
	</div>
</template>

<style lang="scss" scoped>
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
  border: 1px solid;
  border-color: #fff !important;
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
  border: 2px solid whitesmoke;
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
