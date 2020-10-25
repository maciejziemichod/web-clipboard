<template>
  <div class="level has-background-light">
    <span class="ml-4">
      {{ item }}
    </span>
    <div class="level-right">
      <button @click="copyToClipboard(item)" class="button is-primary mr-4">
        Copy
      </button>
      <button @click="deleteItem(item)" class="button is-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CopyItem",
  props: {
    item: {
      required: true,
      type: String,
    },
  },
  methods: {
    ...mapMutations(["remove", "toggleMessage", "setMessageType"]),
    showMessage(type) {
      if (["success", "error"].indexOf(type) === -1) return;
      this.setMessageType({ type });
      this.toggleMessage({ show: true });
      setTimeout(() => {
        this.toggleMessage({ show: false });
      }, 1000);
    },
    deleteItem(item) {
      this.remove({ item });
      console.log(`"${item}" deleted.`);
    },
    fallbackCopyToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
        this.showMessage("success");
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
        this.showMessage("error");
      }

      document.body.removeChild(textArea);
    },
    copyToClipboard(text) {
      if (!navigator.clipboard) {
        this.fallbackCopyToClipboard(text);
        return;
      }
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Async: Copying to clipboard was successful!");
          this.showMessage("success");
        })
        .catch((err) => {
          console.error("Async: Could not copy text: ", err);
          this.showMessage("error");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>