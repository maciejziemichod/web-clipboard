<template>
  <main class="container">
    <section class="section">
      <InputItem />
    </section>
    <section class="section">
      <CopyItem v-for="item in items" :key="item" :item="item" />
    </section>
    <section class="section">
      <button @click="reset" class="button is-danger is-pulled-right">
        Reset
      </button>
    </section>
    <transition name="fade">
      <MessageItem v-if="showMessage" />
    </transition>
  </main>
</template>

<script>
import CopyItem from "@/components/CopyItem.vue";
import InputItem from "@/components/InputItem.vue";
import MessageItem from "@/components/MessageItem.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    CopyItem,
    InputItem,
    MessageItem,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    showMessage() {
      return this.$store.state.message.show;
    },
  },
  methods: {
    ...mapMutations({
      resetItems: "reset",
      set: "set",
    }),
    saveToStorage() {
      localStorage.setItem("ditto-clipboard", JSON.stringify(this.items));
      console.log("Saved to storage.");
    },
    reset() {
      this.resetItems();
      try {
        localStorage.removeItem("ditto-clipboard");
      } catch {
        console.warn("It is already resetted");
      }
      console.log("Resetted.");
    },
  },
  mounted() {
    if (localStorage.getItem("ditto-clipboard")) {
      this.set({
        items: JSON.parse(localStorage.getItem("ditto-clipboard")),
      });
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
