<template>
  <div class="containerWomen">
    <section class="sideMenu">
        <ul class="list">
          <li class="list-element">
            <v-btn class="sideMenuButton" v-on:click="goToWomen()">
              <h2 id="women">Women</h2>
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
              <h2 id="men">Men</h2>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
                <div><v-btn>BUY</v-btn></div>
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
      products:PRODUCTS
    }
  },
    methods:{
      goToWomen() {
        this.$store.commit("changeSubView", "women");
        this.markWomen();
      },
      goToMen() {
      this.$store.commit("changeSubView", "men");
      this.markMen();
      },
      goToExtras() {
      this.$store.commit("changeSubView", "extras");
      this.markExtras();
      },
      goToNew() {
        this.$store.commit("changeSubView", "new");
        this.markNew();
      },
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
      markWomen(){
        this.resetView();
        this.womenProducts=true;
        this.updateColors();
        this.womenBlouses=true;
        this.womenTrousers=true;
        this.womenSkirts=true;
        this.womenDresses=true;
      },
      markMen(){
        this.resetView();
        this.menProducts=true;
        this.updateColors();
        this.menTShirts=true;
        this.menTrousers=true;
        this.menShorts=true;
        this.menShirts=true;

      },
      markExtras(){
        this.resetView();
        this.extrasProducts=true;
        this.updateColors();
      },
      markNew(){
        this.resetView();
        this.newsProducts=true;
        this.updateColors();
      },
      goToWomenBlouses(){
        this.resetView();
        this.womenProducts=true;
        this.womenBlouses=true;
        this.updateColors();
      },
      goToWomenTrousers(){
        this.resetView();
        this.womenProducts=true;
        this.womenTrousers=true;
        this.updateColors();
      },
      goToWomenSkirts(){
        this.resetView();
        this.womenProducts=true;
        this.womenSkirts=true;
        this.updateColors();
      },
      goToWomenDresses(){
        this.resetView();
        this.womenProducts=true;
        this.womenDresses=true;
        this.updateColors();
      },
      goToMenTShirts(){
        this.resetView();
        this.menProducts=true;
        this.menTShirts=true;
        this.updateColors();
      },
      goToMenTrousers(){
        this.resetView();
        this.menProducts=true;
        this.menTrousers=true;
        this.updateColors();
      },
      goToMenShorts(){
        this.resetView();
        this.menProducts=true;
        this.menShorts=true;
        this.updateColors();
      },
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
        if (this.womenProducts){
        document.getElementById("women").style.color="#a7a7a7";
        document.getElementById("men").style.color="white";
        document.getElementById("extras").style.color="white";
        document.getElementById("new").style.color="white";
        }
       if (this.menProducts){
        document.getElementById("women").style.color="white";
        document.getElementById("men").style.color="#a7a7a7";
        document.getElementById("extras").style.color="white";
        document.getElementById("new").style.color="white";
        } 
        if (this.extrasProducts){
          document.getElementById("women").style.color="white";
          document.getElementById("men").style.color="white";
          document.getElementById("extras").style.color="#a7a7a7";
          document.getElementById("new").style.color="white";
        }   
           if (this.newsProducts){
          document.getElementById("women").style.color="white";
          document.getElementById("men").style.color="white";
          document.getElementById("extras").style.color="white";
          document.getElementById("new").style.color="#a7a7a7";
        } 
      }    
    },
    mounted(){
      console.log(PRODUCTS);
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
.containerWomen{
  display: flex;
  flex-direction:row;
  background-color: #373a3e;
  padding:32px;
}
.list{
    list-style-type:none;
    padding-bottom:24px;
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
}
.womenProductsContainer{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap:8px;
}

.price{
  padding:8px;
}
</style>
