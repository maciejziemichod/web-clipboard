<template>
  <a
    v-if="link !== ''"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="icon is-medium"
  >
    <i class="fa-lg" :class="iconClass"></i>
  </a>
  <span v-else class="icon is-mediów">
    <i class="fa-lg" :class="iconClass"></i>
  </span>
</template>

<script>
export default {
  name: "FontAwesome",
  props: {
    icon: {
      required: true,
      validator: (value) => {
        return (
          ["github", "twitter", "codepen", "linkedin", "link"].indexOf(
            value
          ) !== -1
        );
      },
    },
    link: {
      default: "",
      type: String,
    },
  },
  computed: {
    iconClass() {
      const icons = {
        github: "fab fa-github",
        twitter: "fab fa-twitter",
        codepen: "fab fa-codepen",
        linkedin: "fab fa-linkedin-in",
        link: "fas fa-external-link-alt",
      };
      return icons[this.icon];
    },
  },
};
</script>