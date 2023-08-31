'use strict';

module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        /*
        Note: We are extending imported rules that are defined here:
            * eslint:recommended: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
            * plugin:@typescript-eslint/recommended: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
            * prettier: https://github.com/prettier/eslint-config-prettier/blob/main/index.js
        */

        /* Best practices */
        // require return statements to either always or never specify values
        'consistent-return': 'error',
        // require default case in switch statements
        'default-case': 'error',
        // encourages use of dot notation whenever possible
        'dot-notation': [
            'error',
            {
                allowKeywords: true
            }
        ],
        // require the use of === and !==
        eqeqeq: 'error',
        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',
        // disallow else after a return in an if
        'no-else-return': 'error',
        // disallow use of eval()
        'no-eval': 'error',
        // disallow adding to native types
        'no-extend-native': 'error',
        // disallow usage of __iterator__ property
        'no-iterator': 'error',
        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',
        // disallow creation of functions within loops
        'no-loop-func': 'error',
        // disallow use of multiline strings
        'no-multi-str': 'warn',
        // disallow use of new operator for Function object
        'no-new-func': 'error',
        // disallows creating new instances of String,Number, and Boolean
        'no-new-wrappers': 'error',
        // disallow reassignment of function parameters
        'no-param-reassign': 'error',
        // disallow usage of __proto__ property
        'no-proto': 'error',
        // disallow use of `javascript:` urls.
        'no-script-url': 'error',
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',
        // disallow use of comma operator
        'no-sequences': 'error',
        // restrict what can be thrown as an exception
        'no-throw-literal': 'error',
        // disallow usage of expressions in statement position
        'no-unused-expressions': 'error',
        // disallow use of the with statement
        'no-with': 'error',
        // require use of the second argument for parseInt()
        radix: 'error',
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'error',
        // require or disallow Yoda conditions
        yoda: 'error',

        /* Possible Errors */
        // disallow use of console
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error']
            }
        ],
        // disallow unnecessary parentheses
        'no-extra-parens': ['error', 'functions'],

        /* Stylistic Issues */
        // require camel case names
        camelcase: [
            'error',
            {
                properties: 'never'
            }
        ],
        // specify the maximum depth that blocks can be nested
        'max-depth': ['warn', 4],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': ['warn', 5],
        // require a capital letter for constructors
        'new-cap': [
            'error',
            {
                newIsCap: true
            }
        ],
        // disallow use of the Object constructor
        'no-new-object': 'error',

        /* Variables */
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 'error',
        // disallow use of variables before they are defined
        'no-use-before-define': 'warn'
    }
};
