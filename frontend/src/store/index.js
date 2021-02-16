import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex, axios, VueAxios)
    // const url = "http://192.168.10.219:5000/api/products";
    // const headers = { Accept: "application/json" };
export default new Vuex.Store({

    state: {
        currentUser: {},
        storeItems: [],
        userOrder: [],


    },
    mutations: { //async

        SAVE_STOREITEMS(state, storeItems) {
            state.storeItems = storeItems;
        },
        ADD_ORDERITEM(state, storeItem) {
            state.userOrder.push(storeItem)
        },
        CHANGE_ORDERITEM(state, storeItem) {
            var found = state.userOrder.findIndex(element => element._id == storeItem._id);

            Vue.set(state.userOrder, found, storeItem)
        }

    },
    actions: {

        loadStoreItems({ commit }) {

            axios.get('http://192.168.10.219:5000/api/products').then(result => {
                commit('SAVE_STOREITEMS', result.data);
            }).catch(error => {

                throw new Error(`API ${error}`);
            });
        },
        addToCart({ commit }, item) {
            var check = false;
            this.state.userOrder.forEach(element => {

                if (element._id == item._id) {
                    item.amount = element.amount + 1;
                    commit('CHANGE_ORDERITEM', item)
                    check = true;
                    // commit('CHANGE_ORDERITEM', element);
                }
            })
            if (check == false) {

                item.amount = 1;
                commit('ADD_ORDERITEM', item);
            }

        },

        // async loadStoreItems(state) {
        //     const item = await fetch({ url }, { headers });
        //     const i = await item.json();
        //     state.commit('SAVE_STOREITEMS', i)
        // }
    },
    modules: {},
    getters: {
        getcurrentUser: state => state.currentUser,
        getuserOrder: state => state.userOrder,
        getstoreItems: state => state.storeItems,
        getcost: state => {
            var sum = 0;

            state.userOrder.forEach(element => {

                sum += (element.price * element.amount);
            });
            console.log(sum)
            return sum
        }
    }
})