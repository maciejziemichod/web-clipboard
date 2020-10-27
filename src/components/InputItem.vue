<template>
  <form @submit.prevent="addItem">
    <div class="field has-addons">
      <div class="control full-width">
        <input v-model="input" type="text" class="input" />
      </div>
      <div class="control">
        <button class="button is-primary">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "InputItem",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    addItem() {
      if (this.input && this.$store.state.items.indexOf(this.input) === -1) {
        this.$store.commit("addItem", { item: this.input });
        console.log(`"${this.input}" added.`);
        this.input = "";
      } else {
        // TODO: message what is wrong
        this.input = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
</style>