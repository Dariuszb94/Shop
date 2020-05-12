
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    currentView:"home",
    subCurrentView:"women",
 },
 getters: {
    getView: state => {
        return state.currentView.split(' ')[0]
      },
      getSubView: state => {
        return state.subCurrentView.split(' ')[0]
      }
 },
 mutations: {
    changeView (state, payload) {
        state.currentView = payload;
      },
      changeSubView (state, payload) {
        state.subCurrentView = payload;
      }
 },
 actions: {}
});