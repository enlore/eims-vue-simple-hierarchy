/* jshint esversion: 6, asi: true */

import { play } from 'vue-play'

import Vue from 'vue'
import treeData from './tree.data.js'
import Tree from '../src/tree.vue'
import TreeChild from '../src/tree-child.vue'
import TreeChildControl from '../src/tree-child-control.vue'

Vue.component('tree-view', Tree)
Vue.component('tree-child', TreeChild)
Vue.component('tree-child-control', TreeChildControl)

function data () {
    return {
        data: treeData
    }
}

play(Tree)
    .displayName('TreeView')
    .add('with data', {
        template: '<tree-view :data="data"></tree-view>',
        data
    })
    .add('with style', {
        data,
        template: '<tree-view :data="data"></tree-view>'
    })
