import { Linter } from 'eslint';
import isPlainObject from 'is-plain-object';
import config from '../';

const linter = new Linter();

const validJS = `
const foo = function () {};
const bar = 0;

if (foo === bar) {
    foo();
}
`;

const invalidJS = `
"use strict";

var foo = 1;
const bar = 0;

if(foo==bar){
  foo();
}
`;

it('has valid config format', () => {
    expect(isPlainObject(config)).toBeTruthy();
    expect(isPlainObject(config.env)).toBeTruthy();
    expect(isPlainObject(config.rules)).toBeTruthy();
    expect(isPlainObject(config.globals)).toBeTruthy();
});

it('has no errors with valid JS', async () => {
    expect.assertions(2);

    const messages = linter.verify(validJS, config);

    expect(messages).toBeTruthy();
    expect(messages.length).toBe(0);
});

describe('invalid JS', () => {
    let messages = null;

    beforeAll(() => {
        messages = linter.verify(invalidJS, config);
    });

    it('has 6 errors', () => {
        expect(messages).toBeTruthy();
        expect(messages.length).toBe(6);
    });

    it('has double quotes', () => {
        expect(messages[0].ruleId).toBe('quotes');
    });

    it('has unexpected `var`', () => {
        expect(messages[1].ruleId).toBe('no-var');
    });

    it('has no spaces after `if`', () => {
        expect(messages[2].ruleId).toBe('keyword-spacing');
    });

    it('has invalid conditions', () => {
        expect(messages[3].ruleId).toBe('eqeqeq');
    });

    it('has no spaces around infix operators', () => {
        expect(messages[4].ruleId).toBe('space-infix-ops');
    });

    it('has invalid indentation', () => {
        expect(messages[5].ruleId).toBe('indent');
    });
});
