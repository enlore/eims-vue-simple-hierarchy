<template>
    <div class="treeChild-control" @click="$emit('toggle')">
        <div class="treeChild-iconWrap">
            <div class="treeChild-icon" v-if="expanded" v-html="collapseIcon">
            </div>
            <div class="treeChild-icon" v-else v-html="expandIcon">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },

        props: [
            "expanded",
            "hasChildren",
            "collapseIcon",
            "expandIcon"
        ],

        computed: {
            conditionalStyles () {
                return {
                    'border-color': this.expanded ? 'transparent' : 'lightgrey'
                }
            }
        }
    }
</script>

<style scoped>
.treeChild-control {
    flex: 0 0;
    padding: 12px 0 12px 12px;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
}

.treeChild-iconWrap {
    padding-right: 8px;
}

.treeChild-icon {
}
</style>

