<template>
  <div class="containerProduct">
    <section class="sideMenu">
        <ul class="list">
          <li class="list-element">
            <v-btn class="sideMenuButton" v-on:click="goToWomen()">
              <h2 id="women">For Women</h2>
            </v-btn>
          </li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToWomenBlouses()"><h3 id="womenBlouses">Blouses</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToWomenTrousers()"><h3 id="womenTrousers">Trousers</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToWomenSkirts()"><h3 id="womenSkirts">Skirts</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToWomenDresses()"><h3 id="womenDresses">Dresses</h3></v-btn></li>
        </ul>
        <ul class="list">
          <li class="list-element" >
            <v-btn class="sideMenuButton" v-on:click="goToMen()">
              <h2 id="men">For Men</h2>
            </v-btn>
          </li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToMenTShirts()"><h3 id="menTShirts">T-Shirts</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToMenTrousers()"><h3 id="menTrousers">Trousers</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToMenShorts()"><h3 id="menShorts">Shorts</h3></v-btn></li>
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToMenShirts()"><h3 id="menShirts">Shirts</h3></v-btn></li>
        </ul>
        <ul class="list">
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToExtras()"><h2 id="extras">Extras</h2></v-btn></li>
        </ul>
        <ul class="list">
          <li class="list-element"><v-btn class="sideMenuButton" v-on:click="goToNew()"><h2  id="new">New</h2></v-btn></li>
        </ul>
    </section>        
    <section class="products">
      <section v-if="womenProducts">
        <article v-if="womenBlouses">
          <ul class="womenProductsContainer list"> 
            <li v-for="blouse in products.women.blouses" :key="blouse.description">
              <div class="womenProductContainer">
                <div><img :src="blouse.img" class="productImg"></div>
                <div><h3>{{blouse.description}}</h3></div>
                <div class="price">{{blouse.price}}</div>
                <div><v-btn v-on:click="buy(blouse.description,blouse.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="womenTrousers">
          <ul class="womenProductsContainer list"> 
            <li v-for="trouser in products.women.trousers" :key="trouser.description">
              <div class="womenProductContainer">
                <div><img :src="trouser.img" class="productImg"></div>
                <div><h3>{{trouser.description}}</h3></div>
                <div class="price">{{trouser.price}}</div>
                <div><v-btn v-on:click="buy(trouser.description,trouser.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="womenSkirts">
          <ul class="womenProductsContainer list"> 
            <li v-for="skirt in products.women.skirts" :key="skirt.description">
              <div class="womenProductContainer">
                <div><img :src="skirt.img" class="productImg"></div>
                <div><h3>{{skirt.description}}</h3></div>
                <div class="price">{{skirt.price}}</div>
                <div><v-btn v-on:click="buy(skirt.description,skirt.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="womenDresses">
          <ul class="womenProductsContainer list"> 
            <li v-for="dress in products.women.dresses" :key="dress.description">
              <div class="womenProductContainer">
                <div><img :src="dress.img" class="productImg"></div>
                <div><h3>{{dress.description}}</h3></div>
                <div class="price">{{dress.price}}</div>
                <div><v-btn v-on:click="buy(dress.description,dress.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>              
      </section>
      <section v-if="menProducts">
        <article v-if="menTShirts">
          <ul class="womenProductsContainer list"> 
            <li v-for="tShirt in products.men.tShirts" :key="tShirt.description">
              <div class="womenProductContainer">
                <div><img :src="tShirt.img" class="productImg"></div>
                <div><h3>{{tShirt.description}}</h3></div>
                <div class="price">{{tShirt.price}}</div>
                <div><v-btn v-on:click="buy(tShirt.description,tShirt.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="menTrousers">
          <ul class="womenProductsContainer list"> 
            <li v-for="trouser in products.men.trousers" :key="trouser.description">
              <div class="womenProductContainer">
                <div><img :src="trouser.img" class="productImg"></div>
                <div><h3>{{trouser.description}}</h3></div>
                <div class="price">{{trouser.price}}</div>
                <div><v-btn v-on:click="buy(trouser.description,trouser.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="menShorts">
          <ul class="womenProductsContainer list"> 
            <li v-for="short in products.men.shorts" :key="short.description">
              <div class="womenProductContainer">
                <div><img :src="short.img" class="productImg"></div>
                <div><h3>{{short.description}}</h3></div>
                <div class="price">{{short.price}}</div>
                <div><v-btn v-on:click="buy(short.description,short.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>
        <article v-if="menShirts">
          <ul class="womenProductsContainer list"> 
            <li v-for="shirt in products.men.shirts" :key="shirt.description">
              <div class="womenProductContainer">
                <div><img :src="shirt.img" class="productImg"></div>
                <div><h3>{{shirt.description}}</h3></div>
                <div class="price">{{shirt.price}}</div>
                <div><v-btn v-on:click="buy(shirt.description,shirt.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>
        </article>              
      </section>
      <section v-if="extrasProducts">
          <ul class="womenProductsContainer list"> 
            <li v-for="extra in products.extras" :key="extra.description">
              <div class="womenProductContainer">
                <div><img :src="extra.img" class="productImg"></div>
                <div><h3>{{extra.description}}</h3></div>
                <div class="price">{{extra.price}}</div>
                <div><v-btn v-on:click="buy(extra.description,extra.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>           
      </section>
      <section v-if="newsProducts">
          <ul class="womenProductsContainer list"> 
            <li v-for="news in products.news" :key="news.description">
              <div class="womenProductContainer">
                <div><img :src="news.img" class="productImg"></div>
                <div><h3>{{news.description}}</h3></div>
                <div class="price">{{news.price}}</div>
                <div><v-btn v-on:click="buy(news.description,news.price)">ADD TO CART</v-btn></div>
              </div>
            </li>
          </ul>           
      </section>
    </section>
    <section class="basket">
    </section>
  </div>
</template>
<script>
import {PRODUCTS} from './const'
export default {
  name: 'Product',
    data() {
    return {
      currentView: this.$store.getters.getView,
      womenProducts:false,
      womenBlouses:false,
      womenTrousers:false,
      womenSkirts:false,
      womenDresses:false,
      menProducts:false,
      menTShirts:false,
      menTrousers:false,
      menShorts:false,
      menShirts:false,
      extrasProducts:false,
      newsProducts:false,
      products:PRODUCTS,
    }
  },
    methods:{
/**
 * Shows women section
 */
      goToWomen() {
        this.$store.commit("changeSubView", "women");
        this.markWomen();
      },

/**
 * Shows men section
 */      
      goToMen() {
        this.$store.commit("changeSubView", "men");
        this.markMen();
      },

/**
 * Shows extras section
 */
      goToExtras() {
        this.$store.commit("changeSubView", "extras");
        this.markExtras();
      },

/**
 * Shows news section
 */
      goToNew() {
        this.$store.commit("changeSubView", "new");
        this.markNew();
      },

/**
 * Reset colors of menu 
 *  */      
      resetView(){
        this.womenProducts=false;
        this.womenBlouses=false;
        this.womenTrousers=false;
        this.womenSkirts=false;
        this.womenDresses=false;
        this.menProducts=false;
        this.menTShirts=false;
        this.menTrousers=false;
        this.menShorts=false;
        this.menShirts=false;
        this.extrasProducts=false;
        this.newsProducts=false;
      },

/**
 * Mark women section after reset of view
 */
      markWomen(){
        this.resetView();
        this.womenProducts=true;
        this.updateColors();
        this.womenBlouses=true;
        this.womenTrousers=true;
        this.womenSkirts=true;
        this.womenDresses=true;
      },

/**
 * Mark men section after reset of view
 */      
      markMen(){
        this.resetView();
        this.menProducts=true;
        this.updateColors();
        this.menTShirts=true;
        this.menTrousers=true;
        this.menShorts=true;
        this.menShirts=true;
      },

/**
 * Mark extras section after reset of view
 */      
      markExtras(){
        this.resetView();
        this.extrasProducts=true;
        this.updateColors();
      },

/**
 * Mark news section after reset of view
 */      
      markNew(){
        this.resetView();
        this.newsProducts=true;
        this.updateColors();
      },

/**
 * Shows women bluses, then updates menu colors  
 */      
      goToWomenBlouses(){
        this.resetView();
        this.womenProducts=true;
        this.womenBlouses=true;
        this.updateColors();
      },

/**
 * Shows women trousers, then updates menu colors  
 */        
      goToWomenTrousers(){
        this.resetView();
        this.womenProducts=true;
        this.womenTrousers=true;
        this.updateColors();
      },

/**
 * Shows women skirts, then updates menu colors  
 */        
      goToWomenSkirts(){
        this.resetView();
        this.womenProducts=true;
        this.womenSkirts=true;
        this.updateColors();
      },

/**
 * Shows women dresses, then updates menu colors  
 */  
      goToWomenDresses(){
        this.resetView();
        this.womenProducts=true;
        this.womenDresses=true;
        this.updateColors();
      },

/**
 * Shows men tshirts, then updates menu colors  
 */  
      goToMenTShirts(){
        this.resetView();
        this.menProducts=true;
        this.menTShirts=true;
        this.updateColors();
      },

/**
 * Shows men trousers, then updates menu colors  
 */        
      goToMenTrousers(){
        this.resetView();
        this.menProducts=true;
        this.menTrousers=true;
        this.updateColors();
      },

/**
 * Shows men shorts, then updates menu colors  
 */       
      goToMenShorts(){
        this.resetView();
        this.menProducts=true;
        this.menShorts=true;
        this.updateColors();
      },

/**
 * Shows men shirts, then updates menu colors  
 */       
      goToMenShirts(){
        this.resetView();
        this.menProducts=true;
        this.menShirts=true;
        this.updateColors();
      },
    
      updateColors(){
        this.updateWomenColors();
        this.updateMenColors();
        this.updateMenu();
      },

      updateWomenColors(){
        if(this.womenBlouses){
          document.getElementById("womenBlouses").style.color="#a7a7a7";
          document.getElementById("womenTrousers").style.color="white";
          document.getElementById("womenSkirts").style.color="white";
          document.getElementById("womenDresses").style.color="white";
        }
        if(this.womenTrousers){
          document.getElementById("womenBlouses").style.color="white";
          document.getElementById("womenTrousers").style.color="#a7a7a7";
          document.getElementById("womenSkirts").style.color="white";
          document.getElementById("womenDresses").style.color="white";
        }
        if(this.womenSkirts){
          document.getElementById("womenBlouses").style.color="white";
          document.getElementById("womenTrousers").style.color="white";
          document.getElementById("womenSkirts").style.color="#a7a7a7";
          document.getElementById("womenDresses").style.color="white";
        }
        if(this.womenDresses){
          document.getElementById("womenBlouses").style.color="white";
          document.getElementById("womenTrousers").style.color="white";
          document.getElementById("womenSkirts").style.color="white";
          document.getElementById("womenDresses").style.color="#a7a7a7";
        }
        if (this.womenBlouses===false && this.womenTrousers===false && this.womenSkirts===false && this.womenDresses===false){
          document.getElementById("womenBlouses").style.color="white";
          document.getElementById("womenTrousers").style.color="white";
          document.getElementById("womenSkirts").style.color="white";
          document.getElementById("womenDresses").style.color="white";
        }
      },

      updateMenColors(){
        if(this.menTShirts){
          document.getElementById("menTShirts").style.color="#a7a7a7";
          document.getElementById("menTrousers").style.color="white";
          document.getElementById("menShorts").style.color="white";
          document.getElementById("menShirts").style.color="white";
        }
        if(this.menTrousers){
          document.getElementById("menTShirts").style.color="white";
          document.getElementById("menTrousers").style.color="#a7a7a7";
          document.getElementById("menShorts").style.color="white";
          document.getElementById("menShirts").style.color="white";
        }
        if(this.menShorts){
          document.getElementById("menTShirts").style.color="white";
          document.getElementById("menTrousers").style.color="white";
          document.getElementById("menShorts").style.color="#a7a7a7";
          document.getElementById("menShirts").style.color="white";
        }
        if(this.menShirts){
          document.getElementById("menTShirts").style.color="white";
          document.getElementById("menTrousers").style.color="white";
          document.getElementById("menShorts").style.color="white";
          document.getElementById("menShirts").style.color="#a7a7a7";
        }
        if (this.menTShirts===false && this.menTrousers===false && this.menShorts===false && this.menShirts===false){
          document.getElementById("menTShirts").style.color="white";
          document.getElementById("menTrousers").style.color="white";
          document.getElementById("menShorts").style.color="white";
          document.getElementById("menShirts").style.color="white";
        }
      },

      updateMenu(){
        if(this.womenProducts){
          document.getElementById("women").style.color="#a7a7a7";
          document.getElementById("men").style.color="white";
          document.getElementById("extras").style.color="white";
          document.getElementById("new").style.color="white";
        }
        if(this.menProducts){
          document.getElementById("women").style.color="white";
          document.getElementById("men").style.color="#a7a7a7";
          document.getElementById("extras").style.color="white";
          document.getElementById("new").style.color="white";
        } 
        if(this.extrasProducts){
          document.getElementById("women").style.color="white";
          document.getElementById("men").style.color="white";
          document.getElementById("extras").style.color="#a7a7a7";
          document.getElementById("new").style.color="white";
        }   
        if(this.newsProducts){
          document.getElementById("women").style.color="white";
          document.getElementById("men").style.color="white";
          document.getElementById("extras").style.color="white";
          document.getElementById("new").style.color="#a7a7a7";
        } 
      },

      buy(description,price){
        this.$store.commit('addItem', { description: description, price: price})
      }    
    },

    mounted(){
      if(this.$store.state.subCurrentView=="women"){
        this.markWomen();
      }
      if(this.$store.state.subCurrentView=="men"){
        this.markMen();
      }
      if(this.$store.state.subCurrentView=="extras"){
        this.markExtras();
      }
      if(this.$store.state.subCurrentView=="new"){
        this.markNew();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.containerProduct{
  display: flex;
  flex-direction:row;
  background-color: #373a3e;
  padding:32px;
}
.list{
  list-style-type:none;
  padding-bottom:32px;
}
.list-element{
  padding-top:4px;
  padding-bottom:4px;
}
h2{
  font-size:34px;
}
.sideMenu{
  display: flex;
  flex-direction: column;
}
.sideMenuButton{
  background-color:#373a3e !important;
  color:white !important;
  font-size:20px;
}
.productImg{
  width:100%;
  height: auto;
}
.products{
  width: 80%;
  padding-left:8%;
}
.womenProductContainer{
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding-bottom:8px;
}
.womenProductsContainer{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap:24px;
}
.price{
  padding:8px;
}

@media all and (max-width: 1400px){
  .list-element{
    padding-top:2px;
    padding-bottom:2px;
  }
  .list{
    padding-bottom:24px;
  }
  .womenProductsContainer{
    grid-gap:16px;
  }
  h2{
    font-size:30px;
  }
  h3{
    font-size:22px;
  }
}

@media all and (max-width: 850px){
  .containerProduct{
    flex-direction:column;
    align-items: center;
  }
  .sideMenu{
    flex-direction: row;
  }
  .products{
    padding-left:0%;
  }
  h2{
    font-size:24px;
  }
  h3{
    font-size:18px;
  }
  .list-element{
    padding-right:4px;
    padding-left:4px;
  }
}

@media all and (max-width: 680px){
  h2{
    font-size:20px;
  }
  h3{
    font-size:16px;
  }
  .list-element{
    padding-right:2px;
    padding-left:2px;
  }
  }

@media all and (max-width: 580px){
  h2{
    font-size:18px;
  }
  h3{
    font-size:14px;
  }
  .list-element{
    padding-right:2px;
    padding-left:2px;
  }
}

@media all and (max-width: 500px){
  h2{
    font-size:14px;
  }
  h3{
    font-size:10px;
  }
  .v-btn {
    letter-spacing: 0.04em;
    padding-right:4px !important;
    padding-left:4px !important;
  }
}
</style>
