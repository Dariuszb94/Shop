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
  data() {
    return {
    }
  },
  methods:{
  },
    created(){

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.socials{
  background-color: #77212e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
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
  font-size:96px;
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
