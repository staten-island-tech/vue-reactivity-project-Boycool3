<template>
  <div class="SOMANYDIVSAAAA">
    <div class="burgerwindow">
      <h1>Current Price: {{ Math.round(burgerprice) }}$</h1>
      <h3>Current Order: {{ order }}</h3>
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
      <BurgerCard v-for="bun in buns" :key="bun.name" :bun="bun">
        <button @click="Add(bun)">Use in Burger</button>
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
  { name: 'Tomatoes', price: 5.99 },
  { name: 'Lettuce', price: 2.50 },
  { name: 'Cheese', price: 1.99 },
  { name: 'Beef Patty', price: 11.99 },
  { name: 'Chicken Patty', price: 9.99 },
  { name: 'Onions', price: 3.50 },
  { name: 'Pickle(Singular)', price: 29999.99 },
  { name: 'Eggs', price: 3.99 },
  { name: 'Bacon', price: 6.50 },
  { name: 'Chicken Cuts', price: 9.35 },
])
const buns = ref([
  { name: 'Basic Bun', price: 10.00 },
  { name: 'Pretzel Bun', price: 10.00 },
  { name: 'Egg Bun', price: 10.00 },
  { name: 'Ink Bun', price: 10.00 },
])
const order = ref([

  ])
let thingarray = [
  
]
const burgerprice = ref(10);
function Add(topping){
  burgerprice.value = burgerprice.value + topping.price
  order.value.push(topping.name)
}
function Nvm(topping){
  console.log(topping.name)
  console.log(order.value)
  if(topping.name in order.value){
    console.log('True')
  burgerprice.value = burgerprice.value - topping.price}
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
  width: 300px;
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
  cursor:pointer;
}
</style>
