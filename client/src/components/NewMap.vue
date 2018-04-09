<!-- Page Where New Maps will be Created -->

<template>
  <google-map name="strava-heatmap" :coordinates="coordinates"></google-map>
</template>

<script>

import axios from 'axios'
import fsp from 'fs.promised'
import jsonData from '../../data/data.2.json'
import GoogleMap from '@/components/GoogleMap'

export default {
  name: "NewMap",

  // Register components used here
  components: {
    'GoogleMap': GoogleMap
  },

  data() {
    return {
        coordinates: []
    };
  },

  // Runs the getCoordinates methods on page navigation
  created() {
    this.coordinates = this.getCoordinates();
  },

  methods: {
    getCoordinates() {
      return jsonData;
    }
  }
};
</script>