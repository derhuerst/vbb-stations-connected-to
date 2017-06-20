'use strict'

const stations = require('vbb-stations/full.json')
const test = require('tape')

const simplified = require('.')
const full = require('./full.json')

test('simplified should contain arrays of neighbors', (t) => {
	t.equal(typeof simplified, 'object')
	t.notOk(Array.isArray(simplified))

	for (let stationId in simplified) {
		t.ok(stations[stationId], `key ${stationId} is invalid`)

		const neighbors = simplified[stationId]
		t.ok(Array.isArray(neighbors), `neighbors of ${stationId} is not an array`)

		for (let neighborId of neighbors) {
			t.ok(stations[neighborId], `${stationId} -> ${neighborId} is invalid`)
		}
	}

	t.end()
})

test('simplified should contain arrays of lines by neighbor', (t) => {
	t.equal(typeof full, 'object')
	t.notOk(Array.isArray(full))

	for (let a in full) {
		t.ok(stations[a], `key ${a} is invalid`)

		const neighbors = full[a]
		t.equal(typeof neighbors, 'object')
		t.notOk(Array.isArray(neighbors))

		for (let b in neighbors) {
			t.ok(stations[b], `${a} -> ${b} is invalid`)

			const lines = neighbors[b]
			t.ok(Array.isArray(lines), `lines of ${a} -> ${b} is not an array`)

			for (let l of lines) {
				t.equal(typeof l, 'string', `${a} -> ${b} -> ${l} is not a string`)
			}
		}
	}

	t.end()
})
