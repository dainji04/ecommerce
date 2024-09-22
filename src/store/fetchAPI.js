// import { defineStore } from "pinia";
// import { ref, onBeforeMount } from "vue";

// export const fetchAPI = defineStore("fetch", () => {
//   let listItems = [];
//   let baseURL = ref("http://localhost:3000/");
//   const getListItems = (options) => {
//     const newURL = baseURL.value + options;
//     console.log(newURL);
//     fetch(newURL)
//       .then((res) => res.json())
//       .then((data) => {
//         listItems = data;
//         console.log("set listItems: ", listItems);
//       })
//       .catch((err) => console.log(err));
//   };

//   return { baseURL, listItems, getListItems };
// });

import { defineStore } from "pinia";

export const useItemStore = defineStore("itemStore", {
  state: () => ({
    listItems: [], // Danh sách các items sẽ được lưu vào đây
    baseURL: "http://localhost:3000/", // URL cơ sở của API
  }),

  actions: {
    async getListItems(options) {
      try {
        // Gọi API với fetch, kết hợp baseURL và options
        const response = await fetch(this.baseURL + options);
        // Kiểm tra phản hồi từ API
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        // Chuyển phản hồi thành JSON
        const data = await response.json();

        // Lưu dữ liệu vào state listItems
        this.listItems = data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
  },
});
