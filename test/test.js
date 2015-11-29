import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

function runEslint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(str).results[0].messages;
}

test('Configuration is a plain object', t => {
    t.true(isPlainObj(conf));
    t.true(isPlainObj(conf.env));
    t.true(isPlainObj(conf.rules));
    t.true(isPlainObj(conf.globals));

    t.end();
});

test('Linting rules', t => {
    const errors = runEslint('\"use strict\";\nvar foo = function () {};\nconst bar = 0; if(foo==bar){foo();}\n', conf);

    t.is(errors[0].ruleId, 'quotes');
    t.is(errors[1].ruleId, 'no-var');
    t.is(errors[2].ruleId, 'eqeqeq');
    t.is(errors[3].ruleId, 'space-infix-ops');

    t.end();
});
