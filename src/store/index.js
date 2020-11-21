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
      darkmode: false,
      showAbout: false,
    };
  },
  mutations: {
    resetItems(state) {
      state.items = defaultItems;
    },
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    removeItem(state, payload) {
      const index = state.items.indexOf(payload.item);
      state.items.splice(index, 1);
    },
    setItems(state, payload) {
      state.items = payload.items;
    },
    toggleMessage(state, payload) {
      state.message.show = payload.show;
    },
    setMessageType(state, payload) {
      state.message.type = payload.type;
    },
    darkmodeOn(state) {
      state.darkmode = true;
    },
    darkmodeOff(state) {
      state.darkmode = false;
    },
    setShowAbout(state, payload) {
      state.showAbout = payload.show
    }
  },
  // actions: {},
  // modules: {},
});
