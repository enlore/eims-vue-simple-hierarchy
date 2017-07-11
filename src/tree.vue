<template>
    <div class="treeView">
        <tree-child
            v-for="child in data"
            :child="child"
            :collapseIcon="coIcon"
            :expandIcon="exIcon"
            ></tree-child>
    </div>
</template>

<script>
    const iconCollapsed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACpJREFUKBVjYMACnJ2d/4MwFikGJmyC+MQGoQZGXJ7D5Q+S/YDVoOEerABbFAj8QjsOBAAAAABJRU5ErkJggg=="
    const iconUncollapsed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAYAAABsfz2XAAAABGdBTUEAALGPC/xhBQAAABVJREFUCB1jdHZ2/s9AAmAiQS1YKQCqKAHMfG+1jAAAAABJRU5ErkJggg=="

    export default {
        name: 'treeview',

        components: {
        },

        computed: {
            coIcon () {
                return this.collapseIcon || iconUncollapsed
            },

            exIcon () {
                return this.expandIcon || iconCollapsed
            }
        },

        data () {
            return {

            }
        },

        props: [
            'data',
            'expandIcon',
            'collapseIcon'
        ]
    }
</script>

<style scoped>
</style>

