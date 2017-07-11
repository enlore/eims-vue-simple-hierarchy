<template>
    <div class="treeView">
        <tree-child v-for="child in data" :child="child"></tree-child>
    </div>
</template>

<script>
    export default {
        name: 'treeview',

        components: {
        },

        data () {
            return {

            }
        },

        props: [
            'data'
        ]
    }
</script>

<style scoped>
</style>

