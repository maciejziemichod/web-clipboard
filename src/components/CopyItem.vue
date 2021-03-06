<template>
  <div class="level has-background-light">
    <div class="level-left">
      <span class="ml-4 level-item">
        {{ item }}
      </span>
    </div>
    <div class="level-right">
      <div class="level-item">
        <button
          @click="copyToClipboard(item)"
          class="button is-primary mr-4"
          :class="{ darkmode }"
        >
          Copy
        </button>
        <button
          @click="showConfirmDelete = true"
          class="button is-danger"
          :class="{ darkmode }"
        >
          Delete
        </button>
      </div>
    </div>
    <ConfirmBox
      v-if="showConfirmDelete"
      @confirm-true="deleteItem(item)"
      @confirm-false="showConfirmDelete = false"
    >
      <template v-slot:title>Delete item</template>
      <template v-slot:message
        >Are you sure you want to delete this item?</template
      >
    </ConfirmBox>
  </div>
</template>

<script>
import ConfirmBox from "@/components/ConfirmBox.vue";
import { mapMutations } from "vuex";

export default {
  name: "CopyItem",
  props: {
    item: {
      required: true,
      type: String,
    },
  },
  components: {
    ConfirmBox,
  },
  data() {
    return {
      showConfirmDelete: false,
    };
  },
  methods: {
    ...mapMutations(["removeItem", "toggleMessage", "setMessageType"]),
    showMessage(type) {
      if (["success", "error"].indexOf(type) === -1) return;
      this.setMessageType({ type });
      this.toggleMessage({ show: true });
      setTimeout(() => {
        this.toggleMessage({ show: false });
      }, 1000);
    },
    deleteItem(item) {
      this.showConfirmDelete = false;
      this.removeItem({ item });
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
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>