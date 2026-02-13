<template>
    <div class="thing">
        <p>Burger,,,</p>
        <div class="container">
            <ToppingCard v-for="topping in toppings" :key="topping.name" :topping="topping">{{ topping.name }}</ToppingCard>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ToppingCard from '@/components/ToppingCard.vue';
const toppings = ref([
  { name: 'Tomatoes', price: 420 },
  { name: 'Lettuce', price: 5000 },
  { name: 'Cheese', price: 30 },
  { name: 'Beef Patty', price: 4 },
  { name: 'Chicken Patty', price: 1200 },
  { name: 'Onions', price: 0.5 },
  { name: 'Pickles', price: 500 },
  { name: 'Eggs', price: 3 },
  { name: 'Bacon', price: 0.2 },
  { name: 'Chicken Cuts', price: 300 },
])
</script>

<style scoped>
.thing{
    border: 10px outset rgb(255, 173, 31);
    border-style: outset ridge ridge outset;
    border-radius: 5px;
    background-color: rgb(255, 207, 124);
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
  background-color:coral;
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 24px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>