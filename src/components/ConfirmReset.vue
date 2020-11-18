<template>
  <div class="box">
    <div class="message is-danger">
      <div class="message-header">
        <p>Reset</p>
      </div>
      <div class="message-body">
        <div class="level">Are you sure you want to reset?</div>
        <div class="level">
          <div class="level-item">
            <button class="button is-danger is-light" @click="resetTrue">
              Yes
            </button>
          </div>
          <div class="level-item">
            <button class="button is-danger is-light" @click="resetFalse">
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
  name: "ConfirmReset",
  emits: ["reset-true", "reset-false"],
  methods: {
    resetTrue() {
      this.$emit("reset-true");
    },
    resetFalse() {
      this.$emit("reset-false");
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
}
</style>