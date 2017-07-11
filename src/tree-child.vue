<template>
    <div class="treeChild">
        <div class="treeChild-content">
            <div class="treeChild-control" @click="toggleChildren"> + </div>
            <div class="treeChild-output"> {{ child.data.name }} </div>
        </div>

        <div class="treeChild-children" ref="children">
            <tree-child v-for="nextChild in child.children" style="padding-left: 16px;" :child="nextChild"></tree-child>
        </div>
    </div>
</template>

<script>
    // if child, show control else don't
    // hide children when collapased
    // set height on children container instead of each child
    export default {
        name: 'tree-child',

        data () {
            return {}
        },

        computed: {
        },

        props: [ 'child' ],

        methods: {
            toggleChildren () {
                let children = this.$refs.children

                if (children.style.height === "0px") {
                    children.style.height = "auto"
                    children.style.display = "block"
                } else {
                    children.style.height = "0px"
                    children.style.display = "none"
                }
            }
        }
    }
</script>

<style scoped>
.treeChild-content {
    display: flex;
    padding: 4px 0 8px 0;
}

.treeChild-control {
    flex: 0 0 16px;
    cursor: pointer;
    font-size: 1.2em;
}
</style>

