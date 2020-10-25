<template>
  <div :class="messageClass" class="notification has-text-centered">
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
  },
};
</script>

<style lang="scss" scoped>
.notification {
  width: fit-content;
  position: fixed !important;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 1.25rem 2.5rem;
}
</style>