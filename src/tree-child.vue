<template>
    <div class="treeChild">
        <div class="treeChild-output">
            <tree-child-control
                v-if="hasChildren"
                :collapseIcon="collapseIcon"
                :expandIcon="expandIcon"
                :expanded="expanded"
                @toggle="toggleChildren"
            ></tree-child-control>

            <div class="treeChild-content" >
                <component
                    v-if="row"
                    :is="row"
                    @rowClicked="treeChildOutputClickHandler"
                    :data="child.data">
                </component>

                <div @click="$emit('rowClicked', child.data.name)">
                    {{ child.data.name }}
                </div>
            </div>
        </div>

        <div class="treeChild-children" ref="children" transition>
            <tree-child
                v-for="nextChild, i in child.children"
                :child="nextChild"
                :collapseIcon="collapseIcon"
                :expandIcon="expandIcon"
                :row="row"
                @rowClicked="intermediateTreeChildEmitter"
                ></tree-child>
        </div>
    </div>
</template>

<script>
    import TreeChildControl from './tree-child-control.vue'

    export default {
        name: 'tree-child',

        data () {
            return {
                expanded: true
            }
        },

        components: {
            TreeChildControl
        },

        computed: {
            hasChildren () {
                return this.child.children && this.child.children.length > 0
            },
        },

        props: [
            'child',
            'collapseIcon',
            'expandIcon',
            'row'
        ],

        methods: {
            intermediateTreeChildEmitter (data) {
                this.$emit('rowClicked', data)
            },

            treeChildOutputClickHandler (data) {
                console.info('default tree output row clicked', data)
                this.$emit('rowClicked', data)
            },

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
    background-color: #fff;
}

.treeChild:hover {
    /*background-color: rgba(153, 152, 209, .4);*/
    cursor: pointer;
}

.treeChild-output {
    display: flex;
}

.treeChild-content {
    padding: 12px 12px 12px 12px;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    text-align: left;
}

.treeChild-children {
    padding-left: 28px;
}
</style>

