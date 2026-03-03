<template>
    <div class="burgercard">
        <h2>{{burger.name}}</h2>
        <h3>{{burger.price}}$</h3>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    burger:{
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