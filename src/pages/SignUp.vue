<template>
  <Header />
  <div class="mt-[60px]">
    <div class="flex items-center gap-[90px]">
      <div class="w-[60%] pt-[75px] bg-[#CBE4E8]">
        <img src="@/assets/images/signupBG.png" alt="" />
      </div>
      <div class="w-[30%]">
        <h1 class="font-[inter] text-4xl font-medium">Create an account</h1>
        <h2 class="mt-6 mb-12">Enter your details below</h2>
        <form @submit.prevent="Register">
          <div class="input-form">
            <input type="text" v-model="name" required />
            <label for="name">Name</label>
          </div>
          <div class="input-form">
            <input type="email" v-model="email" required />
            <label for="email">Email</label>
          </div>
          <div class="input-form">
            <input type="password" v-model="pwd" required />
            <label for="password">password</label>
          </div>
          <button
            type="submit"
            class="mt-10 bg-primary py-4 w-full rounded-md text-white font-medium"
          >
            Create Account
          </button>
        </form>
        <button
          class="mt-4 w-full flex justify-center items-center gap-4 bg-white border border-black rounded-md py-4"
        >
          <img src="@/assets/fonts/google.svg" alt="" />
          <p>Sign up with Google</p>
        </button>
        <div class="mt-8 flex justify-center items-center gap-4">
          <p>Already have account?</p>
          <router-link to="/login" class="font-medium border-b border-black">
            Log in
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";

import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const name = ref("");
    const email = ref("");
    const pwd = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, pwd.value)
        .then((user) => {
          user.user.updateProfile({
            displayName: name.value,
          });
          console.log(user);
        })
        .catch((err) => alert(err.massage));
    };

    return {
      Register,
      name,
      email,
      pwd,
    };
  },
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
}
.input-form {
  height: 40px;
  margin-top: 40px;
  position: relative;
}
.input-form label {
  pointer-events: none;
  position: absolute;
  transition: 0.5s;
  top: 0;
  color: black;
  opacity: 0.3;
}

.input-form input:focus ~ label,
.input-form input:valid ~ label {
  top: -17px;
}

.input-form input {
  position: absolute;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
  border-bottom: 0.5px solid #000;
}
</style>
