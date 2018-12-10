'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        /* ECMAScript 6 */
        // require let or const instead of var
        'no-var': 2,
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 2,


        /* Best practices */
        // treat var statements as if they were block scoped
        'block-scoped-var': 2,
        // require return statements to either always or never specify values
        'consistent-return': 2,
        // specify curly brace conventions for all control statements
        'curly': [2, 'multi-line'],
        // require default case in switch statements
        'default-case': 2,
        // encourages use of dot notation whenever possible
        'dot-notation': [2, {
            allowKeywords: true
        }],
        // require the use of === and !==
        'eqeqeq': 2,
        // disallow the use of alert, confirm, and prompt
        'no-alert': 1,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // disallow else after a return in an if
        'no-else-return': 2,
        // disallow use of eval()
        'no-eval': 2,
        // disallow adding to native types
        'no-extend-native': 2,
        // disallow usage of __iterator__ property
        'no-iterator': 2,
        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // disallow creation of functions within loops
        'no-loop-func': 2,
        // disallow use of multiple spaces
        'no-multi-spaces': [1, {
            exceptions: {
                VariableDeclarator: true,
                ImportDeclaration: true
            }
        }],
        // disallow use of multiline strings
        'no-multi-str': 1,
        // disallow use of new operator for Function object
        'no-new-func': 2,
        // disallows creating new instances of String,Number, and Boolean
        'no-new-wrappers': 2,
        // disallow reassignment of function parameters
        'no-param-reassign': 2,
        // disallow usage of __proto__ property
        'no-proto': 2,
        // disallow use of `javascript:` urls.
        'no-script-url': 2,
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // disallow use of comma operator
        'no-sequences': 2,
        // restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // disallow usage of expressions in statement position
        'no-unused-expressions': 2,
        // disallow use of the with statement
        'no-with': 2,
        // require use of the second argument for parseInt()
        'radix': 2,
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 2,
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': [2, 'any'],
        // require or disallow Yoda conditions
        'yoda': 2,


        /* Possible Errors */
        // disallow use of console
        'no-console': [1, {
            allow: ['warn', 'error']
        }],
        // disallow unnecessary parentheses
        'no-extra-parens': [2, 'functions'],


        /* Stylistic Issues */
        // enforce one true brace style
        'brace-style': [2, '1tbs', {
            allowSingleLine: true
        }],
        // require camel case names
        'camelcase': [2, {
            properties: 'never'
        }],
        // disallow trailing commas in object literals
        'comma-dangle': [2],
        // enforce spacing before and after comma
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        // enforce one true comma style
        'comma-style': [2, 'last'],
        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': 2,
        // this option sets a specific tab width for your code
        'indent': [2, 4, {
            SwitchCase: 1
        }],
        // enforces spacing between keys and values in object literal properties
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true
        }],
        // require a space after return, throw, and case
        'keyword-spacing': 2,
        // specify the maximum depth that blocks can be nested
        'max-depth': [1, 4],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': [1, 5],
        // require a capital letter for constructors
        'new-cap': [2, {
            newIsCap: true
        }],
        // disallow nested ternary expressions
        'no-nested-ternary': 2,
        // disallow use of the Object constructor
        'no-new-object': 2,
        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 2,
        // allow just one var statement per function
        'one-var': [2, 'never'],
        // enforce padding within blocks
        'padded-blocks': [0, 'never'], // - to enable is only top padding possible
        // specify whether double or single quotes should be used
        'quotes': [2, 'single', 'avoid-escape'],
        // enforce spacing before and after semicolons
        // require or disallow use of semicolons instead of ASI
        'semi': [2, 'always'],
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        // require or disallow space before function opening parenthesis
        'space-before-function-paren': [0, 'never'],
        // require spaces around operators
        'space-infix-ops': 2,
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['*package', '!', '/', ',', '=']
            },
            block: {
                balanced: true,
                markers: ['*package', '!', ',', ':', '::', 'flow-include'],
                exceptions: ['*']
            }
        }],


        /* Variables */
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 2,
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 2,
        // disallow use of variables before they are defined
        'no-use-before-define': 1
    }
};
