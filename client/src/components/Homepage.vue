<!-- Landing/Home Page -->

<template>
  <div>
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
        header: "Strava Heatmap Art Creator"
    };
  },
};
</script>