# eslint-config-kraftvaerk 

[![GitHub release](https://img.shields.io/github/release/kraftvaerk/eslint-config-kraftvaerk.svg?style=flat-square)]() [![Build Status](https://img.shields.io/travis/kraftvaerk/eslint-config-kraftvaerk/master.svg?style=flat-square)](https://travis-ci.org/kraftvaerk/eslint-config-kraftvaerk) [![David](https://img.shields.io/david/dev/kraftvaerk/eslint-config-kraftvaerk.svg?style=flat-square)]()

[![npm](https://nodei.co/npm/eslint-config-kraftvaerk.svg?downloads=true)](https://nodei.co/npm/eslint-config-kraftvaerk/)


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
