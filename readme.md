# vbb-stations-connected-to

**Get all stations connected to a station.**

[![npm version](https://img.shields.io/npm/v/vbb-stations-connected-to.svg)](https://www.npmjs.com/package/vbb-stations-connected-to)
[![build status](https://img.shields.io/travis/derhuerst/vbb-stations-connected-to.svg)](https://travis-ci.org/derhuerst/vbb-stations-connected-to)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-stations-connected-to.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install vbb-stations-connected-to
```


## Usage

```js
const connectedTo = require('vbb-stations-connected-to')

console.log(connectedTo['900000100001']) // S+U Friedrichstr.
```

```js
[
	'900000100025',
	'900000100007',
	'900000100002',
	'900000003201',
	'900000100003',
	'900000100719',
	'900000100540',
	'900000100513',
	'900000100047',
	'900000100019',
	'900000100027'
]
```

Get station IDs from [vbb-stations](https://github.com/derhuerst/vbb-stations).

There's also detailed but heavy `full.json`:

```js
const connectedTo = require('vbb-stations-connected-to/full.json')

console.log(connectedTo['900000100001']) // S+U Friedrichstr.
```

```js
{
	'900000100025': [
		'10141_109', // these are line ids
		'10142_109',
		'10143_109',
		'10144_109',
		'10145_109',
		'11346_109'
	],
	'900000100007': [
		'10141_109',
		'10142_109',
		'10143_109',
		'10144_109',
		'10145_109',
		'11346_109'
	],
	'900000100002': [
		'10148_109',
		'10149_109',
		'10157_109',
		'10158_109',
		'10162_109',
		'10163_109',
		'10165_109',
		'10166_109',
		'16034_109'
	],
	'900000003201': [
		'10148_109',
		'10149_109',
		'10157_109',
		'10158_109',
		'10162_109',
		'10163_109',
		'10165_109',
		'10166_109',
		'16034_109',
		'10845_100',
		'10847_100',
		'10865_100',
		'10878_100',
		'10941_100',
		'12048_100',
		'17605_700',
		'16869_100'
	],
	'900000100003': [
		'10865_100',
		'10878_100',
		'10885_100',
		'10890_100',
		'12048_100',
		'12051_100',
		'17605_700',
		'16869_100'
	],
	'900000100719': ['17301_900', '17438_900', '17470_700'],
	'900000100540': ['17301_900', '17438_900'],
	'900000100513': ['17318_700', '17470_700'],
	'900000100047': ['17318_700'],
	'900000100019': ['17521_400'],
	'900000100027': ['17521_400']
}
```


## Contributing

If you have a question or have difficulties using `vbb-stations-connected-to`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/vbb-stations-connected-to/issues).
