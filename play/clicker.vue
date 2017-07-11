<template>
    <div class="vue-clicker">
        <button @click="$emit('clicked')">
            {{ label || 'Default Label' }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'clicker',
        data () {
            return {

            }
        },

        props: [
            "label"
        ]
    }
</script>

<style  scoped>
button {
    background-color: green;
    color: white;
    padding: 16px 32px;
}
</style>

