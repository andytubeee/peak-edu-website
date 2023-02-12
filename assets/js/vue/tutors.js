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
  props: ['name', 'specialties', 'image', 'bio', 'pricing'],
  created() {
    this.imagePath = `../assets/tutor-pic/${this.image}`;
  },
  methods: {
    renderTextFromPricingInfo: (pricingInfo) => {
      let text = '';
      Object.keys(pricingInfo).forEach((key) => {
        text += `<b>${key}</b>: $${pricingInfo[key]}/hr
        
        <br>
        `;
      });
      return text;
    },
    openPricingPopup() {
      if (this.pricing === undefined) {
        return Swal.fire({
          title: 'Pricing Info',
          text: 'No pricing info available for this tutor',
          icon: 'warning',
        });
      }
      Swal.fire({
        title: 'Pricing Info',
        html: this.renderTextFromPricingInfo(this.pricing),
        icon: 'info',
      });
    },
  },
  data: function () {
    return {
      imagePath: '',
      showBio: false,
      pricing: this.pricing,
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
            <button @click="showBio=!showBio" class="btn mb-5 me-3 text-2">{{showBio ? "Hide" : "Show"}} Bio</button>
            <button @click="openPricingPopup" class="btn mb-5 text-2">See Pricing</button>
            <Transition><p v-if="showBio">{{bio}}</p>
            </Transition>

        </div>
    </div>
    `,
});

app.mount('#app');
