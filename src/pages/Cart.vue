<template>
  <div class="max-w-[1170px] mx-auto max-tablet:mx-3">
    <div id="road-map" class="flex items-center gap-3 my-20">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Cart</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="table w-full">
      <a-table
        class="max-tablet:w-[370px] max-tablet:overflow-auto"
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="products"
        :row-key="(record) => record.id"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'">
            {{ text }}
          </template>
          <template v-else-if="column.dataIndex === 'delete'">
            <a-popconfirm
              title="Sure to delete?"
              @confirm="onDelete(emailUser, record._id)"
            >
              <a>Delete</a>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </div>
    <div
      class="mt-20 flex max-tablet:flex-col max-tablet:gap-3 justify-between"
    >
      <div class="flex gap-4">
        <input
          class="border border-solid border-[#000] h-fit rounded-md py-3 px-6"
          type="text"
          placeholder="Coupon Code"
        />
        <button
          class="bg-primary text-white h-fit py-3 px-6 rounded-md font-medium"
        >
          Apply Coupon
        </button>
      </div>
      <div class="border border-solid border-black py-8 px-6 rounded-md">
        <div class="w-[422px] max-tablet:w-full">
          <h1 class="text-base font-semibold mb-6">Cart total</h1>
          <div class="flex justify-between border-b-2 border-[#ccc] pb-4">
            <p>Subtotal:</p>
            <p>${{ subTotal }}</p>
          </div>
          <div class="flex justify-between border-b-2 border-[#ccc] py-4">
            <p>Shipping:</p>
            <div>
              <p v-if="subTotal > 500">Free</p>
              <p v-else>$30</p>
            </div>
          </div>
          <div class="flex justify-between border-b-2 border-[#ccc] py-4">
            <p>Total:</p>
            <div>
              <p v-if="subTotal > 500">${{ subTotal }}</p>
              <p v-else>${{ subTotal + 30 }}</p>
            </div>
          </div>
        </div>

        <!-- <div>
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
          />
        </div> -->
        <router-link to="/checkout">
          <button
            class="mt-4 bg-primary text-white font-medium py-4 px-12 rounded-md"
            @click="submit"
          >
            proceed to checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import useFetch from "@/store/fetchAPI";
import User from "@/store/getUser";
// import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  setup() {
    const emailUser = ref("");
    const products = ref([]);
    const { listItems, fetchData, deleteData } = useFetch();

    const columns = [
      {
        title: "Product",
        dataIndex: "productName",
      },
      {
        title: "Price",
        dataIndex: "productPrice",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Subtotal",
        dataIndex: "subtotal",
      },
      {
        title: "",
        dataIndex: "delete",
      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked
        name: record.name,
      }),
    };

    const onDelete = (email, id) => {
      const endPoint = `user/auth/${email}/cart/${id}`;
      deleteData(endPoint);
      setTimeout(async () => {
        location.reload();
      }, 100);
    };
    const formState = reactive({
      "input-number": 1,
    });

    return {
      formState,
      columns,
      products,
      subTotal: ref(null),
      rowSelection,
      onDelete,
      emailUser,
    };
  },

  async mounted() {
    const { listItems, fetchData } = useFetch();
    const user = await User().getCurrentUser();
    this.emailUser = user.email;

    await fetchData(`user/auth/${this.emailUser}/cart`);
    this.products = listItems;

    await this.products.forEach((product, index) => {
      product.key = index + 1;
      product.subtotal = product.productPrice * product.quantity;
      this.subTotal += product.subtotal;
      product.subtotal = "$" + product.subtotal;
      product.productPrice = "$" + product.productPrice;
    });
  },
};
</script>
