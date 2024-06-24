<template>
  <HeaderLogin />
  <!-- <router-view /> -->
  <Body />
  <Footer />
</template>
<script>
import HeaderLogin from "../layouts/HeaderLogin.vue";
import Footer from "../layouts/Footer.vue";
import Body from "../layouts/Body.vue";
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";

export default {
  components: {
    HeaderLogin,
    Body,
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
