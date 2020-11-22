<template>
  <main class="container">
    <div class="mt-4 is-left ml-4">
      <MyLogo />
    </div>
    <div class="buttons is-right mr-4">
      <button
        @click="toggleDarkmode(!darkmode)"
        class="button is-rounded is-dark"
      >
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
      <button
        @click="showConfirmReset = true"
        class="button is-danger is-pulled-right"
        :class="{ darkmode }"
      >
        Reset
      </button>
      <ConfirmBox
        v-if="showConfirmReset"
        @confirm-true="reset"
        @confirm-false="showConfirmReset = false"
      >
        <template v-slot:title>Reset</template>
        <template v-slot:message
          >Are you sure you want to reset? Clearing local storage will erase the
          data as well.
        </template>
      </ConfirmBox>
    </section>
    <transition name="fade">
      <MessageItem v-if="isMessageShown" />
    </transition>
  </main>
  <AppFooter />
</template>

<script>
import MyLogo from "@/components/MyLogo.vue";
import CopyItem from "@/components/CopyItem.vue";
import InputItem from "@/components/InputItem.vue";
import MessageItem from "@/components/MessageItem.vue";
import ConfirmBox from "@/components/ConfirmBox.vue";
import AppFooter from "@/components/AppFooter.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    MyLogo,
    CopyItem,
    InputItem,
    MessageItem,
    draggable: VueDraggableNext,
    ConfirmBox,
    AppFooter,
  },
  data() {
    return {
      showConfirmReset: false,
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
    isMessageShown() {
      return this.$store.state.message.show;
    },
    darkmode() {
      return this.$store.state.darkmode;
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
      localStorage.setItem("web-clipboard-darkmode", this.darkmode);
      console.log("Saved to storage.");
    },
    reset() {
      this.resetItems();
      try {
        localStorage.removeItem("web-clipboard");
        localStorage.removeItem("web-clipboard-darkmode");
      } catch {
        console.warn("It is already resetted");
      }
      console.log("Resetted.");
      location.reload();
    },
    toggleDarkmode(isOn) {
      if (isOn) {
        this.$store.commit("darkmodeOn");
      } else {
        this.$store.commit("darkmodeOff");
      }

      if (isOn) {
        document.documentElement.classList.add("darkmode");
      } else {
        document.documentElement.classList.remove("darkmode");
      }
    },
  },
  mounted() {
    if (localStorage.getItem("web-clipboard")) {
      this.setItems({
        items: JSON.parse(localStorage.getItem("web-clipboard")),
      });
    }

    if (localStorage.getItem("web-clipboard-darkmode") === "true") {
      this.toggleDarkmode(true);
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style lang="scss">
.container a,
footer a {
  color: inherit;
}

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
