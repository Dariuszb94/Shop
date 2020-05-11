<template>
  <div>
    <ul class="menuContainer">
      <li class="list-element"><v-btn outlined class="menuButton">ODZIEŻ DAMSKA</v-btn></li>
      <li class="list-element"><v-btn outlined class="menuButton">ODZIEŻ MĘSKA</v-btn></li>
      <li class="list-element"><v-btn outlined class="menuButton">DODATKI</v-btn></li>
      <li class="list-element"><v-btn outlined class="menuButton">NOWOŚCI</v-btn></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.menuContainer{
  display: flex;
  flex-direction: row;
  list-style-type:none;
  background-color: #373a3e;
  color:white;
  justify-content: center;
  padding-bottom:16px;
  padding-top:16px;
}
.list-element{
  padding-right:8px;
  padding-left:8px;
  font-size: 16px;
}
.menuButton{
  background-color:#373a3e !important;
  color:white !important
}
</style>
