import { ref } from "vue";

export default function () {
    const listItems = ref([]);
    const lengthList = ref(null);
    const error = ref(null);
    const URL = "http://localhost:3000/";
    // const URL = "https://dainji-server.vercel.app/";
    // const URL = `https://database-fake-api.vercel.app/`;

    const fetchData = async (nameList) => {
        try {
            const response = await fetch(URL + nameList);
            if (!response.ok) throw new Error("Something went wrong!!");

            listItems.value = await response.json();
            lengthList.value = listItems.value.length;
        } catch (err) {
            error.value = err;
            console.log(error.value);
        }
    };

    const postData = async (endPoint, data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(URL + endPoint, options).then((res) => {
            return res.json();
        });
    };

    function addToCart(product, emailUser) {
        const endPoint = "user/auth/" + emailUser + "/cart";
        const data = {
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
        };
        postData(endPoint, data);
    }

    function addToWishList(product, emailUser) {
        const endPoint = `user/auth/${emailUser}/wishlist`;

        const data = {
            productId: product._id,
            productName: product.name,
            productImage: product.thumbnail,
            productPrice: product.price,
            productType: product.type.toLowerCase(),
        };
        postData(endPoint, data);
    }

    // not yet complete
    const editData = async (nameList, data) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(URL + nameList, options)
            .then((res) => {
                return res.json();
            })
            .then(() => console.log("putted"));
    };
    // not yet complete
    const deleteData = async (endPoint) => {
        const newURL = URL + endPoint;
        try {
            const res = await fetch(newURL, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("delete is failed");
        } catch (error) {
            console.log(error);
        }
    };

    return {
        URL,
        listItems,
        lengthList,
        error,
        fetchData,
        postData,
        addToCart,
        addToWishList,
        deleteData,
    };
}
