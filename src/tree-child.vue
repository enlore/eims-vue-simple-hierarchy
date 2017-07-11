<template>
    <div class="treeChild">
        <div class="treeChild-content">
            <tree-child-control
                :hasChildren="child.children && child.children.length > 0"
                :collapseIcon="collapseIcon"
                :expandIcon="expandIcon"
                :expanded="expanded"
                @toggle="toggleChildren"
            ></tree-child-control>

            <div class="treeChild-output"> {{ child.data.name }} </div>
        </div>

        <div class="treeChild-children" ref="children" transition>
            <tree-child
                v-for="nextChild, i in child.children"
                :child="nextChild"
                :collapseIcon="collapseIcon"
                :expandIcon="expandIcon"
                ></tree-child>
        </div>
    </div>
</template>

<script>
    // set height on children container instead of each child
    // prefer optionally supplied image paths for collapse control
    export default {
        name: 'tree-child',

        data () {
            return {
                expanded: true
            }
        },

        computed: {
        },

        props: [
            'child',
            'collapseIcon',
            'expandIcon',
        ],

        methods: {
            toggleChildren () {
                let children = this.$refs.children

                if (children.style.height === "0px") {
                    children.style.height = "auto"
                    children.style.display = "block"
                    this.expanded = true
                } else {
                    children.style.height = "0px"
                    children.style.display = "none"
                    this.expanded = false
                }
            }
        }
    }
</script>

<style scoped>
.treeChild {
    padding-left: 16px;
}

.treeChild-content {
    display: flex;
    padding: 4px 0 8px 0;
}
</style>

