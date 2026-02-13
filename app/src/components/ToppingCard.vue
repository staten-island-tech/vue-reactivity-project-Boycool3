<template>
    <div class="card">
        <h2>{{topping.name}}</h2>
        <h3>{{topping.price}}$</h3>
        <button>Add to Burger</button>
        <button>Remove from Burger</button>
    </div>
</template>

<script setup>
defineProps({
    topping:{
        type: Object,
        required: true
    }
})
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 200px;
}
</style>