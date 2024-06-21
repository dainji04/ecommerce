<template>
  <HeaderLogin />
  <!-- <router-view /> -->
  <h1>Hello User {{ name }}</h1>
  <button class="border border-solid border-black" @click="Logout">
    Logout
  </button>
  <Footer />
</template>
<script>
import HeaderLogin from "../layouts/HeaderLogin.vue";
import Footer from "../layouts/Footer.vue";

import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";

export default {
  components: {
    HeaderLogin,
    Footer,
  },
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      console.log(user);
      if (user) {
        name.value = user.displayName;
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
    };

    return {
      Logout,
      name,
    };
  },
};
</script>
