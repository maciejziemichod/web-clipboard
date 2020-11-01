<template>
  <div class="box">
    <div class="message is-danger">
      <div class="message-header">
        <p>Delete item</p>
      </div>
      <div class="message-body">
        <div class="level">Are you sure you want to delete this item?</div>
        <div class="level">
          <div class="level-item">
            <button class="button is-danger is-light" @click="deleteTrue">
              Yes
            </button>
          </div>
          <div class="level-item">
            <button class="button is-danger is-light" @click="deleteFalse">
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
  name: "ConfirmDelete",
  emits: ["delete-true", "delete-false"],
  methods: {
    deleteTrue() {
      this.$emit("delete-true");
    },
    deleteFalse() {
      this.$emit("delete-false");
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