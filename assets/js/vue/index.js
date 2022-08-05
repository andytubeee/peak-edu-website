const { createApp } = Vue;

let app = createApp({
  data() {
    return {
      teamMembers: [],
    };
  },
  async mounted() {
    const res = await fetch('./assets/data/team.json');
    const data = await res.json();
    this.teamMembers = data;
  },
});

app.component('team-card', {
  props: ['name', 'position', 'image', 'bio'],
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
  <div class="col-4 mb-2">
  <div class="icon-box iconbox-pink" style="height: auto;">
      <img class='rounded-3' :src="this.imagePath" width="250">
      <br>
      <br>
      <h4>{{name}}</h4>

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

app.mount('#app');
