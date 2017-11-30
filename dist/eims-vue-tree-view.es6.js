var TreeChildControl = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"treeChild-control",on:{"click":function($event){_vm.$emit('toggle');}}},[_c('div',{staticClass:"treeChild-iconWrap"},[(_vm.expanded)?_c('div',{staticClass:"treeChild-icon",domProps:{"innerHTML":_vm._s(_vm.collapseIcon)}}):_c('div',{staticClass:"treeChild-icon",domProps:{"innerHTML":_vm._s(_vm.expandIcon)}})])])},staticRenderFns: [],_scopeId: 'data-v-74070ed6',
    data: function data () {
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
        conditionalStyles: function conditionalStyles () {
            return {
                'border-color': this.expanded ? 'transparent' : 'lightgrey'
            }
        }
    }
};

var TreeChild = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"treeChild"},[_c('div',{staticClass:"treeChild-output"},[(_vm.hasChildren)?_c('tree-child-control',{attrs:{"collapseIcon":_vm.collapseIcon,"expandIcon":_vm.expandIcon,"expanded":_vm.expanded},on:{"toggle":_vm.toggleChildren}}):_vm._e(),_c('div',{staticClass:"treeChild-content",on:{"click":function($event){_vm.$emit('rowClicked', _vm.child.data);}}},[(_vm.row)?_c(_vm.row,{tag:"component",attrs:{"data":_vm.child.data}}):_c('div',[_vm._v(_vm._s(_vm.child.data.name))])],1)],1),_c('div',{ref:"children",staticClass:"treeChild-children",style:(_vm.childrenStyles)},_vm._l((_vm.child.children),function(nextChild, i){return _c('tree-child',{attrs:{"child":nextChild,"collapse-icon":_vm.collapseIcon,"expand-icon":_vm.expandIcon,"expand-default":_vm.expandDefault,"row":_vm.row},on:{"rowClicked":_vm.intermediateTreeChildEmitter}})}))])},staticRenderFns: [],_scopeId: 'data-v-8fb1c774',
    name: 'tree-child',

    data: function data () {
        return {
            expanded: true
        }
    },

    components: {
        TreeChildControl: TreeChildControl
    },

    computed: {
        childrenStyles: function childrenStyles () {
            if (this.expanded)
                { return { height: 'auto', display: 'block' } }
            else
                { return { height: '0', display: 'none' } }
        },

        hasChildren: function hasChildren () {
            return this.child.children && this.child.children.length > 0
        },
    },

    created: function created () {
        if (this.expandDefault !== void 0)
            { this.expanded = this.expandDefault; }
    },

    props: [
        'child',
        'collapseIcon',
        'expandIcon',
        'expandDefault',
        'row'
    ],

    methods: {
        intermediateTreeChildEmitter: function intermediateTreeChildEmitter (data) {
            this.$emit('rowClicked', data);
        },

        treeChildOutputClickHandler: function treeChildOutputClickHandler (data) {
            this.$emit('rowClicked', data);
        },

        toggleChildren: function toggleChildren () {
            this.expanded = !this.expanded;
        },
    }
};

var iconCollapsed = "\n<svg width=\"12px\" height=\"12px\" viewBox=\"0 0 12 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<title>icon-collapsed</title>\n<defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Artboard\" transform=\"translate(-206.000000, -283.000000)\">\n            <image id=\"icon-collapsed\" x=\"206\" y=\"283\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACpJREFUKBVjYMACnJ2d/4MwFikGJmyC+MQGoQZGXJ7D5Q+S/YDVoOEerABbFAj8QjsOBAAAAABJRU5ErkJggg==\"></image>\n        </g>\n    </g>\n</svg>";

var iconUncollapsed = "\n<svg width=\"12px\" height=\"12px\" viewBox=\"0 0 12 2\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<title>icon-uncollapsed</title>\n<defs></defs>\n<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g id=\"Artboard\" transform=\"translate(-268.000000, -288.000000)\">\n        <image id=\"icon-uncollapsed\" x=\"268\" y=\"283\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAABpJREFUKBVjYBiBgNHZ2fk/Kf5mIkXxiFULAGN3AczMXIn5AAAAAElFTkSuQmCC\"></image>\n    </g>\n</g>\n</svg>";

var tree = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"treeView"},[_c('div',[(_vm.headerRenderer)?_c(_vm.headerRenderer,{tag:"component"}):_c('div',{staticClass:"treeView-header"},[_c('div',{staticClass:"treeViewHeader-cell",staticStyle:{"flex":"1 0","max-width":"85%"}},[_vm._v("Area")]),_c('div',{staticClass:"treeViewHeader-cell",staticStyle:{"border-left":"1px solid rgba(0, 0, 0, .2)"}},[_vm._v("Customized?")])])],1),_c('div',{staticClass:"treeView-body"},[(_vm.loading)?_c('div',{staticClass:"treeView-loadingContainer"},[(_vm.loadingGif)?_c('img',{staticClass:"treeView-loadingIndicator",attrs:{"src":_vm.loadingGif}}):_c('div',{staticClass:"treeView-loadingIndicator",staticStyle:{"text-align":"center"}},[_vm._v("Loading")])]):(_vm.initMessage)?_c('div',{staticClass:"treeView-initMessage"},[_c('div',[_vm._v(_vm._s(_vm.initMessage))])]):_vm._l((_vm.data),function(child){return _c('tree-child',{attrs:{"child":child,"collapseIcon":_vm.coIcon,"expandIcon":_vm.exIcon,"row":_vm.rowRenderer,"expandDefault":_vm.expandDefault},on:{"rowClicked":_vm.treeRootChildClickHandler}})})],2)])},staticRenderFns: [],
    name: 'Tree-View',

    data: function data () {
        return {
        }
    },

    components: {
        TreeChild: TreeChild
    },

    methods: {
        treeRootChildClickHandler: function treeRootChildClickHandler (arg) {
            this.$emit('rowClicked', arg);
        },
    },

    computed: {
        coIcon: function coIcon () {
            return this.collapseIcon || iconUncollapsed
        },

        exIcon: function exIcon () {
            return this.expandIcon || iconCollapsed
        }
    },

    props: [
        'initMessage',
        'loadingGif',
        'data',
        'rowRenderer',
        'headerRenderer',
        'expandIcon',
        'expandDefault',
        'collapseIcon',
        'loading'
    ]
};

export default tree;
