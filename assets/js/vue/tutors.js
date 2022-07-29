const { createApp } = Vue;

let app = createApp({
  data() {
    return {
      tutors: [],
    };
  },
  async mounted() {
    const res = await fetch('./assets/data/tutors.json');
    const data = await res.json();
    this.tutors = data;
  },
});

app.component('tutor-card', {
  props: ['name', 'specialties', 'image', 'bio'],
  created() {
    this.imagePath = `../assets/team-pic/${this.image}`;
  },
  data() {
    return {
      imagePath: '',
      showBio: false,
    };
  },
  template: `
    <div class="col-sm-7 col-lg-4">
        <div class="icon-box iconbox-pink" style="height: min-content" style="transition: all 300ms">
            <img class='tutor-headshot' :src="this.imagePath">
            <h4>{{name}}</h4>
            <span><strong>Specialties: </strong> {{specialties}}</span>
            <br>
            <br>
            <button @click="showBio=!showBio" class="btn mb-5 text-2">{{showBio ? "Hide" : "Show"}} Bio</button>
            <Transition><p v-if="showBio">{{bio}}</p>
            </Transition>

        </div>
    </div>
    `,
});

app.mount('#app');
