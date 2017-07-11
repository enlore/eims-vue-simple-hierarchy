/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

export default [
    {
        level: 0,
        data: { name: 'woo' },
        children: [
            {
                level: 1,
                data: { name: 'child 1' }
            },
            {
                level: 1,
                data: { name: 'child 2' }
            },
            {
                level: 1,
                data: { name: 'child 3' }
            },
        ]
    },
    {
        level: 0,
        data: { name: 'parent 2' },
        children: []
    },
    {
        level: 0,
        data: { name: 'parent 3' },
        children: [
            { data: { name: 'child 4' } },
            {
                data: { name: 'child 5' },
                children: [
                    { data: { name: 'child 6' } },
                    { data: { name: 'child 7' } },
                    { data: { name: 'child 8' } },
                    { data: { name: 'child 9' } },
                    { data: { name: 'child 10' } },
                ]
            }
        ]
    }
]
