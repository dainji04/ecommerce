<template>
  <div class="mt-[60px]">
    <div class="flex items-center gap-[90px] max-tablet:px-4">
      <div class="w-[60%] pt-[75px] bg-[#CBE4E8] max-tablet:hidden">
        <img src="@/assets/images/signupBG.png" alt="" />
      </div>
      <div class="w-[30%] max-tablet:w-full">
        <div
          v-if="userExists"
          class="bg-[#ff818146] border-[#ff818266] border-2 border-solid rounded flex justify-center items-center h-20 mb-2"
        >
          <p class="text-base">User already exists. Please log in.</p>
          <button @click="userExists = false">
            <img class="ml-2 w-5 h-5" src="@/assets/fonts/close.svg" alt="" />
          </button>
        </div>
        <h1 class="font-[inter] text-4xl font-medium">Create an account</h1>
        <h2 class="mt-6 mb-12">Enter your details below</h2>
        <form @submit.prevent="validate">
          <div class="input-form">
            <input type="text" v-model="name" required />
            <label for="name">Name</label>
            <div v-if="error.name">
              <p>{{ error.name }}</p>
            </div>
          </div>
          <div class="input-form">
            <input type="email" v-model="email" required />
            <label for="email">Email</label>
            <div v-if="error.email">
              <p>{{ error.email }}</p>
            </div>
          </div>
          <div class="input-form">
            <input type="password" v-model="pwd" required />
            <label for="password">password</label>
            <div v-if="error.pwd">
              <p>{{ error.pwd }}</p>
            </div>
          </div>
          <button type="submit" class="mt-10 button--hover w-full">
            Create Account
          </button>
        </form>
        <button
          class="mt-4 w-full flex justify-center items-center gap-4 bg-white border border-black rounded-md py-4"
          @click="signInGoogle"
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
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";
import useFetch from "@/store/fetchAPI";
export default {
  data() {
    const name = ref("");
    const email = ref("");
    const pwd = ref("");
    const router = useRouter();
    const userExists = ref(false);
    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, pwd.value)
        .then((user) => {
          user.user.updateProfile({
            displayName: name.value,
          });
          router.replace("/");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            userExists.value = true;
          } else {
            console.log(err.message);
          }
        });
    };

    return {
      URL: useFetch().URL,
      Register,
      name,
      email,
      pwd,
      error: [],
      userExists,
    };
  },
  methods: {
    signInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          this.email = user.email;
          this.name = user.displayName;
          this.createUserDB();
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch((error) => {
          console.log("Google Sign-in failed", error);
        });
      // signInWithPopup(getAuth(), provider)
      //   .then((result) => {
      //     console.log(result.user);
      //     router.push("/");
      //   })
      //   .catch((error) => {
      //     console.log("Google Sign-in failed", error);
      //   });
    },
    minlength(value, minLength) {
      return value.length > minLength ? true : false;
    },
    checkEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    },
    createUserDB() {
      const newURL = this.URL + "user/register";
      console.log(newURL);
      fetch(newURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          emailLogin: this.email,
        }),
      });
    },
    async validate() {
      this.error = [];
      if (!this.minlength(this.name, 5)) {
        this.error["name"] = "name must be at least 5 characters";
      }
      if (!this.checkEmail(this.email)) {
        this.error["email"] = "Entered an invalid email address!";
      }
      if (!this.minlength(this.pwd, 5)) {
        this.error["pwd"] = "password must be at least 6 characters";
      }
      if (Object.keys(this.error).length == 0) {
        this.createUserDB();
        this.Register();
      }
    },
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
  border-bottom: 0.5px solid #000;
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
}
.input-form > div {
  position: absolute;
  color: red;
  margin-top: 40px;
}
</style>
