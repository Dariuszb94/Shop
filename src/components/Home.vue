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
  components:{
    Slider,
    UnderSlider,
    Socials
  },
}
</script>
<style scoped>
</style>
