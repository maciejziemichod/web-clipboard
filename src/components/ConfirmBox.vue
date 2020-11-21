<template>
  <div class="box" :class="{ darkmode }">
    <div class="message is-danger">
      <div class="message-header">
        <p>
          <slot name="title"></slot>
        </p>
      </div>
      <div class="message-body">
        <div class="level">
          <slot name="message"></slot>
        </div>
        <div class="level">
          <div class="level-item">
            <button class="button is-danger is-light" @click="confirmTrue">
              Yes
            </button>
          </div>
          <div class="level-item">
            <button class="button is-danger is-light" @click="confirmFalse">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmBox",
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
  },
  emits: ["confirm-true", "confirm-false"],
  methods: {
    confirmTrue() {
      this.$emit("confirm-true");
    },
    confirmFalse() {
      this.$emit("confirm-false");
    },
  },
};
</script>

<style scoped>
.box {
  position: fixed !important;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1000;
}
@media (max-width: 800px) {
  .box {
    width: 90%;
  }
}
</style>