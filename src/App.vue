<template>
  <div class="app">
    <Hello></Hello>
    <tree-view :data="nodes" style="margin-top: 16px;"></tree-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import TreeView from './tree.vue'

export default {
    name: 'App-Root',

    data () {
        return {
            nodes: [
                {
                    data: { name: 'ok' },
                    children: [
                        {
                            data: { name: 'first child' }
                        },
                        {
                            data: { name: 'another child?' }
                        }
                    ]
                }
            ]
        }
    },

    components: { Hello, TreeView }
}
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

.app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
}
</style>
