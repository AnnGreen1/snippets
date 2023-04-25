<template>
  <div>
    <h1>如何等待一个请求</h1>

    <button @click="wait()">wait</button>
    <button @click="nowait()">nowait</button>
  </div>
</template>

<script>
import { sleeptens } from "@/api/dev";
export default {
  data() {
    return {};
  },
  methods: {
    async wait() {
      await sleeptens()
        .then((res) => {
          console.log(new Date(), res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(new Date(), "wait");
    },
    nowait() {
      sleeptens()
        .then((res) => {
          console.log(new Date(), res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(new Date(), "nowait");
    },
  },
  created() {},
};
</script>
