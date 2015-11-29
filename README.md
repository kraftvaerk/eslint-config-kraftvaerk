# eslint-config-kraftvaerk 

[![npm](https://nodei.co/npm/eslint-config-kraftvaerk.svg?downloads=true)](https://nodei.co/npm/eslint-config-kraftvaerk/)

[![Build Status](https://travis-ci.org/kraftvaerk/eslint-config-kraftvaerk.svg?branch=master)](https://travis-ci.org/kraftvaerk/eslint-config-kraftvaerk)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)


## Install

```
$ npm install --save-dev eslint eslint-config-kraftvaerk
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^1.8.0",
		"eslint-config-kraftvaerk": "^0.2.0"
	},
	"eslintConfig": {
		"extends": "kraftvaerk"
	}
}
```

Then lint with `$ npm run lint`.
