<template>
  <div class="mt-20 max-w-[1170px] mx-auto max-tablet:mx-5">
    <div class="max-tablet:mx-3">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>My Account</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="mt-20 flex gap-[100px]">
      <div class="flex-1 py-10 px-2">
        <h1 class="text-primary mb-4">Edit Your Profile</h1>
        <div class="flex flex-col gap-2 w-full">
          <label for="firstName">Full Name</label>
          <input type="text" v-model="fullname" :class="inputStyle" />
        </div>
        <div class="mt-6 w-full flex gap-14">
          <div class="flex flex-col gap-2 w-full">
            <label for="email">Email</label>
            <input type="email" v-model="email" :class="inputStyle" />
          </div>
        </div>
        <div class="mt-6 w-full flex gap-14">
          <div class="flex flex-col gap-2 w-full">
            <label for="address">Address</label>
            <input type="text" v-model="address" :class="inputStyle" />
          </div>
        </div>
        <div class="mt-6 w-full flex gap-14">
          <div class="flex flex-col gap-2 w-full">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" v-model="phoneNumber" :class="inputStyle" />
          </div>
        </div>
        <div class="mt-6 float-right">
          <button
            class="bg-primary px-12 py-4 rounded text-white font-medium"
            @click="toggleEditMode"
            v-show="showEditBtn"
          >
            Edit Information
          </button>
          <div class="flex items-center rounded gap-6" v-show="showUpdateBtn">
            <button class="bg-gray-100 px-5 py-4" @click="toggleEditMode">
              cancel
            </button>
            <button
              class="bg-primary px-12 py-4 rounded text-white font-medium"
              @click="updateUserProfile"
            >
              updateProfile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, updateProfile } from "firebase/auth";
import "firebase/auth";
import User from "@/store/getUser";
import { ref } from "vue";
export default {
  data() {
    return {
      inputStyle: "unselectable",
      showEditBtn: true,
      showUpdateBtn: false,
      fullname: ref(""),
      email: ref(""),
      address: ref(""),
      phoneNumber: ref(""),
    };
  },
  async mounted() {
    const user = await User().getCurrentUser();
    console.log(user);

    const newURL = `http://localhost:3000/user/auth/${user.email}/info`;
    console.log(newURL);

    fetch(newURL)
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data, this.fullname, this.email);
        const userInfo = data.data;
        this.fullname = userInfo.name;
        this.email = userInfo.email;
        this.address = userInfo.address;
        this.phoneNumber = userInfo.phoneNumber;
      });
  },
  methods: {
    async toggleEditMode() {
      if (this.showEditBtn) {
        this.inputStyle = "select";
      } else {
        this.inputStyle = "unselectable";
      }
      this.showUpdateBtn = !this.showUpdateBtn;
      this.showEditBtn = !this.showEditBtn;
    },
    async updateUserProfile() {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: this.fullname,
        email: this.email,
      })
        .then(async () => {
          const user = await User().getCurrentUser();
          const email = await user.email;
          fetch(`http://localhost:3000/user/auth/${email}/update`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.fullname,
              email: this.email,
              address: this.address,
              phoneNumber: this.phoneNumber,
            }),
          });

          this.inputStyle = "unselectable";
          this.showUpdateBtn = !this.showUpdateBtn;
          this.showEditBtn = !this.showEditBtn;
          alert("profile is updated");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.unselectable,
.select {
  background-color: #f5f5f5;
  padding: 13px 12px 13px 12px;
  font-family: "Times New Roman";
  font-size: 18px;
}
.unselectable {
  pointer-events: none;
}
</style>
