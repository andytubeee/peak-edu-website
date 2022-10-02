const { createApp } = Vue;

let app = createApp({
  data() {
    return {
      teamMembers: [],
      testimonials: [],
    };
  },
  async mounted() {
    const teamMembers = await fetch('./assets/data/team.json');
    const teamMembersData = await teamMembers.json();
    this.teamMembers = teamMembersData;

    const testimonials = await fetch('./assets/data/testimonials.json');
    const testimonialsData = await testimonials.json();
    this.testimonials = testimonialsData;
  },
});

app.component('team-card', {
  props: ['name', 'position', 'image', 'bio', 'linkedin'],
  created() {
    this.imagePath = `../assets/team-pic/${this.image}.jpg`;
  },
  data() {
    return {
      imagePath: '',
      showBio: false,
    };
  },
 
  computed: {
    bioIco() {
      return this.showBio ? 'icofont-rounded-down' : 'icofont-rounded-right';
    },
  },

  template: `
  <div class="col-md-4 mb-2">
  <div class="icon-box iconbox-pink" style="height: auto;">
      <img class='rounded-3' :src="this.imagePath" width="250">
      <br>
      <br>
      <h4>
        <a :href="this.linkedin">{{name}}</a>
      </h4>

      <span><strong>{{position}}</strong></span>
      <br>
      <br>
      <div @click="showBio = !showBio" class="d-flex justify-content-center align-items-center pe-pointer">
        <i :class="bioIco" style="color: #4C88D8; font-size:2em;"></i> 
        Read Bio
      </div>
      <Transition>
      <p v-if="showBio" class="mt-3">{{bio}}</p></Transition>
  </div>
</div>
    `,
});

app.component('testimonial-card', {
  props: ['message', 'position'],

  data() {
    return {};
  },
  template: `
  <div class="swiper-slide">
      <div class="testimonial-item">
          <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              {{message}}
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="assets/img/testimonials/placeholder.png" class="testimonial-img"
              alt="">
          <h3>{{position}}</h3>
      </div>
  </div>
    `,
});

app.mount('#app');
