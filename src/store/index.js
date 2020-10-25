import { createStore } from "vuex";
import defaultItems from "./default.js";

export default createStore({
  state() {
    return {
      items: defaultItems,
      message: {
        show: false,
        type: "success",
      },
    };
  },
  mutations: {
    reset(state) {
      state.items = defaultItems;
    },
    add(state, payload) {
      state.items.push(payload.item);
    },
    remove(state, payload) {
      const index = state.items.indexOf(payload.item);
      state.items.splice(index, 1);
    },
    set(state, payload) {
      state.items = payload.items;
    },
    toggleMessage(state, payload) {
      state.message.show = payload.show;
    },
    setMessageType(state, payload) {
      state.message.type = payload.type;
    },
    // changeOrder(state, payload) {
    //   const index = state.items.indexOf(payload.item);

    // }
  },
  actions: {},
  modules: {},
});
