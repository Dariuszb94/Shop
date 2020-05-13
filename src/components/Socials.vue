<template>
  <div class="socials">
    <section class="social">
      <div>
        <v-icon class="iconSocial">mdi-facebook</v-icon>
      </div>
      <div>FACEBOOK</div>
    </section >
    <section class="social">
      <div>
        <v-icon class="iconSocial">mdi-instagram</v-icon>
      </div>
      <div>INSTAGRAM</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Socials',
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.socials{
  background-color: #77212e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 32px;
  color:white;
}
.social{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right:16px;
  padding-left:16px
}
.iconSocial{
  color:white;
  font-size:120px;
}
.iconSocial:hover{
  cursor:pointer;
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
