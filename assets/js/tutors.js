const { createApp } = Vue;

let app = createApp({
  data() {
    return {
      tutors: [],
    };
  },
  async mounted() {
    const res = await fetch('../assets/js/tutors.json');
    const data = await res.json();
    this.tutors = data;
    console.log(this.tutors);
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
    <div class="col-4">
        <div class="icon-box iconbox-pink" style="height: min-content">
            <img class='rounded-3' :src="this.imagePath" width="200"
                style='margin-bottom: 100px;'>
            <h4>{{name}}</h4>
            <span><strong>Specialties: </strong> {{specialties}}</span>
            <br>
            <br>
            <button @click="showBio=!showBio" class="btn mb-5">{{showBio ? "Hide" : "Show"}} Bio</button>

            <p v-if="showBio">{{bio}}</p>
        </div>
    </div>
    `,
});

app.mount('#app');
