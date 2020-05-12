<template>
  <div>
    <Slider/>
    <UnderSlider/>
    <Socials></Socials>
  </div>
</template>

<script>
import Slider from './Slider';
import UnderSlider from './UnderSlider';
import Socials from './Socials';
export default {
  name: 'Home',
    data() {
    return {
    }
  },
    components: {
    Slider,
    UnderSlider,
    Socials
  },
    methods:{
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
