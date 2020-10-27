<template>
  <main class="container">
    <div class="mt-4 buttons is-right">
      <button @click="toggleDarkmode" class="button is-rounded is-dark">
        <span class="icon" v-html="darkmodeIcon"> </span>
      </button>
    </div>
    <section class="section">
      <InputItem />
    </section>
    <section class="section">
      <draggable :list="items">
        <CopyItem v-for="item in items" :key="item" :item="item" />
      </draggable>
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
import { VueDraggableNext } from "vue-draggable-next";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    CopyItem,
    InputItem,
    MessageItem,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      darkmode: false,
    };
  },
  computed: {
    items: {
      get() {
        return this.$store.state.items;
      },
      set(value) {
        this.$store.commit("setItems", { items: value });
      },
    },
    showMessage() {
      return this.$store.state.message.show;
    },
    darkmodeIcon() {
      return this.darkmode
        ? "<i class='fas fa-sun'></i>"
        : "<i class='fas fa-moon'></i>";
    },
  },
  methods: {
    ...mapMutations(["resetItems", "setItems"]),
    saveToStorage() {
      localStorage.setItem("web-clipboard", JSON.stringify(this.items));
      console.log("Saved to storage.");
    },
    reset() {
      this.resetItems();
      try {
        localStorage.removeItem("web-clipboard");
      } catch {
        console.warn("It is already resetted");
      }
      console.log("Resetted.");
    },
    toggleDarkmode() {
      this.darkmode = !this.darkmode;
      if (this.darkmode) {
        document.documentElement.classList.add("darkmode");
        document.querySelectorAll(".button").forEach((el) => {
          el.classList.add("darkmode");
        });
      } else {
        document.documentElement.classList.remove("darkmode");
        document.querySelectorAll(".button").forEach((el) => {
          el.classList.remove("darkmode");
        });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("web-clipboard")) {
      this.setItems({
        items: JSON.parse(localStorage.getItem("web-clipboard")),
      });
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style lang="scss">
.darkmode:not(.is-dark) {
  filter: invert(100%);
}

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
