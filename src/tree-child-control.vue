<template>
    <div class="treeChild-control">
        <transition v-if="hasChildren">
            <div class="treeChild-iconWrap" @click="$emit('toggle')">
                <div class="treeChild-icon" :style="{ 'background-image': 'url(' + collapseIcon + ')' }" v-if="expanded"></div>
                <div class="treeChild-icon" :style="{ 'background-image': 'url(' + expandIcon + ')' }" v-else></div>
            </div>
        </transition>
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
        }
    }
</script>

<style scoped>
.treeChild-control {
    flex: 0 0 16px;
    cursor: pointer;
}

.treeChild-iconWrap {
    width: 12px;
    height: 12px;
}

.treeChild-icon {
    display: block;
    padding: 6px;
}
</style>

