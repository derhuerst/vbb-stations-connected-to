'use strict'

const stations = require('vbb-stations/full.json')
const lines = require('vbb-lines')
const fs = require('fs')
const path = require('path')

const stationOf = {} // stop id -> station
for (let stationId in stations) {
	const station = stations[stationId]
	for (let stop of station.stops) stationOf[stop.id] = station.id
}

const showError = (err) => {
	if (!err) return
	console.error(err)
	process.exit(1)
}

const full = {} // station id -> neighbor station id -> line ids
const simplified = {} // station id -> neighbor station ids

lines('all')
.on('error', showError)
.on('data', (line) => {
	for (let variant of line.variants) {
		// for (let stopId of variant) {
		for (let i = 0; i < (variant.length - 1); i++) {
			const from = stationOf[variant[i]]
			if (!from) {
				console.error('unkown station for stop ' + variant[i])
				continue
			}
			const to = stationOf[variant[i + 1]]
			if (!to) {
				console.error('unkown station for stop ' + variant[i + 1])
				continue
			}
			if (from === to) continue // wat

			const neighbors = full[from] || (full[from] = {})
			const lines = neighbors[to] || (neighbors[to] = [])
			const simple = simplified[from] || (simplified[from] = [])

			if (!simple.includes(to)) simple.push(to)
			if (!lines.includes(line.id)) lines.push(line.id)
		}
	}
})
.on('end', () => {
	// console.log(full['900000009103'])
	// console.log(simplified['900000009103'])

	fs.writeFile(path.join(__dirname, 'full.json'), JSON.stringify(full), showError)
	fs.writeFile(path.join(__dirname, 'index.json'), JSON.stringify(simplified), showError)
})
