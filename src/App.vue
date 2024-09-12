<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase/compat/app";

export default {
  data() {
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/");
        } else if (
          route.path == "/login" ||
          route.path == "/sign-up" ||
          route.path == "/" ||
          route.path == ""
        ) {
          router.replace("/home/u");
        }
      });
    });
    return {};
  },
};
</script>
