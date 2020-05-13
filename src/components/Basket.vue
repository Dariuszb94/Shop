<template>
  <div class="basketContainer">
    <section>
      <article>
        <v-icon class="basketIcon">mdi-basket</v-icon>
      </article>
      <header v-if="$store.state.basket.length>0">
        <h2>Items in your basket:</h2>
      </header>
      <main>
        <ul  class="list">
          <li v-for="item in $store.state.basket" :key="item.description">
            <article class="itemInBasket">
              <div class="itemDescription">
              {{item.description}}
              </div>
              <div class="itemPrice">
              {{item.price}}
              </div>
            </article> 
          </li>
          <h3 v-if="$store.state.basket.length>0">Total: {{Number(pricesOfItems).toLocaleString()}} PLN</h3>
        </ul>
        <article v-if="$store.state.basket.length===0" class="noProducts">
          There are no products in your basket.
        </article>
        <footer>
          <v-btn outlined v-on:click="goToWomen()" class="moreButton">Continue shopping</v-btn>
        </footer>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  data() {
    return {
      pricesOfItems:0,
    }
  },
  methods:{
    sumOfBoughtItems(){
      for(let item in this.$store.state.basket){
        let price = Number(this.$store.state.basket[item].price.substring(0, 5));
        this.pricesOfItems+=price;
      }
    },
    goToWomen() {
      this.$store.commit("changeView", "product");
      this.$store.commit("changeSubView", "women");
    },
  },
  mounted(){
    this.sumOfBoughtItems();
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.basketIcon{
  color:black;
  font-size:160px;;
}
h2{
  font-size:32px;
  padding:16px;
}
.basketContainer{
  margin-right:20%;
  margin-left:20%;
  padding:12%;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
}
article{
  display: flex;
  justify-content: center;
}
.list{
  list-style-type:none;
}
.itemInBasket{
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  grid-gap:16px;
  font-size:24px;
  padding:8px;
}
.itemDescription{
  justify-self: start;
}
.itemPrice{
  justify-self: end;
}
h3{
  font-size:28px;
  padding-top:16px;
  padding-bottom:16px;
}
.noProducts{
  padding-top:16px;
  padding-bottom:16px;
}

@media all and (max-width: 1000px){
  .basketContainer{
    padding:8%;
  }
}

@media all and (max-width: 850px){
  .basketContainer{
    margin-right:16%;
   margin-left:16%;
  }
}

@media all and (max-width: 680px){
  .basketContainer{
    margin-right:12%;
    margin-left:12%;
  }
  h2{
  font-size:28px;
  }
  .basketIcon{
    font-size:120px;
  }
  .itemInBasket{
    font-size:20px;
  }
  h3{
    font-size:24px;
  }
}

@media all and (max-width: 580px){
  .basketContainer{
    margin-right:0%;
    margin-left:0%;
  }
  h2{
    font-size:26px;
  }
  .basketIcon{
    font-size:96px;
  }
  .itemInBasket{
    font-size:18px;
  }
  h3{
    font-size:22px;
  }
}
</style>
