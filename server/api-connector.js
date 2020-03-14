const fs = require('fs')
const path = require('path')

module.exports.connect = function(app) {
	const apiList = JSON.parse(fs.readFileSync(path.join(__dirname, 'apiList.json'), 'utf8'))
	const apiPrefix = '/api'
	const keys = Object.keys(apiList)
	for (var i = 0; i < keys.length; i++) {
		const apiSubList = apiList[keys[i]]
		for (var j = 0; j < apiSubList.length; j++) {
			const controller = require("./routes/" + keys[i] + apiSubList[j].route + ".js")
			if (apiSubList[j].method == "GET") {
				app.get(apiPrefix + (keys[i] != "" ? "/" + keys[i] : "") + apiSubList[j].route, (req, res) => {
					controller(req, res)
				})
			} else if (apiSubList[j].method == "POST") {
				app.post(apiPrefix + (keys[i] != "" ? "/" + keys[i] : "") + apiSubList[j].route, (req, res) => {
					controller(req, res)
				})
			}
		}
	}
}