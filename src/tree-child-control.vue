<template>
    <div class="treeChild-control">
        <transition v-if="hasChildren">
            <img :src="collapseIcon" v-if="expanded" @click="$emit('collapse')">
            <img :src="expandIcon" v-else @click="$emit('expand')">
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
</style>

