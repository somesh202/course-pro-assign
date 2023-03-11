<template>
  <Navbar />
  <div>
  <section v-reveal-effect class="bg-green-500 2xl:h-[72vh] h-[105vh] lg:-mb-16 overflow-hidden m-auto flex flex-col lg:block">
    
      <img
      v-animate-onscroll="'animated flip'"
        src="@/assets/pexels-olia-danilevich-5088179.jpg"
        class="flex float-right w-[50vw] bg-green-400 opcaity-50 xl:h-[94vh] 2xl:h-[63vh] mix-blend-multiply hidden lg:block"
      />
    
    <div class="lg:w-1/2 w-full">
      <div class="p-14 lg:mb-30 m-auto">
        <h2
          class="lg:m-8 m-auto text-white text-center lg:text-left lg:text-5xl text-4xl space-y-1 font-sans font-bold"
        >
          Anytime, Anywhere Learn on your Schedule from any device.
        </h2>
        <p
          class="lg:m-10 m-auto lg:text-left text-center text-gray-900 text-lg italic"
          >We Believe everyone has the capcity to be creative
          <b class="text-white">Course Pro</b> is a place where people develop
          their own potential</p
        >
        <button
          class="lg:m-8 m-auto bg-gray-800 text-white italic text-md p-4 rounded-lg lg:block flex items-center"
        >
          Let's get started
        </button>
      </div>
    </div>
  </section>
  <section class="bg-[url('@/assets/bglayer2.svg')] lg:h-64 p-16 m-auto text-center" >
    <ul class="grid lg:grid-cols-3 grid-cols-1">
      <li>
        <h3 class="text-3xl p-4 font-bold text-gray-500">
          Total Students
        </h3>
        <span class="text-black text-5xl font-bold py-3"
          >5140</span
        >
        <div class="w-32 h-1 rounded-lg m-auto mt-3 bg-green-400"></div>
      </li>
      <li>
        <h3 class="text-3xl p-4 font-bold text-gray-500">
          Partners
        </h3>
        <span class="text-black text-5xl font-bold py-3"
          >4123</span
        >
        <div class="w-28 h-1 rounded-lg m-auto mt-3 bg-green-400"></div>
      </li>
      <li>
        <h3 class="text-3xl  p-4 font-bold text-gray-500">
          Affiliate Distribution
        </h3>
        <span class="text-black text-5xl font-bold py-3"
          >4.18 Lac</span
        >
        <div class="w-48 h-1 rounded-lg m-auto mt-3 bg-green-400"></div>
      </li>
    </ul>
  </section>
  <section class="bg-white m-auto lg:p-32 p-6 lg:h-64 text-center">
    <h5 class="text-2xl text-green-600 italic">Courses</h5>
    <h2 class="text-3xl font-bold mt-4">Our Most Popular Courses</h2>

    <div class="flex flex-wrap items-center justify-between mt-8">
      <CourseCard
        class=""
        :imageSource="require('@/assets/download.jpg')"
        desc="Ultimate Business Intelligence Analyst A to Z Course 2021"
        count="477595"
        time="11 hr 20 mins"
        lectures="44 Lectures"
        :profileImg="require('@/assets/img1.jpg')"
        userName="Albert Hitler"
        amount="3000"
      />
      <CourseCard
        :imageSource="require('@/assets/9bda416d7f1e25c7cb961fa1e5b95925.webp')"
        desc="Adobe Photoshop Training: From Beginner to Pro"
        count="477595"
        time="11 hr 20 mins"
        lectures="44 Lectures"
        :profileImg="require('@/assets/img1.jpg')"
        userName="Albert Hitler"
        amount="3000"
      />
      <CourseCard
        :imageSource="require('@/assets/GettyImages-1211395020.png')"
        desc="Social Media Marketing - A to Z Content Marketing class 2021"
        count="477595"
        time="11 hr 20 mins"
        lectures="44 Lectures"
        :profileImg="require('@/assets/img1.jpg')"
        userName="Wanda Wilson"
        amount="3000"
      />
    </div>

    <h3 class="text-xl text-green-400 italic text-left mt-24">Top Earners</h3>
    <h2 class="text-3xl text-left font-bold lg:w-96 mt-6 capitalize">
      Transformng your ideas into reality
    </h2>
    <div class="flex justify-between lg:flex-row flex-wrap sm:flex-col mt-8">
      <EarnerCard
        :imgPath="require('@/assets/luis-villasmil-hh3ViD0r0Rc-unsplash.png')"
        amount="8,00,000"
      />

      <EarnerCard
        :imgPath="
          require('@/assets/christopher-campbell-rDEOVtE7vOs-unsplash.png')
        "
        amount="6,00,000"
      />
      <EarnerCard
        :imgPath="require('@/assets/craig-mckay-jmURdhtm7Ng-unsplash.png')"
        amount="5,00,000"
      />
      <EarnerCard
        :imgPath="require('@/assets/jonas-kakaroto-mjRwhvqEC0U-unsplash.png')"
        amount="4,50,000"
      />
    </div>
    <h3 class="text-xl text-green-400 italic text-left mt-24">Refer</h3>
    <h2 class="text-3xl text-left font-bold w-96 mt-6 capitalize">
      How it's works
    </h2>
    <img src="@/assets/refer.svg" class="lg:w-full w-96 h-72" />

    <h3 class="text-xl text-green-400 italic text-left mt-24">Testimonials</h3>
    <h2 class="lg:text-3xl text-2xl text-left font-bold lg:w-96 mt-6 capitalize">
      Check out What Our Students Think About Us
    </h2>
    <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-6 text-left flex flex-col">
      <TestimonialCard
        review="It's a comprehensive online learning platform for
      everyone looking to learn and course pro. provinding this platform which
      is very beneficial for practicals. Students can revise everything at home
      like dissection and slides"
        :profileImg="require('@/assets/img1.jpg')"
        userName="Anshul Jain"
        day="Yesterday"
      />
      <TestimonialCard
        review="It's a comprehensive online learning platform for
      everyone looking to learn and course pro. provinding this platform which
      is very beneficial for practicals. Students can revise everything at home
      like dissection and slides"
        :profileImg="require('@/assets/img1.jpg')"
        userName="Rajkumar Jain"
        day="Yesterday"
      />
    </div>
    <h3 class="text-xl text-green-400 italic text-center mt-24">Contact Us</h3>
    <h2 class="lg:text-3xl text-2xl text-center m-auto font-bold lg:w-96 mt-6 capitalize">
      Reach Out with any question you have
    </h2>
    <div class="m-auto p-4">
      <div class="flex float-left">
        <h2 class="text-3xl font-bold text-gray-700">Contact Information</h2>
        <ul class="flex flex-col justify-between float-left mt-20 -ml-72">
          <li class="flex py-6">
            <img src="@/assets/mail.svg" class="-mt-8" />
            <span class="lg:text-xl text-gray-600 font-bold"
              >contact@coursepro.com</span
            >
          </li>
          <li class="flex py-6">
            <img src="@/assets/phone.svg" class="-mt-8" />
            <span class="lg:text-xl text-gray-600 font-bold"
              >1800-562-895, 1800-869-877</span
            >
          </li>
          <li class="flex py-6">
            <img src="@/assets/location.svg" class="-mt-8" />
            <span class="lg:text-xl text-gray-600 font-bold"
              >102 Street, India</span
            >
          </li>

          <h2 class="lg:text-3xl text-2xl -mr-24 text-gray-800 font-bold">
            Social Media Channels
          </h2>
          <ul class="flex justify-between lg:ml-8 ml-16 py-16">
            <li><img src="@/assets/Facebook.svg" alt="fb" /></li>
            <li><img src="@/assets/Twitter.svg" alt="twitter" /></li>
            <li><img src="@/assets/Github.svg" alt="github" /></li>
            <li><img src="@/assets/Linkedin.svg" alt="ln" /></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="inline lg:float-right float-center m-auto text-center lg:w-1/2">
      <h2 class="text-2xl text-gray-800 font-bold lg:block md:block hidden">
        Fill up the form and our team will get back to you within 24 hours
      </h2>

      <form
        class="flex justify-between flex-wrap m-auto p-3 w-full"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
        novalidate="true"
      >
      <p v-if="errors.length" >
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.name">{{ error }}</li>
    </ul>
  </p>

        <input
          type="text"
          placeholder="Name"
          v-model="name"
          required
          class="border-green-400 p-3 border-b-2 w-64 outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          v-model="email"
          required
          class="border-green-400 p-3 border-b-2 w-64 outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          v-model="phone"
          required
          min="10"
          max="10"
          class="border-green-400 p-3 border-b-2 w-64 outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          v-model="sub"
          required
          class="border-green-400 p-3 border-b-2 w-64 outline-none"
        />
        <input
          type="text"
          placeholder="Message"
          v-model="mssg"
          required
          class="border-green-400 p-3 border-b-2 w-72 h-48 outline-none"
        />

        <input
          type="submit"
          value="Submit"
          class="w-48 h-14 m-auto rounded-xl bg-gray-800 text-white text-xl italic mt-24"
        />
      </form>
    </div>
  </section>
</div>
</template>

<script>

import CourseCard from "./components/CourseCard.vue";
import EarnerCard from "./components/EarnerCard.vue";
import Navbar from "./components/NavBar.vue";
import TestimonialCard from "./components/TestimonialCard.vue";

export default {
  
  name: "App",
  data: function () {
    return {
      errors: [],
      name: null,
      email: null,
      sub: null,
      phone: null,
      mssg: null,
      
    };
    
  },
  methods: {
    
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      } else if(!this.sub) {
        this.errors.push("Subject is required");
      } else if(!this.phone) {
        this.errors.push("Phone is required");
      } else if(!this.validatePhoneNumber(this.phone)) {
        this.errors.push("Valid phone no is required")
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validatePhoneNumber() {
      const validationRegex = /^\d{10}$/;
      if (this.phone.match(validationRegex)) {
        this.isValidPhoneNumber = true;
      } else {
        this.isValidPhoneNumber = false;
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  components: {
    CourseCard,
    EarnerCard,
    Navbar,
    TestimonialCard,
  },
  
};
</script>

<style></style>
