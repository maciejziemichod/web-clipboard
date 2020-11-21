<template>
  <footer class="footer mt-6">
    <div class="content has-text-centered">
      <AboutModal
        class="is-activex"
        :class="{ darkmode, 'is-active': showAbout }"
      />
      <button @click="setShowAbout({ show: true })" class="button is-white">
        <b> About </b>
      </button>
      <p>Built by Maciej Ziemichód.</p>
      <div class="icons">
        <FontAwesome icon="github" link="https://github.com/maciejziemichod" />
        <FontAwesome icon="codepen" link="https://codepen.io/maciejziemichod" />
        <FontAwesome icon="twitter" link="https://twitter.com/Maciej84900684" />
        <FontAwesome
          icon="linkedin"
          link="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import AboutModal from "@/components/AboutModal.vue";
import FontAwesome from "@/components/FontAwesome.vue";
import { mapMutations } from "vuex";

export default {
  name: "AppFooter",
  components: {
    AboutModal,
    FontAwesome,
  },
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
    showAbout() {
      return this.$store.state.showAbout;
    },
  },
  watch: {
    showAbout(newValue) {
      if (newValue) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
  },
  methods: {
    ...mapMutations(["setShowAbout"]),
  },
};
</script>

<style scoped>
</style>