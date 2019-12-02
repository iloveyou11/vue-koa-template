<template>
  <div class="hello">
    Hello World!
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.testApi();
  },
  methods: {
    testApi() {
      axios.get("/api/index").then(data => {
        console.log(data);
      });
      axios.get("/api/user").then(data => {
        console.log(data);
      });
    }
  }
};
</script>

