import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, axios, VueAxios);
export default new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: ["userOrder", "user"],
        }),
    ],
    state: {
        storeItems: [],
        userOrder: [],
        userOrderHistory: [],
        status: "",
        token: localStorage.getItem("token") || "",
        user: {},
        selectedItem: {},
    },
    mutations: {
        //async

        SAVE_STOREITEMS(state, storeItems) {
            state.storeItems = storeItems;
        },
        SET_SELECTEDITEM(state, selectedItem) {
            state.selectedItem = selectedItem;
        },
        ADD_ORDERITEM(state, storeItem) {
            state.userOrder.push(storeItem);
        },
        CHANGE_ORDERITEM(state, storeItem) {
            var found = state.userOrder.findIndex(
                (element) => element._id == storeItem._id
            );
            Vue.set(state.userOrder, found, storeItem);
        },
        REMOVE_ORDERITEM(state, storeItem) {
            var found = state.userOrder.findIndex(
                (element) => element._id == storeItem._id
            );
            state.userOrder.splice(found, 1);
        },
        CLEAR_CART(state) {
            state.userOrder = [];
        },
        SAVE_USERHISTORY(state, orders) {
            state.userOrderHistory = orders;
        },
        auth_request(state) {
            state.status = "loading";
        },
        AUTH_SUCCESS(state, data) {
            state.status = "success";
            state.token = data.token;
            state.user = data.user;
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
            state.user = {};
            state.userOrderHistory = [];
        },
    },
    actions: {
        setSelectedItem({ commit }, item) {
            commit("SET_SELECTEDITEM", item);
        },
        loadUserOrderHistory({ commit }) {
            axios
                .get("/orders", this.state.user)
                .then((result) => {
                    commit("SAVE_USERHISTORY", result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        loadStoreItems({ commit }) {
            axios
                .get("/products")
                .then((result) => {
                    commit("SAVE_STOREITEMS", result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addToCart({ commit }, item) {
            var check = false;
            this.state.userOrder.forEach((element) => {
                if (element._id == item._id) {
                    item.amount = element.amount + 1;
                    commit("CHANGE_ORDERITEM", item);
                    check = true;
                }
            });
            if (check == false) {
                item.amount = 1;
                commit("ADD_ORDERITEM", item);
            }
        },
        createOrder({ commit }) {
            //Option to add the delivery data must be added

            if (this.state.userOrder.length >= 1) {
                return new Promise((resolve, reject) => {
                    const testlist = [];
                    this.state.userOrder.forEach((product) => {
                        if (product.amount == 1) {
                            testlist.push(product._id);
                        } else {
                            for (var i = 1; i <= product.amount; i++) {
                                testlist.push(product._id);
                            }
                        }
                        commit("CLEAR_CART");
                    });
                    axios({
                            url: "/orders",
                            data: { items: testlist, customer: this.state.user },
                            method: "POST",
                        })
                        .then((resp) => {
                            alert(resp.data.message);
                            resolve(resp);
                        })
                        .catch((err) => {
                            alert(err);
                            reject(err);
                        });
                });
            } else {
                alert("Your cart is empty");
            }
        },
        removeFromOrder({ commit }, item) {
            if (item.amount == 1) {
                commit("REMOVE_ORDERITEM", item);
            } else {
                item.amount -= 1;
                commit("CHANGE_ORDERITEM", item);
            }
        },
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({ url: "/auth", data: user, method: "POST" })
                    .then((resp) => {
                        localStorage.setItem("token", resp.data.token);
                        axios.defaults.headers.common["Authorization"] = resp.data.token;
                        commit("AUTH_SUCCESS", resp.data);

                        resolve(resp);
                    })
                    .catch((err) => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit("logout");
                localStorage.removeItem("token");
                delete axios.defaults.headers.common["Authorization"];
                resolve();
            });
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({ url: "/register", data: user, method: "POST" })
                    .then((resp) => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem("token", token);
                        axios.defaults.headers.common["Authorization"] = token;
                        commit("auth_success", token, user);
                        resolve(resp);
                    })
                    .catch((err) => {
                        commit("auth_error", err);
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },
    },

    getters: {
        getUser: (state) => state.user,
        getSelectedItem: (state) => state.selectedItem,
        getuserOrder: (state) => state.userOrder,
        getUserOrderHistory: (state) => state.userOrderHistory,
        getstoreItems: (state) => state.storeItems,
        getcost: (state) => {
            var sum = 0;

            state.userOrder.forEach((element) => {
                sum += element.price * element.amount;
            });

            return sum;
        },
        isLoggedIn: (state) => !!state.token,
        authStatus: (state) => state.status,
    },
});