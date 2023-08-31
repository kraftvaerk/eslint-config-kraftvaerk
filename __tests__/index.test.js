'use strict';

const { ESLint } = require('eslint');
const { isPlainObject } = require('is-plain-object');
const config = require('../');

const linter = new ESLint({
    useEslintrc: false,
    overrideConfig: config
});

it('has valid config format', () => {
    expect(isPlainObject(config)).toBeTruthy();
    expect(isPlainObject(config.env)).toBeTruthy();
    expect(isPlainObject(config.rules)).toBeTruthy();
});

it('has no errors with valid JS', async () => {
    expect.assertions(2);

    const results = await linter.lintFiles(['files/valid.js']);

    expect(results[0].messages).toBeTruthy();
    expect(results[0].messages.length).toBe(0);
});

it('has no errors with valid TS', async () => {
    expect.assertions(2);

    const results = await linter.lintFiles(['files/valid.ts']);

    expect(results[0].messages).toBeTruthy();
    expect(results[0].messages.length).toBe(0);
});
