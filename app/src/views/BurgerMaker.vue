<template>
  <div class="SOMANYDIVSAAAA">
    <div class="burgerwindow">
      <h1>Current Price: {{burgerprice}}$</h1>
      <h3>Current Burger:</h3>
    </div>
  <div class="thing">
    <h1>Toppings</h1>
    <div class="container">
      <ToppingCard v-for="topping in toppings" :key="topping.name" :topping="topping">
        <button @click="Add(topping)">Add To Burger</button>
        <button @click="Nvm(topping)">Remove From Burger</button>
      </ToppingCard>
    </div>
    <h1>Burger Buns</h1>
    <div class="container">
      <BurgerCard v-for="burger in burgers" :key="burger.name" :burger="burger">
        <button @click="Add(burger)">Use in Burger</button>
      </BurgerCard>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToppingCard from '@/components/ToppingCard.vue'
import BurgerCard from '@/components/BurgerCard.vue'
const toppings = ref([
  { name: 'Tomatoes', price: 420 },
  { name: 'Lettuce', price: 5000 },
  { name: 'Cheese', price: 30 },
  { name: 'Beef Patty', price: 4 },
  { name: 'Chicken Patty', price: 1200 },
  { name: 'Onions', price: 0.5 },
  { name: 'Pickle(Singular)', price: 1e308 },
  { name: 'Eggs', price: 3 },
  { name: 'Bacon', price: 0.2 },
  { name: 'Chicken Cuts', price: 300 },
])
const burgers = ref([
  { name: 'Basic Bun', price: 10.00 },
  { name: 'Pretzel Bun', price: 10.00 },
  { name: 'Egg Bun', price: 10.00 },
  { name: 'Ink Bun', price: 10.00 },
])
let burgerprice = 10;
function Add(topping){
  burgerprice = burgerprice + topping.price
  if(burgerprice > 1e308){
    burgerprice = 1e308
  }
}
function Nvm(topping){
  burgerprice = burgerprice - topping.price
  if(burgerprice < 10){
    burgerprice = 10
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
h2{
  text-align: center;
}
.thing {
  border: 15px outset rgb(255, 173, 31);
  border-style: outset ridge ridge none;
  border-radius: 10px;
  background-color: rgb(255, 207, 124);
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
.SOMANYDIVSAAAA {
  display: flex;
}
.container {
  display: flex;
  width: 80%;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.card {
  border: 8px double firebrick;
  background-color: coral;
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 24px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.burgercard {
  border: 33px double rgb(124, 71, 52);
  background-color: coral;
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 24px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.burgerwindow{
  border: 15px outset rgb(255, 173, 31);
  border-style: outset none ridge outset;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  background-color: rgb(255, 207, 124);
}
button{
  width: 200px;
  border: 3px rgb(124, 71, 52) solid;
  border-radius: 5px;
  background-color: rgb(255, 207, 124);
}
</style>
