<template>
  <main class="mainContainer">
  <Header/>
  <Menu  v-if="$store.state.currentView=='home'"></Menu>
  <Home  v-if="$store.state.currentView=='home'"></Home>
  <Product  v-if="$store.state.currentView=='product'"></Product>
  <Copyright/>
  </main>
</template>

<script>
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Copyright from './components/Copyright';
import Product from './components/Product';
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Home,
    Copyright,
    Product
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

*{
  font-family: 'Raleway', sans-serif;
}
.mainContainer{
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
