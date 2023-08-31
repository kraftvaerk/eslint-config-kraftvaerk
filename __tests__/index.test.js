'use strict';

const { ESLint } = require('eslint');
const { isPlainObject } = require('is-plain-object');
const config = require('../');

const linter = new ESLint({
    useEslintrc: false,
    overrideConfig: config
});

const validJS = `
const foo = function () {};
const bar = 0;

if (foo === bar) {
    foo();
}
`;

const validTS = `
const foo: (bar: number) => void = function (bar: number): void {console.warn(bar)};
const bar: number = 0;

foo(bar);
`;

it('has valid config format', () => {
    expect(isPlainObject(config)).toBeTruthy();
    expect(isPlainObject(config.env)).toBeTruthy();
    expect(isPlainObject(config.rules)).toBeTruthy();
});

it('has no errors with valid JS', async () => {
    expect.assertions(2);

    const results = await linter.lintText(validJS);

    expect(results[0].messages).toBeTruthy();
    expect(results[0].messages.length).toBe(0);
});

it('has no errors with valid TS', async () => {
    expect.assertions(2);

    const results = await linter.lintText(validTS);

    expect(results[0].messages).toBeTruthy();
    expect(results[0].messages.length).toBe(0);
});
