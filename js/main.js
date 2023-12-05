"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      message: "Hello Vue!",
      emails: [],
      completed: false,
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((response) => {
        console.log(response.data.response);
        this.emails.push(response.data.response);
        if (this.emails.length === 10) {
          this.completed = true;
        }
      });
    }
  },
}).mount("#app");
