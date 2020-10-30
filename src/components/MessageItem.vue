<template>
  <div :class="classObject" class="notification has-text-centered">
    {{ text }}
  </div>
</template>

<script>
const types = {
  success: {
    class: "is-success",
    text: "Copied to clipboard.",
  },
  error: {
    class: "is-danger",
    text: "Something went wrong.",
  },
};

export default {
  name: "MessageItem",
  computed: {
    type() {
      return this.$store.state.message.type;
    },
    text() {
      return types[this.type].text;
    },
    messageClass() {
      return types[this.type].class;
    },
    darkmode() {
      return this.$store.state.darkmode;
    },
    classObject() {
      return {
        darkmode: this.darkmode,
        [this.messageClass]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  width: fit-content;
  max-width: 100%;
  position: fixed !important;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 1.25rem 2.5rem;
}
</style>