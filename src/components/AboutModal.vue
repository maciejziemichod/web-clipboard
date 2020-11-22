<template>
  <div class="modal">
    <div @click="setShowAbout({ show: false })" class="modal-background"></div>
    <div class="modal-content" :class="{ darkmode }">
      <div class="box">
        <div class="content">
          <h3>Web clipboard</h3>
          <p>
            Web app made for personal use. It is built with Vue 3, Vuex and
            Bulma. Data is stored in local storage. This project can be found on
            <a
              href="https://github.com/maciejziemichod/web-clipboard"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >.
          </p>
          <div><MyLogo :width="50" /></div>
        </div>
      </div>
    </div>
    <button
      @click="setShowAbout({ show: false })"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
import MyLogo from "@/components/MyLogo.vue";
import { mapMutations } from "vuex";

export default {
  name: "AboutModal",
  components: {
    MyLogo,
  },
  methods: {
    ...mapMutations(["setShowAbout"]),
  },
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
  },
};
</script>

<style scoped>
a {
  color: #3273dc;
}
</style>