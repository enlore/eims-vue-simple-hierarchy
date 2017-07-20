<template>
    <div class="treeView">
        <div class="treeView-header">
            <div class="treeViewHeader-cell" style="flex: 1 0; max-width: 85%;"> Area </div>
            <div class="treeViewHeader-cell" style="border-left: 1px solid rgba(0, 0, 0, .2);"> Customized? </div>
        </div>

        <div class="treeView-body">
            <div class="treeView-loadingContainer" v-if="loading">
                <img class="treeView-loadingIndicator" v-if="loadingGif" :src="loadingGif"/>
                <div class="treeView-loadingIndicator" style="text-align: center;" v-else> Loading </div>
            </div>

            <div class="treeView-initMessage" v-else-if="initMessage">
                <div> {{ initMessage }} </div>
            </div>

            <tree-child
                v-else
                v-for="child in data"
                :child="child"
                :collapseIcon="coIcon"
                :expandIcon="exIcon"
                :row="rowRenderer"
                :expandDefault="expandDefault"
                @rowClicked="treeRootChildClickHandler"
                ></tree-child>
        </div>
    </div>
</template>

<script>
    const iconCollapsed = `
    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon-collapsed</title>
    <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-206.000000, -283.000000)">
                <image id="icon-collapsed" x="206" y="283" width="12" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACpJREFUKBVjYMACnJ2d/4MwFikGJmyC+MQGoQZGXJ7D5Q+S/YDVoOEerABbFAj8QjsOBAAAAABJRU5ErkJggg=="></image>
            </g>
        </g>
    </svg>`

    const iconUncollapsed = `
    <svg width="12px" height="12px" viewBox="0 0 12 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon-uncollapsed</title>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-268.000000, -288.000000)">
            <image id="icon-uncollapsed" x="268" y="283" width="12" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAABpJREFUKBVjYBiBgNHZ2fk/Kf5mIkXxiFULAGN3AczMXIn5AAAAAElFTkSuQmCC"></image>
        </g>
    </g>
    </svg>`

    import TreeChild from './tree-child.vue'

    export default {
        name: 'Tree-View',

        data () {
            return {
            }
        },

        components: {
            TreeChild
        },

        methods: {
            treeRootChildClickHandler (arg) {
                this.$emit('rowClicked', arg)
            },
        },

        computed: {
            coIcon () {
                return this.collapseIcon || iconUncollapsed
            },

            exIcon () {
                return this.expandIcon || iconCollapsed
            }
        },

        props: [
            'initMessage',
            'loadingGif',
            'data',
            'rowRenderer',
            'expandIcon',
            'expandDefault',
            'collapseIcon',
            'loading'
        ]
    }
</script>

<style>
/* only reason this isn't scoped is to ensure the
 * selectors aren't prevented from targeting the custom row
 */
.treeView {
    background-color: #fff;
}

.treeRowCustom {
    display: flex;
    flex: 1 1;
    padding-right: 24px;
}

.treeView-body {
    height: 600px;
    overflow-y: auto;
    border: 1px solid lightgrey;
    border-top: none;
    position: relative;
}

.treeView-header {
    display: flex;
    background-color: #616A87;
    color: #fff;
    border-radius: 3px 3px 0 0;
    text-align: left;
}

.treeViewHeader-cell {
    padding: 16px 8px 16px 16px;
}

.treeView-loadingIndicator {
    display: block;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
}

.treeView-initMessage {
    text-align: center;
    top: 33%;
    position: relative;
}
</style>

