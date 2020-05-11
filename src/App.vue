<template>
  <main class="mainContainer">
  <Header/>
  <Menu/>
  <Slider/>
  </main>
</template>

<script>
import Header from './components/Header';
import Menu from './components/Menu';
import Slider from './components/Slider';
export default {
  name: 'App',

  components: {
    Header,
    Menu,
    Slider
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
*{
  font-family: 'Raleway', sans-serif;
}
.mainContainer{
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
