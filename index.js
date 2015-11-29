'use strict';

var deepAssign = require('deep-assign');
var xo = require('eslint-config-xo');

module.exports = deepAssign(xo, {
    'env': {
        'browser':  true
    },
    'globals': {
        'jQuery':true,
        '$':true,
        'System': true
    },
    'rules': {
        'strict':                   [0, 'global' ],
        'no-extra-strict':          [0],
        'quotes':                   [2, 'single', 'avoid-escape'],
        'semi-spacing':             [0, {before: false, after: true}],
        'no-trailing-spaces':       [1],
        'no-console':               [0],
        'brace-style':              [2, '1tbs', { 'allowSingleLine': true }],
        'indent':                   [0, 2, {
                                            SwitchCase: 1
                                    }],
        'no-multi-spaces':          [1, {
                                            'exceptions': {
                                                'VariableDeclarator': true,
                                                'ImportDeclaration': true
                                            }
                                    }],
        'space-before-function-paren': [2, 'never'],
        'valid-jsdoc':              [2, {
                                            requireReturn: false,
                                            prefer: {
                                                returns: 'return'
                                            }
                                    }]
    }
});
