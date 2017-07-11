<template>
    <div class="treeview">
        <div v-for="child in data">
            <tree-child :child="child"></tree-child>
        </div>
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

