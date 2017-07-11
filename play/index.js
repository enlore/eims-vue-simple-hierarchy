/* jshint esversion: 6, asi: true */

import { play } from 'vue-play'
import Clicker from './clicker.vue'

import Vue from 'vue'
import treeData from './tree.data.js'
import Tree from '../src/tree.vue'
import TreeChild from '../src/tree-child.vue'

Vue.component('treeview', Tree)
Vue.component('tree-child', TreeChild)

function data () {
    return {
        data: treeData
    }
}

play(Tree)
    .displayName('TreeView')
    .add('with data', {
        template: '<treeview :data="data"></treeview>',
        data
    })
    .add('with style', {
        data,
        template: '<treeview :data="data"></treeview>'
    })
