'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        /* ECMAScript 6 */
        // require let or const instead of var
        'no-var': 'error',
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 'error',


        /* Best practices */
        // treat var statements as if they were block scoped
        'block-scoped-var': 'error',
        // require return statements to either always or never specify values
        'consistent-return': 'error',
        // specify curly brace conventions for all control statements
        'curly': ['error', 'multi-line'],
        // require default case in switch statements
        'default-case': 'error',
        // encourages use of dot notation whenever possible
        'dot-notation': ['error', {
            allowKeywords: true,
        }],
        // require the use of === and !==
        'eqeqeq': 'error',
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
        // disallow use of multiple spaces
        'no-multi-spaces': ['warn', {
            exceptions: {
                VariableDeclarator: true,
                ImportDeclaration: true,
            },
        }],
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
        'radix': 'error',
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'error',
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': ['error', 'any'],
        // require or disallow Yoda conditions
        'yoda': 'error',


        /* Possible Errors */
        // disallow use of console
        'no-console': ['warn', {
            allow: ['warn', 'error'],
        }],
        // disallow unnecessary parentheses
        'no-extra-parens': ['error', 'functions'],


        /* Stylistic Issues */
        // enforce spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],
        // enforce spacing inside single-line blocks
        'block-spacing': ['error', 'always'],
        // enforce one true brace style
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true,
        }],
        // require camel case names
        'camelcase': ['error', {
            properties: 'never',
        }],
        // require trailing commas in multiline object literals
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        // enforce spacing before and after comma
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        // enforce one true comma style
        'comma-style': ['error', 'last'],
        // disallow padding inside computed properties
        'computed-property-spacing': ['error', 'never'],
        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': 'error',
        // enforce spacing between functions and their invocations
        'func-call-spacing': ['error', 'never'],
        // this option sets a specific tab width for your code
        'indent': ['error', 4, {
            SwitchCase: 1,
        }],
        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
        }],
        // require a space before & after certain keywords
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: {
                    after: true,
                },
                throw: {
                    after: true,
                },
                case: {
                    after: true,
                },
            },
        }],
        // specify the maximum depth that blocks can be nested
        'max-depth': ['warn', 4],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': ['warn', 5],
        // require a capital letter for constructors
        'new-cap': ['error', {
            newIsCap: true,
        }],
        // disallow nested ternary expressions
        'no-nested-ternary': 'error',
        // disallow use of the Object constructor
        'no-new-object': 'error',
        // disallow space between function identifier and application
        'no-spaced-func': 'error',
        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',
        // disallow whitespace before properties
        'no-whitespace-before-property': 'error',
        // require padding inside curly braces
        'object-curly-spacing': ['error', 'always'],
        // allow just one var statement per function
        'one-var': ['error', 'never'],
        // enforce padding within blocks
        'padded-blocks': ['off', 'never'], // - to enable is only top padding possible
        // specify whether double or single quotes should be used
        'quotes': ['error', 'single', 'avoid-escape'],
        // enforce spacing before and after semicolons
        // require or disallow use of semicolons instead of ASI
        'semi': ['error', 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing': ['error', {
            before: false,
            after: true,
        }],
        // require or disallow space before blocks
        'space-before-blocks': 'error',
        // require or disallow space before function opening parenthesis
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        // require or disallow spaces inside parentheses
        'space-in-parens': ['error', 'never'],
        // require spaces around operators
        'space-infix-ops': 'error',
        // require or disallow spaces before/after unary operators
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {},
        }],
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
                balanced: true,
            },
        }],
        // enforce spacing around colons of switch statements
        'switch-colon-spacing': ['error', {
            after: true,
            before: false,
        }],
        // require or disallow spacing between template tags and their literals
        'template-tag-spacing': ['error', 'never'],


        /* Variables */
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 'error',
        // disallow use of variables before they are defined
        'no-use-before-define': 'warn',
    },
};
