<template>
  <a
    href="https://maciejziemichod.github.io/portfolio/"
    target="_blank"
    rel="noopener noreferrer"
    class="hvr-grow"
  >
    <img src="@/assets/logo.svg" alt="logo" :width="width" />
  </a>
</template>

<script>
export default {
  name: "MyLogo",
  props: {
    width: {
      type: Number,
      default: 60,
    },
  },
};
</script>

<style>
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>